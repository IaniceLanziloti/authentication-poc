import { Header } from "./header";
import { SideMenu } from "./side";
import { ContentWrapper } from "./content-wrapper";
import { LayoutWrapper } from "./wrapper";
import { AppWrapper } from "./app-wrapper";
import { LayoutTemplateProp } from "./layout.types";

export function LayoutTemplate ({ children, navItems } : LayoutTemplateProp) {
  return (
    <LayoutWrapper>
      <Header/>
      <AppWrapper>
        <SideMenu.Content>
          { navItems.map(
            ({key, href, label}) => <SideMenu.Item key={key} href={href}> { label } </SideMenu.Item>
          )}
        </SideMenu.Content>
        <ContentWrapper>
          { children }
        </ContentWrapper>
      </AppWrapper>
    </LayoutWrapper>
  )
}