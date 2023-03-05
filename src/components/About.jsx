import { Card, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <Container className='section' p={10}>
      <Card p={10} className='card--shadow'>
        <Heading size='md' pb={5}>Welcome to Hacker's Corner!</Heading>
        <Text pb={5}>We are a team of technology enthusiasts with a passion for building high-performance computers. We started this e-commerce business to provide a reliable and convenient platform for customers to purchase high-quality computer parts at affordable prices.</Text>
        <Text pb={5}>With years of experience in the computer hardware industry, we have carefully curated a wide range of computer components from reputable brands. Our collection includes everything from processors, motherboards, memory, graphics cards, storage devices, cooling solutions, and more.</Text>
        <Text pb={5}>Our priority is to provide exceptional customer service, ensuring that you have a hassle-free shopping experience. We understand that building a computer can be a daunting task, and we're here to help. Our team is always available to answer any questions you may have, provide recommendations, and guide you through the selection process to help you make informed decisions.</Text>
        <Text pb={5}>At our e-commerce store, we believe in the value of quality and reliability. That's why we only stock products from top-tier manufacturers who prioritize these values. Our commitment to quality also extends to our shipping and handling procedures. We take great care to ensure that your order is delivered safely and promptly to your doorstep.</Text>
        <Text pb={5}>Thank you for choosing us as your go-to destination for all your computer parts needs. We look forward to serving you and helping you build the computer of your dreams!</Text>
      </Card>
    </Container>
  )
}

export default About