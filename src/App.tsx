import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react"
import { Onboarding } from "@pages/onboarding"
import config from "./config"

const App = () => {
  const [theme, setTheme] = useState({})

  useEffect(() => {
    if (config) {
      const chakraTheme = extendTheme({
        ...config.theme,
      })
      setTheme(chakraTheme)
    }
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Box w="100vw" h="100vh" bg="brand.lightGray">
        <Router>
          <Routes>
            <Route path="/:stepNumber" element={<Onboarding />} />
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  )
}

export default App
