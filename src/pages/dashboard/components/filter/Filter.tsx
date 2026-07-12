import {Button, Center, Heading, Box, Grid, GridItem} from "@chakra-ui/react"
import {DropDown} from "@commonComponents";
import {useCallback, useEffect, useMemo} from "react";
import {useAppDispatch, useAppSelector} from "@/hooks/reduxHooks.ts";
import {
    fetchCategoriesRequest,
    fetchProductsRequest,
    fetchProductDetailsRequest,
    setSelectedProducts,
    runReport,
    clearAllFilters,
} from "@/store/products/productSlice.ts";

export const Filter = () => {
    const dispatch = useAppDispatch();

    const {
        categories,
        products,
        selectedCategory,
        selectedProducts,
        hasFilterChanged,
        reportGenerated,
    } = useAppSelector((state) => state.products);

    // Fetch categories
    useEffect(() => {
        dispatch(fetchCategoriesRequest());
    }, [dispatch]);

    // category selection use useCallback for avoid unnecessary re-renders the function
    const handleCategoryChange = useCallback((value: string[]) => {
        if (value.length > 0) {
            const category = categories.find(c => c.name === value[0]);
            if (category) {
                dispatch(fetchProductsRequest(category.id));
            }
        }
    }, [dispatch, categories]);

    // Handle product use useCallback for avoid unnecessary re-renders the function
    const handleProductChange = useCallback((value: string[]) => {
        const productIds = products
            .filter(p => value.includes(p.name))
            .map(p => p.id);
        dispatch(setSelectedProducts(productIds));
        if (productIds.length > 0) {
            dispatch(fetchProductDetailsRequest(productIds));
        }
    }, [dispatch, products]);

    // Handle run report
    const handleRunReport = useCallback(() => {
        dispatch(runReport());
    }, [dispatch]);

    // Handle clear all
    const handleClear = useCallback(() => {
        dispatch(clearAllFilters());
    }, [dispatch]);

    //avoid unnecessary data rerenders
    const categoryNames = useMemo(() =>
            categories.map(c => c.name),
        [categories]
    );

    //avoid unnecessary data rerenders
    const productNames = useMemo(() =>
            products.map(p => p.name),
        [products]
    );

    const selectedCategoryName = useMemo(() => {
        const category = categories.find(c => c.id === selectedCategory);
        return category ? [category.name] : [];
    }, [categories, selectedCategory]);

    const selectedProductNames = useMemo(() =>
            products.filter(p => selectedProducts.includes(p.id)).map(p => p.name),
        [products, selectedProducts]
    );

    // Disable states
    const productDropdownDisabled = !selectedCategory;
    const runReportDisabled = (selectedProducts.length === 0 && !selectedCategory) ||
        (reportGenerated && !hasFilterChanged);

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
                            <Button variant="outline" onClick={handleClear}>
                                Clear
                            </Button>
                        </Center>
                    </Box>
                </GridItem>
                <GridItem rowSpan={1} colSpan={3}>
                    <Box h="100%" padding="5">
                        <DropDown
                            defaultMessage="Select a category"
                            dropDownItems={categoryNames}
                            selectedItems={selectedCategoryName}
                            onSelectionChange={handleCategoryChange}
                            multipleSelection={false}
                            disabled={false}
                        />
                    </Box>
                </GridItem>
                <GridItem rowSpan={1} colSpan={3}>
                    <Box h="100%" padding="5">
                        <DropDown
                            defaultMessage="Select products"
                            dropDownItems={productNames}
                            selectedItems={selectedProductNames}
                            onSelectionChange={handleProductChange}
                            multipleSelection={true}
                            disabled={productDropdownDisabled}
                        />
                    </Box>
                </GridItem>
                <GridItem rowSpan={2} colSpan={3}>
                    <Box h="100%"></Box>
                </GridItem>
                <GridItem rowSpan={1} colSpan={3}>
                    <Box h="100%" padding="5">
                        <Center h="100%">
                            <Button
                                width="100%"
                                onClick={handleRunReport}
                                disabled={runReportDisabled}
                            >
                                Run Report
                            </Button>
                        </Center>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    );
};
