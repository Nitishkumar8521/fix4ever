import React, { useContext } from 'react';
import { Box, Flex, Button, Heading } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Box bg="teal.500" color="white" px={4} py={3}>
      <Flex maxW="1200px" mx="auto" align="center" justify="space-between">
        <Heading size="md"><Link to="/">Fix4Ever</Link></Heading>
        <Flex gap={3}>
          <Button variant="ghost" color="white" as={Link} to="/">Home</Button>
          {user ? (
            <>
              <Button variant="ghost" color="white" as={Link} to="/dashboard">Dashboard</Button>
              <Button onClick={() => { logout(); navigate('/'); }} colorScheme="teal" variant="outline">Logout</Button>
            </>
          ) : (
            <>
              <Button as={Link} to="/login" variant="outline">Login</Button>
              <Button as={Link} to="/register" colorScheme="teal">Register</Button>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
