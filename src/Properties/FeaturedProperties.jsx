import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/pagination";
import "./FeaturedProperties.css"
import SwiperButtons from "./SwiperButtons.jsx";
import { useNavigate } from "react-router-dom"; 


const featuredProperties = [
  {
    id: 1,
    title: "Luxury Villa in Beverly Hills",
    price: "$4,500,000",
    image: "/LaHome.jpg", 
    bedrooms: 4,
    bathrooms :2, 
    garage: 2,
    description: "Luxury villa featuring private pool and hillside views.",
  },


  {
    id: 2,
    title: "Modern Apartment in New York",
    price: "$1,200,000",
    image: "/NYC.jpeg",
    bedrooms: 2,
    bathrooms: 2,
    garage: 1,
    description: "Modern apartment with city views and luxury amenities."
  },


  {
    id: 3,
    title: "Modern Penthouse in Manhattan",
    price: "$2,850,000",
    image: "/penthouse.jpeg",
    bedrooms: 3,
    bathrooms: 4,
    garage: 2,
    description: "Stylish penthouse with rooftop terrace and city views."
  },


  {
    id: 4,
    title: "Beach House in Malibu",
    price: "$3,800,000",
    image: "/BeachHouse Malibu.jpeg",
    bedrooms: 3,
    bathrooms: 3,
    garage: 2,
    description: "Ocean views with beach access in beautiful Malibu."
  },


  {
    id: 5,
    title: "Urban Chic Condo",
    price: "$850,000",
    image: "/urban.jpeg",
    bedrooms: 2,
    bathrooms: 2,
    garage: 1,
    description: "Stylish condo in downtown with modern finishes."
  },


  {
    id: 6,
    title: "Cozy Family Retreat",
    price: "$675,000",
    image: "/family.jpeg",
    bedrooms: 3,
    bathrooms: 2,
    garage: 2,
    description: "Family-friendly home with a large backyard."
  }
];



function FeaturedProperties() {

  
  const navigate = useNavigate()

  const listings = () => {
    navigate("/Listings"); 
  };


  return (
    <div className="featured-properties-container" id="fprop-container">
      <h2 className="section-title">Featured Properties</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
      
        pagination={{ clickable: false }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        
        <SwiperButtons/>

        {featuredProperties.map((property) => (
          <SwiperSlide key={property.id}>
            <div className="property-card">
              <img
                src={property.image}
                alt={property.title}
                className="property-image"
              />
              <h3 className="property-title">{property.title}</h3>
              <p className="property-price">{property.price}</p>
                <div className="property-features">
                    <div className="feature">
                      <i className="fas fa-bed"></i> <p>{property.bedrooms} Beds</p>
                    </div>

                    <div className="feature">
                      <i className="fas fa-bath"></i> <p>{property.bathrooms} Baths</p>
                    </div>

                    <div className="feature">
                      <i className="fas fa-car"></i><p> {property.garage}  Car Garage</p>
                    </div>
                </div>
              <p className="property-description">{property.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="listings-button" onClick={listings}>Get Your Dream Home</button>


    </div>

  );
  
}

export default FeaturedProperties;



 
 