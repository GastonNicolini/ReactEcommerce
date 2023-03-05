import { Button, Container, Image, ButtonGroup, Text, useToast, Card, Flex, Heading } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import ItemCount from './ItemCount'

const ItemDetail = ({ item, stock }) => {
  const {addItem} = useContext(CartContext);
  
  const onAdd = (quantity) => {
    addItem(item, quantity);
  }
  let stockValue = item.stock

  return (
    <Container className='section' p={10}>
      <Card>
        <Flex>
          <div className='section__item__image'>
            <Image  src={ item.image } alt={ item.imageAlt } borderRadius='lg'/>
          </div>
          <div className='section__item__data'>
            <div className='section__item__data__title'>
              <Heading size='md'>{ item.name }</Heading>
              <Text pt={2} color='blue.600' fontSize='2xl'>
                ${ item.price ? item.price.toLocaleString('es-AR') : null }
              </Text>
              <Text pt={2}>Stock: { item.stock }</Text>
            </div>
            <ItemCount stock={ stock ? stock : null  } onAdd={onAdd} />
          </div>
        </Flex>
        <Text p={10}>{ item.description }</Text>        
      </Card>
    </Container>
  )
}

export default ItemDetail;