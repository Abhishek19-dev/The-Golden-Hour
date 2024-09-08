import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  Heading, 
  Text, 
  Flex 
} from '@chakra-ui/react';

const SeventhScreen = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <Box w="100vw" marginTop='-15vh' h="100vh" p={4} display="flex" justifyContent="center" alignItems="center">
      <Flex
        w="80vw"
        bg="white"
        p={8}
        borderRadius="2xl"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
      >

        <Box
          w={{ base: "100%", md: "40%" }}
          h="50vh"
          bg="gray.200"
          borderRadius="2xl"
          mb={{ base: 8, md: 0 }}
        ></Box>
        
        <Box
          ml={{ base: 0, md: 8 }}
          textAlign="left"
          w={{ base: "100%", md: "60%" }}
        >
          <Heading as="h2"  size="2xl" fontWeight={800} textColor='#293744' mb={6} fontFamily="Nunito Sans">
            About Us
          </Heading>
          <Text fontSize="lg" color="#293744" fontWeight={400} mb={6} fontFamily="Nunito Sans">
            At Golden Hour Photography, we specialize in capturing the essence of your most treasured moments. Whether it's 
            the radiant smiles of a couple in love, the timeless beauty of a portrait, or the joyous atmosphere of a celebration.
            {isReadMore && (
              <span>
                {" "}Our photographers are passionate about creating images that reflect the unique stories of our clients. 
                We believe in the power of photography to preserve memories that last a lifetime. 
              </span>
            )}
            <Text 
              as="span" 
              color="blue.500" 
              fontWeight="bold" 
              onClick={toggleReadMore} 
              cursor="pointer"
            >
              {isReadMore ? " Show less" : " Read more..."}
            </Text>
          </Text>
          <Button bgColor="#2D3444"
            color="white"
            borderRadius="full"
            _hover={{ bgColor: "#1a1f29" }} mt={4}>
            Connect Us
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default SeventhScreen;
