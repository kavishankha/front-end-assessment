import {Button, Center, Heading, Box, Grid, GridItem} from "@chakra-ui/react"
// import {DropDown} from "@commonComponents";

export const Filter = () => {
    return (
        <Box width="100%" h="100%">
            <Grid templateRows="repeat(6, 1fr)" templateColumns="repeat(3, 1fr)" h="100%" border="2px solid black">
                <GridItem rowSpan={1} colSpan={2}>
                    <Box h="100%" padding="5">
                        <Center h="100%" justifyContent="flex-start">
                            <Heading size="3xl">Filter</Heading>
                        </Center>
                    </Box>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Box h="100%">
                        <Center h="100%">
                            <Button variant="outline">Clear</Button>
                        </Center>
                    </Box>
                </GridItem>
                <GridItem rowSpan={1} colSpan={3}>
                    <Box h="100%" padding="5">
                    </Box>
                </GridItem>
                <GridItem rowSpan={1} colSpan={3}>
                    <Box h="100%" padding="5">
                    </Box>
                </GridItem>
                <GridItem rowSpan={2} colSpan={3}>
                    <Box h="100%">
                    </Box>
                </GridItem>
                <GridItem rowSpan={1} colSpan={3}>
                    <Box h="100%" padding="5">
                        <Center h="100%">
                            <Button width="100%">Cancel</Button>
                        </Center>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    )
};