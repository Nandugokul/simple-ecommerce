import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { items } from "../../../data/AllData";
import SingleProduct from "../../../ui/SingleProduct";

function ProductCarousel() {
  const sliderRef = useRef(null);
  const slicedItems = items.slice(3, 10);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
      <section className="max-w-screen-xl m-auto px-6 lg:px-20">
        <div className="flex items-center justify-between mb-8">
          <h4 className="font-semibold text-3xl">Trending Now</h4>
          <div>
            <button
              className="px-4 py-3 bg-black text-white mr-2"
              onClick={handlePrevClick}
            >
              {"<"}
            </button>
            <button
              className="px-4 py-3 bg-black text-white ml-2"
              onClick={handleNextClick}
            >
              {">"}
            </button>
          </div>
        </div>
        <div>
          <Slider ref={sliderRef} {...settings}>
            {slicedItems.map((item) => {
              return (
                <div key={item.id}>
                  <SingleProduct
                    id={item.id}
                    styles={"m-2 "}
                    imgSrc={item.img}
                    itemName={item.description}
                    price={item.price}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default ProductCarousel;
