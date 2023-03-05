import CartWidget from './CartWidget'
import { 
  Container, 
  Flex, 
  Spacer, 
  Box, 
  Heading,
  Stack,
  Menu, 
  MenuButton, 
  MenuList,
  MenuItem,
  Button, 
  Grid,
  Image
} from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons'
import categories from '../categories.json'

export const NavBar = () => {

  return (
    <>
      <Container maxW="100vw" bg="#262626" h="4rem">
        <Flex alignContent="center" align="center" h="4rem">
          <Box p="2" color="white">
            <Link to={`/`}>
              <Image h="3.2rem" src="../src/images/hackers-corner-logo.png" alt="Hacker's Corner Logo"/>
            </Link>
          </Box>
          <Spacer />
            <Box>
              <Grid templateColumns='repeat(4, 1fr)' gap={3} align='center'>
                <Menu>

                  <NavLink to={`/`}>
                    <Button colorScheme='teal' variant='ghost'>
                      Home
                    </Button>
                  </NavLink>

                  <MenuButton as={Button} colorScheme='teal' variant='ghost' rightIcon={<ChevronDownIcon />}>
                    Categories
                  </MenuButton>

                  <MenuList>
                    {categories?.map((category) =>(
                      <NavLink key={category.id} to={`/category/${category.name}`}>
                        <MenuItem>{category.name}</MenuItem>
                      </NavLink>
                    ))}
                  </MenuList>
                  
                  <NavLink to={`/offers`}>
                    <Button colorScheme='teal' variant='ghost'>
                      Offers
                    </Button>
                  </NavLink>
                  
                  <NavLink to={`/help`}>
                    <Button colorScheme='teal' variant='ghost'>
                      Help
                    </Button>
                  </NavLink>
                </Menu>
              </Grid>
            </Box>
          <Spacer />
          <Link to={`/Cart`}>
            <Box p="2" color="white">
              <CartWidget /> 
            </Box>
          </Link>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;
