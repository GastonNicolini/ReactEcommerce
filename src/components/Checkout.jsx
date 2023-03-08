import { Box, Button, Card, Center, Container, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import CheckoutSuccess from './CheckoutSuccess';

const Checkout = () => {
  const {cart, cartTotalPrice } = useContext(CartContext)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [orderId, setOrderId] = useState(null);

  const db = getFirestore();
  const ordersCollection = collection(db, "orders");
  
  const order = {
    buyer: { firstName:firstName, lastName:lastName, email:email, city:city, postalCode:postalCode, address:address, country:country, state:state },
    items: cart.map((item) => ({id:item.id, name:item.name, price:item.price, category:item.category, quantity:item.quantity, totalItem:(item.quantity * item.price) })),
    total: cartTotalPrice()
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    (firstName === '' || lastName === '' || email === '' || city === '' || postalCode === '' || address === '' || country === '' || state === '') 
    ?
      alert('Please complete every field')
    :
      addDoc(ordersCollection, order).then(({id}) => setOrderId(id));
  }

  console.log('order', orderId)
  return (
    <>
    { (orderId === null) ? 
      <Container p={5} className='section'>
        <Card p={7} className='card--shadow'>
          <Flex direction='column'>
            <Heading pb={4} >Complete with your information</Heading>
            <form onSubmit={ handleSubmit }>
              <div className='section__form__name'>
                <div className='section__form__data--half'>
                  <legend mb={1}>First Name</legend>
                  <input placeholder='John' onChange={(e) => setFirstName(e.target.value)}></input>
                </div>
                <div className='section__form__data--half'>
                  <legend mb={1}>Last Name</legend>
                  <input placeholder='Doe' onChange={(e) => setLastName(e.target.value)}></input>
                </div>
              </div>
              <div className='section__form__data'>
                <legend mb={1}>Email</legend>
                <input placeholder='example@mail.com' onChange={(e) => setEmail(e.target.value)}></input>
              </div>
              <div className='section__form__name'>
                <div className='section__form__data--half'>
                  <legend mb={1}>Country</legend>
                  <input placeholder='United States' onChange={(e) => setCountry(e.target.value)}></input>
                </div>
                <div className='section__form__data--half'>
                  <legend mb={1}>State</legend>
                  <input placeholder='Texas' onChange={(e) => setState(e.target.value)}></input>
                </div>
              </div>
              <div className='section__form__name'>
                <div className='section__form__data--half'>
                  <legend mb={1}>City</legend>
                  <input placeholder='Dallas' onChange={(e) => setCity(e.target.value)}></input>
                </div>
                <div className='section__form__data--half'>
                  <legend mb={1}>Postal Code</legend>
                  <input placeholder='CR9881' onChange={(e) => setPostalCode(e.target.value)}></input>
                </div>
              </div>
              <div className='section__form__data'>
                <legend mb={1}>Address</legend>
                <input placeholder='Av. Street 1234' onChange={(e) => setAddress(e.target.value)}></input>
              </div>
              <Center>
                <Button w='10rem' colorScheme={'green'} type='submit'>
                  Place Order
                </Button>
              </Center>
            </form>
          </Flex>
        </Card>
      </Container>
    : 
     <CheckoutSuccess order={ orderId } />
    }
    </>
  )
}

export default Checkout