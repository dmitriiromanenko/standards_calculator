// age: 34
// alcohol: "Ne"
// child: "Ano"
// education: "Základní vzdělání včetně neukončeného"
// eyesColor: "Zelená"
// height: 156
// income: 1000
// married: "Ne"
// nationality: "Ukrajinská"
// sex: "Muž"
// smokes: "Ano"

import { POPULATION } from "../constanits"
import { ValidationSchemaType } from "../validation"

const educationPercentage: Record<string, number> = {
  Nezáleží: 100,
  "Bez vzdělání": 0.6,
  "Základní vzdělání včetně neukončeného": 12.5,
  "Střední vzdělání včetně vyučení bez maturity": 31.0,
  "Úplné střední vzdělání s maturitou včetně nástavbového a pomaturitního": 30.9,
  "Vyšší odborné vzdělání, konzervatoř": 1.6,
  "Vysokoškolské vzdělání": 17.6,
}

const eyeColorPercentage: Record<string, number> = {
  Nezáleží: 100,
  Zelená: 7.5,
  Hnědá: 80,
  Modrá: 10,
  Šedá: 2.5,
}

// 79.9 percent of all ppl
const ageData = [
  { age: 18, percentage: 0.9 },
  { age: 19, percentage: 0.9 },
  { age: 20, percentage: 0.9 },
  { age: 21, percentage: 0.9 },
  { age: 22, percentage: 0.9 },
  { age: 23, percentage: 0.9 },
  { age: 24, percentage: 0.9 },
  { age: 25, percentage: 1.0 },
  { age: 26, percentage: 1.1 },
  { age: 27, percentage: 1.2 },
  { age: 28, percentage: 1.2 },
  { age: 29, percentage: 1.3 },
  { age: 30, percentage: 1.3 },
  { age: 31, percentage: 1.3 },
  { age: 32, percentage: 1.3 },
  { age: 33, percentage: 1.3 },
  { age: 34, percentage: 1.3 },
  { age: 35, percentage: 1.3 },
  { age: 36, percentage: 1.4 },
  { age: 37, percentage: 1.4 },
  { age: 38, percentage: 1.4 },
  { age: 39, percentage: 1.4 },
  { age: 40, percentage: 1.6 },
  { age: 41, percentage: 1.6 },
  { age: 42, percentage: 1.7 },
  { age: 43, percentage: 1.7 },
  { age: 44, percentage: 1.7 },
  { age: 45, percentage: 1.8 },
  { age: 46, percentage: 1.7 },
  { age: 47, percentage: 1.7 },
  { age: 48, percentage: 1.6 },
  { age: 49, percentage: 1.4 },
  { age: 50, percentage: 1.4 },
  { age: 51, percentage: 1.3 },
  { age: 52, percentage: 1.3 },
  { age: 53, percentage: 1.3 },
  { age: 54, percentage: 1.3 },
  { age: 55, percentage: 1.3 },
  { age: 56, percentage: 1.4 },
  { age: 57, percentage: 1.4 },
  { age: 58, percentage: 1.2 },
  { age: 59, percentage: 1.2 },
  { age: 60, percentage: 1.1 },
  { age: 61, percentage: 1.1 },
  { age: 62, percentage: 1.1 },
  { age: 63, percentage: 1.3 },
  { age: 64, percentage: 1.3 },
  { age: 65, percentage: 1.3 },
  { age: 66, percentage: 1.3 },
  { age: 67, percentage: 1.3 },
  { age: 68, percentage: 1.3 },
  { age: 69, percentage: 1.3 },
  { age: 70, percentage: 1.2 },
  { age: 71, percentage: 1.2 },
  { age: 72, percentage: 1.1 },
  { age: 73, percentage: 1.2 },
  { age: 74, percentage: 1.1 },
  { age: 75, percentage: 0.9 },
  { age: 76, percentage: 0.9 },
  { age: 77, percentage: 0.9 },
  { age: 78, percentage: 0.7 },
  { age: 79, percentage: 0.6 },
  { age: 80, percentage: 0.6 },
]

