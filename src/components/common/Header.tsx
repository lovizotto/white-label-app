import React from "react"
import { Box } from "@chakra-ui/react"
interface HeaderProps {
  children: React.ReactNode
}
const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <Box w="100%" h="84px" bg="brand.gray">
      {children}
    </Box>
  )
}

export default Header
