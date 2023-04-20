import { StyleSheet,Image } from 'react-native';
import { Center, NativeBaseProvider,View } from 'native-base';

export const Screen2= () => {
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