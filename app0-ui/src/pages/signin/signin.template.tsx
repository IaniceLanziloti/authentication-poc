import { SigninFormComponent } from './signin-form'

export function SigninPageTemplate() {
  return (
    <div data-testid='signin-page-container' className='h-screen flex justify-items-center bg-main-login bg-no-repeat bg-cover'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <SigninFormComponent />
      </div>
    </div>
  )
}