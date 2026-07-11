import {Button, Center, Heading, Box, Grid, GridItem} from "@chakra-ui/react"
import {DropDown} from "@commonComponents";
import {useCallback, useEffect, useState} from "react";


export const Filter = () => {

    const [category, setCategory] = useState<string[]>([]);
    const [product, setProduct] = useState<string[]>([]);
    // const [disable, setDisable] = useState<boolean>(true);

    useEffect(() => {
        //fetch for app catogories and set the state for category
        //  //cloble state chart type update to pie
    }, []);

    const dropDownDisable = category.length === 0;
    const butonDisable = product.length === 0;

    useEffect(() => {
        // fetch product
    }, [category]);

    useEffect(() => {
        // updated product show in pi chart
    }, [product]);

    // clean fetch poduct data
    const  runReport= useCallback((e) => {
       // fech  product data
        // globle state chart type update to colomn
    }, [product]);

    // clean funtion  clear both dropdown and show defolt massage
    const  clear= useCallback((e) => {
        setCategory([])
        setProduct([])
    }, []);



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
                            onclick={clear()}// handle clear action
                        </Center>
                    </Box>
                </GridItem>
                <GridItem rowSpan={1} colSpan={3}>
                    <Box h="100%" padding="5">
                        <DropDown
                            defaultMessage="Choose a country"
                            dropDownItems={  ["United Kingdom", "Canada", "United States"]}
                            selectedItems={category}
                            onSelectionChange={setCategory}
                            multipleSelection={false}
                            disabled={false}
                        />
                    </Box>
                </GridItem>
                <GridItem rowSpan={1} colSpan={3}>
                    <Box h="100%" padding="5">
                        <DropDown
                            defaultMessage="Choose a country"
                            dropDownItems={  ["United Kingdom", "Canada", "United States"]}
                            selectedItems={product}
                            onSelectionChange={setProduct}
                            multipleSelection={true}
                            disabled={dropDownDisable}
                        />
                    </Box>
                </GridItem>
                <GridItem rowSpan={2} colSpan={3}>
                    <Box h="100%">
                    </Box>
                </GridItem>
                <GridItem rowSpan={1} colSpan={3}>
                    <Box h="100%" padding="5">
                        <Center h="100%">
                            <Button width="100%"
                                    onClick={
                                        runReport()// handle run report action
                                    }
                                    disabled={butonDisable}
                            > run report</Button>
                        </Center>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    )
};