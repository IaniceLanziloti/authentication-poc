import { HTMLAttributes } from 'react'

export function FormTemplate ({ children, ...rest }:HTMLAttributes<HTMLFormElement> ) {
  return (
    <form data-testid='form-template' action="#" className='bg-slate-900 px-8 py-24 rounded-lg shadow-lg w-96' { ...rest }>
      { children }
    </form>
  )
}