import type { CSSProperties, SVGProps } from 'react'

export interface IconProperties extends SVGProps<SVGSVGElement> {
  fill?: string
  hoverFill?: string
  style?: CSSProperties
  width?: string | number
  height?: string | number
  viewBox?: string
  margin?: string
}
