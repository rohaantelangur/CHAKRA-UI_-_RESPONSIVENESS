import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const Layout2 = () => {
  return (
    <Box w={"80%"} m={"100px auto "}>
      <Grid
      m={"auto"} 
        h="250px"
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(6, 1fr)"
        gap={4}
      >
        <GridItem bg="#A186BD" colSpan={[2, 2, 1, 1]} rowSpan={[1, 2, 4, 4]} />
        <GridItem
          bg="#F26C4F"
          colSpan={[2, 2, 1, 1]}
          rowSpan={[1, 2, 6, 6]}
          w={["100%", "100%", "70%", "50%"]}
        />
        <GridItem bg="#6DCFF6" colSpan={[2, 2, 1, 1]} rowSpan={[1, 2, 2, 2]} />
      </Grid>
      </Box>
  );
};

export default Layout2;
