import { Button, Box } from "native-base";
import { StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export const ButtonComponent = (props) => {
  const navigation = useNavigation();

    return <Box alignItems="center">
        <Button style={[styles.button]} onPress={() => navigation.navigate('Game1')}>{props.gameTitle}</Button>
      </Box>;
  };
  

const styles = StyleSheet.create({
    button: {
      color: 'black',
    },
  });