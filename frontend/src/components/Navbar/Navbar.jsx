import { Box, Flex, Link } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box as="nav" bg="transparent" position="fixed" top="0" width="100%" zIndex="1000">
      <Flex justify="center" align="center" p="4" bg="rgba(255, 255, 255, 0.2)" backdropFilter="blur(0px)">
        <Flex as="ul" listStyleType="none" spacing="8">
          <Link href="#home" px="4" py="2" fontWeight="bold" color="white" _hover={{ color: 'gray.300' }}>Home</Link>
          <Link href="#services" px="4" py="2" fontWeight="bold" color="white" _hover={{ color: 'gray.300' }}>Services</Link>
          <Link href="#about-us" px="4" py="2" fontWeight="bold" color="white" _hover={{ color: 'gray.300' }}>About Us</Link>
          <Link href="#portfolio" px="4" py="2" fontWeight="bold" color="white" _hover={{ color: 'gray.300' }}>Portfolio</Link>
          <Link href="#blog" px="4" py="2" fontWeight="bold" color="white" _hover={{ color: 'gray.300' }}>Blog</Link>
          <Link href="#contact-us" px="4" py="2" fontWeight="bold" color="white" _hover={{ color: 'gray.300' }}>Contact Us</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
