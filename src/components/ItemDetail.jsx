import { Button, Container, Image, ButtonGroup, Text } from '@chakra-ui/react'
import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ item }) => {
  console.log(item)
  return (
    <Container className='body'>
      <div className='item__container__image'>
        <Image src={ item.image } alt={ item.imageAlt } borderRadius='lg'/>
      </div>
      <Text>
        { item.description }
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        ${ item.price.toLocaleString('es-AR') }
      </Text>
      <Text>
        Stock: { item.stock }
      </Text>
      <ItemCount stock={ item.stock } />
      <ButtonGroup spacing='2'>
        <Button variant='ghost' colorScheme='blue'>
          Add to cart
        </Button>
      </ButtonGroup>
    </Container>
  )
}

export default ItemDetail;