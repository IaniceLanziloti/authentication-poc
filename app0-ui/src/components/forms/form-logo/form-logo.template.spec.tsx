import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import { FormLogo } from "./form-logo.template";

describe("Form content wrapper template", () => {
  it("should be able to render a MZ Form Logo", () => {
    const { getByTestId, getByAltText } = render(
      <FormLogo/>
    )

    expect(getByTestId('form-logo')).toBeInTheDocument()
    expect(getByAltText('MZIQ Logo')).toBeInTheDocument()
  })
})