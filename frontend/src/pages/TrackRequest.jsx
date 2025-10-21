import React, { useState } from 'react';
import { Box, Input, Button, Heading, VStack, Text } from '@chakra-ui/react';
import API from '../services/api';

const TrackRequest = () => {
  const [id, setId] = useState('');
  const [req, setReq] = useState(null);

  const handleTrack = async () => {
    try {
      const { data } = await API.get(`/services/${id}`);
      setReq(data);
    } catch (err) {
      alert(err?.response?.data?.message || err.message);
    }
  };

  return (
    <Box maxW="700px" mx="auto" mt={8}>
      <Heading mb={4}>Track Request</Heading>
      <VStack spacing={3}>
        <Input placeholder="Service Request ID" value={id} onChange={e => setId(e.target.value)} />
        <Button onClick={handleTrack} colorScheme="teal">Track</Button>
        {req && (
          <Box mt={4} p={4} borderWidth="1px" borderRadius="md">
            <Text><strong>Title:</strong> {req.title}</Text>
            <Text><strong>Status:</strong> {req.status}</Text>
            <Text><strong>Technician:</strong> {req.technician ? req.technician.name : 'Not assigned'}</Text>
            <Text><strong>Estimated:</strong> {req.estimatedDuration}</Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default TrackRequest;
