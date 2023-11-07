import { render } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { SignupPageComponent } from "./signup.component";


describe('Signup page component ', () => {
  beforeEach( () => {
    vi.clearAllMocks()
  })

  it('should be able to render the signup template', () => {
    const mockNavigate = vi.hoisted(() => {
      return vi.fn()
    })

    vi.mock('react-router-dom', async () => {
      const mod = await vi.importActual<typeof import('react-router-dom')>('react-router-dom')
      return {
        ...mod,
        useNavigate: vi.fn().mockImplementationOnce(()=> mockNavigate )
      }
    })

    const { getByTestId } = render(<SignupPageComponent/>)

    expect(getByTestId('signup-page-template')).toBeInTheDocument()
  })
})