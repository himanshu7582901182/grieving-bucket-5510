import React from "react";
import { Link } from "react-router-dom";

import {  Heading, Icon, VStack } from '@chakra-ui/react'
import { FaApple, FaGooglePlay, FaCheck ,FaLinkedinIn,FaFacebook,FaInstagram,FaTwitter,FaYoutube,FaWhatsapp} from "react-icons/fa"

import {Divider,Flex,HStack,Text,InputGroup,Input,InputRightAddon,IconButton} from "@chakra-ui/react";

const Footer = () => {
  return (
    <div>
        
      <Divider bg="gray.400" w="83.5%" m="auto" h={5} mt={10} orientation='horizontal' />
      <Text textAlign="center" mt={5}>SHOP WHENEVER, WHEREVER WITH THE APP</Text>
      <Flex gap={2} border="0px solid black" width="20%" margin="auto">
        <HStack mt={5} p={2} borderRadius="5px" bg="black" color="white" flexDirection="row">
          <IconButton _hover={{bg:"black"}} size="sm" color="white" bg="black" icon={<FaGooglePlay size="md" />} />
          <VStack>
            <Text mb={-2} fontSize={10}>Get it On</Text>
            <Text mt={-8}>Google Play</Text>
          </VStack>
        </HStack>
        <HStack mt={5} p={2} borderRadius="5px" bg="black" color="white" flexDirection="row">
          <IconButton _hover={{bg:"black"}} color="white" bg="black" icon={<FaApple size="md" />} />
          <VStack>
            <Text mb={-2} fontSize={10}>Download on</Text>
            <Text mt={-8}>Apple Store</Text>
          </VStack>
        </HStack>
      </Flex>
      <Divider bg="gray.400" w="80%" m="auto" h={0.5} mt={10} orientation='horizontal' />
      <HStack alignItems="flex-start" border="0px solid black" fontSize="14px" fontStyle="Futura-Medium Century Gothic Gill Sans Helvetica Arial sans-serif" letterSpacing={0.5} justifyContent="space-between" width="80%" m="auto" mt={2}  >
        <VStack border="0px solid black" alignItems="self-start" >
          <Heading size="sm">SERVICE & SECURITY</Heading>
          <HStack>
            <Icon color="gray.400" as={FaCheck}></Icon><Text color="blackAlpha.900" >Fast delivery</Text>
          </HStack>
          <Text color="blackAlpha.600">Delivery within 2 business days</Text>
          <HStack>
            <Icon color="gray.400" as={FaCheck}></Icon><Text color="blackAlpha.900" >
              Free returns within 30 days</Text>
          </HStack>
          <Text color="blackAlpha.600">Convenient return service</Text>
          <HStack>
            <Icon color="gray.400" as={FaCheck}></Icon><Text color="blackAlpha.900" >Secure payment and data protection</Text>
          </HStack>
          <Text color="blackAlpha.600">Delivery within 2 business days</Text>

        </VStack>
        <VStack  border="0px solid black" alignItems="self-start" >
          <Heading size="sm">Food Mart</Heading>
          <Text _hover={{ color: "black" }} color="gray.600" >About Us</Text>
          <Text _hover={{ color: "black" }} color="gray.600">Trust & services</Text>
          <Text _hover={{ color: "black" }} color="gray.600" >Sustainability</Text>
          <Text _hover={{ color: "black" }} color="gray.600">Press</Text>
          <Text _hover={{ color: "black" }} color="gray.600" >Careers</Text>
          <Text _hover={{ color: "black" }} color="gray.600">Investor Relations</Text>
          <Text _hover={{ color: "black" }} color="gray.600">Affiliates</Text>
          <Text _hover={{ color: "black" }} color="gray.600">Tax-Free Shopping</Text>

        </VStack>
        <VStack  alignItems="self-start">
          <Heading size="sm">CUSTOMER CARE</Heading>
          <Text _hover={{ color: "black" }} color="gray.600" >Contact us</Text>
          <Text _hover={{ color: "black" }} color="gray.600">Shipping information</Text>
          <Text _hover={{ color: "black" }} color="gray.600" >Secure payment</Text>
          <Text _hover={{ color: "black" }} color="gray.600">Exchanges</Text>
          <Text _hover={{ color: "black" }} color="gray.600" >Returns</Text>
          <Text _hover={{ color: "black" }} color="gray.600">After sale service</Text>
          <Text _hover={{ color: "black" }} color="gray.600">Gift card</Text>
        </VStack>
        <VStack alignItems="self-start">

        <Heading size="sm">GET TREND UPDATES, STYLE TIPS AND MORE</Heading>
          <InputGroup size='sm'>
            <Input placeholder='your email address here...' />
            <InputRightAddon children='Signup' />
          </InputGroup>
          <Text color="blackAlpha.900" >Wish list </Text>
          <Text color="blackAlpha.600">Receive personal notifications</Text>
          <Text color="blackAlpha.900" >Follow us on</Text>
          <HStack><Icon w={6} h={6} as={FaFacebook}></Icon><Icon w={6} h={6} as={FaInstagram}></Icon><Icon w={6} h={6} as={FaLinkedinIn}></Icon>
          <Icon w={6} h={6} as={FaTwitter}></Icon> <Icon w={6} h={6} as={FaWhatsapp}></Icon><Icon w={6} h={6} as={FaYoutube}></Icon>
          </HStack>
        </VStack>
      </HStack>

    </div>
  )
}

export default Footer