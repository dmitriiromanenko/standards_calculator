import { Control, FieldValues, useController } from "react-hook-form"
import { ValidationSchemaType } from "../../validation"

type InputProps = {
  label: string
  type: "text" | "number"
  placeholder: string
  control: Control<FieldValues, ValidationSchemaType>
  name: string
}

const Input = ({
  label,
  type = "text",
  placeholder,
  control,
  name,
}: InputProps) => {
  const {
    field: { onBlur, onChange, value },
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  console.log(error?.message)

  return (
    <>
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {error?.message ?? label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type={type}
          onChange={onChange}
          value={value}
          className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
      </div>
    </>
  )
}

export default Input
