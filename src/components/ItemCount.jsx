
import { useState, useContext } from 'react';
import { Text, Button, Container, Flex, Spacer, useToast, Wrap, WrapItem, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ItemCount = ({ stock, onAdd }) => {
  
  const [counter, setCounter] = useState(1); // Counter showing amount of product selected
  const [itemStock, setItemStock] = useState(stock)// Setting the new stock after the person has added item to the cart
  const [added, setAdded] = useState(false);
  const toast = useToast();
  const tooMuchId = 'tooMuchToast';
  const addedItemId = 'addedItemToast';
  
  // Functions to show error toast
  const stockWarningToast = (id, error) => {
    if (!toast.isActive(id)) {
      toast ({
        id,
        title: error,
        status: 'warning',
        isClosable: true
      })
    }
  }

  const addedItemToast = (id, message) => {
    if (!toast.isActive(id)) {
      toast ({
        id,
        title: message,
        status: 'success',
        isClosable: true,
      });
    }
  }

  // Function to decrease item quantity
  const decreaseQuantity = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    };
  }

  // Function to increase item quantity
  const increaseQuantity = () => {
    if (counter < itemStock) {
      setCounter(counter + 1);
    } else {
      stockWarningToast(tooMuchId, 'No more stock available');
    };
  }

  // Function to add item with selected quantity to cart
  const addItemToCart = (quantity) => {
    if (itemStock > 0) {
      addedItemToast(addedItemId, "The item was added to your cart 👍");
      onAdd(quantity);
      setItemStock(itemStock - quantity);
      setCounter(1);
      setAdded(true);
    } else {
      stockWarningToast(tooMuchId, 'No more stock available');
    }
  }

  return (
    <Container className='item__counter__finish'>
      <Flex w={'100%'} alignItems='center' gap='4' justifyContent="flex-start" pt={10}>
        <Button bg='#d7d7d7' onClick={() => decreaseQuantity() }>-</Button>
        <Text>{ counter }</Text>
        <Button bg='#d7d7d7' onClick={() => increaseQuantity() }>+</Button>
        <Button w='100%' colorScheme='blue' onClick={() => addItemToCart(counter) }>
          Add to cart
        </Button>
      </Flex>
      <Box pt={4} >
        { added ? <Link to={'/Cart'}><Button w='100%' colorScheme='green'>Finish shopping</Button></Link> : null }
      </Box>
    </Container>
  );

}

export default ItemCount;