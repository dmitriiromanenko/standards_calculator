import * as yup from "yup"

export type ValidationSchemaType = {
  sex: { id: number; name: string }
  child: { id: number; name: string }
  age: number
  height: number
  income: number
  nationality: { id: number; name: string }
  eyesColor: { id: number; name: string }
  education: { id: number; name: string }
  smokes: { id: number; name: string }
  alcohol: { id: number; name: string }
  married: { id: number; name: string }
}

export const validationSchema: yup.ObjectSchema<ValidationSchemaType> =
  yup.object({
    sex: yup.object({
      id: yup.number().required(),
      name: yup.string().required(),
    }),
    child: yup.object({
      id: yup.number().required(),
      name: yup.string().required(),
    }),
    age: yup.number().required(),
    height: yup.number().required(),
    income: yup.number().required(),
    nationality: yup.object({
      id: yup.number().required(),
      name: yup.string().required(),
    }),
    eyesColor: yup.object({
      id: yup.number().required(),
      name: yup.string().required(),
    }),
    education: yup.object({
      id: yup.number().required(),
      name: yup.string().required(),
    }),
    smokes: yup.object({
      id: yup.number().required(),
      name: yup.string().required(),
    }),
    alcohol: yup.object({
      id: yup.number().required(),
      name: yup.string().required(),
    }),
    married: yup.object({
      id: yup.number().required(),
      name: yup.string().required(),
    }),
  })
