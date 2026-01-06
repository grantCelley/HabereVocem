import { StyleSheet, TextInput, View } from "react-native";

export const SendForm = () => {
    return (
        <View style={styles.container}>
           <TextInput />
            
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    
    right:0,
    borderColor: '#000',
    borderWidth: 1,
    height:50
    
  },
});