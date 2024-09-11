import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Avatar,
} from '@chakra-ui/react';
import SlickSlider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TenthScreen = () => {
    const [isReadMore, setIsReadMore] = useState(false);

    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
  // Sample feedback data
  const feedbacks = [
    {
      id: 1,
      name: "Ayush Bansal",
      feedback: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      avatar: "https://i.pravatar.cc/300",
      date: "2021.03.02",
      flag: "🇮🇳",
    },
    {
      id: 2,
      name: "John Doe",
      feedback: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      avatar: "https://i.pravatar.cc/301",
      date: "2021.03.02",
      flag: "🇺🇸",
    },
    {
      id: 3,
      name: "Jane Smith",
      feedback: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      avatar: "https://i.pravatar.cc/302",
      date: "2021.03.02",
      flag: "🇬🇧",
    },
    {
      id: 4,
      name: "Emily Davis",
      feedback: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      avatar: "https://i.pravatar.cc/303",
      date: "2021.03.02",
      flag: "🇨🇦",
    },
    // Add more feedback objects here
  ];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box p={8} w="100%" textAlign="center" display='flex' flexDirection='column' alignItems='center'>
      {/* Heading Section */}
      <Heading as="h2"  size="2xl" fontWeight={800} textColor='#293744' mb={6} fontFamily="Nunito Sans">
            Our Clients Feedback
          </Heading>
          <Text fontSize="lg" color="#293744" maxW='4xl' textAlign='center' fontWeight={400} mb={6} fontFamily="Nunito Sans">
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

      {/* Slider Section */}
      <Box w="100%">
      </Box>
      <Box w="100%">
      <SlickSlider {...sliderSettings}>
      {feedbacks.map((feedback) => (
                <Box  key={feedback.id} p={4}>
                  <Box
                    width="29.5vw"
                    height="15.38vw"
                    // onMouseEnter={() => setHoveredCardId(feedback.id)}
                    // onMouseLeave={() => setHoveredCardId(null)}
                    // bg={hoveredCardId === service.id ? "#293744" : "white"}
                    borderRadius="2xl"
                    overflow="hidden"
                    boxShadow="md"
                    transition="all 0.3s"
                    _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
                    p={4}
                   bgColor="rgba(41, 55, 68, 0.5)"
                    bgC
                    position="relative"
                    display="flex"
                    flexDirection="row"
                    color='#293744'
                    justifyContent="center"
                    alignItems="flex-start"
                  >
                      <Avatar
                  src={feedback.avatar}
                  size="lg"
                  borderRadius="full"
                  mr={4} // Space between avatar and text
                />
                <Box h='100%'  w='80%' alignItems='flex-start' justifyContent='space-between' py='1vh' display='flex' flexDirection='column'>
                    <Text fontFamily='Open Sans' fontWeight={700} color='white' fontSize='2xl'>{feedback.name}</Text>
                    <Text fontFamily='Nunito Sans' fontSize='1.8vh' fontWeight={600} color='white' textAlign='start'>{feedback.feedback}</Text>
                    <Text marginTop='1vw' fontFamily='Nunito Sans' fontSize='1.8vh' fontWeight={600} color='white' textAlign='start'>{feedback.flag} {feedback.date}</Text>

                </Box>
                    
                  </Box>
                </Box>
              ))}
        </SlickSlider>
          </Box>
    </Box>
  );
};

export default TenthScreen;
