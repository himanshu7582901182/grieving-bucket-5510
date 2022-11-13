import logo from "../Image/Food Mart.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";

import {
  Box,
  Divider,
  Flex,
  HStack,
  Spacer,
  Text,
  InputGroup,
  InputLeftAddon,
  Input,
  InputRightAddon,
  IconButton,
  Button,
  Icon
} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem, Image } from "@chakra-ui/react";
import { Search2Icon, StarIcon } from "@chakra-ui/icons";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  ModalFooter,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";

const Navbar = () => {
  let [User, setUser] = useState("");

  let [emailUser, setemailUser] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <div>
      <Flex alignItems="center" justifyContent="space-around" px={20}>
        <Box boxSize="sm" w="200" ml={5}>
          <Link to="/" ><Image src={logo} w={250} alt="Dan Abramov" /></Link>
        </Box>
        <Box ml={10} marginBottom="80" fontFamily="cursive">
          <HStack>
            <Link>
              <Text>Online Slots Availability</Text>
            </Link>
            <Divider
              orientation="vertical"
              borderStyle="solid"
              borderWidth="2px"
              h={5}
            />
            <Link>
              <Text>Fresh & Fast</Text>
            </Link>
            <Divider
              orientation="vertical"
              borderStyle="solid"
              borderWidth="2px"
              h={5}
            />
            <Link>
              <Text>Store Locator</Text>
            </Link>
            <Divider
              orientation="vertical"
              borderStyle="solid"
              borderWidth="2px"
              h={5}
            />
            <Link>
              <Text>Contact Us</Text>
            </Link>
            <Divider
              orientation="vertical"
              borderStyle="solid"
              borderWidth="2px"
              h={5}
            />
          </HStack>
        </Box>
        <Spacer />
        <Box mb={80} fontFamily="cursive">
          <Box>
            <Box>
              <Button bg="none" color="#b71761">{User}</Button>
               {User!=""?null: <Button onClick={onOpen} bg="none" fontFamily="cursive">
                Login
              </Button>}

              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Create your account</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>User Email</FormLabel>
                      <Input
                        ref={initialRef}
                        placeholder="Enter Email here..."
                        type="email"
                        onChange={(e) => {
                          setemailUser(e.target.value);
                        }}
                      />
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>Password</FormLabel>
                      <Input placeholder="Enter Password" type="password" />
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      onClick={() => {
                        return setUser(emailUser), onClose();
                      }}
                      colorScheme="blue"
                      mr={3}
                    >
                      Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          </Box>
        </Box>
      </Flex>

      <Box mb={200} mt="-300px">
        <InputGroup ml={340}>
          <InputLeftAddon bg="#c19a6b" color="white" children="Enter Pin" />

          <Menu>
            <MenuButton bgColor="#c19a6b" color="white" >Mumbai</MenuButton>
            <MenuList>
              <MenuItem>Pune</MenuItem>
              <MenuItem>Delhi</MenuItem>
              <MenuItem>Thane</MenuItem>
              <MenuItem>Kolkata</MenuItem>
              <MenuItem>Ranchi</MenuItem>
            </MenuList>
          </Menu>
          <Input type="tel" placeholder="Start Shopping..." w={760} />
          <InputRightAddon
          bg="#c19a6b" color="white"
            children={<Search2Icon />}
          />
          <IconButton colorScheme="white" color="#c19a6b" icon={<StarIcon />} />
          <Button colorScheme="white" color="#c19a6b"><Icon mr={2} as={BsFillCartCheckFill} /></Button>
        </InputGroup>
      </Box>

      <Box
        ml="8%"
        marginBottom="80"
        fontFamily="Hammersmith 1"
        mt="-141px"
        p="7px"
        w="85%"
        border="2px solid grey"
        borderRadius="5px"
      >
        <HStack>
          <Link to="/">
            <Text>SHOP BY CATEGORY</Text>
          </Link>
          <Divider
            orientation="vertical"
            borderStyle="solid"
            borderWidth="2px"
            h={5}
          />
          <Link>
            <Text>MY ORDERS</Text>
          </Link>
          <Divider
            orientation="vertical"
            borderStyle="solid"
            borderWidth="2px"
            h={5}
          />
          <Link>
            <Text>GIFTING</Text>
          </Link>
          <Divider
            orientation="vertical"
            borderStyle="solid"
            borderWidth="2px"
            h={5}
          />
          <Link>
            <Text>BLOG</Text>
          </Link>
          <Divider
            orientation="vertical"
            borderStyle="solid"
            borderWidth="2px"
            h={5}
          />
          <Link to="/productoffers">
            <Text>OFFERS</Text>
          </Link>
          <Divider
            orientation="vertical"
            borderStyle="solid"
            borderWidth="2px"
            h={5}
          />
          <Link>
            <Text>CONNOISSEUR'S SELECTION</Text>
          </Link>
          <Divider
            orientation="vertical"
            borderStyle="solid"
            borderWidth="2px"
            h={5}
          />
          <Link to="/bookstore">
            <Text>BOOK STORE VISIT</Text>
          </Link>
          <Divider
            orientation="vertical"
            borderStyle="solid"
            borderWidth="2px"
            h={5}
          />
        </HStack>
      </Box>
    </div>
  );
};

export default Navbar;
