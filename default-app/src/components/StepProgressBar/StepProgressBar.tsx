import React from 'react';
import {Box} from '@chakra-ui/react';

interface StepProgressBarProps {
    steps: number;
    activeStep: number;
    activeColor: string;
    inactiveColor: string;
}

export const StepProgressBar: React.FC<StepProgressBarProps> = ({
                                                                    steps,
                                                                    activeStep,
                                                                    activeColor,
                                                                    inactiveColor,

                                                                }) => {
    const barWidth = 100 / steps;
    const renderBars = () => {
        const bars = [];
        for (let i = 0; i < steps; i++) {
            bars.push(
                <Box
                    key={i}
                    bgColor={i <= activeStep ? activeColor : inactiveColor}
                    h="100%"
                    w="1px"
                    flexGrow={1}
                    flexShrink={1}
                />,
            );
        }
        return bars;
    };

    return (
        <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="stretch"
            w="100%"
            h="100px"
        >
            {renderBars()}
        </Box>
    );
};
