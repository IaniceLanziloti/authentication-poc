import { SignupFormComponent } from './signup-form'

export function SignupPageTemplate() {
  return (
    <div data-testid='signup-page-template' className='h-screen flex justify-items-center bg-main-login bg-no-repeat bg-cover'>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <SignupFormComponent />
      </div>
    </div>
  )
}


