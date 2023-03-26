import React, { lazy, Suspense } from "react"
import { Box, Container, Flex, HStack, Spacer, VStack } from "@chakra-ui/react"
import { useNavigate, useParams } from "react-router-dom"
import { StepProgressBar } from "../StepProgressBar"
import Header from "../common/Header"
import Button from "@components/Button/Button"

const Step1 = lazy(() => import("../Steps/Step1"))
const Step2 = lazy(() => import("../Steps/Step2"))
const Step3 = lazy(() => import("../Steps/Step3"))

type Step = { path: string; content: any }
interface WizardProps {
  steps: Step[]
  onFinish: () => void
}

export const Wizard: React.FC<WizardProps> = ({ steps, onFinish }) => {
  const navigate = useNavigate()
  const { stepNumber } = useParams()
  const activeStep = steps.findIndex((step) => step.path === `/${stepNumber}`)

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      onFinish()
    } else {
      navigate(steps[activeStep + 1].path)
    }
  }

  const handleBack = () => {
    if (activeStep > 0) {
      navigate(steps[activeStep - 1].path)
    }
  }

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return <Step1 content={steps[activeStep].content} />
      case 1:
        return <Step2 content={steps[activeStep].content} />
      case 2:
        return <Step3 content={steps[activeStep].content} />
      default:
        return null
    }
  }

  return (
    <Box alignItems="center" display="flex" flexDirection="column">
      <Header>
        <Container>
          <StepProgressBar
            steps={steps.length}
            activeStep={activeStep}
            activeColor="brand.primary"
            inactiveColor="gray.200"
          />
        </Container>
      </Header>
      <Flex
        direction="column"
        w="1150px"
        h="552px"
        mt="80px"
        bg="white"
        p="64px"
        borderRadius="16px"
        alignItems="center"
        justifyContent="space-between"
      >
        <VStack alignItems="start" spacing={4}>
          <Suspense fallback={<div>Loading...</div>}>
            {renderStepContent()}
          </Suspense>
        </VStack>
        <HStack
          w="100%"
          justifyContent={activeStep === 0 ? "center" : "space-between"}
        >
          {activeStep !== 0 && (
            <>
              <Button layerStyle="buttonSecondary" onClick={handleBack}>
                Back
              </Button>
              <Spacer />
            </>
          )}
          <Button onClick={handleNext} layerStyle="buttonPrimary">
            {activeStep === steps.length - 1
              ? "Finish"
              : activeStep === 0
              ? "Create Your First Vehicle Set"
              : "Next"}
          </Button>
        </HStack>
      </Flex>
    </Box>
  )
}
