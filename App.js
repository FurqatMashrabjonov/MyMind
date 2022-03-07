import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Button,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code, ZStack, Box,
} from "native-base";

import {StyleSheet} from "react-native";

import MainComponent from "./src/Components/MainComponent";
import HeaderComponent from "./src/Components/HeaderComponent";
import CycleMenuComponent from "./src/Components/CycleMenuComponent";
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';


export default function App() {
  return (
    <NativeBaseProvider>
      <VStack space={4} alignItems="center">
        <HeaderComponent />
        <CycleMenuComponent/>
        <MainComponent />
      </VStack>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  }
})