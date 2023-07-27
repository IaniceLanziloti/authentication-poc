import { SigninFormProps } from './form.types'

export function SigninFormTemplate ({ children, ...rest }:SigninFormProps) {
  return (
    <form action="#" className='bg-slate-900 px-8 py-24 rounded-lg shadow-lg w-96' { ...rest }>
      { children }
    </form>
  )
}