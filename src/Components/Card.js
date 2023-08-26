import React from 'react'
import { Link } from 'react-router-dom'
const Card = () => {
  return (
    <div>
       <div className="container">
     <div className="card m-4" style={{"width":"18rem"}}>
  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.imcjBhaW2gNfoEhbXX4kpQHaE8%26pid%3DApi&f=1&ipt=86fb7d94fa37c25f365e2364228e590ee1215b4a6913790651e777812540b894&ipo=images" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
 <Link to="#" className="btn btn-primary">Go somewhere</Link>
  </div></div>
</div> 
    </div>
  )
}

export default Card
