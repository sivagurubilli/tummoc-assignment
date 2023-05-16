import React, { useState } from 'react';
import axios from 'axios';
import WithSubnavigation from '../../Components/Navabar'
import styles from "./styles.module.css";
import { Box, Flex ,Button} from '@chakra-ui/react';

const Upload = () => {

    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('file', file);
  
      // Send file to server using axios
      axios.post('/upload', formData).then((response) => {
        console.log(response.data);
      });
    };

  return (
 
    <div className={styles.container}>

<WithSubnavigation />

<Flex justifyContent="flex-end" mt="50px" mr="10%">

 
</Flex>


<Box w="80%" ml="10%"   borderRadius="10px"
        boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)" p='50px' mt="20px" bg="white">

<Flex mt="20px" alignItems={'center'} justifyContent={'center'}>
<form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <Button colorScheme="blue" type="submit">Upload</Button>
    </form>
</Flex>
</Box>


    </div>
  )
}

export default Upload