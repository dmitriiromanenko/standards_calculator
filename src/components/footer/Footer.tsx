import { QuestionMarkCircleIcon } from "@heroicons/react/16/solid"
import { XMarkIcon } from "@heroicons/react/20/solid"
import { useState } from "react"

const Footer = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="mt-4 py-4 max-w-2xl w-full fixed left-0 bottom-0">
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
          <div>
            <h2 className="text-base font-bold">Co je Kalkulačka standardů?</h2>
            <p>
              Kalkulačka standardů je bezplatná aplikace, která vám pomůže
              pochopit pravděpodobnost nalezení vašeho ideálního partnera na
              základě preferencí, jako je věk, výška, národnost a příjem.
            </p>
            <br />
            <h2 className="text-base font-bold">
              Je Kalkulačka standardů přesná?
            </h2>
            <p>
              Kalkulačka standardů poskytuje procentuální odhad, který je
              poměrně blízko realitě, ale nemusí být stoprocentně přesný. Tento
              nástroj je určen pouze pro ČR.
            </p>
            <br />
            <h2 className="text-base font-bold">
              Je Kalkulačka standardů určena pro muže nebo ženy?
            </h2>
            <p>
              Kalkulačka standardů je navržena tak, aby fungovala pro muže i
              ženy.
            </p>
            <br />
            <h2 className="text-base font-bold">
              Musím se zaregistrovat, abych mohl(a) používat Kalkulačku
              standardů?
            </h2>
            <p>
              Ne, Kalkulačku standardů můžete používat bez nutnosti registrace.
            </p>
            <br />
            <h2 className="text-base font-bold">
              Ukládá Kalkulačka standardů mé osobní údaje?
            </h2>
            <p>
              Ne, Kalkulačka standardů neukládá žádné informace, které uživatelé
              zadávají.
            </p>
            <br />
            <h2 className="text-base font-bold">
              Pomůže mi Kalkulačka standardů najít mého ideálního muže nebo mou
              ideální ženu?
            </h2>
            <p>
              Kalkulačka standardů vám pomůže pochopit pravděpodobnost nalezení
              vašeho ideálního muže nebo ženy.
            </p>
            <br />
            <h2 className="text-base font-bold">
              Ukazuje mi Kalkulačka standardů pravděpodobnost, že najdu svého
              ideálního partnera?
            </h2>
            <p>
              Ne úplně. Kalkulačka standardů vám pomůže pochopit pravděpodobnost
              nalezení vašeho ideálního partnera tím, že ukáže, kolik procent
              populace splňuje vaše požadavky. Vaše osobní pravděpodobnost
              jejich nalezení však závisí na mnoha faktorech, včetně toho, kolik
              úsilí věnujete hledání a jak atraktivní jste pro ně.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
