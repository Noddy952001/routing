import { useParams } from "react-router-dom";
import React from "react";
import { useEffect , useState } from "react";


export const ProductsDetailsPage = () => {

  const {name} = useParams()
    const [data,setData] = useState([]);
  React.useEffect(()=>{
    updateNews()
  },[])
  // const getdata = ()=>{
  //   axios.get(`https://fakestoreapi.com/products/${name}`).then(function(res){
  //       setData(...render,res.data)
  //   })
  // }
  const updateNews =  async()=>{
    const res= await  fetch(`https://fakestoreapi.com/products/${name}`)
    const data = await res.json();
    setData(data)
}
console.log(data)


  return (
    <>
          <div>

              {data.title}
              {data.price}


          </div>
    </>
  );
};
