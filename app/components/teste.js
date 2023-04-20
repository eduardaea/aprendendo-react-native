import { Button, Box } from "native-base";
import { StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export const Example = () => {
  const navigation = useNavigation();

    return <Box alignItems="center">
        <Button style={[styles.teste]} onPress={() => navigation.navigate('Screen2')}>Click Me</Button>
      </Box>;
  };
  

const styles = StyleSheet.create({
    teste: {
      backgroundColor: '#ff0000',
  
    },
  });