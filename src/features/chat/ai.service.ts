import { askPatQuestion } from '../../lib/firebase'

export interface AskPatbotResponse {
  data: string
}

export const askPatbot = async (message: string) => {
  const response = await askPatQuestion({ text: message })
    .then((result) => {
      // Read result of the Cloud Function.
      const data: AskPatbotResponse = result.data
      return data
    })
    .catch((error) => {
      const code = error.code
      const errorMessage = error.message
      console.error(
        `Failed to retrieve answer - Error(${code}). Message: ${errorMessage}`
      )
    })
  if (response) {
    return response
  }
}
