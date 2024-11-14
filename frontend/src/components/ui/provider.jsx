import { ChakraProvider } from '@chakra-ui/react'

export function Provider({ children }) {
  return (
    <ChakraProvider>
      {' '}
      {/* Puedes quitar `theme={theme}` si no tienes un archivo de tema */}
      {children}
    </ChakraProvider>
  )
}
