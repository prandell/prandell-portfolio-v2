import { SVGProps } from 'react'

export interface IconProperties extends SVGProps<any> {
  fill?: string
  hoverFill?: string
  style?: any
  width?: string | number
  height?: string | number
  viewBox?: string
  margin?: string
}
