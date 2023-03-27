import React, { useEffect, useState } from "react"
import { Navigate } from "react-router"
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
            <Route index element={<Navigate to="/1" />} />
            <Route path="/:stepNumber" element={<Onboarding />} />
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  )
}

export default App
