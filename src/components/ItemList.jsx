import { Container, Flex } from '@chakra-ui/react';
import React from 'react'
import Item from './Item'

const ItemList = ({ products }) => {
  return (
    <>
      <Container p={10}>
        <Flex justifyContent="center">
          { products.map((prod) => (
            <Item 
              key={prod.id}
              id={prod.id}
              alt={prod.alt}
              name={prod.name}
              description={prod.description}
              price={prod.price}
              stock={prod.stock}
              category={prod.category}
              image={prod.image}
            />
          ))}
        </Flex>
      </Container>
    </>
  )
};

export default ItemList;