
export const addToCart =(product) =>{
    console.log("dâda",product)
    return{
        type:"ADDITEM",
        data:product
        
    }
}

export const removeFormCart =(data)=>{
    return{
        type:"DELITEM",
        payload: data
    }
}
