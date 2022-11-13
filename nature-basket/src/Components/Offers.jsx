
import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Offers = () => {

    const data= [
        {
            name: "RAW PRESSERY 100% ORANGE JUICE 250M..",
            img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/eb67bb12-a336-4dab-9913-652d224e83a9_425x425.jpg",
            quantity:"1pc",
            price:" Rs.80.00/-",
        },
        {
            name: "CHINGS HOT GARLIC INSTANT NDLS 240G",
            img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/17346a46-45b6-4f54-bb10-855d3be75328_425x425.jpg",
            quantity:"1 Pc",
            price:"Rs.52.20/-",
        },
        {
            name: "BEANIES INSTANT COFFEE IRISH CREAM ..",
            img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/8334d131-fd8f-4c45-9a41-e81bee4c3108_425x425.jpg",
            quantity:"1 Pc",
            price:"Rs.445.50/-",
        },
        {
            name: "Baskin Robbins Ice Cream - Missipy .. ",
            img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/fe108a28-fd58-4c98-9ff3-69de0253464b_425x425.jpg",
            quantity:"1 Pc",
            price:"Rs.52.20/-",
        },
    ]

  return (
    <Box>
        {data && data.map((el)=>{
            return <Box>
                <Image src={el.img} alt="img" />
                <Text fontSize="lg">{el.name}</Text>
                <Text fontSize="sm">{el.quantity}</Text>
                <Text fontSize="sm">{el.price}</Text>
            </Box>
        })}
    </Box>
  )
}

export default Offers