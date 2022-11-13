// import logo from "../Image/Food Mart.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import {  Heading, Icon, VStack } from '@chakra-ui/react'
// import { FaApple, FaGooglePlay, FaCheck ,FaLinkedinIn,FaFacebook,FaInstagram,FaTwitter,FaYoutube,FaWhatsapp} from "react-icons/fa"

import {Box,Divider,Flex,HStack,Spacer,Text,InputGroup,InputLeftAddon,Input,InputRightAddon,IconButton,Button, Center} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem, Image, Tabs, TabList, Tab, TabPanels, TabPanel,} from "@chakra-ui/react";
// import { Search2Icon, StarIcon, HamburgerIcon } from "@chakra-ui/icons";

// import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, ModalFooter } from '@chakra-ui/react';

// import { useDisclosure } from "@chakra-ui/react"

let HomePage = () => {
  let navigate = useNavigate()
  // let [User,setUser] = useState("")
  // let [emailUser,setemailUser] = useState("")
  // const { isOpen, onOpen, onClose } = useDisclosure()

  //   const initialRef = React.useRef(null)
  //   const finalRef = React.useRef(null)

  return (
    <div>
      {/* <Flex alignItems="center" justifyContent="space-around" px={20}>
        <Box boxSize="sm" w="200" ml={5}>
          <Image src={logo} w={250} alt="Dan Abramov" />
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
                <Button bg="none">{User}</Button>
                <Button onClick={onOpen} bg="none"  fontFamily="cursive" >Login</Button>

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
                        <Input ref={initialRef} placeholder='Enter Email here...' type="email" onChange={(e)=>{setemailUser(e.target.value)}} />
                      </FormControl>

                      <FormControl mt={4}>
                        <FormLabel>Password</FormLabel>
                        <Input placeholder='Enter Password' type="password" />
                      </FormControl>
                    </ModalBody>

                    <ModalFooter>
                      <Button  onClick={()=>{
                      return (setUser(emailUser),onClose())}} colorScheme='blue' mr={3}>
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
          <InputLeftAddon children="Enter Pin" />

          <Menu>
            <MenuButton bgColor="#EDF2F7">Mumbai</MenuButton>
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
            bg="brown"
            color="white"
            children={<Search2Icon />}
          />
          <IconButton colorScheme="white" color="brown" icon={<StarIcon />} />
          <IconButton color="brown" bg="white" icon={<HamburgerIcon />} />
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
          <Link>
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
          <Link to="/offers">
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
          <Link to="/bookstore" >
            <Text>BOOK STORE VISIT</Text>
          </Link>
          <Divider
            orientation="vertical"
            borderStyle="solid"
            borderWidth="2px"
            h={5}
          />
        </HStack>
      </Box> */}
      
      <Box boxSize="sm" w="85%" ml="8%" mt="-21%">
        <Image
          borderRadius="5px"
          src="https://gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/d8cc09f5-5d68-4853-ae9a-233ceabe3acd.jpg?v=14"
          alt="Dan Abramov"
        />
      </Box>
      <Box boxSize="sm" w="85%" ml="8%" mt="-1%">
        <Image
          borderRadius="5px"
          src="https://d1z88p83zuviay.cloudfront.net/BannerImages/8f6ba871-ab4e-4f01-b71c-c913dfb63f11_1320x376.jpg"
        ></Image>
      </Box>

      <Box boxSize="sm" w="85%" ml="8%" mt="-0.5px">
        <Flex gap="10px">
          <Box>
            <Image
              borderRadius="9px"
              src="https://www.naturesbasket.co.in/Images/NaturesBasketGifting.jpeg?v=8"
            />
          </Box>
          <Box>
            <Image
              borderRadius="9px"
              src="https://www.naturesbasket.co.in/Images/Fruits-Vegetables.png?v=17"
            />
          </Box>
          <Box>
            <Image
              borderRadius="9px"
              src="https://www.naturesbasket.co.in/Images/Gluten-free-web%20box%20banner.png?v=15"
            />
          </Box>
        </Flex>
      </Box>

      <Box mt="-12%">
        <Text fontWeight="bold" fontSize="25px" fontFamily="Hammersmith 1">
          ------SHOP BY CATEGORY-----
        </Text>
      </Box>

      <Flex ml="11%" mt="10px" gap="10px">
        <Box>
          <Image
            borderRadius="8px"
            src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/Organicweb.png"
          ></Image>
          <Text>Exotic Vegetables</Text>
        </Box>

        <Box>
          <Image
            borderRadius="8px"
            src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/Readytoeatweb.png"
          />
          <Text>Meat, Poultry & Seafood</Text>
        </Box>

        <Box>
          <Image
            borderRadius="8px"
            src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/Freshartisinalbreadsweb.png"
          />
          <Text>Fresh Artisanal Breads</Text>
        </Box>

        <Box>
          <Image
            borderRadius="8px"
            src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/dailyessentialsweb.png"
          />
          <Text>Daily Essentials</Text>
        </Box>
      </Flex>

      <Box mt="20px" w="85%" ml="8%">
        <Image
          borderRadius="8px"
          src="https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_1320x355-blog2.jpg"
        ></Image>
      </Box>

      <Text mt="15px" fontFamily="Hammersmith 1" fontSize="25px">
        ----------WHAT'S TRENDING---------
      </Text>

      <Box w="85%" ml="8%" mt="25px">
        <Flex gap="5">
          <Box
            boxShadow="outline"
            p="6"
            rounded="md"
            bg="white"
            border="1px solid grey"
            borderRadius="10px"
          >
            <Image src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/17d6b165-a222-4e0e-9d2e-20c34236e277_425x425.jpg" />
            <Text>HA TAPIOCA FLOUR 400G</Text>
            <Text>Pc</Text>

            <Box ml="11%" display="flex" gap="30px">
              <Button bg="#c19a6b" color="white" >MRP ₹210</Button>
              <Button bg="#c19a6b" color="white" >ADD</Button>
            </Box>
          </Box>
          <Box
            boxShadow="outline"
            p="6"
            rounded="md"
            bg="white"
            border="1px solid grey"
            borderRadius="10px"
          >
            <Image src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/578a02e6-8e0b-4868-9689-5733471e3b87_425x425.jpg" />
            <Text>
              Kwality Wall'S Ice Cream - Magnum Chocotrffle Stick 80Ml
            </Text>
            <Text>Pc</Text>

            <Box ml="11%" display="flex" gap="30px">
              <Button bg="#c19a6b" color="white" >MRP ₹90</Button>
              <Button bg="#c19a6b" color="white" >ADD</Button>
            </Box>
          </Box>
          <Box
            boxShadow="outline"
            p="6"
            rounded="md"
            bg="white"
            border="1px solid grey"
            borderRadius="10px"
          >
            <Image src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/120d587f-37c9-4743-bc37-2cbb7bd57025_425x425.jpg" />
            <Text>HA ORGANIC MOONG DAL YELLOW SPLIT 500G</Text>
            <Text>Pc</Text>
            <Box ml="11%" display="flex" gap="30px">
              <Button bg="#c19a6b" color="white" >MRP ₹149</Button>
              <Button bg="#c19a6b" color="white" >ADD</Button>
            </Box>
          </Box>

          <Box
            boxShadow="outline"
            p="6"
            rounded="md"
            bg="white"
            border="1px solid grey"
            borderRadius="10px"
          >
            <Image src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/17d6b165-a222-4e0e-9d2e-20c34236e277_425x425.jpg" />
            <Text>HA TAPIOCA FLOUR 400g</Text>
            <Text>Pc</Text>
            <Box ml="11%" display="flex" gap="30px">
              <Button bg="#c19a6b" color="white" >MRP ₹210</Button>
              <Button bg="#c19a6b" color="white" >ADD</Button>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Text mt="20px" fontSize="28px" fontWeight="bold">
        --------OUR EVENTS----------
      </Text>

      <Box w="85%" ml="8%" mt="25px" h="200%">
        <Flex gap="25px">
          <Box>
            <Image
              w="400px"
              borderRadius="7px"
              src="https://www.naturesbasket.co.in/Images/PhotoGallery/SanjeevKapoor_at_KolkataGallary.jpg"
            />
          </Box>
          <Box>
            <Image
              w="400px"
              borderRadius="7px"
              src="https://d1z88p83zuviay.cloudfront.net/Images/PhotoGallery/Abhijit_Saha_Thumbnail.png"
            />
          </Box>
          <Box>
            <Image
              w="400px"
              borderRadius="7px"
              src="https://www.naturesbasket.co.in/Images/PhotoGallery/Chef-Saby.jpg"
            />
          </Box>
        </Flex>
      </Box>

      <Text mt="30px" fontSize="28px">
        -----------DISCOVER MORE-----------
      </Text>

      <Center>
        <Box mt={9} w={1250}>
          <Tabs>
            <TabList>
              <Tab fontFamily="Hammersmith 1" fontSize="28px">
                OFFER
              </Tab>
              <Spacer />
              <Tab fontFamily="Hammersmith 1" fontSize="28px">
                Organic
              </Tab>
              <Spacer />

              <Tab fontFamily="Hammersmith 1" fontSize="28px">
                HEALTHY
              </Tab>
              <Spacer />

              <Tab fontFamily="Hammersmith 1" fontSize="28px">
                GIFTS
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel >
                <Box
                  w="102%"
                  ml="-5px"
                  mt="20px"
                  h="400px"
                  display="flex"
                  gap="40px"
                >
                  <Box border="3px solid grey"  borderRadius="10px">
                    <Image src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/eb67bb12-a336-4dab-9913-652d224e83a9_425x425.jpg"></Image>
                    <Text>RAW PRESSERY 100% ORANGE JUICE 250ML BTL</Text>

                    <Box ml="11%" display="flex" gap="30px" mt="3%">
                      <Button bg="#c19a6b" color="white" >MRP ₹210</Button>
                      <Button bg="#c19a6b" mr="15px" color="white" onClick={()=>{ return navigate("productoffers")}}  >VIEW MORE</Button>
                    </Box>
                  </Box>
                  <Box border="3px solid grey" borderRadius="10px">
                    <Image src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/389a321e-91d8-4cc7-802f-0a2a7481d72a_425x425.jpeg"></Image>
                    <Text>RAW PRESSERY 100% ORANGE JUICE 250ML BTL</Text>

                    <Box ml="11%" display="flex" gap="30px" mt="3%" >
                      <Button bg="#c19a6b" color="white" >MRP ₹210</Button>
                      <Button bg="#c19a6b" mr="15px" color="white" onClick={()=>{ return navigate("productoffers")}}  >VIEW MORE</Button>
                    </Box>
                  </Box>
                  <Box border="3px solid grey" borderRadius="10px">
                    <Image src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/c4401f4b-3663-4e52-affc-d4ed3dc6c7ab_425x425.jpg"></Image>
                    <Text>RAW PRESSERY 100% ORANGE JUICE 250ML BTL</Text>

                    <Box ml="11%" display="flex" gap="30px" mt="3%" >
                      <Button bg="#c19a6b" color="white" >MRP ₹210</Button>
                      <Button bg="#c19a6b" mr="15px" color="white" onClick={()=>{ return navigate("productoffers")}}  >VIEW MORE</Button>
                    </Box>
                  </Box>
                  <Box border="3px solid grey" borderRadius="10px">
                    <Image src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1350955_1_425x425.jpg"></Image>
                    <Text>RAW PRESSERY 100% ORANGE JUICE 250ML BTL</Text>

                    <Box ml="11%" display="flex" gap="30px" mt="3%" >
                      <Button bg="#c19a6b" color="white" >MRP ₹210</Button>
                      <Button bg="#c19a6b" mr="15px" color="white" onClick={()=>{ return navigate("productoffers")}}  >VIEW MORE</Button>
                    </Box>
                  </Box>
                </Box>
              </TabPanel>
              
              <TabPanel>
                   <Box w="102%" ml="-5px" mt="20px" h="400px" display="flex" gap="40px">
                  <Box border="3px solid grey" borderRadius="10px">
                    <Image src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1356020_1_425x425.jpg"></Image>
                    <Text>RAW PRESSERY 100% ORANGE JUICE 250ML BTL</Text>

                    <Box ml="11%" display="flex" gap="30px" mt="3%" >
                      <Button bg="#c19a6b" color="white" >MRP ₹210</Button>
                      <Button bg="#c19a6b" mr="15px" color="white" onClick={()=>{ return navigate("productoffers")}}  >VIEW MORE</Button>
                    </Box>
                  </Box>
                  <Box border="3px solid grey" borderRadius="10px">
                    <Image src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d4b3e340-bc58-49a4-95d0-aa7f9f232b68_425x425.jpg"></Image>
                    <Text>RAW PRESSERY 100% ORANGE JUICE 250ML BTL</Text>

                    <Box ml="11%" display="flex" gap="30px" mt="3%" >
                      <Button bg="#c19a6b" color="white" >MRP ₹210</Button>
                      <Button bg="#c19a6b" mr="15px" color="white" onClick={()=>{ return navigate("productoffers")}}  >VIEW MORE</Button>
                    </Box>
                  </Box>
                  <Box border="3px solid grey" borderRadius="10px">
                    <Image src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/aff5852b-b487-45f8-b65a-22cbc4842982_425x425.jpg"></Image>
                    <Text>RAW PRESSERY 100% ORANGE JUICE 250ML BTL</Text>

                    <Box ml="11%" display="flex" gap="30px" mt="3%" >
                      <Button bg="#c19a6b" color="white" >MRP ₹210</Button>
                      <Button bg="#c19a6b" mr="15px" color="white" onClick={()=>{ return navigate("productoffers")}}  >VIEW MORE</Button>
                    </Box>
                  </Box>
                  <Box border="3px solid grey" borderRadius="10px">
                    <Image src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1300491_1_425x425.jpg"></Image>
                    <Text>RAW PRESSERY 100% ORANGE JUICE 250ML BTL</Text>

                    <Box ml="11%" display="flex" gap="30px" mt="3%" >
                      <Button bg="#c19a6b" color="white" >MRP ₹210</Button>
                      <Button bg="#c19a6b" mr="15px" color="white" onClick={()=>{ return navigate("productoffers")}}  >VIEW MORE</Button>
                    </Box>
                  </Box>
                </Box>
              </TabPanel>
              <TabPanel>
              <Box
                  w="102%"
                  ml="-5px"
                  mt="20px"
                  h="400px"
                  display="flex"
                  gap="40px"
                >
                  <Box border="3px solid grey" borderRadius="10px">
                    <Image src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/9ea315fa-fcd1-4d3b-a968-17a78bfafc5b_425x425.jpg"></Image>
                    <Text>RAW PRESSERY 100% ORANGE JUICE 250ML BTL</Text>

                    <Box ml="11%" display="flex" gap="30px" mt="3%" >
                      <Button bg="#c19a6b" color="white" >MRP ₹210</Button>
                      <Button bg="#c19a6b" mr="15px" color="white" onClick={()=>{ return navigate("productoffers")}}  >VIEW MORE</Button>
                    </Box>
                  </Box>
                  <Box border="3px solid grey" borderRadius="10px">
                    <Image src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/389a321e-91d8-4cc7-802f-0a2a7481d72a_425x425.jpeg"></Image>
                    <Text>RAW PRESSERY 100% ORANGE JUICE 250ML BTL</Text>

                    <Box ml="11%" display="flex" gap="30px" mt="3%" >
                      <Button bg="#c19a6b" color="white" >MRP ₹210</Button>
                      <Button bg="#c19a6b" mr="15px" color="white" onClick={()=>{ return navigate("productoffers")}}  >VIEW MORE</Button>
                    </Box>
                  </Box>
                  <Box border="3px solid grey" borderRadius="10px">
                    <Image src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1f4696d3-e753-463e-a87c-1457b2e2f242_425x425.jpg"></Image>
                    <Text>RAW PRESSERY 100% ORANGE JUICE 250ML BTL</Text>

                    <Box ml="11%" display="flex" gap="30px" mt="3%" >
                      <Button bg="#c19a6b" color="white" >MRP ₹210</Button>
                      <Button bg="#c19a6b" mr="15px" color="white" onClick={()=>{ return navigate("productoffers")}}  >VIEW MORE</Button>
                    </Box>
                  </Box>
                  <Box border="3px solid grey" borderRadius="10px">
                    <Image src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1350955_1_425x425.jpg"></Image>
                    <Text>RAW PRESSERY 100% ORANGE JUICE 250ML BTL</Text>

                    <Box ml="11%" display="flex" gap="30px" mt="3%" >
                      <Button bg="#c19a6b" color="white" >MRP ₹210</Button>
                      <Button bg="#c19a6b" mr="15px" color="white" onClick={()=>{ return navigate("productoffers")}}  >VIEW MORE</Button>
                    </Box>
                  </Box>
                </Box>
              </TabPanel>
              <TabPanel>
              <Box
                  w="102%"
                  ml="-5px"
                  mt="20px"
                  h="400px"
                  display="flex"
                  gap="40px"
                >
                  <Box border="3px solid grey" borderRadius="10px">
                    <Image src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/19148657-cffb-446f-a956-99dac901384d_425x425.jpg"></Image>
                    <Text>RAW PRESSERY 100% ORANGE JUICE 250ML BTL</Text>

                    <Box ml="11%" display="flex" gap="30px" mt="3%" >
                      <Button bg="#c19a6b" color="white" >MRP ₹210</Button>
                      <Button bg="#c19a6b" mr="15px" color="white" onClick={()=>{ return navigate("productoffers")}}  >VIEW MORE</Button>
                    </Box>
                  </Box>
                  <Box border="3px solid grey" borderRadius="10px">
                    <Image src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/389a321e-91d8-4cc7-802f-0a2a7481d72a_425x425.jpeg"></Image>
                    <Text>RAW PRESSERY 100% ORANGE JUICE 250ML BTL</Text>

                    <Box ml="11%" display="flex" gap="30px" mt="3%" >
                      <Button bg="#c19a6b" color="white" >MRP ₹210</Button>
                      <Button bg="#c19a6b" mr="15px" color="white" onClick={()=>{ return navigate("productoffers")}}  >VIEW MORE</Button>
                    </Box>
                  </Box>
                  <Box border="3px solid grey" borderRadius="10px">
                    <Image src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/93d3484e-d057-4f84-8afc-565082186cb5_425x425.jpg"></Image>
                    <Text>RAW PRESSERY 100% ORANGE JUICE 250ML BTL</Text>

                    <Box ml="11%" display="flex" gap="30px" mt="3%" >
                      <Button bg="#c19a6b" color="white" >MRP ₹210</Button>
                      <Button bg="#c19a6b" mr="15px" color="white" onClick={()=>{ return navigate("productoffers")}}  >VIEW MORE</Button>
                    </Box>
                  </Box>
                  <Box border="3px solid grey" borderRadius="10px">
                    <Image src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/27ddb5c5-dc3c-49df-8db1-bf2f3a46287f_425x425.jpg"></Image>
                    <Text>RAW PRESSERY 100% ORANGE JUICE 250ML BTL</Text>

                    <Box ml="11%" display="flex" gap="30px" mt="3%" >
                      <Button bg="#c19a6b" color="white" >MRP ₹210</Button>
                      <Button bg="#c19a6b" mr="15px" color="white" onClick={()=>{ return navigate("productoffers")}}  >VIEW MORE</Button>
                    </Box>
                  </Box>
                </Box>
              </TabPanel>

              <TabPanel>
              <Box
                  w="102%"
                  ml="-5px"
                  mt="20px"
                  h="400px"
                  display="flex"
                  gap="40px"
                >
                  <Box border="3px solid grey" borderRadius="10px">
                    <Image src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/eb67bb12-a336-4dab-9913-652d224e83a9_425x425.jpg"></Image>
                    <Text>RAW PRESSERY 100% ORANGE JUICE 250ML BTL</Text>

                    <Box ml="11%" display="flex" gap="30px" mt="3%" >
                      <Button bg="#92be4d" color="white" >MRP ₹210</Button>
                      <Button bg="#92be4d" color="white" >ADD</Button>
                    </Box>
                  </Box>
                  <Box border="3px solid grey" borderRadius="10px">
                    <Image src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/389a321e-91d8-4cc7-802f-0a2a7481d72a_425x425.jpeg"></Image>
                    <Text>RAW PRESSERY 100% ORANGE JUICE 250ML BTL</Text>

                    <Box ml="11%" display="flex" gap="30px" mt="3%" >
                      <Button bg="#92be4d" color="white" >MRP ₹210</Button>
                      <Button bg="#92be4d" color="white" >ADD</Button>
                    </Box>
                  </Box>
                  <Box border="3px solid grey" borderRadius="10px">
                    <Image src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/c4401f4b-3663-4e52-affc-d4ed3dc6c7ab_425x425.jpg"></Image>
                    <Text>RAW PRESSERY 100% ORANGE JUICE 250ML BTL</Text>

                    <Box ml="11%" display="flex" gap="30px" mt="3%" >
                      <Button bg="#92be4d" color="white" >MRP ₹210</Button>
                      <Button bg="#92be4d" color="white" >ADD</Button>
                    </Box>
                  </Box>
                  <Box border="3px solid grey" borderRadius="10px">
                    <Image src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1350955_1_425x425.jpg"></Image>
                    <Text>RAW PRESSERY 100% ORANGE JUICE 250ML BTL</Text>

                    <Box ml="11%" display="flex" gap="30px" mt="3%" >
                      <Button bg="#92be4d" color="white" >MRP ₹210</Button>
                     
                      <Button bg="#92be4d" color="white" >ADD</Button>
                      
                    </Box>
                  </Box>
                </Box>
               </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Center>




   {/* Footer Section */}

{/* 

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
      </HStack> */}
 
    </div>

  );
};

export default HomePage;
