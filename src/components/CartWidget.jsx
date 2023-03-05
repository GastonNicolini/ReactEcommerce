import { Flex } from '@chakra-ui/react';
import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { cartTotalQuantity } = useContext(CartContext);

  return (
    <div>
      <Flex>
        <span className="material-symbols-outlined">shopping_cart</span>
        {cartTotalQuantity() > 0 && cartTotalQuantity()}
      </Flex>
    </div>
  )
};

export default CartWidget;