import { Card, Center, Container, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'

const CheckoutSuccess = () => {
  return (
    <Container className='section section--success'>
      <Center>
        <Card p={'110px 100px'} className='card--shadow'>
          <Center>
            <Flex direction="column" alignItems={'center'}>
              <Image w='200px' src='./src/images/success.svg'/>
              <Heading p={10}>Your order has been placed successfully 😀</Heading>
            </Flex>
          </Center>
        </Card>
      </Center>
    </Container>
  )
}

export default CheckoutSuccess