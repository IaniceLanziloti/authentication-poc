import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import { FormTemplate } from "./form.template";

describe("Form Template", () => {
  it("should be able to render a form template", () => {
    const initialText = 'Testing form template'
    const updatedText = 'Updated form template'
    const { getByTestId, queryByText, rerender } = render(
      <FormTemplate>
        {initialText}
      </FormTemplate>
    )

    expect(getByTestId('form-template')).toBeInTheDocument()
    expect(getByTestId('form-template')).toHaveTextContent(initialText)

    rerender(
      <FormTemplate>
        {updatedText}
      </FormTemplate>
    )

    expect(queryByText(initialText)).not.toBeInTheDocument()
    expect(getByTestId('form-template')).toBeInTheDocument()
    expect(getByTestId('form-template')).toHaveTextContent(updatedText)
  })
})