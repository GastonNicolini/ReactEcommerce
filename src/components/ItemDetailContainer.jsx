import { Container, Text, useStatStyles } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../products.json'
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from './Loading';


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stock, setStock] = useState(0);

  
  useEffect(() => {
    // Getting database information
    const db = getFirestore();

    const oneItem = doc(db, "products", id)
    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        const docs = snapshot.data();
        setProduct(docs);
        setLoading(false);
        setStock(docs.stock);
      }
    })
  }, [])

  // const showProducts = new Promise((resolve, reject) => {
  //   if (products.length > 0) {
  //     setTimeout(() => {
  //       resolve(products);
  //     }, 2000);
  //   } else {
  //     reject("No products were found")
  //   }
  // })

  if (id === undefined) {
    return (
      <Text>
        Product Not Found
      </Text>
    );
  } else {
    
    return (
      <>        
        {loading ? <Loading /> : <ItemDetail item={product} stock={stock} /> }
      </>
    )
  }

}

export default ItemDetailContainer