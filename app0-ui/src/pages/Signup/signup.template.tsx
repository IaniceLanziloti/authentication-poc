import { Buttons, Input, Form } from '../../components'
import { SignupTemplateProps } from './signup.types'

export function SignupPageTemplate({ handleSubmit, register }: SignupTemplateProps) {
  return (
    <div className='h-screen flex justify-items-center bg-main-login bg-no-repeat bg-cover'>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Form.Form onSubmit={handleSubmit} >
          <Form.Logo/>
          <Form.ContentWrapper>
            <Input.Group>
              <Input.Label >Name</Input.Label>
              <Input.Input type="text" autoComplete="name" {...register('name')}/>
            </Input.Group>
            <Input.Group>
              <Input.Label >Email</Input.Label>
              <Input.Input type="email" autoComplete="email" {...register('email')}/>
            </Input.Group>
            <Input.Group>
              <Input.Label >Password</Input.Label>
              <Input.Input type="password" autoComplete="current-password" {...register('password')}/>
            </Input.Group>
          </Form.ContentWrapper>
          <Form.ActionsWrapper>
            <Buttons.Primary> Register </Buttons.Primary>
            <Buttons.Link href="/login">Already have an account? </Buttons.Link>
          </Form.ActionsWrapper>
        </Form.Form>
      </div>
    </div>
  )
}


