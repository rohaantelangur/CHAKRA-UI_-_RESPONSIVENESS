import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const Layout3 = () => {

  return (
    <>
      <Grid
        h="30rem"
        gap={"1rem"}
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(6, 1fr)"
      >
        <GridItem bg="#FFC83C" colSpan={[6, 6, 3, 3]} rowSpan={[2, 1, 2, 2]} />
        <GridItem bg="#FFC83C" colSpan={[6, 6, 3, 3]} rowSpan={[2, 1, 2, 2]} />
        <GridItem bg="#FF3C69" colSpan={[6, 6, 6, 6]} rowSpan={[2, 2, 2, 2]} />
        <GridItem bg="#6E7DFF" colSpan={[6, 6, 6, 2]} rowSpan={[1, 1, 1, 2]} />
        <GridItem bg="#6E7DFF" colSpan={[6, 6, 6, 2]} rowSpan={[1, 1, 1, 2]} />
        <GridItem bg="#6E7DFF" colSpan={[6, 6, 6, 2]} rowSpan={[1, 1, 1, 2]} />
      </Grid>
    </>
  );
};

export default Layout3;
