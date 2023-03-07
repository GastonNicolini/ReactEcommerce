import { Box, Button, Card, Center, Container, Flex, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { signInWithEmailAndPassword } from "firebase/auth"

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //Signed in
        const user = userCredential.user;
        navigate("/")
        alert(user.email + " is logged in");
      })
      .catch((error) => {
        const errorCode = setError("Email or password are incorrect");
        const errorMessage = error.message;
      })
  }

  return (
    <Container w={5} p={5} className='section section--login'>
      <Card p={7} className='card--shadow'>
        <Flex direction='column'>
          <Center>
            <Heading pb={4} >Welcome Back</Heading>
          </Center>
          <FormControl isRequired>
            <Box pb={4}>
              <FormLabel mb={1}>Email</FormLabel>
              <Input placeholder='example@mail.com'  onChange={(e) => setEmail(e.target.value)}></Input>
            </Box>
            <Box pb={4}>
              <FormLabel mb={1}>Password</FormLabel>
              <Input placeholder='********' onChange={(e) => setPassword(e.target.value)}></Input>
            </Box>
          </FormControl>
          <Link to='/'>
            <Center>
              <Button w='10rem' colorScheme={'blue'} onClick={ onSubmit }>
                Login
              </Button>
            </Center>
            <Center>
              <Box pt={6}>
                <Text>Don't have a user? Just <Link to='/signup'>Sign Up</Link></Text>
              </Box>
            </Center>
          </Link>
        </Flex>
      </Card>
    </Container>
  )
}

export default Login