import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, HStack } from "@chakra-ui/react"
import { Box, Center } from "@chakra-ui/react"

function App() {

  return (
    <>
      <HStack>
      <Button>Click me</Button>
      <Button>Click me</Button>
      </HStack>
      <Center bg="bg.emphasized" h="100px" maxW="320px">
      <Box>This will be centered</Box>
      </Center>
    </>
  )
}

export default App
