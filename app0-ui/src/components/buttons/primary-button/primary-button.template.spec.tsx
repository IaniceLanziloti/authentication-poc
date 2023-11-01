import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { PrimaryButtonTemplate } from "./primary-button.template";


describe('Primary button template', () => {
  it('should be able to render a primary button template', () => {
    const { getByText, getByRole, getByTestId, queryByText, rerender } = render(
      <PrimaryButtonTemplate>Testing primary button</PrimaryButtonTemplate>
    )

    expect(getByRole('button',{ name: 'Testing primary button' })).toBeInTheDocument()
    expect(getByTestId('primary-button')).toBeInTheDocument()
    expect(getByTestId('primary-button')).toHaveTextContent('Testing primary button')

    expect(getByText('Testing primary button')).toBeInTheDocument()

    rerender(<PrimaryButtonTemplate>Updated primary button</PrimaryButtonTemplate>)

    expect(queryByText('Testing primary button')).not.toBeInTheDocument()
    expect(getByTestId('primary-button')).toBeInTheDocument()
    expect(getByTestId('primary-button')).toHaveTextContent('Updated primary button')
  })

  it('should be able to set a button type template', () => {
    const { getByTestId, rerender } = render (
      <PrimaryButtonTemplate type='button'>Testing button type</PrimaryButtonTemplate>
    )

    expect(getByTestId('primary-button')).toBeInTheDocument()
    expect(getByTestId('primary-button')).toHaveProperty('type','button')

    rerender(
      <PrimaryButtonTemplate type='submit'>Testing button type</PrimaryButtonTemplate>
    )

    expect(getByTestId('primary-button')).toBeInTheDocument()
    expect(getByTestId('primary-button')).toHaveProperty('type','submit')
  })
})