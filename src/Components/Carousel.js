import React from 'react'

const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade"style={{"objectFit":"contain !important"}} >
  <div className="carousel-inner">
    <div className="carousel-item active" >
      <img src="https://wallpapercave.com/wp/wp3376127.jpg" className="d-block w-100" alt=""/>
    </div>
    <div className="carousel-item">
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.qILtE96DLrI1Z0xohjXL3wHaEK%26pid%3DApi&f=1&ipt=abf8fac047e85f0e39ea9211b806d349cf59493e5512a03dda854c2668b716d1&ipo=images" className="d-block w-100" alt=""/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ytimg.com/vi/ziaFcwgEQg4/maxresdefault.jpg" className="d-block w-100" alt=""/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ytimg.com/vi/ziaFcwgEQg4/maxresdefault.jpg" className="d-block w-100" alt=""/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel
