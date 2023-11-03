import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import { FormContentWrapper } from "./form-content-wrapper.template";

describe("Form content wrapper template", () => {
  it("should be able to render a form template", () => {
    const initialContent = 'Testing form content wrapper template'
    const updatedContent = 'Updated form content wrapper template'

    const { getByTestId, queryByText, rerender } = render(
      <FormContentWrapper>
        {initialContent}
      </FormContentWrapper>
    )

    expect(getByTestId('form-content-wrapper')).toBeInTheDocument()
    expect(getByTestId('form-content-wrapper')).toHaveTextContent(initialContent)

    rerender(
      <FormContentWrapper>
        {updatedContent}
      </FormContentWrapper>
    )

    expect(queryByText(initialContent)).not.toBeInTheDocument()
    expect(getByTestId('form-content-wrapper')).toBeInTheDocument()
    expect(getByTestId('form-content-wrapper')).toHaveTextContent(updatedContent)
  })
})