import React from "react";

import { Box, Image, Badge, Button, Icon,Grid,GridItem } from "@chakra-ui/react";
import { BsFillCartCheckFill } from "react-icons/bs";

function ProductCard({ image, productName, price }) {
  return (

   <div>
    
    <Box>
      <Box maxW="sm" borderWidth="3px"  borderRadius="lg" overflow="hidden" >
        <Image src={image} alt={image} />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              In Stock
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            ></Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {productName}
          </Box>

          <Box>{price}</Box>
          <Box>
            <Button bg="#c19a6b" color="white" mt="7px" >
              {" "}
              <Icon mr={2} as={BsFillCartCheckFill} /> ADD
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
    </div>
  );
}

export default ProductCard;
