import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

interface Step3Props {
    content: {
        title: string;
        message: string;
    };
}

const Step3: React.FC<Step3Props> = ({ content }) => {
    return (
        <Box>
            <Heading size="md" mb={2}>
                {content.title}
            </Heading>
            <Text>{content.message}</Text>
        </Box>
    );
};

export default Step3;
