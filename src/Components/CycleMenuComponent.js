import React from 'react';
import {Box, Center, HStack, Text} from "native-base";
const CycleMenuComponent = () => {
    return (
        <HStack space={3} h='8%' justifyContent="center">
            <Center h="20" w="20" bg="primary.300" rounded="full" shadow={3} />
            <Center h="20" w="20" ml={10} mr={10} bg="primary.300" rounded="full" shadow={3} />
            <Center h="20" w="20" bg="primary.300" rounded="full" shadow={3} />

        </HStack>
    )
}
export default CycleMenuComponent;