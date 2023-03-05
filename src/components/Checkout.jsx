import { Box, Button, Card, Center, Container, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Checkout = () => {
  return (
    <Container p={5} className='section'>
      <Card p={7} className='card--shadow'>
        <Flex direction='column'>
          <Heading pb={4} >Complete with your information</Heading>
          <FormControl isRequired>
            <div className='section__form__name'>
              <Box w='49%' pb={4}>
                <FormLabel mb={1}>First Name</FormLabel>
                <Input placeholder='John'></Input>
              </Box>
              <Box w='49%' pb={4}>
                <FormLabel mb={1}>Last Name</FormLabel>
                <Input placeholder='Doe'></Input>
              </Box>
            </div>
            <Box pb={4}>
              <FormLabel mb={1}>Email</FormLabel>
              <Input placeholder='example@mail.com'></Input>
            </Box>
            <div className='section__form__name'>
              <Box w='49%' pb={4}>
                <FormLabel mb={1}>City</FormLabel>
                <Input placeholder='Texas'></Input>
              </Box>
              <Box w='49%' pb={4}>
                <FormLabel mb={1}>Postal Code</FormLabel>
                <Input placeholder='CR9881'></Input>
              </Box>
            </div>
            <Box pb={4}>
              <FormLabel mb={1}>Address</FormLabel>
              <Input placeholder='Av. Street 1234'></Input>
            </Box>
            
          </FormControl>
          <Link to='/checkoutSuccess'>
            <Center>
              <Button w='10rem' colorScheme={'green'}>
                Place Order
              </Button>
            </Center>
          </Link>
        </Flex>
      </Card>
    </Container>
  )
}

export default Checkout