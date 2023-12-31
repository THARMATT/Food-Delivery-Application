import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";

const Home = () => {
  const [foodCategory, setFoodCategory] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application.json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setFoodItem(data[0]);
        setFoodCategory(data[1]);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
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
      </div>
      <div className="container">
        {foodCategory.length !== 0 &&
          foodCategory.map((category) => (
            <div className="row mb-3" key={category._id}>
              <div className="fs-3 m-3">{category.CategoryName}</div>
              <hr />
              {foodItem.length !== 0 &&
                foodItem
                  .filter((item) => item.CategoryName === category.CategoryName)
                  .map((filterItems) => (
                    <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                      <Card
                        foodItem={filterItems}
                        options={filterItems.options}
                      />
                    </div>
                  ))}
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;



















































// import React, { useEffect, useState } from "react";
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
// // import Carousel from "../Components/Carousel";
// import Card from "../Components/Card";
// const Home = () => {
//   // const [search, setSearch] = useState('');
//   const [foodCategory, setfoodCategory] = useState([]);
//   const [foodItem, setfoodItem] = useState([]);

//   const loadData = async () => {
//     let response = await fetch("http://localhost:5000/api/foodData", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application.json",
//       },
//     });
//     response = await response.json();
//     setfoodItem(response[0]);
//     setfoodCategory(response[1]);
//     console.log(response[0],response[1]) //data
//   };
//   useEffect(() => {
//     loadData();
//   }, []);

//   return (
//     <div>
//       <Navbar />
      
//       <div className="container">
//         {foodCategory !== []
//           ? foodCategory.map((data) => {
//               return (
//                 <div className="row mb-3">
//                   <div key={data._id} className="fs-3 m-3">
//                     {data.CategoryName}
//                   </div>
//                   <hr />
//                   {foodItem !== [] ? (
//                     foodItem
//                       .filter((item) => item.CategoryName === data.CategoryName)
//                       .map((filterItems) => {
//                         return (
//                           <div
//                             key={filterItems._id}
//                             className="col-12 col-md-6 col-lg-3"
//                           >
//                             <Card foodItem = {filterItems}
//                               // foodName={filterItems.name}
//                               options={filterItems.options}
//                               // imgSrc={filterItems.img}
//                               // description={filterItems.description}
//                             ></Card>
//                           </div>
//                         );
//                       })
//                   ) : (
//                     <div>no such data found</div>
//                   )}
//                 </div>
//               );
//             })
//           : ""}
//         <Card />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Home;
