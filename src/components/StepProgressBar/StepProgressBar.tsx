import React from "react"
import { Box, Flex, HStack, Text } from "@chakra-ui/react"

interface StepProgressBarProps {
  steps: number
  activeStep: number
  activeColor: string
  inactiveColor: string
}

export const StepProgressBar: React.FC<StepProgressBarProps> = ({
  steps,
  activeStep,
  activeColor,
  inactiveColor,
}) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-evenly"
      alignItems="center"
      w="100%"
      h="80px"
    >
      <Box>
        <Text>
          Step {activeStep + 1} of {steps}
        </Text>
      </Box>
      <Flex>
        <BarList
          steps={steps}
          activeStep={activeStep}
          activeColor={activeColor}
          inactiveColor={inactiveColor}
        />
      </Flex>
    </Flex>
  )
}

interface BarListProps {
  steps: number
  activeColor: string
  inactiveColor: string
  activeStep: number
}
const BarList: React.FC<BarListProps> = (props) => {
  const { steps, activeStep, activeColor, inactiveColor } = props
  return (
    <HStack>
      {[...Array(steps)].map((step, index) => (
        <Box
          key={index}
          bgColor={index <= activeStep ? activeColor : inactiveColor}
          h="4px"
          w="80px"
          flexGrow={1}
          flexShrink={1}
          bg="brand.primary"
        />
      ))}
    </HStack>
  )
}
