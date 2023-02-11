import { Container, Text } from '@chakra-ui/react';
import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../products.json'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();

  const showProducts = new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject("No products were found")
    }
  })

  showProducts
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

  if (id === undefined) {
    return (
      <Text>
        Product Not Found
      </Text>
    );
  } else {
    const prodIdFilter = products.filter((prod) => prod.id == id);
    const prod = prodIdFilter[0];

    return (
      <>        
        <ItemDetail item={prod}/>
      </>
    )
  }

}

export default ItemDetailContainer