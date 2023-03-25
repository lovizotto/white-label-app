import React from "react"
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react"
import { FormControlGroup } from "../FormControl"

interface Step3Props {
  content: {
    title: string
    description: string
    form: any
  }
}

const Step3: React.FC<Step3Props> = ({ content }) => {
  return (
    <Flex flexDirection="column" color="text" alignItems="center">
      <VStack mb={8}>
        <Heading mb={2} textStyle="header1" textAlign="center">
          {content.title}
        </Heading>
        <Text textStyle="body" align="center">
          {content.description}
        </Text>
      </VStack>
      <Box mt={12} w="100%">
        {content.form && content.form[0] && (
          <FormControlGroup config={content.form[0]} />
        )}
      </Box>
    </Flex>
  )
}

export default Step3
