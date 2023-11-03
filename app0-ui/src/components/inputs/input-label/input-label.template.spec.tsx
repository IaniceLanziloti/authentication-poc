import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import { InputLabel } from "./input-label.template";

describe("input label", () => {
  it("should be able to render a input label", () => {
    const initialText = 'Testing input label'
    const updatedText = 'Updated input label'
    const { getByTestId, queryByText, rerender } = render(
      <InputLabel>
        {initialText}
      </InputLabel>
    )

    expect(getByTestId('input-label')).toBeInTheDocument()
    expect(getByTestId('input-label')).toHaveTextContent(initialText)

    rerender(
      <InputLabel>
        {updatedText}
      </InputLabel>
    )

    expect(queryByText(initialText)).not.toBeInTheDocument()
    expect(getByTestId('input-label')).toBeInTheDocument()
    expect(getByTestId('input-label')).toHaveTextContent(updatedText)
  })
})