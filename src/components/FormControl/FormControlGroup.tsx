import React from "react"
import {
  FormControl as CHFormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react"

type ControlType = "text" | "checkbox" | "textarea" | "dropdown" | "etc"

interface FormControlFactoryProps {
  type: ControlType
  name?: string
  label?: string
  caption?: string
  options?: Array<{ label: string; value: string }>
}

interface FormControlProps {
  config: FormControlFactoryProps
}

export const FormControlGroup: React.FC<FormControlProps> = ({ config }) => {
  return (
    <CHFormControl>
      <FormLabel textStyle="label">{config.label}</FormLabel>
      <FormControlFactory {...config} />
      {config.caption && (
        <FormHelperText textStyle="caption">{config.caption}</FormHelperText>
      )}
    </CHFormControl>
  )
}

const FormControlFactory: React.FC<FormControlFactoryProps> = ({
  type,
  name,
  options,
}) => {
  if (type === "dropdown") {
    if (!options || !options.length) {
      throw new Error(
        'FormControlFactoryError: the type "dropdown" must have the "options" property',
      )
    }
    return (
      <Select placeholder="Select option" name={name} layerStyle="formFields">
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    )
  }

  if (type === "text") {
    return <Input name={name} placeholder="" layerStyle="formFields" />
  }

  return null
}
