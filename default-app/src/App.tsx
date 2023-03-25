import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, Container, extendTheme } from '@chakra-ui/react';
import { Wizard } from './components/Wizard';
import axios from 'axios';
import config from '../../config/config.json'

type Step = { path: string; content: any }

const fetchStepContent = async (stepNumber: number) => {
    const response = await axios.get(`http://localhost:3001/api/steps/${stepNumber}`);
    return response.data;
};

const App = () => {
    const [theme, setTheme] = useState({});
    const [steps, setSteps] = useState<Step[]>([]);

    useEffect(() => {
        (async () => {
            const chakraTheme = extendTheme({
                colors: {
                    primary: config.theme.primary,
                    secondary: config.theme.secondary,
                },
            });
            setTheme(chakraTheme);

            const stepsData: Step[] = [
                {
                    path: '/1',
                    content: await fetchStepContent(1),
                },
                {
                    path: '/2',
                    content: await fetchStepContent(2),
                },
                {
                    path: '/3',
                    content: await fetchStepContent(3),
                },
            ];

            setSteps(stepsData);
        })();
    }, []);

    if (!theme || steps.length === 0) {
        return <div>Loading...</div>;
    }

    const handleWizardFinish = () => {
        console.log('Wizard finished');
    };

    return (
        <ChakraProvider theme={theme}>
            <Container maxW="container.lg">
                <Router>
                    <Routes>
                        <Route
                            path="/:stepNumber"
                            element={
                                <Wizard steps={steps} onFinish={handleWizardFinish} />
                            }
                        />
                    </Routes>
                </Router>
            </Container>
        </ChakraProvider>
    );
};

export default App;
