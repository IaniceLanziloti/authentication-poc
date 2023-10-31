import { SignupFormTemplate } from './signup-form'
import { SignupTemplateProps } from './signup.types'


export function SignupPageTemplate({ handleSubmit, register }: SignupTemplateProps) {
  return (
    <div className='h-screen flex justify-items-center bg-main-login bg-no-repeat bg-cover'>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <SignupFormTemplate
          handleSubmit={handleSubmit}
          register={register}
        />
      </div>
    </div>
  )
}


