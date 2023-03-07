import { Box, Button, Card, Center, Container, Flex, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { createUserWithEmailAndPassword } from "firebase/auth"

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //Signed in
        const user = userCredential.user;
        navigate("/login")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
  }

  return (
    <Container w={5} p={5} className='section section--login'>
      <Card p={7} className='card--shadow'>
        <Flex direction='column'>
          <Center>
            <Heading pb={4} >Welcome</Heading>
          </Center>
          <FormControl isRequired>
            <Box pb={4}>
              <FormLabel mb={1}>First Name</FormLabel>
              <Input placeholder='John'></Input>
            </Box>
            <Box pb={4}>
              <FormLabel mb={1}>Last Name</FormLabel>
              <Input placeholder='Doe'></Input>
            </Box>
            <Box pb={4}>
              <FormLabel mb={1}>Email</FormLabel>
              <Input placeholder='example@mail.com' onChange={(e) => setEmail(e.target.value)}></Input>
            </Box>
            <Box pb={4}>
              <FormLabel mb={1}>Password</FormLabel>
              <Input placeholder='********' onChange={(e) => setPassword(e.target.value)}></Input>
            </Box>
          </FormControl>
          <Link to='/'>
            <Center>
              <Button w='10rem' colorScheme={'blue'}>
                Login
              </Button>
            </Center>
            <Center>
              <Box pt={6}>
                <Text>Don't have a user? Just <Link to='/login'>Login</Link></Text>
              </Box>
            </Center>
          </Link>
        </Flex>
      </Card>
    </Container>
  )
}

export default Signup