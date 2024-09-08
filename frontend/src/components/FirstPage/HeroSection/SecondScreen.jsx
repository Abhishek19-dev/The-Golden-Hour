import {
    Box,
    VStack,
    Text,
    Button,
    Image,
    Heading,
    Collapse,
    useDisclosure,
  } from "@chakra-ui/react";
  import Slider from "react-slick";
  import { useState } from "react";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import SecondSectionImage from "../../../images/HomePage.jpg";
  
  const SecondScreen = () => {
    const { isOpen, onToggle } = useDisclosure();
    const [hoveredCardId, setHoveredCardId] = useState(null);
  
    const services = [
      {
        id: 1,
        image: SecondSectionImage,
        title: "Outdoor Photography",
        description:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 2,
        image: SecondSectionImage,
        title: "Outdoor Photography",
        description:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 3,
        image: SecondSectionImage,
        title: "Outdoor Photography",
        description:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 4,
        image: SecondSectionImage,
        title: "Outdoor Photography",
        description:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 5,
        image: SecondSectionImage,
        title: "Outdoor Photography",
        description:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ];
  
    const sliderSettings = {
        dots: true,
        speed: 500,
        slidesToShow: 3.5, 
        slidesToScroll: 1,
        infinite: false, 
        draggable: true, 
        swipeToSlide: true, 
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2.5, // Adjust to 2.5 slides on smaller screens
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1.5, // Adjust to 1.5 slides on mobile screens
            },
          },
        ],
      };
  
    return (
      <Box w="100vw" h="100vh" bg="#f8f8f8" p={8}>
        <VStack spacing={4} textAlign="center">
          {/* Heading Section */}
          <Heading
            fontFamily="Nunito Sans"
            fontWeight="900"
            fontSize="5xl"
            color="black"
          >
            Services We Provide
          </Heading>
          <Text
            fontFamily="Nunito Sans"
            fontWeight="400"
            fontSize="lg"
            color="black"
            maxW="6xl"
          >
            At Golden Hour Photography, we specialize in capturing the essence of
            your most treasured moments. Whether it's
            <br /> the radiant smiles of a couple in love, the timeless beauty of
            a portrait, or the joyous atmosphere...
            <Text as="span" color="blue.500" cursor="pointer" onClick={onToggle}>
              {isOpen ? " Show less" : " Read more"}
            </Text>
          </Text>
          <Collapse in={isOpen} animateOpacity>
            <Text
              fontFamily="Nunito"
              fontWeight="400"
              fontSize="lg"
              color="black"
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
  
          {/* Services Slider */}
          <Box w="100%">
            <Slider {...sliderSettings}>
              {services.map((service) => (
                <Box key={service.id} p={4}>
                  <Box
                    width="23.5vw" // Adjust width for the cards
                    height="32.38vw"
                    onMouseEnter={() => setHoveredCardId(service.id)}
                    onMouseLeave={() => setHoveredCardId(null)}
                    bg={hoveredCardId === service.id ? "#293744" : "white"}
                    borderRadius="2xl"
                    overflow="hidden"
                    boxShadow="md"
                    transition="all 0.3s"
                    _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
                    p={4}
                    position="relative"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="flex-start"
                  >
                    <Image
                      borderRadius="2xl"
                      src={service.image}
                      alt={service.title}
                      width="22.29vw"
                      height="18.19vw"
                      objectFit="cover"
                    />
                    <Heading
                      fontFamily="Nunito Sans"
                      fontWeight="900"
                      fontSize="xl"
                      textAlign="left" // Ensure heading is left-aligned
                      w="100%"
                      color={hoveredCardId === service.id ? "white" : "black"}
                      mt={4}
                    >
                      {service.title}
                    </Heading>
                    <Text
                      fontFamily="Nunito Sans"
                      fontWeight="600"
                      textAlign="left" // Ensure heading is left-aligned
                      w="100%"
                      fontSize="sm"
                      lineHeight="1.5"
                      color={hoveredCardId === service.id ? "white" : "gray.600"}
                      mt={2}
                    >
                      {service.description}
                    </Text>
                    <Button
                      size="md"
                      mt={4}
                      bg={hoveredCardId === service.id ? "white" : "#293744"}
                      color={hoveredCardId === service.id ? "#293744" : "white"}
                      borderRadius="full"
                      fontFamily="Nunito Sans"
                      fontWeight={800}
                      fontSize="sm"
                      _hover={{
                        bg: "white",
                        color: "#293744",
                        transform: "scale(1.1)",
                      }}
                    >
                      Connect Now
                    </Button>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
        </VStack>
      </Box>
    );
  };
  
  export default SecondScreen;
  