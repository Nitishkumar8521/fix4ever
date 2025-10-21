import React from 'react';
import { Box, Heading, Text, Badge } from '@chakra-ui/react';

const ServiceCard = ({ request }) => {
  //console.log(request)
  return (
    <Box borderWidth="1px" borderRadius="md" p={4}>
      <Heading size="sm">{request.title}</Heading>
      <Text>{request.description}</Text>
      <Text mt={2}><strong>Request ID:</strong> {request._id}</Text>
      <Text mt={2}><strong>Category:</strong> {request.category}</Text>
      <Text><strong>Estimated:</strong> {request.estimatedDuration}</Text>
      <Badge mt={2} colorScheme={request.status === 'completed' ? 'green' : 'blue'}>
        {request.status}
      </Badge>
    </Box>
  );
};

export default ServiceCard;
