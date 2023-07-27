import { Layout } from "../../components/layout"
import { NavItem } from "../../components/layout/layout.types"

export function HomePage() {
  const { VITE_APP_TITLE } = import.meta.env

  const navItems: NavItem[] = [
    {
      href:'#',
      label:`${VITE_APP_TITLE} ITEM-1`
    },
    {
      href:'#',
      label:`${VITE_APP_TITLE} ITEM-2`
    },
    {
      href:'#',
      label:`${VITE_APP_TITLE} ITEM-3`
    },
  ]

  return (
    <Layout navItems={navItems}>
      <div className='flex justify-center p-6'>
        <h1 className='text-zinc-50 text-xl'>{VITE_APP_TITLE}</h1>
      </div>
    </Layout>
  )
}
