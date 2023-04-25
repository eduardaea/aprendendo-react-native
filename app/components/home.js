import {Center, NativeBaseProvider } from "native-base";
import { StyleSheet } from 'react-native';
import { ButtonComponent } from "./button";

const game1Title = "Forca"
const game2Title = "Jogo da velha"

export const Home = () => { 
  return (
    <NativeBaseProvider>
      <Center style={[styles.container]} flex={1} px="3">
          <ButtonComponent gameTitle={game1Title}/>
          <ButtonComponent gameTitle={game2Title}/>
      </Center>
    </NativeBaseProvider>
  );
};
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});