import React from "react"
import {
  Button as CHButton,
  ButtonProps as CHButtonProps,
} from "@chakra-ui/react"
interface ButtonProps {}
const Button: React.FC<ButtonProps & CHButtonProps> = (props) => {
  return (
    <CHButton
      {...props}
      borderRadius="50px"
      layerStyle={props.layerStyle || "buttonPrimary"}
      height="42px"
    />
  )
}

Button.propTypes = {}

export default Button
