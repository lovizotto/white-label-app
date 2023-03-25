import React from 'react';
import { Box, Heading, Text, FormControl, FormLabel, Select } from '@chakra-ui/react';

interface Step2Props {
    content: {
        title: string;
        description: string;
        carModels: string[];
    };
}

const Step2: React.FC<Step2Props> = ({ content }) => {
    return (
        <Box>
            <Heading size="md" mb={2}>
                {content.title}
            </Heading>
            <Text mb={4}>{content.description}</Text>
            <FormControl>
                <FormLabel>Car model</FormLabel>
                <Select>
                    {content.carModels.map((model, index) => (
                        <option key={index} value={model}>
                            {model}
                        </option>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default Step2;
