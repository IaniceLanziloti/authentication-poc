import { Buttons, Inputs, Forms } from '../../../components'
import { SignupFormProps } from './signup-form.types'


export function SignupFormTemplate ({ handleSubmit, register }: SignupFormProps) {
  return (
    <Forms.Form onSubmit={handleSubmit} >
      <Forms.Logo/>
      <Forms.ContentWrapper>
        <Inputs.Group>
          <Inputs.Label >Name</Inputs.Label>
          <Inputs.Input type="text" autoComplete="name" {...register('name')}/>
        </Inputs.Group>
        <Inputs.Group>
          <Inputs.Label >Email</Inputs.Label>
          <Inputs.Input type="email" autoComplete="email" {...register('email')}/>
        </Inputs.Group>
        <Inputs.Group>
          <Inputs.Label >Password</Inputs.Label>
          <Inputs.Input type="password" autoComplete="current-password" {...register('password')}/>
        </Inputs.Group>
      </Forms.ContentWrapper>
      <Forms.ActionsWrapper>
        <Buttons.Primary> Register </Buttons.Primary>
        <Buttons.Link href="/login">Already have an account? </Buttons.Link>
      </Forms.ActionsWrapper>
    </Forms.Form>
  )
}