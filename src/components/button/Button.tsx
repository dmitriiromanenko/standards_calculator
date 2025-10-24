import { Button as ButtonHUI } from "@headlessui/react"

type ButtonProps = {
  name: string
  onClick?: VoidFunction
  isDisabled?: boolean
}

const Button = ({ name, onClick, isDisabled }: ButtonProps) => {
  return (
    <ButtonHUI
      onClick={isDisabled ? () => {} : onClick}
      className={`my-4 inline-flex items-center gap-2 rounded-md ${
        isDisabled ? "bg-pink-light" : "bg-pink"
      }  uppercase w-full justify-center py-1.5 px-3 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none ${
        !isDisabled && "data-[hover]:bg-pink-dark"
      }
       data-[focus]:outline-1 data-[focus]:outline-white`}
    >
      {name}
    </ButtonHUI>
  )
}

export default Button
