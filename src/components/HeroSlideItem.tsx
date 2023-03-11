import { Box, Button, MediaQuery, Title } from "@mantine/core";

interface HeroSlideItemProps {
  imageSrc?: string;
}

function HeroSlideItem({ imageSrc }: HeroSlideItemProps) {
  return (
    <MediaQuery
      query="(max-width: 730px)"
      styles={{ flexDiorection: "column" }}
    >
      <Box sx={{ display: "flex", height: "100%", width: "100%" }}>
        <MediaQuery query="(max-width: 730px)" styles={{ width: "100%" }}>
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
              padding: "2rem",
            }}
          >
            <Title>
              Shop Easter & <br /> New Weekend <br /> Deals
            </Title>
            <Title order={4}>
              We got you covered on all the latest releases in tech.
            </Title>
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
        </MediaQuery>
        <MediaQuery
          query="(max-width: 730px)"
          styles={{ height: "100%", width: "50%" }}
        >
          <Box sx={{ width: "50%", height: "100%" }}>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={imageSrc}
              alt="product-image"
            />
          </Box>
        </MediaQuery>
      </Box>
    </MediaQuery>
  );
}

export default HeroSlideItem;
