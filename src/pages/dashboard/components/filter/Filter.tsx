// import { Button, Card, Field, NativeSelect,For, Stack ,Flex } from "@chakra-ui/react"

import {Box, Grid, GridItem} from "@chakra-ui/react";

export const Filter = () => {
    return (
        <Box width="100%" h="100%" padding="4" color="white">
            <Grid  templateRows="repeat(6, 1fr)"  templateColumns="repeat(2, 1fr)" h="100%" border="2px solid black">
                <GridItem rowSpan={1} colSpan={1}>
                    <Box h="100%" bg="red" />
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Box h="100%" bg="orange" />
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                    <Box h="100%"   bg="blue">
                    </Box>
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                    <Box h="100%"  bg="pink">
                    </Box>
                </GridItem>
                <GridItem rowSpan={2} colSpan={2}>
                    <Box h="100%"  bg="red">
                    </Box>
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                    <Box h="100%"  bg="yellow">
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    )
};

// <Card.Root w="full" h="full" border="1px solid black" borderRadius="0" >
//     <Card.Header justifyContent="flex-end">
//         <Flex gap="4" justify="space-between">
//             <Card.Title>Filter</Card.Title>
//             <Button variant="outline">Clear</Button>
//         </Flex>
//     </Card.Header>
//     <Card.Body>
//         <Stack gap="10" w="full">
//             <Field.Root>
//                 <NativeSelect.Root>
//                     <NativeSelect.Field name="country">
//                         <For each={["United Kingdom", "Canada", "United States"]}>
//                             {(item) => (
//                                 <option key={item} value={item}>
//                                     {item}
//                                 </option>
//                             )}
//                         </For>
//                     </NativeSelect.Field>
//                     <NativeSelect.Indicator />
//                 </NativeSelect.Root>
//             </Field.Root>
//             <Field.Root>
//                 <NativeSelect.Root>
//                     <NativeSelect.Field name="country">
//                         <For each={["United Kingdom", "Canada", "United States"]}>
//                             {(item) => (
//                                 <option key={item} value={item}>
//                                     {item}
//                                 </option>
//                             )}
//                         </For>
//                     </NativeSelect.Field>
//                     <NativeSelect.Indicator />
//                 </NativeSelect.Root>
//             </Field.Root>
//         </Stack>
//     </Card.Body>
//     <Card.Footer>
//         <Flex gap="4" direction="column">
//             <Button width="100%">Cancel</Button>
//         </Flex>
//     </Card.Footer>
// </Card.Root>