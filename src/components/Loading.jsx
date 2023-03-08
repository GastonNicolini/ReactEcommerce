import { Container, Spinner, Center, Flex } from '@chakra-ui/react'
import React from 'react'

const Loading = () => {
  return (
    <Container className='section section--loading'>
      <Flex>
        <Center>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
        </Center>
      </Flex>
    </Container>
  )
}

export default Loading