import { Container, Flex, Text } from '@chakra-ui/react';
import React from 'react'
import Item from './Item'

const ItemList = ({ products }) => {
  console.log('prod', products)
  return (
    <>
      { products.length != 0 
      ? 
      <Container p={10}>
        <Flex justifyContent="center">
          { products?.map((prod) => (
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
      :
      <Container className='section section--emptyCart'>
        <div className='section__content'>
          <Text p={'1rem'}>I'm sorry, there's no items available to buy on this category right now 😔</Text>
        </div>
      </Container>
      }
    </>
  )
};

export default ItemList;