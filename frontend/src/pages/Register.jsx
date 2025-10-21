import React, { useState, useContext } from 'react';
import { Box, Input, Button, Heading, Stack } from '@chakra-ui/react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { register } = useContext(AuthContext);
  const [form, setForm] = useState({ name:'', email:'', password:'' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form.name, form.email, form.password);
      navigate('/dashboard');
    } catch (err) {
      alert(err?.response?.data?.message || err.message);
    }
  };

  return (
    <Box maxW="400px" mx="auto" mt={10}>
      <Heading mb={4}>Register</Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Input placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
          <Input placeholder="Email" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
          <Input placeholder="Password" type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} required />
          <Button type="submit" colorScheme="teal">Register</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Register;
