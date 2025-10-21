import React, { useContext, useEffect, useState } from 'react';
import { Box, Heading, Grid } from '@chakra-ui/react';
import { AuthContext } from '../context/AuthContext';
import API from '../services/api';
import ServiceCard from '../components/ServiceCard';
import Loader from '../components/Loader';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await API.get('/services/myrequests');
        setRequests(data);
      } catch (err) {
        console.error(err);
      }
    };
    if (user) load();
  }, [user]);

  if (!user) return <Box p={8}><Heading>Please login to view dashboard</Heading></Box>;
  if (!requests) return <Loader />;

  return (
    <Box maxW="1100px" mx="auto" py={8}>
      <Heading mb={4}>My Service Requests</Heading>
      <Grid templateColumns="repeat(auto-fill,minmax(300px,1fr))" gap={4}>
        {requests.map(r => <ServiceCard key={r._id} request={r} />)}
      </Grid>
    </Box>
  );
};

export default Dashboard;
