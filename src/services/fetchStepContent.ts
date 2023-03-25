import axios from "axios"

export const fetchStepContent = async (stepNumber: number) => {
  const response = await axios.get(
    `http://localhost:3001/api/steps/${stepNumber}`,
  )
  return response.data
}