const maleHeightProbabilities = [
  { height: 131, percentage: 0.0001 },
  { height: 136, percentage: 0.0001 },
  { height: 141, percentage: 0.0001 },
  { height: 146, percentage: 0.0001 },
  { height: 151, percentage: 0.0001 },
  { height: 156, percentage: 0.0001 },
  { height: 161, percentage: 0.0001 },
  { height: 166, percentage: 0.0015 },
  { height: 171, percentage: 0.0242 },
  { height: 176, percentage: 0.1506 },
  { height: 181, percentage: 0.3989 },
  { height: 186, percentage: 0.2411 },
  { height: 191, percentage: 0.054 },
  { height: 196, percentage: 0.0044 },
  { height: 201, percentage: 0.0002 },
  { height: 206, percentage: 0.0001 },
  { height: 211, percentage: 0.0001 },
  { height: 216, percentage: 0.0001 },
  { height: 221, percentage: 0.0001 },
  { height: 226, percentage: 0.0001 },
  { height: 231, percentage: 0.0001 },
]

const femaleHeightProbabilities = [
  { height: 131, percentage: 0.0001 },
  { height: 136, percentage: 0.0001 },
  { height: 141, percentage: 0.0001 },
  { height: 146, percentage: 0.0001 },
  { height: 151, percentage: 0.0001 },
  { height: 156, percentage: 0.0002 },
  { height: 161, percentage: 0.0044 },
  { height: 166, percentage: 0.054 },
  { height: 171, percentage: 0.2411 },
  { height: 176, percentage: 0.3989 },
  { height: 181, percentage: 0.1506 },
  { height: 186, percentage: 0.0242 },
  { height: 191, percentage: 0.0015 },
  { height: 196, percentage: 0.0001 },
  { height: 201, percentage: 0.0001 },
  { height: 206, percentage: 0.0001 },
  { height: 211, percentage: 0.0001 },
  { height: 216, percentage: 0.0001 },
  { height: 221, percentage: 0.0001 },
  { height: 226, percentage: 0.0001 },
  { height: 231, percentage: 0.0001 },
]

const combinedHeightProbabilities = [
  { height: 131, percentage: 0.0001 },
  { height: 136, percentage: 0.0001 },
  { height: 141, percentage: 0.0001 },
  { height: 146, percentage: 0.0001 },
  { height: 151, percentage: 0.0001 },
  { height: 156, percentage: 0.0001 },
  { height: 161, percentage: 0.0022 },
  { height: 166, percentage: 0.02775 },
  { height: 171, percentage: 0.13265 },
  { height: 176, percentage: 0.27475 },
  { height: 181, percentage: 0.27475 },
  { height: 186, percentage: 0.13265 },
  { height: 191, percentage: 0.02775 },
  { height: 196, percentage: 0.0022 },
  { height: 201, percentage: 0.0001 },
  { height: 206, percentage: 0.0001 },
  { height: 211, percentage: 0.0001 },
  { height: 216, percentage: 0.0001 },
  { height: 221, percentage: 0.0001 },
  { height: 226, percentage: 0.0001 },
  { height: 231, percentage: 0.0001 },
]

const salaryData = [
  { income: 100001, percentage: 3.33 },
  { income: 95001, percentage: 0.5 },
  { income: 90001, percentage: 0.61 },
  { income: 85001, percentage: 0.73 },
  { income: 80001, percentage: 0.97 },
  { income: 75001, percentage: 1.22 },
  { income: 70001, percentage: 1.65 },
  { income: 65001, percentage: 2.15 },
  { income: 60001, percentage: 3.01 },
  { income: 58001, percentage: 1.53 },
  { income: 56001, percentage: 1.77 },
  { income: 54001, percentage: 2.1 },
  { income: 52001, percentage: 2.42 },
  { income: 50001, percentage: 2.66 },
  { income: 48001, percentage: 2.99 },
  { income: 46001, percentage: 3.29 },
  { income: 44001, percentage: 3.7 },
  { income: 42001, percentage: 4.13 },
  { income: 40001, percentage: 4.72 },
  { income: 38001, percentage: 5.03 },
  { income: 36001, percentage: 5.27 },
  { income: 34001, percentage: 5.39 },
  { income: 32001, percentage: 5.4 },
  { income: 30001, percentage: 5.51 },
  { income: 28001, percentage: 5.17 },
  { income: 26001, percentage: 4.98 },
  { income: 24001, percentage: 4.63 },
  { income: 22001, percentage: 4.01 },
  { income: 20001, percentage: 3.97 },
  { income: 18001, percentage: 3.31 },
  { income: 16001, percentage: 3.37 },
  { income: 0, percentage: 0.5 },
]

