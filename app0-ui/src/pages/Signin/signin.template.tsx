import { Buttons, Input, Form } from '../../components'
import { SigninProps } from './signin.types'

export function SigninPageTemplate({handleSubmit, register}: SigninProps) {
  return (
    <div className='h-screen flex justify-items-center bg-main-login bg-no-repeat bg-cover'>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Form.Form onSubmit={handleSubmit} >
          <Form.Logo/>
          <Form.ContentWrapper>
            <Input.Group>
              <Input.Label >Name</Input.Label>
              <Input.Input type="email" autoComplete="email" {...register('email')}/>
            </Input.Group>
            <Input.Group>
              <Input.Label >Password</Input.Label>
              <Input.Input type="password" autoComplete="current-password" {...register('password')}/>
            </Input.Group>
          </Form.ContentWrapper>
          <Form.ActionsWrapper>
            <Buttons.Primary> Sign-in </Buttons.Primary>
            <Buttons.Link href="/signup">Don't have an account?</Buttons.Link>
            <Buttons.Link href="#">Forgot your password?</Buttons.Link>
          </Form.ActionsWrapper>
        </Form.Form>
      </div>
    </div>
  )
}


