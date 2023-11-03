import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import { FormActionsWrapper } from "./form-actions-wrapper.template";

describe("Form actions wrapper template", () => {
  it("should be able to render a form template", () => {
    const initialContent = 'Testing form actions wrapper template'
    const updatedContent = 'Updated form actions wrapper template'
    const { getByTestId, queryByText, rerender } = render(
      <FormActionsWrapper>
        {initialContent}
      </FormActionsWrapper>
    )

    expect(getByTestId('form-actions-wrapper')).toBeInTheDocument()
    expect(getByTestId('form-actions-wrapper')).toHaveTextContent(initialContent)

    rerender(
      <FormActionsWrapper>
        {updatedContent}
      </FormActionsWrapper>
    )

    expect(queryByText(initialContent)).not.toBeInTheDocument()
    expect(getByTestId('form-actions-wrapper')).toBeInTheDocument()
    expect(getByTestId('form-actions-wrapper')).toHaveTextContent(updatedContent)
  })
})