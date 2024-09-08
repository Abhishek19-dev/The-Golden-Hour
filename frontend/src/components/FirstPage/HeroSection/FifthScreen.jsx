import React from 'react';
import { 
  Box, 
  Button, 
  Heading, 
  Text, 
  Grid, 
  GridItem, 
  useColorMode, 
  IconButton 
} from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const FifthScreen = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box marginTop='14rem' w="85vw" h="100vh" marginLeft='5rem' px={20} py={8} >
      <Box display="flex"  justifyContent="space-between" alignItems="center" mb={6}>
        <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
          <Heading  fontFamily='Nunito Sans' fontWeight={900} lineHeight='61.84px' as="h2" size="xl" mb={2}>
            Our Latest Blogs
          </Heading>
          <Text w='78%' textAlign='center' fontFamily='Nunito Sans' fontWeight={500} fontSize="lg" color="gray.600">
            At Golden Hour Photography, we specialize in capturing the essence of your most treasured moments. Whether it’s 
            the radiant smiles of a couple in love, the timeless beauty of a portrait, or the joyous atmosphere
            <Text as="span" color="blue.500" fontWeight="bold"> read more...</Text>
          </Text>
          <Button marginTop='2vh' bgColor="#2D3444" color='white' _hover={{ bgColor: "#1a1f29" }} mb={6}>Check All</Button>
        </Box>
      </Box>

        <Box  display='flex' flexDirection='column'>
            <Box display='flex' flexDirection='row'>
            <Box borderRadius='sm' marginRight={2} w="43.42vw" h="38.37vh" marginBottom={2} bg="gray.200" />
            <Box borderRadius='sm' w="25.42vw" h="38.37vh" marginBottom={2} bg="gray.200" />
            </Box>
            <Box display='flex' flexDirection='row'>
            <Box borderRadius='sm' marginRight={2} w="25.42vw" h="38.37vh"  bg="gray.200" />
            <Box borderRadius='sm'  w="43.42vw" h="38.37vh"  bg="gray.200" />
            </Box>
            <Box display='flex' flexDirection='row' marginTop={2}>
            <Box borderRadius='sm' w="34.50vw" h="31.07vh" bg="gray.200" marginRight={2}/>
            <Box borderRadius='sm' w="34.50vw" h="31.07vh" bg="gray.200" />
          </Box>
        </Box>
    </Box>
  );
};

export default FifthScreen;