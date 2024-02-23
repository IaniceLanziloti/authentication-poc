
import { describe, expect, it, vi } from "vitest";

import userEvent from '@testing-library/user-event'
import { render } from "@testing-library/react";

import { PrimaryButton } from "./primary-button.component";

describe('Primary button component', () => {
  it('should be able to render a primary button component', async ()=> {
    const { getByTestId } = render(
      <PrimaryButton 
        type="button"
      >
        Testing primary button
      </PrimaryButton>
    )

    expect(getByTestId('primary-button')).toBeInTheDocument()

    const primaryButton = getByTestId('primary-button')

    await userEvent.click(primaryButton)

    expect(primaryButton).toHaveTextContent('Testing primary button')
  })

  it('should be able to click on a primary button', async () => {
    const handleClick = vi.fn()
    const initialText = "Testing button click"

    const { getByTestId, findByText } = render(
      <PrimaryButton 
        onClick={handleClick}
        type='button'
      >
        {initialText}
      </PrimaryButton>
    )

    const primaryButton = getByTestId('primary-button')
    expect(primaryButton).toBeInTheDocument()

    await userEvent.click(primaryButton)

    expect(await findByText(initialText,{},{timeout:500})).toBeInTheDocument()
  })

  it('should be able to render a loading text and disable the button when the click action was a promise', async () => {
    const loadingText = "Loading..."
    const initialText = "Testing button click"

    const handleClick = () => new Promise<void>(
      resolve => setTimeout(resolve, 500)
    );

    const { getByTestId, findByText, debug} = render (
      <PrimaryButton 
        onClick={handleClick}
        type='button'
        loadingText={loadingText}
      >
        { initialText }
      </PrimaryButton>
    )

    const primaryButton = getByTestId('primary-button')
    expect(primaryButton).toBeInTheDocument()
    expect(primaryButton).toHaveTextContent(initialText)

    userEvent.click(primaryButton)

    const loadingButton = await findByText(loadingText,{},{timeout:500})
    expect(loadingButton).toBeInTheDocument()
    expect(loadingButton).toBeDisabled()

    const afterResolveButton = await findByText(initialText,{},{timeout:1000})

    expect(afterResolveButton).toBeInTheDocument()
    expect(afterResolveButton).toBeEnabled()

  })

})