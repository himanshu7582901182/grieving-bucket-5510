import {Button, Grid,GridItem } from "@chakra-ui/react";
import ProductCard from './ProductCard'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ProdutOffers = () => {
  let [Data,setData] = useState([])
  let GetData = async() => {
    let res = await axios.get("http://localhost:4001/grosery")
    setData(res.data)
  }

  useEffect(()=>{
     GetData()
  },[])

  return (
    <div>
      
      <Button mt="-41%" bg="#b71761" color="white" >LATEST DEALS</Button>

  <Grid templateColumns='repeat(4, 1fr)' w="85%" margin="auto" mt="-15%" rowGap="50px" columnGap="30px" >
         {Data.map((el)=>{

          return <GridItem w='100%' mt="-20%" h="500px"><ProductCard image={el.image} productName={el.productName} price = {el.price} /></GridItem>

         })}
         </Grid>
    </div>
  )
}

export default ProdutOffers