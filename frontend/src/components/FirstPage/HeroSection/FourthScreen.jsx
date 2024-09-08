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

const FourthScreen = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box w="85vw" h="100vh" marginLeft='5rem' px={20} py={8} >
      <Box display="flex"  justifyContent="space-between" alignItems="center" mb={6}>
        <Box>
          <Heading fontFamily='Nunito Sans' fontWeight={900} lineHeight='61.84px' as="h2" size="xl" mb={2}>
            Our Latest Works
          </Heading>
          <Text fontFamily='Nunito Sans' fontWeight={500} fontSize="lg" color="gray.600">
            At Golden Hour Photography, we specialize in capturing the essence of your most treasured moments. Whether it’s 
            the radiant smiles of a couple in love, the timeless beauty of a portrait, or the joyous atmosphere
            <Text as="span" color="blue.500" fontWeight="bold"> read more...</Text>
          </Text>
        </Box>
      </Box>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Button bgColor="#2D3444" color='white' _hover={{ bgColor: "#1a1f29" }} mb={6}>Check All</Button>
        <IconButton
          aria-label="Toggle theme"
          icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
          size="lg"
          isRound
        />
        </Box>
        <Box display='flex' flexDirection='column'>
          <Box display='flex' flexDirection='row'>
            <Box display='flex' flexDirection='column' marginRight={2}>
              <Box borderRadius='sm' w="23.42vw" h="30.37vh" marginBottom={2} bg="gray.200" />
              <Box borderRadius='sm' w="23.42vw" h="26.85vh" bg="gray.200" />
            </Box>
            <Box marginRight={2} borderRadius='sm' w="21.27vw" h="58vh" bg="gray.200" />
            <Box display='flex' flexDirection='column' >
              <Box borderRadius='sm' w="23.42vw" h="30.37vh" marginBottom={2} bg="gray.200" />
              <Box borderRadius='sm' w="23.42vw" h="26.85vh" bg="gray.200" />
            </Box>
          </Box>
          <Box display='flex' flexDirection='row' marginTop={2}>
            <Box borderRadius='sm' w="34.50vw" h="31.07vh" bg="gray.200" marginRight={2}/>
            <Box borderRadius='sm' w="34.50vw" h="31.07vh" bg="gray.200" />
          </Box>
        </Box>
    </Box>
  );
};

export default FourthScreen;