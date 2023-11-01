import '@testing-library/jest-dom'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LinkButton } from './link-button.template'

describe('Link button', () =>{
  it('should be able to render a link button', async ()=>{
    const { getByTestId, queryByText, rerender } = render(
      <LinkButton href='testing/page'>Testing link button</LinkButton>
    )

    expect(getByTestId('link-button')).toBeInTheDocument()
    expect(getByTestId('link-button')).toHaveTextContent('Testing link button')
    expect(getByTestId('link-button')).toHaveAttribute('href','testing/page')

    rerender(
      <LinkButton href='another/page'>Updated text link</LinkButton>
    )

    expect(queryByText('Testing link button')).not.toBeInTheDocument()

    expect(getByTestId('link-button')).toBeInTheDocument()
    expect(getByTestId('link-button')).toHaveTextContent('Updated text link')
    expect(getByTestId('link-button')).toHaveAttribute('href','another/page')
  })
})