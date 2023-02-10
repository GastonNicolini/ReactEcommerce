import React from 'react'
import { useState } from 'react'
import { Text, Button, Container, Flex, Spacer } from '@chakra-ui/react'

const ItemCount = ({ stock }) => {
  const [amount, setAmount] = useState(0);

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
          <Button onClick={ remove }>-</Button>
          <Text>{ amount }</Text>
          <Button>+</Button>
        </Flex>
      </Container>
    )
  
  } else if(amount == 0) {
    return (
      <Container>
        <Flex alignItems='center' gap='2'>
          <Button>-</Button>
          <Text>{ amount }</Text>
          <Button onClick={ add }>+</Button>
        </Flex>
      </Container>
    )
  } else {
    return (
      <Container>
        <Flex alignItems='center' gap='2'>
          <Button onClick={ remove }>-</Button>
          <Text>{ amount }</Text>
          <Button onClick={ add }>+</Button>
        </Flex>
      </Container>
    )
  }
}

export default ItemCount