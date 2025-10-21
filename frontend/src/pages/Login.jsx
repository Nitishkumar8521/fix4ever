import React, { useState, useContext } from 'react';
import { Box, Input, Button, Heading, Stack } from '@chakra-ui/react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email:'', password:'' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form.email, form.password);
      navigate('/dashboard');
    } catch (err) {
      alert(err?.response?.data?.message || err.message);
    }
  };

  return (
    <Box maxW="400px" mx="auto" mt={10}>
      <Heading mb={4}>Login</Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Input placeholder="Email" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
          <Input placeholder="Password" type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} required />
          <Button type="submit" colorScheme="teal">Login</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Login;
