import { useState } from "react";
import { PrimaryButtonTemplate } from "./primary-button.template";
import { IPrimaryButtonProps } from "./primary-button.types";


export function PrimaryButton({ onClick, children, loadingText, ...rest }: IPrimaryButtonProps) {
  const [ isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {

    if (!onClick) {
      return
    }

    const isAPromise = onClick()

    if (isAPromise) {
      setIsLoading(true)
      await Promise.resolve(isAPromise)
      setIsLoading(false)
    }
  }

  return (
    <PrimaryButtonTemplate onClick={ handleClick } disabled={isLoading} {...rest }>
      { isLoading && loadingText }
      { !isLoading && children }
    </PrimaryButtonTemplate>
  )
}