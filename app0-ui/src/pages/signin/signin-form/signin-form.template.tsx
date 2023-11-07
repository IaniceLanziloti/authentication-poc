import { Buttons, Inputs, Forms } from '../../../components'
import { SigninFormProps } from './signin-form.types'


export function SigninFormTemplate({ handleSubmit, register }:SigninFormProps) {
  return (
    <Forms.Form data-testid='signin-form-template' onSubmit={ handleSubmit } >
      <Forms.Logo/>
      <Forms.ContentWrapper>
        <Inputs.Group>
          <Inputs.Label >Name</Inputs.Label>
          <Inputs.Input type="email" placeholder='email' autoComplete="email" {...register('email')}/>
        </Inputs.Group>
        <Inputs.Group>
          <Inputs.Label >Password</Inputs.Label>
          <Inputs.Input type="password" placeholder='password' autoComplete="current-password" {...register('password')}/>
        </Inputs.Group>
      </Forms.ContentWrapper>
      <Forms.ActionsWrapper>
        <Buttons.Primary loadingText='Sending...'>Sign-in</Buttons.Primary>
        <Buttons.Link href="/signup">Don't have an account?</Buttons.Link>
        <Buttons.Link href="#">Forgot your password?</Buttons.Link>
      </Forms.ActionsWrapper>
    </Forms.Form>
  )
}