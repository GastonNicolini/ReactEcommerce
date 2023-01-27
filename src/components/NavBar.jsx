import CartWidget from './CartWidget'
import { Container, Flex, Spacer, Box, Heading, Text, VStack, Center } from '@chakra-ui/react'
import { Menu, MenuButton, MenuList, MenuItem, Button, Grid } from '@chakra-ui/react'

export const NavBar = () => {
  return (
    <>
      <Container maxW="100vw" bg="#0A070D" h="4rem">
        <Flex alignContent="center" align="center" h="4rem">
          <Box p="2" color="white">
            <Heading size="md">Hacker's Corner</Heading>
          </Box>
          <Spacer />
            <Box>
              <Grid templateColumns='repeat(5, 1fr)' gap={3}>
                <Menu>
                  <Button colorScheme='teal' variant='ghost'>
                    <a href="#">Home</a>
                  </Button>
                  <MenuButton as={Button} colorScheme='teal' variant='ghost'>
                    Categories
                  </MenuButton>
                  <MenuList>
                    <a href="#"><MenuItem>Laptops</MenuItem></a>
                    <a href="#"><MenuItem>Processors</MenuItem></a>
                    <a href="#"><MenuItem>Video Cards</MenuItem></a>
                    <a href="#"><MenuItem>RAM</MenuItem></a>
                    <a href="#"><MenuItem>Storage</MenuItem></a>
                  </MenuList>
                  <Button colorScheme='teal' variant='ghost'>
                    <a href="#">Offers</a>
                  </Button>
                  <Button colorScheme='teal' variant='ghost'>
                    <a href="#">All Products</a>
                  </Button>
                  <Button colorScheme='teal' variant='ghost'>
                    <a href="#">Help</a>
                  </Button>
                </Menu>
              </Grid>
            </Box>
          <Spacer />
          <a href="#">
            <Box p="2" color="white">
              <CartWidget />
            </Box>
          </a>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;
