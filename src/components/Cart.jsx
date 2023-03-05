import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, Center, Container, Flex, Text, useDisclosure } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'

const Cart = () => {
  const {cart, clearCart, removeItem, cartTotalQuantity, cartTotalPrice } = useContext(CartContext)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef()

  if (cartTotalQuantity() === 0) {
    return (
      <Container className='section section--emptyCart'>
        <div className='section__content'>
          <Text p={'1rem'}>No items were added to your cart yet</Text>
          <div className='section__content__button'>
            <Link to={'/'}>
              <Button>
                Click here to keep shopping!
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    )
  }
  
  return (
    <Container className='section section--cart-item'>
      <section className='section__content'>
        { cart?.map((item) => (
            <CartItem 
              item={item}
              key={item.id}
              id={item.id}
              alt={item.alt}
              name={item.name}
              description={item.description}
              price={item.price}
              stock={item.stock}
              category={item.category}
              image={item.image}
              quantity={item.quantity}
              removeItem={removeItem}
            />
          ))}
      </section>
      <section className='section__total'>
        <div>
          {/* <Button onClick={() => clearCart() }>
            Remove All Items
          </Button> */}
          <Button onClick={ onOpen }>
            Remove All Items
          </Button>

          <AlertDialog
            isOpen={ isOpen }
            leastDestructiveRef={ cancelRef }
            onclose={ onClose }
          >
            <AlertDialogOverlay>
              <AlertDialogContent m={100}>
                <AlertDialogHeader>
                  Remove All Items on Cart
                </AlertDialogHeader>

                <AlertDialogBody>
                  <Text>Are you sure you want to remove all the products from your cart?</Text>
                  <Text>This action can't be undone.</Text>
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Box>
                    <Button ref={ cancelRef } onClick={ onClose }>Cancel</Button>
                  </Box>
                  <Box pl={2}>
                    <Button colorScheme='red' onClick={ () => clearCart() }>Remove</Button>
                  </Box>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>

        </div>
        <div>
          <Text>
            <b>Total:</b> 
            <span className='section__total__text' >${ cartTotalPrice().toLocaleString('es-AR') }</span>
          </Text>
        </div>
      </section>

      <section className='section__checkout'>
        <Link to="/Checkout">
          <Button 
            colorScheme='green'
            h="3.5rem"
            w="12rem"
            fontSize='21px'

          >
            Checkout
          </Button>
        </Link>
      </section>
    </Container>

  )
}

export default Cart