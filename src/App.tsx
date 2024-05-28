import { ReactNode, useMemo, useState } from "react"
import Input from "./components/input/Input"
import Select from "./components/select/Select"
import {
  EDUCATION,
  EYES_COLOR,
  NATIONALITY,
  SEX,
  YesNo,
  YesNoDoesNotMatter,
} from "./constanits"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { validationSchema } from "./validation"

function App() {
  const [questionNumber, setQuestionNumber] = useState(1)

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const questions: Record<number, ReactNode> = useMemo(
    () => ({
      1: (
        <Select
          key={1}
          control={control}
          name="sex"
          label="Pohlaví"
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          optionsArray={SEX}
        />
      ),
      2: (
        <Select
          key={2}
          control={control}
          name="child"
          label="Chce-li ditě"
          optionsArray={YesNoDoesNotMatter}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
        />
      ),
      3: (
        <Input
          key={3}
          control={control}
          name="age"
          label="Věk"
          type="number"
          minValue={18}
          maxValue={80}
          placeholder="Zvolte věk od 18 do 80"
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
        />
      ),
      4: (
        <Input
          key={4}
          control={control}
          name="height"
          label="Vyška"
          type="number"
          minValue={140}
          maxValue={180}
          placeholder="Zvolte vyšku od 140cm do 240cm"
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
        />
      ),
      5: (
        <Input
          key={5}
          control={control}
          name="income"
          label="Přijem"
          type="number"
          minValue={0}
          maxValue={100000}
          placeholder="Zvolte přijem od 0 do 100 000"
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
        />
      ),
      6: (
        <Select
          key={6}
          control={control}
          name="nationality"
          label="Národnost"
          optionsArray={NATIONALITY}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
        />
      ),
      7: (
        <Select
          key={7}
          control={control}
          name="eyesColor"
          label="Barvá Oči"
          optionsArray={EYES_COLOR}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
        />
      ),
      8: (
        <Select
          key={8}
          control={control}
          name="education"
          label="Vzdělaní"
          optionsArray={EDUCATION}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
        />
      ),
      9: (
        <Select
          key={9}
          control={control}
          name="smokes"
          label="Kouří"
          optionsArray={YesNoDoesNotMatter}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
        />
      ),
      10: (
        <Select
          key={10}
          control={control}
          name="alcohol"
          label="Pijé alkohol"
          optionsArray={YesNoDoesNotMatter}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
        />
      ),
      11: (
        <Select
          key={11}
          control={control}
          name="married"
          label="Vyloučit ženaté/vdané"
          optionsArray={YesNo}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          handleSubmit={handleSubmit}
        />
      ),
    }),
    [control, handleSubmit, questionNumber]
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
        <div className="mb-4">{questions[questionNumber]}</div>
      </div>
    </>
  )
}

export default App
