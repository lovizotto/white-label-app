import React from "react"
import { Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"
import useBrandConfig from "../../hooks/useBrandConfig"

interface Step1Props {
  content: {
    title: string
    description: string
    features?: Array<{ image: string; caption: string; id: string }>
    form: unknown
  }
}

const Step1: React.FC<Step1Props> = ({ content }) => {
  return (
    <Flex flexDirection="column" color="text" alignItems="center">
      <VStack maxW="60%" mb={8}>
        <Heading mb={2} textStyle="header1" textAlign="center">
          {content.title}
        </Heading>
        <Text textStyle="body" align="center">
          {content.description}
        </Text>
      </VStack>
      <HStack spacing={4} justifyContent="center">
        {content.features?.map((feature) => (
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            key={feature.id}
            w="250px"
          >
            <FeaturedImage image={feature.image} />
            <Text textStyle="highlighted">{feature.caption}</Text>
          </Flex>
        ))}
      </HStack>
    </Flex>
  )
}

interface FeaturedImageProps {
  image: string
}
const FeaturedImage: React.FC<FeaturedImageProps> = ({ image }) => {
  const imageSrc: string =
    useBrandConfig<string>(`assets/images/${image}`) ?? ""
  return <Image w="64px" src={imageSrc} boxSize="50px" />
}

export default Step1
