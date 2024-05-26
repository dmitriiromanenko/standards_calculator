import Select from "./components/select/Select"
import { SEX, YesNo } from "./constanits"

export const renderCurrentSelection = (questionNumber, control) => {
  switch (questionNumber) {
    case 1:
      return (
        <Select
          control={control}
          name="sex"
          label="Pohlaví"
          optionsArray={SEX}
        />
      )
    case 2:
      return (
        <Select
          control={control}
          name="child"
          label="Chce-li ditě"
          optionsArray={YesNo}
        />
      )
    default:
      return null
  }
}
