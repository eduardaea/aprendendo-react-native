import {Center, NativeBaseProvider } from "native-base";
import { StyleSheet } from 'react-native';
import { Example } from "./teste";

export const Home = () => { 
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
          <Example />
      </Center>
    </NativeBaseProvider>
  );
};
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});