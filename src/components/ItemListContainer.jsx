  import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Wrap, WrapItem } from '@chakra-ui/react';
import ItemList from './ItemList';
import products from '../products.json'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Loading from './Loading';


const ItemListContainer = (props) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [stock, setStock] = useState([]);
  const [loading, setLoading] = useState(true);
  const db = getFirestore();

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "products"));
      setProducts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()})));
      const docs = querySnapshot.docs.map((doc) => doc.data());
      setStock(docs.stock);
      setLoading(false);
    }
    fetchData();
  }, []); 

  const catFilter = products.filter((prod) => prod.category === category);
  return (
    <>
      <Container className='section'>
        { loading ? <Loading /> : ( category ? (<ItemList products={catFilter}/>) : (<ItemList products={products}/>) ) }
      </Container>
    </>
  )

};

export default ItemListContainer;