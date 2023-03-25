import React from "react"
import { Flex, Heading, Text, VStack } from "@chakra-ui/react"
import { FormControlGroup } from "../FormControl"

interface Step2Props {
  content: {
    title: string
    description: string
    form: any
  }
}

const Step2: React.FC<Step2Props> = ({ content }) => {
  return (
    <Flex flexDirection="column" color="text" alignItems="center">
      <VStack mb={8} justifyContent="center" m="auto">
        <Heading mb={2} textStyle="header1" textAlign="center">
          {content.title}
        </Heading>
        <Text textStyle="body" align="center">
          {content.description}
        </Text>
      </VStack>
      <VStack mt={16}>
        {content.form && content.form[0] && (
          <FormControlGroup config={content.form[0]} />
        )}
      </VStack>
    </Flex>
  )
}

export default Step2
