import React from 'react'
import { Link } from 'react-router-dom'
const Card = (props) => {

  // let options= props.option || {}; 
  // const priceOptions=Object.keys(options)


  const handleAddtoCart=()=>{}
  return (
    <div>
      <div className="container">
        <div id="card" className="card m-4 overflow-hidden" style={{ "width": "18rem" }}>
          <img src={props.imgSrc} alt="imgava" srcset="" style={{ "height": "12em" ,"width": "18em", objectFit:"fill"}}  className='overflow-hidden'/>
          {/* <img src="" className="card-img-top" alt="..."/> */}
          <div className="card-body">
            <h5 className="card-title">{props.foodName}</h5>
            {/* <p className="card-text">{props.
              description}</p> */}
            <div className='container w-100 p-0' style={{ height: "38px" }}>
              <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: "#FF0000" }} >
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>)
                })}
              </select>
              <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: "#FF0000" }} >
                {/* {priceOptions.map((data) => {
                return <option key={data} value={data}>{data}</option>
              })} */}
              <option value="half">half</option>
              <option value="full">full</option>
              </select>
              <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                total price
                {/* ₹{finalPrice}/- */}
              </div>
            </div>
<hr />
            <Link to="#" className="btn btn-success " onClick={handleAddtoCart}>Add to Cart</Link>
          </div></div>
      </div>
    </div>
  )
}

export default Card
