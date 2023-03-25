import React, { lazy, Suspense } from 'react';
import {
    Box,
    Button,
    VStack,
    HStack,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useParams, useNavigate } from 'react-router-dom';
import { StepProgressBar } from '../StepProgressBar';

const Step1 = lazy(() => import('../Steps/Step1'));
const Step2 = lazy(() => import('../Steps/Step2'));
const Step3 = lazy(() => import('../Steps/Step3'));

type Step = { path: string; content: any }
interface WizardProps {
    steps: Step[];
    onFinish: () => void;
}

export const Wizard: React.FC<WizardProps> = ({ steps, onFinish }) => {
    const navigate = useNavigate();
    const { stepNumber } = useParams();
    const activeStep = steps.findIndex((step) => step.path === `/${stepNumber}`);

    const handleNext = () => {
        if (activeStep === steps.length - 1) {
            onFinish();
        } else {
            navigate(steps[activeStep + 1].path);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            navigate(steps[activeStep - 1].path);
        }
    };

    const renderStepContent = () => {
        switch (activeStep) {
            case 0:
                return <Step1 content={steps[activeStep].content} />;
            case 1:
                return <Step2 content={steps[activeStep].content} />;
            case 2:
                return <Step3 content={steps[activeStep].content} />;
            default:
                return null;
        }
    };

    return (
        <Box>
            <StepProgressBar
                steps={steps.length}
                activeStep={activeStep}
                activeColor="teal"
                inactiveColor="gray.200"
            />
            <VStack mt={5} alignItems="start" spacing={4}>
                <Suspense fallback={<div>Loading...</div>}>
                    {renderStepContent()}
                </Suspense>
                <HStack mt={4}>
                    {activeStep !== 0 && (
                        <Button leftIcon={<ChevronLeftIcon />} onClick={handleBack}>
                            Back
                        </Button>
                    )}
                    <Button
                        rightIcon={<ChevronRightIcon />}
                        onClick={handleNext}
                        colorScheme="teal"
                    >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </HStack>
            </VStack>
        </Box>
    );
};
