import { describe, expect, it } from "vitest";

import userEvent from '@testing-library/user-event'
import { render } from "@testing-library/react";

import { PrimaryButton } from "./primary-button.component";

describe('Primary button component', () => {

  it('should be able to render a primary button component', ()=> {
    const { getByTestId } = render(
      <PrimaryButton>Testing primary button</PrimaryButton>
    )

    expect(getByTestId('primary-button')).toBeInTheDocument()
    expect(getByTestId('primary-button')).toHaveTextContent('Testing primary button')
  })

  it('should be able click on a primary button', async () => {

    const handleClick = () => { return }
    const initialText = "Testing button click"

    const { getByTestId, findByText } = render (
      <PrimaryButton 
        onClick={handleClick}
        type='button'
      >Testing button click</PrimaryButton>
    )

    expect(getByTestId('primary-button')).toBeInTheDocument()

    const primaryButton = getByTestId('primary-button')

    userEvent.click(primaryButton)

    expect(await findByText(initialText)).toBeInTheDocument()
  })
})

  it('should be able to render a login text when the click action was a promise', async () => {
    const loadingText = "Loading..."
    const initialText = "Testing button click"

    const handleClick = () => new Promise<any>(
      resolve => setTimeout(resolve, 500)
    );

    const { getByTestId, findByText } = render (
      <PrimaryButton 
        onClick={handleClick}
        type='button'
        loadingText={loadingText}
      >
        { initialText }
      </PrimaryButton>
    )

    expect(getByTestId('primary-button')).toBeInTheDocument()
    expect(getByTestId('primary-button')).toHaveTextContent(initialText)
    

    const primaryButton = getByTestId('primary-button')

    userEvent.click(primaryButton)

    expect(await findByText(loadingText,{},{timeout:500})).toBeInTheDocument()
    expect(await findByText(initialText,{},{timeout:1000})).toBeInTheDocument()

    // await waitFor(() => {
    //   expect(getByText(loadingText)).toBeInTheDocument()
    // })
  })


