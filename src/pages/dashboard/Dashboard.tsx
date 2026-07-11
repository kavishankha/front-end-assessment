import {ProductChart, Filter} from "@dashboardComponents";
import { Grid, GridItem, Box } from "@chakra-ui/react"

export const Dashboard = () => {
    return (
        <Box width="100%" h="100vh" padding="10">
            <Grid templateColumns="repeat(3, 1fr)" h="100%" border="2px solid black">
                <GridItem colSpan={1}  padding="8">
                    <Filter/>
                </GridItem>
                <GridItem colSpan={2}>
                    <ProductChart/>
                </GridItem>
            </Grid>
        </Box>
    )
};