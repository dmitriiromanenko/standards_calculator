import { Button as ButtonHUI } from "@headlessui/react"

const Button = ({ name, onClick }: { name: string; onClick: VoidFunction }) => {
  return (
    <ButtonHUI
      onClick={onClick}
      className="my-4 inline-flex items-center gap-2 rounded-md bg-pink uppercase w-full justify-center py-1.5 px-3 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-pink-dark data-[focus]:outline-1 data-[focus]:outline-white"
    >
      {name}
    </ButtonHUI>
  )
}

export default Button
