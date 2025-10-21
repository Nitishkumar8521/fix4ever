import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box maxW="900px" mx="auto" py={10} px={4}>
      <Heading>Welcome to Fix4Ever</Heading>
      <Text mt={4}>Book technicians, track service status, and get quick repairs.</Text>
      <Button mt={6} as={Link} to="/create-request" colorScheme="teal">Create Request</Button>
      <Button mt={6} ml={4} as={Link} to="/track" variant="outline">Track Request</Button>
    </Box>
  );
};

export default Home;
