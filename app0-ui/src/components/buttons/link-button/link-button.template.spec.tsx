import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { LinkButton } from './link-button.template'

describe('Link button', () =>{
  it('should be able to render a link button', async ()=>{
    const { getByTestId, queryByText, rerender } = render(
      <LinkButton href='/testing'>Testing link button</LinkButton>
    )

    const linkButton = getByTestId('link-button')

    expect(linkButton).toBeInTheDocument()
    expect(linkButton).toHaveAttribute('href','/testing')
    expect(linkButton).toHaveTextContent('Testing link button')

    rerender(
      <LinkButton href='/another/link'>Updated link button</LinkButton>
    )

    expect(queryByText('Testing link button')).not.toBeInTheDocument()
    expect(linkButton).toBeInTheDocument()
    expect(linkButton).toHaveAttribute('href','/another/link')
    expect(linkButton).toHaveTextContent('Updated link button')
  })
})