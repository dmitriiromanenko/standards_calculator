import { ReactNode } from "react"

const Section = ({ children }: { children: ReactNode }) => {
  return <div className="mb-4">{children}</div>
}

export default Section
