import React from 'react'
import { useState } from 'react'
import { Text, Button, Container, Flex, Spacer, useToast, Wrap, WrapItem } from '@chakra-ui/react'

const ItemCount = ({ stock }) => {
  const [amount, setAmount] = useState(0);
  const toast = useToast()
  const tooMuchId = 'tooMuchToast'

  const stockWarningToast = (id, error) => {
    if (!toast.isActive(id)) {
      toast ({
        id,
        title: error,
        status: 'warning',
        isClosable: true,
      })
    }
  }

  const remove = () => {
    setAmount (amount - 1);
  };
  
  const add = () => {
    setAmount(amount + 1);
  };
  
  if (amount == stock) {
    return (
      <Container>
        <Flex alignItems='center' gap='2'>
          <Button bg='#d7d7d7' onClick={ remove }>-</Button>
          <Text>{ amount }</Text>
          <Button 
          _hover={{ bg: '#f5f5f5' }}
          bg='#f5f5f5'
          onClick={() => stockWarningToast(tooMuchId, 'No more stock available') }>+</Button>
        </Flex>
      </Container>
    )
  
  } else if (amount == 0) {
    return (
      <Container>
        <Flex alignItems='center' gap='2'>
          <Button
          _hover={{ bg: '#f5f5f5' }}
          bg='#f5f5f5'
          >-</Button>
          <Text>{ amount }</Text>
          <Button bg='#d7d7d7' onClick={ add }>+</Button>
        </Flex>
      </Container>
    )
  } else {
    return (
      <Container>
        <Flex alignItems='center' gap='2'>
          <Button bg='#d7d7d7' onClick={ remove }>-</Button>
          <Text>{ amount }</Text>
          <Button bg='#d7d7d7' onClick={ add }>+</Button>
        </Flex>
      </Container>
    )
  }
}

export default ItemCount