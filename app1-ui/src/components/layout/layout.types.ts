import { ReactNode } from "react";

export type NavItem = {
  label: string,
  href?: string
}

export type LayoutComponentProp = {
  children: ReactNode
  navItems: NavItem[]
}

export type TemplateNavItem = NavItem & {
  key:string
}

export type LayoutTemplateProp = {
  children: ReactNode
  navItems: TemplateNavItem[]
}