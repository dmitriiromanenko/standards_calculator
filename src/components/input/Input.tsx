import { Control, useController } from "react-hook-form"
import { NameAlias, ValidationSchemaType } from "../../validation"
import Button from "../../button/Button"
import Section from "../section/Section"
import { Dispatch } from "react"

type InputProps = {
  label: string
  type: "text" | "number"
  placeholder: string
  control: Control<ValidationSchemaType>
  name: NameAlias
  setQuestionNumber: Dispatch<React.SetStateAction<number>>
  questionNumber: number
  minValue: number
  maxValue: number
}

const Input = ({
  label,
  type = "text",
  placeholder,
  control,
  name,
  setQuestionNumber,
  questionNumber,
  minValue,
  maxValue,
}: InputProps) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  const onClickChangeQuestionForward = () => {
    setQuestionNumber(questionNumber + 1)
  }

  const onClickChangeQuestionBack = () => {
    setQuestionNumber(questionNumber - 1)
  }

  return (
    <>
      <Section>
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
            min={minValue}
            max={maxValue}
            className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
            placeholder={placeholder}
          />
        </div>
      </Section>
      <div className="flex gap-2 ">
        {questionNumber > 1 && (
          <Button name="Zpět" onClick={onClickChangeQuestionBack} />
        )}
        <Button
          isDisabled={
            !value ||
            (value as number) < minValue ||
            (value as number) > maxValue
          }
          name="Dále"
          onClick={onClickChangeQuestionForward}
        />
      </div>
    </>
  )
}

export default Input
