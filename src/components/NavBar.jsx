import { Container, Flex, Spacer, Box, Heading } from '@chakra-ui/react'
import CartWidget from './CartWidget'

export const NavBar = () => {
  return (
    <Container maxW="100rem" bg="blue">
        <Flex>
        <Box></Box>
        <h1>E-commerce</h1>
        </Flex>
        <CartWidget></CartWidget>
    </Container>
  )
}
