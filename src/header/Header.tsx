import { QuestionMarkCircleIcon } from "@heroicons/react/16/solid"
import { XMarkIcon } from "@heroicons/react/20/solid"
import { useState } from "react"

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="mt-4 py-4 max-w-2xl w-full ">
      <div className="mb-8 px-4 py-4 flex justify-between	 rounded-lg bg-white  w-full shadow-md">
        <button onClick={() => setOpen(!open)} name="FAQ">
          <QuestionMarkCircleIcon width={20} fill="#383e48" />
        </button>
        <span className="text-xs">created by DMTryAgain</span>
      </div>
      <div
        className={`flex  justify-between transition-all duration-500 ease-in-out overflow-hidden ${
          open ? "max-h-full opacity-100 mb-8 mt-8  " : "max-h-0 opacity-0 "
        } rounded-lg bg-white  w-full shadow-md`}
      >
        <div className="text-xs mx-4 my-4">
          <button onClick={() => setOpen(false)} name="Close FAQ">
            <XMarkIcon width={20} />
          </button>
          <span>
            What is the Standards Calculator? The Standards Calculator is a free
            app that helps you understand the likelihood of finding your ideal
            partner based on preferences like age, height, ethnicity, and
            income, using US Census Bureau and CDC data. Is the Standards
            Calculator accurate? While the Standards Calculator provides a
            percentage reasonably close to reality, it may not be 100% accurate.
            The tool is applicable only to the US population. Where do you get
            the information for Standards Calculator? The information used in
            the Standards Calculator is sourced from US Census and US Center for
            Disease Control data. Is this Standards Calculator for men or women?
            The Standards Calculator is designed to work for both males and
            females. Do I need to sign up to use the Standards Calculator? No,
            you can use this Standards Calculator without needing to sign up.
            Does the Standards Calculator store my personal information? No, the
            Standards Calculator does not store any information provided by
            users. Will the Standards Calculator help me find my ideal man or my
            ideal woman? The Standards Calculator will help you understand the
            probability of finding your ideal man or your ideal woman, but to
            actually find him or her, we recommend signing up for Keeper. Does
            this show me the probability of finding my ideal man or woman? Not
            exactly. The Standards Calculator can help you to understand the
            probability of finding your ideal man or woman, because it shows you
            the percentage of the population who meets your standards. Your
            personal probability of finding them is determined by many factors
            including how much effort you put into finding them and how
            attractive you are to them. What else is the Standards Calculator
            known as? People call the Standards Calculator by many names
            including the Preferences Calculator, the Delusion Calculator, the
            Dating Calculator, the Reality Calculator, the Standards Test, the
            Standards Quiz, the Keeper Test, the Build-A-Man Calculator, or the
            Build-A-Woman Calculator.
          </span>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-black text-center text-grey-dark">
        Kalkulačka standardů
      </h1>
      <h2 className="mx-4 my-4 text-l font-semibold text-center text-grey-light">
        Spočitejte kolik procent lidi v České republice je vaším potencialním
        partnerem
      </h2>
    </div>
  )
}

export default Header
