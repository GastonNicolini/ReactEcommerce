import { Box, Button, Card, Center, Container, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Help = () => {
  return (
    <Container p={5} className='section'>
      <Card p={7} className='card--shadow'>
        <Flex direction='column'>
          <Heading pb={4} >Contact Us</Heading>
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
            <Box pb={4}>
              <FormLabel mb={1}>Tell us your problem</FormLabel>
              <Input></Input>
            </Box>
          </FormControl>
          <Link to='/'>
            <Center>
              <Button w='10rem' colorScheme={'green'}>
                Send Message
              </Button>
            </Center>
          </Link>
        </Flex>
      </Card>
    </Container>
  )
}

export default Help