import { Flex, Grid, GridItem, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

const Layout1 = () => {
    const [isLargerThan450] = useMediaQuery('(min-width: 450px)')
    return (
        <>
        {isLargerThan450?
        <Grid
        h="30rem"
        templateColumns="repeat(3, 1fr)"
        >
            <GridItem bg="#0072bb" colSpan={1} />
            <GridItem bg="#f8931d" colSpan={1} />
            <GridItem bg="#ee1c25" colSpan={1} />
    
        </Grid>
        :
        <Grid
        h="30rem"
        templateColumns="repeat(3, 1fr)"
        >
            <GridItem bg="#0072bb" colSpan={3} />
            <GridItem bg="#ee1c25" colSpan={3} />
            <GridItem bg="#f8931d" colSpan={3} />
    
        </Grid>
        }
    
    </>
  )
}

export default Layout1