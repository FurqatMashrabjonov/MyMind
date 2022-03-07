import React, {useState} from 'react';
import {StyleSheet} from "react-native";
import {AntDesign, FontAwesome} from '@expo/vector-icons';
import {Box, Button, Center, HStack, Text} from "native-base";
import DescriptionComponent from "./DescriptionComponent";
import Feather from "react-native-vector-icons/Feather";


const MainComponent = () => {
    const [isShow, setIsShow] = useState(false);
    const showDescription = () => {
        setIsShow(!isShow);
    };
    return (
        <HStack space={3} style={styles.main}>
            <Center w="98%" mt={10} pb='100%' bg="primary.300" style={styles.container}  >
                <Center w="100%" h="20" bg="primary.500" style={styles.borderTopRounded} shadow={5} >
                    <Text m={4} style={styles.text}>
                        Forget
                    </Text>
                </Center>

                <HStack space={3} >
                    <Center mt={10} bg="primary.100" rounded="full" shadow={3} >
                        <Button onPress={() => console.log("hello world")} bg="primary.100" rounded="full">
                            <AntDesign name="closecircleo" size={50} color="black" />
                        </Button>
                    </Center>

                    <Center mt={10} bg="primary.100"  rounded="full" shadow={3} >
                        <Button  onPress={showDescription} bg="primary.100" rounded="full">
                            <AntDesign name="eyeo" onPress={showDescription} size={50} color="black" />
                        </Button>
                    </Center>

                    <Center mt={10} bg="primary.100" rounded="full" shadow={3} >
                        <Button  onPress={() => console.log("hello world")} bg="primary.100" rounded="full">
                            <AntDesign name="check"  size={50} color="black" />
                        </Button>
                    </Center>

                </HStack>
                <Center style={ isShow ? styles.show : styles.hide }>
                    <DescriptionComponent  />
                </Center>

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
        marginTop: 40,
        // height: 300,
    },
    show: {
        display: 'flex',
    },
    hide: {
        display: 'none',
    }
})

export default MainComponent;