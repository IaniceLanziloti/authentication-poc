import { SigninForm } from './signin-form'
import { SigninTemplateProps } from './signin.types'

export function SigninPageTemplate({ handleSubmit, register }: SigninTemplateProps) {
  return (
    <div className='h-screen flex justify-items-center bg-main-login bg-no-repeat bg-cover'>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <SigninForm
          handleSubmit={ handleSubmit }
          register={ register }
        />
      </div>
    </div>
  )
}