const marriedData: Record<string, number> = {
  Ano: 62,
  Ne: 100,
}

const nationalityData: Record<string, number> = {
  Nezáleží: 100,
  Česká: 88.8,
  Slovenská: 1,
  Ukrajinská: 5,
  Vietnamská: 0.55,
  Polska: 0.34,
  Ruska: 0.39,
  Jiná: 3.92,
}

const sexData: Record<string, number> = {
  Muž: 50.7,
  Žena: 49.3,
  Nezáleží: 100,
}

const smokesData: Record<string, Record<string, number>> = {
  Muž: {
    Ano: 20.6,
    Ne: 79.4,
    Nezáleží: 100,
  },
  Žena: {
    Ano: 12,
    Ne: 88,
    Nezáleží: 100,
  },
  Nezáleží: {
    Ano: 24.4,
    Ne: 75.6,
    Nezáleží: 100,
  },
}

const alcoholData: Record<string, number> = {
  Ano: 17.7,
  Ne: 82.3,
  Nezáleží: 100,
}

export const useCalculateResult = ({
  data,
}: {
  data?: ValidationSchemaType
}) => {
  if (data) {
    console.log(data, "data from useCalcResult")
    let age = 0

    for (const item of ageData) {
      if (item.age >= data.age[0] && item.age <= data.age[1]) {
        age += item.percentage
      }
    }

    const alcohol = alcoholData[data.alcohol] / 100

    const education = educationPercentage[data.education] / 100

    const eyecolor = eyeColorPercentage[data.eyesColor] / 100

    const height = () => {
      if (data.sex === "Žena") {
        let height = 0

        for (const item of femaleHeightProbabilities) {
          if (item.height >= data.height[0] && item.height <= data.height[1]) {
            height += item.percentage
          }
        }
        return height
      }
      if (data.sex === "Nezáleží") {
        let height = 0

        for (const item of combinedHeightProbabilities) {
          if (item.height >= data.height[0] && item.height <= data.height[1]) {
            height += item.percentage
          }
        }
        return height
      }
      if (data.sex === "Muž") {
        let height = 0

        for (const item of maleHeightProbabilities) {
          if (item.height >= data.height[0] && item.height <= data.height[1]) {
            height += item.percentage
          }
        }
        return height
      } else {
        return 100
      }
    }

    const heightResult = height()

    let salary = 0

    for (const item of salaryData) {
      if (item.income >= data.income[0] && item.income <= data.income[1]) {
        salary += item.percentage
      }
    }

    const married = marriedData[data.married] / 100

    const nationality = nationalityData[data.nationality] / 100

    const sex = sexData[data.sex] / 100

    const smokes = smokesData[data.sex][data.smokes] / 100

    console.log(
      age / 100,
      heightResult,
      salary / 100,
      smokes,
      sex,
      nationality,
      married,
      eyecolor,
      education,
      alcohol
    )

    const result =
      POPULATION *
      (age / 100) *
      heightResult *
      (salary / 100) *
      smokes *
      sex *
      nationality *
      married *
      eyecolor *
      education *
      alcohol

    const percentageResult = Math.round((result / POPULATION) * 100)
    return { result: Math.floor(result), percentageResult }
  }
  return { result: 0, percentageResult: 0 }
}
