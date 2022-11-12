

import React, { useState } from 'react'
import axios from "axios"
const Addmin = () => {
    let initState = {
        image:"",
        productName:"",
        price:"",

    }
    let [Data,setData] = useState(initState)


    let AddProduct = async () => {
      let res = await axios.post("http://localhost:4001/grosery",Data)

    }


    let InputData = (e) => {
      let {value,name}=e.target;
      setData({...Data,[name]:value})
    }

  return (
    <div>
        <input name='image' placeholder='image'  onChange={InputData} ></input>
        <input name='productName' placeholder='productName' onChange={InputData} ></input>
        <input name='price' placeholder='price' onChange={InputData} ></input>
        <button onClick={AddProduct} >Add</button>
    </div>
  )
}

export default Addmin