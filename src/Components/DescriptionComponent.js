import React from 'react';
import {StyleSheet} from "react-native";
import { MaterialCommunityIcons} from '@expo/vector-icons';
import {Box, Button, Center, HStack, Text} from "native-base";
const DescriptionComponent = () => {
    return (
        <HStack space={3} style={styles.main}>
            <Center  bg="primary.300" style={styles.container}  >
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                </Text>
                <HStack space={3} >
                    <Center mt={10} bg="primary.100" rounded="full" shadow={3} >
                        <Button onPress={() => console.log("hello world")} bg="primary.100" rounded="full">
                            <MaterialCommunityIcons name="google-translate" size={30} color="black" />
                        </Button>
                    </Center>
                </HStack>

            </Center>

        </HStack>
    )
}

const styles = StyleSheet.create({
    container: {

        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    text: {
        margin:10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    borderTopRounded: {

        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    main: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 50,

    }
})

export default DescriptionComponent;