import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  ListView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
  ListViewDataSource,
  TextInput,
  Switch,
  AsyncStorage,
  navigationOptions
} from "react-native";

import LinearGradient from "react-native-linear-gradient";

const { height, width } = Dimensions.get("window");

class EditForm extends React.Component {
  static navigationOptions = {
    title: "voltar",
    headerTitleStyle: { textAlign: "left" }
  };
  constructor() {
    super();
    this.state = {
      id: "",
      text: "",
      completed: false
    };
  }

  onTextChange(value) {
    this.setState({ text: value });
  }
  onCompletedChange(value) {
    this.setState({ completed: value });
  }
  onSubmit() {
    console.log("Adding Todo...");
    let todos = this.state.todos;

    todos.push({
      id: this.state.id,
      text: this.state.text,
      completed: this.state.completed
    });

    AsyncStorage.setItem("todos", JSON.stringify(todos));

    this.props.navigation.navigate("Login");
  }

  render() {
    return (
      <LinearGradient style={styles.container} colors={["#37C0A2", "#164359"]}>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Descrição da tarefa"
            onChangeText={value => this.onTextChange(value)}
          />

          <View style={styles.completed}>
            <Text style={styles.text}>Finalizado</Text>
            <Switch
              value={this.state.completed}
              onValueChange={value => this.onCompletedChange(value)}
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={this.onSubmit.bind(this)}
          >
            <Text style={styles.textButton}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    backgroundColor: "#fff",
    width: width - 25,
    borderRadius: 10,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50,50,50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 5
      }
    })
  },
  input: {
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 24
  },
  completed: {
    padding: 20,
    flexDirection: "row"
  },
  button: {
    backgroundColor: "#F6B815",
    padding: 20,
    width: width - 25,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    color: "#FFF"
  },
  text: {
    fontWeight: "500",
    fontSize: 18,
    paddingRight: 15
  },
  textButton: {
    color: "#FFF",
    fontWeight: "500",
    fontSize: 18,
    textAlign: "center"
  }
});
export default EditForm;
