import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Wrap, WrapItem } from '@chakra-ui/react';
import ItemList from './ItemList';
import products from '../products.json'
import { collection, getDocs, getFirestore } from "firebase/firestore";


const ItemListContainer = (props) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [stock, setStock] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    
    const itemsCollection = collection(db, "products");
    console.log("items", itemsCollection)
    getDocs (itemsCollection).then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()})));
        const docs = snapshot.docs.map((doc) => doc.data());
        setStock(docs.stock);
    });
  }, []);

  console.log('products', products)
  
  // const showProducts = new Promise((resolve, reject) => {
  //   if (products.length > 0) {
  //     setTimeout(() => {
  //       resolve(products);
  //     }, 1);
  //   } else {
  //     reject("No products were found")
  //   }
  // })

    const catFilter = products.filter((prod) => prod.category === category);
    return (
      <>
        <Container className='section'>
          { category ? (<ItemList products={catFilter}/>) : (<ItemList products={products}/>) }
        </Container>
      </>
    )

};

export default ItemListContainer;