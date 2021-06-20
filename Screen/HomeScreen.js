import * as React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  Text,
  ScrollView,
} from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";

import * as Speech from "expo-speech";

import Icon from "react-native-vector-icons/FontAwesome";

import { Header } from "react-native-elements";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      text: "",
      colour: "black",
      language: "hi",
      showModal: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaProvider>
          <Header
            backgroundColor={"#00BFFF"}
            centerComponent={{
              text: "Text to Speak",
              style: { color: "#fff", fontSize: 30 },
            }}
            rightComponent={
              <TouchableOpacity
                onPress={() => {
                  this.setState({ showModal: true });
                }}
              >
                <Icon
                  name="language"
                  type="font-awesome"
                  color="white"
                  size={40}
                  alignSelf="center"
                />
              </TouchableOpacity>
            }
          />
          <View>
            <Image source={require("../assets/logo.png")} style={styles.logo} />
          </View>
          <TextInput
            placeholder="Enter word or sentence..."
            style={styles.textInput}
            onChangeText={(text) => {
              var input = text;
              this.setState({ text: input });
            }}
            value={this.state.text}
          ></TextInput>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: this.state.colour }]}
            onPress={() => {
              this.state.text === ""
                ? Speech.speak("Please enter a text or sentence", {
                    language: this.state.language,
                    rate: 0.8,
                    pitch: 1,
                  })
                : Speech.speak(this.state.text, {
                    language: this.state.language,
                    rate: 0.8,
                    pitch: 1,
                  });
            }}
          >
            <Icon
              name="microphone"
              type="font-awesome"
              color="yellow"
              size={35}
            />
          </TouchableOpacity>

          <View style={styles.centeredView}>
            <ScrollView>
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.showModal}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>Select Input Language</Text>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({ language: "hi", showModal: false });
                      }}
                      style={styles.optionButton}
                    >
                      <Text style={styles.optionText}>Hindi (हिंदी)</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => {
                        this.setState({ language: "en", showModal: false });
                      }}
                      style={styles.optionButton}
                    >
                      <Text style={styles.optionText}>English (US)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({ language: "zh", showModal: false });
                      }}
                      style={styles.optionButton}
                    >
                      <Text style={styles.optionText}>Chinese (中国人)</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </ScrollView>
          </View>
        </SafeAreaProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    borderWidth: 1,
    height: 80,
    width: 80,
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 40,
    marginTop: 130,
    alignItems: "center",
  },
  textInput: {
    borderWidth: 2,
    marginTop: 50,
    alignSelf: "center",
    textAlign: "center",
    width: 300,
    height: 40,

    borderColor: "#00BFFF",
  },

  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 50,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButton: {
    width: 100,
    height: 50,
    backgroundColor: "#82CAFF",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 30,
  },

  modalButtonText: {
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },

  optionButton: {
    backgroundColor: "#FAF5EF",
    marginTop: 5,
    marginBottom: 20,
    height: 50,
    justifyContent: "center",
  },
  optionText: {
    color: "black",

    alignSelf: "center",
  },
  modalTitle: {
    alignSelf: "center",
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginBottom: 10,
  },
});
