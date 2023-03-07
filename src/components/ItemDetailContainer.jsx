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
  const db = getFirestore();
  
  // useEffect(() => {
  //   // Getting database information
  //   const db = getFirestore();

  //   const oneItem = doc(db, "products", id)
  //   getDoc(oneItem).then((snapshot) => {
  //     if (snapshot.exists()) {
  //       setProduct({ id: snapshot.id, ...snapshot.data() });
  //       const docs = snapshot.data();
  //       setLoading(false);
  //       setStock(docs.stock);
  //     }
  //   })
  // }, [])

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDoc(doc(db, "products", id));
      setProduct({ id: querySnapshot.id, ...querySnapshot.data() });
      const docs = querySnapshot.data();
      console.log(docs)
      setLoading(false);
      setStock(docs.stock);
    }
    fetchData();
  }, []); 

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