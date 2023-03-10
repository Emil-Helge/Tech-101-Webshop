import { Box, Button } from "@mantine/core";

interface HeroSlideItemProps {
  imageSrc?: string;
}

function HeroSlideItem({ imageSrc }: HeroSlideItemProps) {
  return (
    <Box sx={{ display: "flex", height: "100%", width: "100%" }}>
      <Box
        sx={{
          width: "50%",
          height: "100%",
          backgroundColor: "#283BA2",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <h1>
          Shop Easter & New <br /> Weekend Deals
        </h1>
        <h2>We got you covered on all the latest releases in tech.</h2>
        <Button
          sx={{
            background: "#D9D9D9",
            color: "#283BA2",
            fontWeight: "bold",
            marginTop: "1rem",
            height: "2.4rem",
            width: "8rem",
            borderRadius: ".5rem",
            borderStyle: "none",
            cursor: "pointer",
          }}
        >
          Go to Deals
        </Button>
      </Box>
      <Box sx={{ width: "50%", height: "100%" }}>
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={imageSrc}
          alt="product-image"
        />
      </Box>
    </Box>
  );
}

export default HeroSlideItem;
