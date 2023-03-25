import React from 'react';
import { Box, Heading, Text, Image, HStack } from '@chakra-ui/react';

interface Step1Props {
    content: {
        title: string;
        description: string;
        images: string[];
    };
}

const Step1: React.FC<Step1Props> = ({ content }) => {
    return (
        <Box>
            <Heading size="md" mb={2}>
                {content.title}
            </Heading>
            <Text mb={4}>{content.description}</Text>
            <HStack spacing={4}>
                {content.images.map((image, index) => (
                    <Image key={index} src={image} boxSize="50px" />
                ))}
            </HStack>
        </Box>
    );
};

export default Step1;
