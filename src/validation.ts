import * as yup from "yup"

export type ValidationSchemaType = {
  sex: string
  child: string
  age: number
  height: number
  income: number
  nationality: string
  eyesColor: string
  education: string
  smokes: string
  alcohol: string
  married: string
}

export type NameAlias =
  | "sex"
  | "child"
  | "age"
  | "height"
  | "income"
  | "nationality"
  | "eyesColor"
  | "education"
  | "smokes"
  | "alcohol"
  | "married"

export const validationSchema: yup.ObjectSchema<ValidationSchemaType> =
  yup.object({
    sex: yup.string().required(),
    child: yup.string().required(),
    age: yup.number().required(),
    height: yup.number().required(),
    income: yup.number().required(),
    nationality: yup.string().required(),
    eyesColor: yup.string().required(),
    education: yup.string().required(),
    smokes: yup.string().required(),
    alcohol: yup.string().required(),
    married: yup.string().required(),
  })
