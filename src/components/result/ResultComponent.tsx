import { Dispatch, useEffect, useState } from "react"
import { UseFormHandleSubmit, UseFormReset } from "react-hook-form"
import { ValidationSchemaType } from "../../validation"
import Button from "../../button/Button"
import { useCalculateResult } from "../../hooks/useCalculateResult"
import { ClockLoader } from "react-spinners"
import { UserIcon } from "@heroicons/react/16/solid"
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
    setData(data)
  })
  const { result, percentageResult } = useCalculateResult({ data })
  console.log(result, "data from select")

  const drawSquare = (percentage: number) => {
    const size = 10
    const total = size * size
    const redCount = Math.floor((percentage / 100) * total)
    const square = []

    for (let i = 0; i < total; i++) {
      square.push(
        <UserIcon
          key={i}
          color={i <= redCount ? "#ff297c" : "#383e48"}
          fill={i <= redCount ? "#ff297c" : "#383e48"}
          width={"1rem"}
          height={"1rem"}
        />
      )
    }

    return square
  }

  const onClickStartAgain = () => {
    setQuestionNumber(1)
    setIsResultReady(false)
    reset()
  }

  useEffect(() => {
    onClickSubmit()
    setTimeout(function () {
      setIsResultReady(true)
    }, 1000)
  }, [onClickSubmit])

  return (
    <>
      {isResultReady && result ? (
        <>
          <div className="my-4 flex md:flex-row sm:flex-col items-center justify-center">
            <div className="flex mx-4 my-4 flex-col sm:items-center md:items-start">
              <span className="mx-4 text-2xl font-semibold text-left text-pink">
                {result.toLocaleString("de-DE")} lidí
              </span>
              <span className="mx-4 text-xs font-semibold text-left text-pink">
                z {POPULATION.toLocaleString("de-DE")}
              </span>
              <span className="mx-4 mt-4 text-xs font-semibold sm:text-center md:text-left text-pink">
                {`Přibližně  ${percentageResult}%`} lidí v České republice
                splňují vaše standardy
              </span>
            </div>
            <div className="grid grid-cols-10 gap-0.5	">
              {drawSquare(percentageResult)}
            </div>
          </div>
          <Button name="Začít znovu" onClick={onClickStartAgain} />
        </>
      ) : (
        <div className="my-4 flex flex-col items-center justify-center">
          <ClockLoader color="#ff297c" className="mb-4" />
          <span className="font-semibold text-pink uppercase">
            Výpočet výsledků
          </span>
        </div>
      )}
    </>
  )
}

export default ResultComponent
