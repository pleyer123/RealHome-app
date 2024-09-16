import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/pagination";
import "./FeaturedProperties.css"
import SwiperButtons from "./SwiperButtons.jsx";


const featuredProperties = [
  {
    id: 1,
    title: "Luxury Villa in Beverly Hills",
    price: "$4,500,000",
    image: "/LaHome.jpg", 
    description: "Indulge in luxury with this 4-bedroom, 5-bathroom villa featuring a private pool and breathtaking hillside views. Enjoy high-end finishes, a gourmet kitchen, and spacious living areas in exclusive Beverly Hills, close to upscale shopping and dining.",
  },
  {
    id: 2,
    title: "Modern Apartment in New York",
    price: "$1,200,000",
    image: "/NYC.jpeg",
    description: "Modern 2-bedroom, 2-bathroom apartment with floor-to-ceiling windows and city views. Features include a sleek kitchen and access to building amenities like a fitness center and rooftop lounge. Located in the vibrant heart of New York City.",
  },
  {
    id: 3,
    title: "Modern Penthouse in Manhattan",
    price: "$2,850,000",
    image: "/penthouse.jpeg",
    description: "Stylish 3-bedroom, 4-bathroom penthouse in Manhattan with stunning city views, a private rooftop terrace, and upscale finishes. Enjoy an open layout, floor-to-ceiling windows, and easy access to top shopping and dining.",
  },
  {
    id: 4,
    title: "Beach House in Malibu",
    price: "$3,800,000",
    image: "/BeachHouse Malibu.jpeg",
    description: "Enjoy stunning ocean views from this charming 3-bedroom, 3-bathroom beach house with direct beach access. Features include an open living area, modern kitchen, and expansive deck perfect for outdoor entertaining. Located in coveted Malibu, this home offers a serene coastal lifestyle.",
  },
  {
    id: 5,
    title: "Urban Chic Condo",
    price: "$850,000",
    image: "/urban.jpeg",
    description: "Stylish 2-bedroom, 2-bathroom condo with sleek finishes and an open layout. Features include a spacious living area, contemporary kitchen with high-end appliances, and a private balcony with city views. Located in the heart of downtown, enjoy convenient access to public transport, dining, and entertainment.",
  },
  {
    id: 6,
    title: "Cozy Family Retreat",
    price: "$675,000",
    image: "/family.jpeg" ,
    description: "Welcoming 3-bedroom, 2-bathroom home with a cozy living room, updated kitchen, and a large backyard. Perfect for families, it includes a two-car garage and is situated in a friendly suburban community with excellent schools and nearby parks.",
  },
];

function FeaturedProperties() {
 
  return (
    <div className="featured-properties-container">
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
              <p className="property-description">{property.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


    </div>

  );
  
}

export default FeaturedProperties;



 
 