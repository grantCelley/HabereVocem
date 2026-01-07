import { MessageContext } from '@/Contexts/mainContext';
import { useContext, useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

export const SendForm = () => {
  const [message, setMessage] = useState("")
  const messageContext = useContext(MessageContext)

    return (
        <View style={styles.container}>
           <TextInput
           editable
           multiline
           value={message}
           onChange={(e) => setMessage(e.nativeEvent.text)}
            style={styles.input}
            />
          
          <Pressable 
            onPress={(e) => {
              messageContext.addUserMessage(message);
              setMessage("");
            }}
            style={styles.button} 
          >Send</Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:"row",
    width: '100%',
  },
  input:{
    borderColor: '#999',
    borderTopWidth:1,
    borderRadius:5,
    width: "80%",
    alignSelf: 'stretch'
  },
  button:{
    flex: 1,
    position: 'fixed',
    right: 0,
    backgroundColor: 'dodgerblue',
    height: '100%',
    textAlignVertical: 'center',
    padding: 10,
    borderRadius : 5,
    margin: 5,
  }
});