import { Button, Container, Image, ButtonGroup, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ item }) => {
  const toast = useToast();
  const addedItemId = 'addedItemToast'

  const addedItemToast = (id, message) => {
    if (!toast.isActive(id)) {
      toast ({
        id,
        title: message,
        status: 'success',
        isClosable: true,
      })
    }
  }

  return (
    <Container className='body'>
      <div>
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
        <Button variant='ghost' colorScheme='blue' onClick={() => addedItemToast(addedItemId, "The item was added to your cart 👍")}>
          Add to cart
        </Button>
      </ButtonGroup>
    </Container>
  )
}

export default ItemDetail;