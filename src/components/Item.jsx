import { 
  Container, 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter, 
  Stack, 
  Heading, 
  Image, 
  Text, 
  Divider, 
  ButtonGroup, 
  Button,
  Flex,
  useToast
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const Item = ({ id, name, description, price, stock, category, image, imageAlt}) => { 
  return (
    <Container className="item__container">
      <Card key={ id } maxW='sm'>
        <CardBody>
          <div className='item__container__image'>
            <Image src={ image } alt={ imageAlt } borderRadius='lg'/>
          </div>
          <Stack mt='6' spacing='3'>
            <Link to={`/item/${ id }`}><Heading size='md'>{ name }</Heading></Link>
            <Text color='blue.600' fontSize='2xl'>
              ${ price.toLocaleString('es-AR') }
            </Text>
            <Text>
              Stock: { stock }
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Link to={`/item/${ id }`}>
              <Button w="15rem" variant='ghost' colorScheme='blue'>
                Details
              </Button>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Container>
  )
}

export default Item;