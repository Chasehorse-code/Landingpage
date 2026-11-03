import { useState, useEffect } from 'react'

/**
 * Loads a logo image and strips its white/near-white background
 * using the Canvas 2D API, returning a transparent PNG data-URL.
 * Falls back to the original src if canvas operations fail.
 */
export function useTransparentLogo(src) {
  const [processed, setProcessed] = useState(null)

  useEffect(() => {
    if (!src) return

    const img = new window.Image()

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas')
        canvas.width  = img.naturalWidth
        canvas.height = img.naturalHeight

        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0)

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const d = imageData.data
        const len = d.length

        /*
         * For every pixel, if it is "white-ish" (R, G, B all >= threshold),
         * compute how white it is and map that to transparency.
         * This handles both hard white and anti-aliased edge pixels cleanly.
         */
        const THRESHOLD = 215 // pixels brighter than this are candidates

        for (let i = 0; i < len; i += 4) {
          const r = d[i], g = d[i + 1], b = d[i + 2]

          if (r >= THRESHOLD && g >= THRESHOLD && b >= THRESHOLD) {
            // 0 at threshold → 1 at pure white
            const whiteness = (Math.min(r, g, b) - THRESHOLD) / (255 - THRESHOLD)
            d[i + 3] = Math.round((1 - whiteness) * d[i + 3])
          }
        }

        ctx.putImageData(imageData, 0, 0)
        setProcessed(canvas.toDataURL('image/png'))
      } catch {
        // SecurityError (tainted canvas) or anything else → use original
        setProcessed(src)
      }
    }

    img.onerror = () => setProcessed(src)
    img.src = src
  }, [src])

  return processed
}
