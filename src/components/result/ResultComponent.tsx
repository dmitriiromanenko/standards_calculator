import { Dispatch, useEffect, useState } from "react"
import { UseFormHandleSubmit, UseFormReset } from "react-hook-form"
import { ValidationSchemaType } from "../../validation"
import Button from "../../button/Button"
import { useCalculateResult } from "../../hooks/useCalculateResult"
import { ClockLoader } from "react-spinners"
import Section from "../section/Section"
import { POPULATION } from "../../constanits"

type ResultProps = {
  setQuestionNumber: Dispatch<React.SetStateAction<number>>
  questionNumber: number
  reset: UseFormReset<ValidationSchemaType>
  handleSubmit: UseFormHandleSubmit<ValidationSchemaType, undefined>
}

const ResultComponent = ({
  setQuestionNumber,
  questionNumber,
  handleSubmit,
  reset,
}: ResultProps) => {
  const [isResultReady, setIsResultReady] = useState(false)
  const [data, setData] = useState<ValidationSchemaType>()

  const onClickSubmit = handleSubmit?.((data) => {
    console.log(data)
    // setQuestionNumber(questionNumber + 1)

    setData(data)
    // reset({ name: "", team: "" })
  })
  const { result, percentageResult } = useCalculateResult({ data })
  console.log(result, "data from select")

  const onClickStartAgain = () => {
    setQuestionNumber(1)
    setIsResultReady(false)
    reset()
  }

  useEffect(() => {
    onClickSubmit()
    setTimeout(function () {
      setIsResultReady(true)
    }, 800)
  }, [onClickSubmit])

  return (
    <>
      <Section>
        <div className="flex flex-row items-center justify-center">
          {isResultReady && result ? (
            <div>
              <div>{result.toLocaleString("de-DE")} lidi</div>
              <div>{`nebo  ≈${percentageResult}%`}</div>
            </div>
          ) : (
            <ClockLoader color="#ff297c" />
          )}
        </div>
      </Section>
      <Button name="Začít znovu" onClick={onClickStartAgain} />
    </>
  )
}

export default ResultComponent
