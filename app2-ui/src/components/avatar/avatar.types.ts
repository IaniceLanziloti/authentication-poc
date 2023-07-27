import { HTMLAttributes } from "react"

export type AvatarTemplateProps = HTMLAttributes<HTMLDivElement> & {
  initials: string
}

export type AvatarProps = HTMLAttributes<HTMLDivElement> & {
  name: string
}