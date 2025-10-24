import { Dispatch } from "react"
import { Control, useController } from "react-hook-form"
import RangeSlider from "react-range-slider-input"
import "react-range-slider-input/dist/style.css"
import { NameAlias, ValidationSchemaType } from "../../validation"
import Button from "../button/Button"
import Section from "../section/Section"
import "./styles.css"

type InputProps = {
  label: string
  control: Control<ValidationSchemaType>
  name: NameAlias
  setQuestionNumber: Dispatch<React.SetStateAction<number>>
  questionNumber: number
  minValue: number
  maxValue: number
  defaultValue: number[]
  labelValue: string
}

const Input = ({
  label,
  control,
  name,
  setQuestionNumber,
  questionNumber,
  minValue,
  defaultValue,
  maxValue,
  labelValue,
}: InputProps) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    control,
    name,
    defaultValue: defaultValue,
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
          {error?.message ??
            `${label}: ${value?.[0]} - ${value[1]} ${labelValue}`}
        </label>
        <div className="flex align-center relative mt-2 rounded-md shadow-sm">
          <RangeSlider
            min={minValue}
            max={maxValue}
            value={value}
            step={1}
            className="text-pink-light"
            onInput={onChange}
          />
        </div>
      </Section>
      <div className="flex gap-2 ">
        {questionNumber > 1 && (
          <Button name="Zpět" onClick={onClickChangeQuestionBack} />
        )}
        <Button
          isDisabled={false}
          name="Dále"
          onClick={onClickChangeQuestionForward}
        />
      </div>
    </>
  )
}

export default Input
