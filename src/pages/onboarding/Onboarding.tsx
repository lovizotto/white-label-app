import React, { useEffect, useState } from "react"
import { Wizard } from "@components/Wizard"
import { fetchStepContent } from "@services/fetchStepContent"

type Step = { path: string; content: any }
export interface OnboardingProps {}
export const Onboarding: React.FC<OnboardingProps> = (): JSX.Element => {
  const [steps, setSteps] = useState<Step[]>([])

  useEffect(() => {
    ;(async () => {
      const stepsData: Step[] = [
        {
          path: "/1",
          content: await fetchStepContent(1),
        },
        {
          path: "/2",
          content: await fetchStepContent(2),
        },
        {
          path: "/3",
          content: await fetchStepContent(3),
        },
      ]
      setSteps(stepsData)
    })()
  }, [])
  const handleWizardFinish = () => {
    console.log("Wizard finished")
  }

  if (steps.length === 0) {
    return <div>Loading...</div>
  }

  return <Wizard steps={steps} onFinish={handleWizardFinish} />
}
