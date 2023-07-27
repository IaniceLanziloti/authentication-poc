import { useId } from "react";
import { LayoutTemplate } from "./layout.template";
import { LayoutComponentProp } from "./layout.types";

export function Layout ({ children, navItems }:LayoutComponentProp) {
  const id = useId()

  const templateNavItems = navItems.map(item=> ({
    key: id.concat('-',item.label.replace(' ','-').toLocaleLowerCase()),
    ...item
  }))

  return (
    <LayoutTemplate navItems={templateNavItems}>
      { children }
    </LayoutTemplate>
  )
}
