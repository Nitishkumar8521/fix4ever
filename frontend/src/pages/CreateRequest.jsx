import React, { useState, useContext } from 'react';
import { Box, Input, Textarea, Button, Heading } from '@chakra-ui/react';
import API from '../services/api';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const CreateRequest = () => {
  const { user } = useContext(AuthContext);
  const [form, setForm] = useState({ title:'', description:'', location:'' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return navigate('/login');
    try {
      const { data } = await API.post('/services', form);
      alert('Request created');
      navigate('/dashboard');
    } catch (err) {
      alert(err?.response?.data?.message || err.message);
    }
  };

  return (
    <Box maxW="700px" mx="auto" mt={8}>
      <Heading mb={4}>Create Service Request</Heading>
      <form onSubmit={handleSubmit}>
        <Input mb={3} placeholder="Title" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />
        <Textarea mb={3} placeholder="Description" value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
        <Input mb={3} placeholder="Location" value={form.location} onChange={e => setForm({...form, location: e.target.value})} />
        <Button type="submit" colorScheme="teal">Create</Button>
      </form>
    </Box>
  );
};

export default CreateRequest;
