import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Circle,
  Collapse,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const NinthScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => setIsOpen(!isOpen);

  // FAQ data as an array of objects
  const faqData = [
    {
      heading: 'What is a payment gateway?',
      answer: 'A payment gateway is a technology used by merchants to accept debit or credit card purchases from customers.',
    },
    {
      heading: 'Do I need to pay to Instapay even when there is no transaction going on in my business?',
      answer: 'Payment gateways use encryption and other security protocols to ensure that customer information is safe.',
    },
    {
      heading: 'What fees are associated with payment gateways?',
      answer: 'Payment gateways typically charge fees per transaction or a percentage of the transaction value.',
    },
    {
        heading: 'What is a payment gateway?',
        answer: 'A payment gateway is a technology used by merchants to accept debit or credit card purchases from customers.',
      },
      {
        heading: 'What is a payment gateway?',
        answer: 'A payment gateway is a technology used by merchants to accept debit or credit card purchases from customers.',
      },
      {
        heading: 'What is a payment gateway?',
        answer: 'A payment gateway is a technology used by merchants to accept debit or credit card purchases from customers.',
      },
      {
        heading: 'What is a payment gateway?',
        answer: 'A payment gateway is a technology used by merchants to accept debit or credit card purchases from customers.',
      },
  ];

  return (
    <Box p={8} w="100vw" textAlign="center">
      {/* Main Heading */}
      <Heading as="h2" color="#293744" size="2xl" fontFamily="Nunito Sans" mb={4}>
        Frequently Asked Questions
      </Heading>

      {/* Subheading with Read More */}
      <Text fontFamily="Nunito Sans" color="#293744" fontWeight="400" fontSize="lg" maxW="3xl" mb={8} mx="auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <Text as="span" color="blue.500" cursor="pointer" onClick={onToggle}>
          {isOpen ? ' Show less' : ' Read more'}
        </Text>
      </Text>
      <Collapse in={isOpen} animateOpacity>
        <Text fontFamily="Nunito Sans" fontWeight="400" fontSize="lg" color="black" maxW="6xl" mx="auto" mb={8}>
          ...Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </Collapse>

      {/* Dynamic Accordion */}
      <Accordion w="140vh" marginLeft="8vw" allowToggle>
        {faqData.map((item, index) => (
          <AccordionItem key={index} border="none">
            <h2>
              <AccordionButton
                _hover={{ bg: '#293744', color: 'white' }}
                _expanded={{ bg: '#293744', color: 'white' }}
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
                my={4}
                boxShadow="lg"
                padding="20px"
                transition="background-color 0.2s ease-in-out, height 0.2s ease-in-out"
                height="auto"
              >
                <Box flex="1" textAlign="left" display="flex" alignItems="center">
                  <Circle size="16px" bg="gray.400" mr={4} />
                  {item.heading}
                </Box>
                <AccordionIcon as={ChevronDownIcon} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} bg="gray.50" borderRadius="md" padding="16px" transition="all 0.3s ease-in-out">
              {item.answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default NinthScreen;
