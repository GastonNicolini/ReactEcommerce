import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Flex, Box, Text, Center, Stack } from '@chakra-ui/react'
import { IconContext } from 'react-icons';
import { ImTwitter, ImFacebook2, ImWhatsapp, ImInstagram, ImYoutube } from 'react-icons/im';

const Footer = () => {
  return (
    <>
      <Container maxW="100vw" bg="#0A070D">
        <Stack align='center'>
          <Box p={5}>
            <Text color='white'>@Copyright 2023</Text>
          </Box>
          <Box>
            <Stack className='social__icons' direction={'row'} pb={7} color='white'>
              <Link to={'https://twitter.com'}>
                <ImTwitter fontSize='1.4rem'></ImTwitter>
              </Link>
              <Link to={'https://facebook.com'}>
                <ImFacebook2 fontSize='1.4rem'></ImFacebook2>
              </Link>
              <Link to={'https://instagram.com'}>
                <ImInstagram fontSize='1.4rem'></ImInstagram>
              </Link>
              <Link to={'https://youtube.com'}>
                <ImYoutube fontSize='1.4rem'></ImYoutube>
              </Link>
              <Link to={'https://whatsapp.com'}>
                <ImWhatsapp fontSize='1.4rem'></ImWhatsapp>
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  )
};

export default Footer;