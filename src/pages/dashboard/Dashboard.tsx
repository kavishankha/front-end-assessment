// import {ColumnChart, Filter} from "@dashboardComponents";
import { Grid, GridItem, Box } from "@chakra-ui/react"

export const Dashboard = () => {
    return (
        <Box width="100%" h="100vh" padding="4" color="white">
            <Grid templateColumns="repeat(3, 1fr)" h="100%" border="2px solid black">
                <GridItem colSpan={1}>
                    <Box bg="pink" h="100%" />
                </GridItem>
                <GridItem colSpan={2}>
                    <Box bg="white" h="100%" />
                </GridItem>
            </Grid>
        </Box>
    )
};