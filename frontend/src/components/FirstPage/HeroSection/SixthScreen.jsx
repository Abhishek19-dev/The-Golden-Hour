import React, { useState } from "react";
import {
  Box,
  Text,
  Heading,
  Collapse,
  useDisclosure,
  Image,
  VStack,
  Stack,
  Button,
} from "@chakra-ui/react";
import SixScreenbackgroundImage from '../../../images/SixthSection.jpg'
import SixScreenCardImg from '../../../images/ThirdSection.jpg'

const SixScreen = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const services = [
    {
      id: 1,
      image: SixScreenCardImg,
      title: "Outdoor Photography",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      image: SixScreenCardImg,
      title: "Outdoor Photography",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 3,
      image: SixScreenCardImg,
      title: "Outdoor Photography",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    }
  ];

  return (
    <Box
    marginTop='60vh'
    backgroundImage={`url(${SixScreenbackgroundImage})`}
    opacity='1.2'
      bgSize="cover"
      bgPosition="center"
      w="100%"
      py={20}
    >
      <VStack spacing={8} align="start" textAlign="center" maxW="6xl" mx="auto">
      <Heading
            fontFamily="Nunito Sans"
            fontWeight="900"
            fontSize="5xl"
            color="white"
          >
            Benefits Of Connecting Us
          </Heading>
        <Text
          fontFamily="Nunito Sans"
          fontWeight="400"
          fontSize="lg"
          color="white"
          textAlign='start'
          maxW="6xl"
        >
          At Golden Hour Photography, we specialize in capturing the essence of
          your most treasured moments. Whether it's
          <br /> the radiant smiles of a couple in love, the timeless beauty of
          a portrait, or the joyous atmosphere...
          <Text as="span" color="red" cursor="pointer" onClick={onToggle}>
            {isOpen ? " Show less" : " Read more"}
          </Text>
        </Text>
        <Collapse in={isOpen} animateOpacity>
          <Text
            fontFamily="Nunito"
            fontWeight="400"
            fontSize="lg"
            color="white"
            maxW="6xl"
          >
            ...of a family gathering, we bring a unique artistic vision to every
            shot. Our commitment to excellence <br /> and attention to detail
            ensures that your golden moments are captured beautifully and
            preserved forever.
          </Text>
        </Collapse>
        <Button
            size="lg"
            bgColor="#2D3444"
            color="white"
            borderRadius="full"
            _hover={{ bgColor: "#1a1f29" }}
          >
            Check All
          </Button>

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={8}
          justify="center"
          align="center"
          w="100%"
        >
              {services.map((service) => (
                <Box key={service.id} p={1}>
                  <Box
                    width="23.5vw" // Adjust width for the cards
                    height="32.38vw"
                    // onMouseEnter={() => setHoveredCardId(service.id)}
                    // onMouseLeave={() => setHoveredCardId(null)}
                    bg={hoveredCardId === service.id ? "#293744" : "#f8f8f880"}
                    borderRadius="2xl"
                    overflow="hidden"
                    boxShadow="md"
                    transition="all 0.3s"
                    _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
                    p={2}
                    position="relative"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="centre"
                  >
                    <Image
                      borderRadius="2xl"
                      src={service.image}
                      alt={service.title}
                      width="22.29vw"
                      height="20.19vw"
                      objectFit="cover"
                    />
                    <Heading
                      fontFamily="Nunito Sans"
                      fontWeight="900"
                      fontSize="xl"
                      textAlign="centre" // Ensure heading is left-aligned
                      w="100%"
                      color='white'
                    //   color={hoveredCardId === service.id ? "white" : "white"}
                      mt={4}
                    >
                      {service.title}
                    </Heading>
                    <Text
                      fontFamily="Nunito Sans"
                      fontWeight="600"
                      textAlign="centre" // Ensure heading is left-aligned
                      w="100%"
                      fontSize="sm"
                      lineHeight="1.5"
                       color='white'
                    //   color={hoveredCardId === service.id ? "white" : "gray.600"}
                      mt={2}
                    >
                      {service.description}
                    </Text>
                  </Box>
                </Box>
              ))}

        </Stack>
      </VStack>
    </Box>
  );
};

export default SixScreen;
