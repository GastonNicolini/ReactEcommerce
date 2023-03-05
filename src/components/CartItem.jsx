import { Button, Card, CardBody, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CartItem = ({ item, id, alt, name, description, price, stock, category, image, quantity, removeItem }) => {
  return (
    <section className='cart'>
      <Card key={ id }>
        <CardBody className='cart__item'>
          <div className='cart__item__data'>
            <div>
              <Image src={ image } alt={ alt } borderRadius='lg' w={'10rem'}/>
            </div>
            <Stack spacing='3'>
              <Link to={`/item/${ id }`}><Heading size='md'>{ name }</Heading></Link>
              <div className='cart__item__data__quantity'>
                <Text pr={2}>
                  Quantity: { quantity }
                </Text>
                <Text pl={2} color='blue.600'>
                  ${ price.toLocaleString('es-AR') }
                </Text>
              </div>
            </Stack>
          </div>
          <div className='cart__item__total'>
            <Text pl={2} color='blue.600' fontSize='2xl'>
                ${ (price * quantity).toLocaleString('es-AR') }
            </Text>
            <Button onClick={ () => removeItem(id) }>
              Remove
            </Button>
          </div>
        </CardBody>
      </Card>
    </section>
  )
}

export default CartItem