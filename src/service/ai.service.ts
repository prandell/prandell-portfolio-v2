import { askPatQuestion } from '../utils/firebase'

export const askPatbot = async (message: string) => {
  const response = await askPatQuestion({ text: message })
    .then((result: any) => {
      // Read result of the Cloud Function.
      const data: string = result.data
      return data
    })
    .catch((error) => {
      const code = error.code
      const message = error.message
      console.log(
        `Failed to retrieve answer - Error(${code}). Message: ${message}`
      )
    })
  if (response) {
    return response
  }
}
