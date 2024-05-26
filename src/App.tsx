import { ReactNode, useMemo, useState } from "react"
import Input from "./components/input/Input"
import Select from "./components/select/Select"
import { EDUCATION, EYES_COLOR, NATIONALITY, SEX, YesNo } from "./constanits"
import Button from "./button/Button"
import Section from "./components/section/Section"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { validationSchema } from "./validation"

function App() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const onClickChangeQuestionForward = () => {
    setQuestionNumber(questionNumber + 1)
  }

  const onClickChangeQuestionBack = () => {
    setQuestionNumber(questionNumber - 1)
  }

  const { control, handleSubmit, reset, watch } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const onClickSubmit = handleSubmit((data) => {
    console.log(data)
    // reset({ name: "", team: "" })
  })

  console.log(watch("sex"), "watch")

  const questions: Record<number, ReactNode> = useMemo(
    () => ({
      1: (
        <Select
          control={control}
          name="sex"
          label="Pohlaví"
          optionsArray={SEX}
        />
      ),
      2: (
        <Select
          control={control}
          name="child"
          label="Chce-li ditě"
          optionsArray={YesNo}
        />
      ),
      3: (
        <Input
          control={control}
          name="age"
          label="Věk"
          type="number"
          placeholder="Zvolte věk od 18 do 80"
        />
      ),
      4: (
        <Input
          control={control}
          name="height"
          label="Vyška"
          type="number"
          placeholder="Zvolte vyšku od 140cm do 240cm"
        />
      ),
      5: (
        <Input
          control={control}
          name="income"
          label="Přijem"
          type="number"
          placeholder="Zvolte přijem od 0 do 100 000"
        />
      ),
      6: (
        <Select
          control={control}
          name="nationality"
          label="Národnost"
          optionsArray={NATIONALITY}
        />
      ),
      7: (
        <Select
          control={control}
          name="eyesColor"
          label="Barvá Oči"
          optionsArray={EYES_COLOR}
        />
      ),
      8: (
        <Select
          control={control}
          name="education"
          label="Vzdělaní"
          optionsArray={EDUCATION}
        />
      ),
      9: (
        <Select
          control={control}
          name="smokes"
          label="Kouří"
          optionsArray={YesNo}
        />
      ),
      10: (
        <Select
          control={control}
          name="alcohol"
          label="Pijé alkohol"
          optionsArray={YesNo}
        />
      ),
      11: (
        <Select
          control={control}
          name="married"
          label="Vyloučit ženaté/vdané"
          optionsArray={YesNo}
        />
      ),
    }),
    [control]
  )

  return (
    <>
      <div className="mt-4 px-4 py-4  max-w-2xl w-full ">
        <h1 className="text-3xl font-bold text-black text-center text-grey-dark">
          Kalkulačka standardů
        </h1>
        <h2 className=" mx-4 my-4 text-l font-semibold text-center text-grey-light">
          Spočitejte kolik procent lidi v České republice je vaším potencialním
          partnerem
        </h2>
      </div>
      <div className="mx-4 my-4 px-4 py-4 rounded-lg bg-white max-w-2xl w-full shadow-md">
        <p className="text-xs text-grey-dark text-right text-grey-dark">
          Otazká {questionNumber} z 11
        </p>
        <Section>{questions[questionNumber]}</Section>
        <div className="flex gap-2 ">
          {questionNumber === 11 ? (
            <Button name="Vyhodnotit" onClick={onClickSubmit} />
          ) : (
            <>
              {questionNumber > 1 && (
                <Button name="Zpět" onClick={onClickChangeQuestionBack} />
              )}
              <Button name="Dále" onClick={onClickChangeQuestionForward} />
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default App
