import { yupResolver } from "@hookform/resolvers/yup"
import { ReactNode, useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import Input from "./components/input/Input"
import ResultComponent from "./components/result/ResultComponent"
import Select from "./components/select/Select"
import {
  EDUCATION,
  EYES_COLOR,
  NATIONALITY,
  SEX,
  YesNo,
  YesNoDoesNotMatter,
} from "./constanits"
import { validationSchema } from "./validation"

function App() {
  const [questionNumber, setQuestionNumber] = useState(1)

  const { control, handleSubmit, reset } = useForm({
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
        <Input
          key={3}
          control={control}
          name="age"
          label="Věk"
          labelValue="let"
          minValue={18}
          maxValue={80}
          defaultValue={[30, 50]}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
        />
      ),
      3: (
        <Input
          key={4}
          control={control}
          name="height"
          label={"Vyška"}
          labelValue={"cm"}
          minValue={140}
          maxValue={230}
          defaultValue={[170, 200]}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
        />
      ),
      4: (
        <Input
          key={5}
          control={control}
          name="income"
          label="Přijem"
          labelValue="czk"
          minValue={0}
          maxValue={100000}
          defaultValue={[30000, 70000]}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
        />
      ),
      5: (
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
      6: (
        <Select
          key={7}
          control={control}
          name="eyesColor"
          label="Barvá oči"
          optionsArray={EYES_COLOR}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
        />
      ),
      7: (
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
      8: (
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
      9: (
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
      10: (
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
      11: (
        <ResultComponent
          reset={reset}
          handleSubmit={handleSubmit}
          setQuestionNumber={setQuestionNumber}
        />
      ),
    }),
    [control, handleSubmit, questionNumber, reset]
  )

  return (
    <div className="mx-4 my-4 px-4 py-4 rounded-lg bg-white max-w-2xl w-full shadow-md">
      <p className="text-xs text-grey-dark text-right text-grey-dark">
        {questionNumber !== 11 && `Otazká ${questionNumber} z 10`}
      </p>
      <div className="mb-4">{questions[questionNumber]}</div>
    </div>
  )
}

export default App
