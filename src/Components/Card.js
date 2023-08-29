import React, { useEffect, useState, useRef } from 'react'; // Import statements corrected
import {useDispatchCart,useCart} from './ContextReducer'
const Card = (props) => {
  const data = useCart();
  const dispatch = useDispatchCart();

  const options = props.options;
  const priceOptions = Object.keys(options); // Corrected line

  const foodItem = props.foodItem;
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(priceOptions[0]); // Set a default size

  // Calculate finalPrice based on selected size
  const finalPrice = qty * parseInt(options[size] );

  const handleAddtoCart = async () => {
    await dispatch({
      type: 'ADD',
      id: props.foodItem._id,
      name: props.foodItem.name,
      qty: qty,
      size: size,
      price:finalPrice
    });
    console.log(data);
  };

  useEffect(() => {
    setSize(priceOptions[0]); // Set a default size
  }, [priceOptions]);

  const priceRef = useRef();
  useEffect(() => {
    setSize(priceRef.current.value); // Set a default size
  }, [priceRef]);

  return (
    <div>
      <div className="container">
        <div id="card" className="card m-4 overflow-hidden" style={{ width: "18rem" }}>
          <img src={props.foodItem.img} alt="imgava" style={{ height: "12em", width: "18em", objectFit: "fill" }} className='overflow-hidden' />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <div className='container w-100 p-0' style={{ height: "38px" }}>
              <select className="m-2 h-100 w-20 bg-success text-white rounded" onChange={(e) => setQty(e.target.value)}>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  )
                })}
              </select>
              <select className="m-2 h-100 w-20 bg-success text-white rounded " ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                
                 <option value="half">half</option>
             <option value="full">full</option> 
{priceOptions.map((data) => {
                  return <option key={data} value={data}>{data}</option>
                })}
              </select>
              <div className=' d-inline ms-2 h-100 w-20 fs-5'>
                ₹{finalPrice}/-
              </div>
            </div>
            <hr />
            <button className="btn btn-success" onClick={handleAddtoCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
















// import { useEffect, useState,useRef } from 'react'
// import React from 'react'
// import {useDispatchCart,useCart} from './ContextReducer'
// import { Link } from 'react-router-dom'
// const Card = (props) => {
// let data=useCart()
// let dispatch=useDispatchCart();

//   const options= props.options; 
//   const priceOptions=Object.keys(options) //error
//   let foodItem=props.foodItem;
// const [qty,setQty]=useState(1)
// const [size,setSize]=useState('')


  

// var finalPrice=qty*parseInt(options[size]);
//   const handleAddtoCart=async()=>{
// await dispatchEvent({type:'ADD',id:props.foodItem._id,name:props.foodItem.name,qty:qty,size:size})
// console.log(data)

//   }

//   useEffect(()=>{
//     setSize(priceRef.current.value)
//   },[])
//   const priceRef=useRef();
//   return (
//     <div>
//       <div className="container">
//         <div id="card" className="card m-4 overflow-hidden" style={{ "width": "18rem" }}>
//           <img src={props.foodItem.img} alt="imgava" srcset="" style={{ "height": "12em" ,"width": "18em", objectFit:"fill"}}  className='overflow-hidden'/>
//           {/* <img src="" className="card-img-top" alt="..."/> */}
//           <div className="card-body">
//             <h5 className="card-title">{props.foodItem.name}</h5>
//             {/* <p className="card-text">{props.
//               description}</p> */}
//             <div className='container w-100 p-0' style={{ height: "38px" }}>
//               <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: "#FF0000" }} onChange={(e)=>setQty(e.target.value)}>
//                 {Array.from(Array(6), (e, i) => {
//                   return (
//                     <option key={i + 1} value={i + 1}>{i + 1}</option>)
//                 })}
//               </select>
//               <select className="m-2 h-100 w-20 bg-success text-black rounded"   ref={priceRef} style={{ select: "#FF0000" }} onChange={(e)=>setSize(e.target.value)}>
//                 {priceOptions.map((data) => {
//                 return <option key={data} value={data}>{data}</option>
//               })}
//               {/* <option value="half">half</option>
//               <option value="full">full</option> */}
//               </select>
//               <div className=' d-inline ms-2 h-100 w-20 fs-5' >
               
//                ₹{finalPrice}/-
//               </div>
//             </div>
// <hr />
//             <Link to="#" className="btn btn-success " onClick={handleAddtoCart}>Add to Cart</Link>
//           </div></div>
//       </div>
//     </div>
//   )
// }

// export default Card
