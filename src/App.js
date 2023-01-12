import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Flex,
  theme,
  Heading,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import PostAndDeleteChats from './components/PostAndDeleteChats';
import ViewAndDeleteChats from './components/ViewAndDeleteChats';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex justifyContent={"flex-end"}>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
      <Flex minH="100vh" p={8} maxW="800px">
        <VStack spacing={8}>
          <Heading>Chatter</Heading>
          <PostAndDeleteChats />
          <ViewAndDeleteChats />
        </VStack>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
