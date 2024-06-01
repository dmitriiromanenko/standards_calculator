import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react"
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid"
import { Control, UseFormHandleSubmit, useController } from "react-hook-form"
import { NameAlias, ValidationSchemaType } from "../../validation"
import { Dispatch } from "react"
import Button from "../../button/Button"
import Section from "../section/Section"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

type SelectProps = {
  label: string
  optionsArray: { id: number; name: string }[]
  control: Control<ValidationSchemaType>
  name: NameAlias
  setQuestionNumber: Dispatch<React.SetStateAction<number>>
  questionNumber: number
  handleSubmit?: UseFormHandleSubmit<ValidationSchemaType, undefined>
}

const Select = ({
  label,
  optionsArray,
  setQuestionNumber,
  control,
  questionNumber,
  name,
  handleSubmit,
}: SelectProps) => {
  const onClickChangeQuestionForward = () => {
    setQuestionNumber(questionNumber + 1)
  }

  const onClickChangeQuestionBack = () => {
    setQuestionNumber(questionNumber - 1)
  }

  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    control,
    name,
    defaultValue: "",
  })

  return (
    <>
      <Section>
        <Listbox
          value={error?.message ?? value}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(e: any) => {
            onChange(e.name)
          }}
        >
          {({ open }) => (
            <>
              <Label className="block text-sm font-medium leading-6 text-gray-900">
                {error?.message ?? label}
              </Label>
              <div className="relative mt-2">
                <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                  <span className="flex items-center">
                    <span className="block truncate">
                      {value || "Zvolte jednu z možností"}
                    </span>
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </ListboxButton>

                <Transition
                  show={open}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {optionsArray.map((person) => (
                      <ListboxOption
                        key={person.id}
                        className={() =>
                          classNames(
                            "text-grey-dark",
                            "relative cursor-default py-2 pl-3 pr-9"
                          )
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <div className="flex items-center">
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "ml-3 block truncate"
                                )}
                              >
                                {person.name}
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  "text-grey-dark",
                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </Section>
      <div className="flex gap-2 ">
        {questionNumber > 1 && (
          <Button name="Zpět" onClick={onClickChangeQuestionBack} />
        )}
        {questionNumber === 11 && handleSubmit ? (
          <Button
            name="Vyhodnotit"
            isDisabled={!value}
            onClick={onClickChangeQuestionForward}
          />
        ) : (
          <Button
            isDisabled={!value}
            name="Dále"
            onClick={onClickChangeQuestionForward}
          />
        )}
      </div>
    </>
  )
}

export default Select
