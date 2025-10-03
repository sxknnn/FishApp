import { Image, View, Text, StyleSheet } from "react-native";
import Colors from '../../constant/Colors';

export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
      <Image
        source={require('../../assets/images/homescreen.png')}
        style={{
          width: '100%',
          height: 300,
        }}
      />

      <View
        style={{
          flex: 1,
          padding: 25,
          backgroundColor: Colors.PRIMARY,
          //borderTopLeftRadius: 35,
          //borderTopRightRadius: 35,
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center',
            color: Colors.WHITE,
            marginBottom: 40,
          }}
        >
          Time to catch some fish!
        </Text>

        <View style={styles.button}>
          <Text style={[styles.buttonText, { color: Colors.PRIMARY }]}>
            Get Started
          </Text>
        </View>

        <View style={[styles.button, { backgroundColor: Colors.PRIMARY, borderWidth: 1, borderColor: Colors.WHITE }]}>
          <Text style={[styles.buttonText, { color: Colors.WHITE }]}>
            Already have an account?
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
    backgroundColor: Colors.WHITE,
    marginTop: 20,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
  },
});
