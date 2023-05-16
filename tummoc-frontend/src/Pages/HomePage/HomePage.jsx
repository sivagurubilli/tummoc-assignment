import React, { useCallback, useEffect, useState } from 'react'
import { Grid, GridItem,Box, Flex, Select, FormLabel } from "@chakra-ui/react"
import WithSubnavigation from '../../Components/Navabar'
import styles from "./styles.module.css";



const HomePage = () => {
const [AllProducts,setAllProducts] = useState([])



const GetProducts =useCallback(async()=>{
  try{
const response= await  GetProductsService()
setAllProducts(response.data)
setFilterData(response.data)
setSortedData(response.data);
  }catch(error){

  }
},[])

useEffect(()=>{
  GetProducts()
},[GetProducts])






  return (


    <div className={styles.container}>

<WithSubnavigation />

<Flex justifyContent="flex-end" mt="50px" mr="10%">

 
</Flex>


<Box w="80%" ml="10%"   borderRadius="10px"
        boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)" p='50px' mt="20px" bg="white">
<Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>

</Grid>
<Flex mt="20px" justifyContent="flex-end">

</Flex>
</Box>


    </div>
  )
}

export default HomePage