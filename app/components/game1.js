import { StyleSheet,Image } from 'react-native';
import { NativeBaseProvider,View } from 'native-base';
import { Api } from "../services/api"

export const Game1= () => {

  // const words = Api();
  
    return<NativeBaseProvider>
      <View style={styles.container}>
        <Image source={{uri:'https://reactnative.dev/docs/assets/p_cat2.png',}}style={styles.imageTeste}/>
      </View>
    </NativeBaseProvider>
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'   
  },
  imageTeste:{
    width: 200, 
    height: 200
  }
})