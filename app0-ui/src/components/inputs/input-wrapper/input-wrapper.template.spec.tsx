import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import { InputWrapper } from "./input-wrapper.template";

describe("Input wrapper", () => {
  it("should be able to render a input wrapper", () => {
    const initialText = 'Testing input wrapper'
    const updatedText = 'Updated input wrapper'
    const { getByTestId, queryByText, rerender } = render(
      <InputWrapper>
        {initialText}
      </InputWrapper>
    )

    expect(getByTestId('input-wrapper')).toBeInTheDocument()
    expect(getByTestId('input-wrapper')).toHaveTextContent(initialText)

    rerender(
      <InputWrapper>
        {updatedText}
      </InputWrapper>
    )

    expect(queryByText(initialText)).not.toBeInTheDocument()
    expect(getByTestId('input-wrapper')).toBeInTheDocument()
    expect(getByTestId('input-wrapper')).toHaveTextContent(updatedText)
  })
})