import { Spinner, Center } from '@chakra-ui/react';
export default function Loader() {
  return (
    <Center py={8}>
      <Spinner size="xl" />
    </Center>
  );
}
