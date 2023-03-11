import { Box, MediaQuery } from "@mantine/core";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import { mockedProducts } from "../data";
import HeroSlideItem from "./HeroSlideItem";

function HeroSlide() {
  return (
    <MediaQuery query="(max-width: 730px)" styles={{ flexDirection: "column" }}>
      <Box
        sx={{
          paddingTop: "1rem",
          paddingBottom: "1rem",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          grabCursor={true}
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
        >
          {mockedProducts.slice(0, 4).map((product) => (
            <SwiperSlide style={{ height: "25rem" }} key={product.id}>
              <HeroSlideItem imageSrc={product.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </MediaQuery>
  );
}

export default HeroSlide;
