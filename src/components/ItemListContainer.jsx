import React from 'react'
import { useParams } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import ItemList from './ItemList';
import products from '../products.json'


const ItemListContainer = (props) => {
  const { category } = useParams();

  // async function fetchingData() {
  //   try {
  //     const dataFetched = await getData();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  // fetchingData();

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

  if (category === undefined) {
    return (
      <Container className='body'>
        <ItemList products= { products }/>
      </Container>
    );
  } else {
    const catFilter = products.filter((prod) => prod.category === category);
    console.log(catFilter);
    return (
      <>
        <Container className='body'>
          { catFilter ? (<ItemList products={catFilter}/>) : (<ItemList products={products}/>) }
        </Container>
      </>
    )
  }

};

export default ItemListContainer;