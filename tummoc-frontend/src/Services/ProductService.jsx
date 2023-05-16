import axios from "axios"

//create product
export async function ProductCreateService(data){
    const {  imageURL,
    name,
    price,
    rating,
    offerDate,
    offer,
    category} = data
  try{
   
      const response = await axios.post("/product/create",{
        imageURL,
        name,
        price,
        rating,
        offerDate,
        offer,
        category
          } )
      return response.data
  }catch(error){
  
  return error
  }
  }


  //get all product values
  export async function GetProductsService(){
    try{
   
        const response = await axios.get("/product")
        return response
    }catch(error){
        return error
    }

}


  //get single product values
  export async function GetSingleProductsService(id){
    try{
   
        const response = await axios.get(`/product/${id}`)
        return response
    }catch(error){
        return error
    }
}

 //delete single product values
 export async function DeleteProductsService(id){
    try{
   
        const response = await axios.delete(`/product/${id}`)
        return response
    }catch(error){
        return error
    }
}
  //edit single product values
  export async function EditProductsService(id,data){
    const {  imageURL,
        name,
        price,
        rating,
        offerDate,
        offer,
        category} = data
    try{
   
        const response = await axios.patch(`/product/${id}`,
        {
            imageURL,
            name,
            price,
            rating,
            offerDate,
            offer,
            category
              }
        )
        return response
    }catch(error){
        return error
    }
}

 //filter all product values
 export async function GetFiltersService(){
    const cat= "Cloths"
    try{
   
        const response = await axios.get(`/product/filter?query=${cat}`)
    
        return response
    }catch(error){
        return error
    }

}

