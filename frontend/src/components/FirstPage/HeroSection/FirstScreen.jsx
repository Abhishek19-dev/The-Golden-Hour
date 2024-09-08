import { Box, VStack, Button, Text,Stack, Image } from '@chakra-ui/react';
import backgroundImage from '../../../images/firstSection.jpg';
import featuresSectionImage from '../../../images/HomePage.jpg';

const FirstScreen = () => {
  const features = [
    { id: 1, image: featuresSectionImage },
    { id: 2, image: featuresSectionImage },
    { id: 3, image: featuresSectionImage },
    { id: 4, image: featuresSectionImage },
    { id: 5, image: featuresSectionImage },
  ];

  return (
    <Box boxShadow="none" background="none" backgroundImage="none">
      {/* Hero Section */}
      <Box
        id="home"
        height="70vh"
        backgroundImage={`url(${backgroundImage})`}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="none"
      >
        {/* Text and Button Content */}
        <VStack
          spacing={4}
          textAlign="center"
          zIndex="1"
        >
          <Text
            fontFamily="Nunito Sans"
            fontWeight="900"
            fontSize={{ base: '2xl', md: '5xl' }}
            color="white"
            lineHeight="1.2"
          >
            We Capture Your Life's Best
            <br />
            Golden Moments In Frame
          </Text>
          <Text
            fontFamily="Nunito"
            fontWeight="400"
            fontSize={{ base: 'md', md: 'md' }}
            color="white"
            maxW="2xl"
            lineHeight="1.6"
          >
            From the warmth of a shared glance to the joy of a heartfelt laugh, we
            see the beauty in your everyday
            <br />
            moments. Our photography transforms these instances into timeless keepsakes. Let us frame your
            <br />
            golden memories, ensuring they remain vivid and cherished for years to come.
          </Text>
          <Button
            marginTop="3vh"
            size="lg"
            bgColor="#2D3444"
            color="white"
            borderRadius="full"
            _hover={{ bgColor: '#1a1f29' }}
          >
            Get Connected
          </Button>
        </VStack>
      </Box>
      {/* Features Section */}
      <Box boxShadow="none">
      <Stack direction="row" spacing="10vh" mx="10vh" my="4vh">
        {features.map((feature) => (
          <Box
            key={feature.id}
            width="190px"
            height="170px"
            borderRadius="2xl"
            overflow="hidden"
            position="relative"
            bg="white"
            _hover={{transform: 'scale(1.05)' }}
              transition="all 0.3s"
          >
            <Image
              src={feature.image}
              alt={`Feature ${feature.id}`}
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </Box>
        ))}
      </Stack>
    </Box>
    </Box>
  );
};

export default FirstScreen;
