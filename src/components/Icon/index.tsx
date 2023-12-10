import { forwardRef } from 'react'

import type { Glyphs } from './types'

type IconProps = {
  glyph: Glyphs
  className?: string
  size?: { width: number; height: number }
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(function icon(
  { className = '', glyph, size, ...props },
  ref,
) {
  const url = `/assets/icons.svg#${glyph}`

  return (
    <svg
      ref={ref}
      className={className}
      width={size && size.width.toString()}
      height={size && size.height.toString()}
      {...props}
    >
      <use xlinkHref={url} />
    </svg>
  )
})
