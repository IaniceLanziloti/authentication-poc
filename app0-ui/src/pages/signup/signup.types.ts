import { FormEvent } from "react";
import { SignupFormData } from "./signup-form/signup-form.types";
import { UseFormRegister } from "react-hook-form";

export type SignupTemplateProps = {
  handleSubmit(event: FormEvent<HTMLFormElement>):void,
  register: UseFormRegister<SignupFormData>,
}