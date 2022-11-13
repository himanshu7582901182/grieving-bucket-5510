import logo from "../Image/Food Mart.png";

import {
  Box,
  Divider,
  Image,
  Input,
  Select,
  SlideFade,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";
import { BsCalendarCheck } from "react-icons/bs";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookStore = () => {
  let [OneButton, setOneButton] = useState([]);
  let [isdisabled, setisdisabled] = useState(false);
  const { isOpen, onToggle } = useDisclosure();
  const data = [
    { name: "7:00 AM to 8:00 AM", clr: "#cf4136" },
    { name: "8:00 AM to 8:00 AM", clr: "#3d7527" },
    { name: "9:00 AM to 10:00 AM", clr: "#cf4136" },
    { name: "11:00 AM to 12:00 AM", clr: "#3d7527" },
    { name: "1:00 PM to 2:00 PM", clr: "#cf4136" },
    { name: "3:00 PM to 4:00 PM", clr: "#3d7527" },
    { name: "5:00 PM to 6:00 PM", clr: "#cf4136" },
    { name: " 6:00 PM to 7:00 PM", clr: "#3d7527" },
    { name: " 6:00 PM to 7:00 PM", clr: "#cf4136" },
  ];
  return (
    <div>
      {/* <Box>
            <Link to="/" ><Image src={logo} ml="80px" w="160px" /></Link>
            <Divider bg="gray.400" mt="-17px" h={0.5} />
            
        </Box> */}

      <Box
        display="grid"
        gridTemplateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
        ]}
        m="auto"
        gap="20px"
        mt="-200"
        w="70%"
      >
        <Box textAlign="left">
          <label>City: *</label>
          <Select w="80%" placeholder="Select option" border="3px solid black">
            <option value="mumbai">Mumbai</option>
            <option value="bangalore">Bangalore</option>
            <option value="pune">Pune</option>
          </Select>
        </Box>
        <Box textAlign="left">
          <label>Store: *</label>
          <Select
            onChange={onToggle}
            w="80%"
            placeholder="Select option"
            border="3px solid black"
          >
            <option value="benetton">Benetton</option>
            <option value="croma">Croma</option>
            <option value="prakash">Prakash Cloth Stores</option>
            <option value="mohan">Mohan Store's</option>
            <option value="jack">Jack&Jones Exclusive Store</option>
          </Select>
        </Box>

        <Box textAlign="left" w="80%">
          <label>Store: *</label>
          <Input
            type="date"
            border="3px solid black"
            placeholder="Select a date"
          />
        </Box>
        <Box textAlign="left" w="80%">
          <label>Mobile Number: *</label>
          <Input
            border="3px solid black"
            placeholder="Enter your mobile number"
          />
        </Box>
      </Box>

      <Box>
        <SlideFade in={isOpen} offsetY="20px">
          <Box
            p="40px"
            color="white"
            mt="10"
            w="70%"
            bg="white"
            ml="180px"
            rounded="md"
            shadow="md"
          >
            <Text
              color="black"
              mb="20px"
              fontSize="20px"
              textAlign="left"
              display="flex"
              gap={2}
              alignItems="center"
            >
              {" "}
              <BsCalendarCheck /> Choose your shopping slot
            </Text>
            <Box display="grid" gridTemplateColumns="repeat(3,1fr)" gap="22px">
              {data &&
                data.map((el) => {
                  return (
                    <Button
                      _hover={{ bg: el.clr }}
                      disabled={isdisabled}
                      onClick={() => {
                        return setisdisabled(true), setOneButton(el.name);
                      }}
                      w="200px"
                      bg={el.clr}
                    >
                      {el.name}
                    </Button>
                  );
                })}
            </Box>
          </Box>
          <Box>
            <Button
              display="flex"
              bg="#c19a6b"
              color="white"
              justifyContent="centre"
              ml="12%"
              mt={5}
            >
              Your Slot Is In Between :-
            </Button>
            <Button mt="-4.5%" colorScheme="white" color="red" mr="35%">
              {OneButton}
            </Button>
          </Box>
        </SlideFade>
      </Box>
      <Text mt="-350px" mb="25%">
        Copyright © Nature's Basket 2022
      </Text>
    </div>
  );
};

export default BookStore;
