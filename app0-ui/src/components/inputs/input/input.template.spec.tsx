import { describe, expect, it } from "vitest";
import { render, waitFor } from "@testing-library/react";

import { InputTemplate } from "./input.template";
import userEvent from "@testing-library/user-event";

describe("Form content wrapper template", () => {
  it("should be able to render a input", () => {
    const { getByTestId } = render(
      <InputTemplate
        placeholder="Testing input"
      />
    )

    const input = getByTestId('input-template')

    expect(input).toBeInTheDocument()
    expect(input).toHaveProperty('placeholder','Testing input')
  })

  it("should be able to render a password input", () => {
    const { getByTestId } = render(
      <InputTemplate
        type="password"
        placeholder="Testing input"
      />
    )

    const input = getByTestId('input-template')

    expect(input).toBeInTheDocument()
    expect(input).toHaveProperty('type','password')
    expect(input).toHaveProperty('placeholder','Testing input')
  })

  it('should be able to fill', async ()=>{
    const { getByTestId } = render(
      <InputTemplate
        type="password"
        placeholder="Testing input"
      />
    )

    const input = getByTestId('input-template')
    await userEvent.type(input,'testing')

    await waitFor(()=>{
      expect(input).toHaveValue('testing')
    },{ timeout: 500 })

  })
})