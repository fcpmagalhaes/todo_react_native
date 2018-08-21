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

class TodoDetail extends React.Component {
  static navigationOptions = {
    title: "voltar",
    headerTitleStyle: { textAlign: "left" }
  };
  constructor() {
    super();
    this.state = {
      id: "",
      text: "",
      completed: false,
      todos: []
    };
  }

  componentDidMount() {
    this.generateId();
    this.getTodos();
  }
  generateId() {
    let id = Math.floor(Math.random() * 1000000000);
    this.setState({ id });
  }
  getTodos() {
    AsyncStorage.getItem("todos").then(value => {
      if (value != undefined) {
        this.setState({ todos: JSON.parse(value) });
      }
    });
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
            placeholder="Editar item..."
            onChangeText={value => this.onTextChange(value)}
          />

          <View style={styles.completed}>
            <Text style={styles.text}>Finalizado</Text>
            <Switch
              value={this.state.completed}
              onValueChange={value => this.onCompletedChange(value)}
            />
          </View>
          <View style={styles.buttonList}>
            <TouchableOpacity
              style={styles.buttonSave}
              onPress={this.onSubmit.bind(this)}
            >
              <Text style={styles.textButton}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonDel}
              onPress={this.onSubmit.bind(this)}
            >
              <Text style={styles.textButton}>Apagar</Text>
            </TouchableOpacity>
          </View>
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
  buttonSave: {
    backgroundColor: "#F6B815",
    padding: 20,
    color: "#FFF",
    borderBottomLeftRadius: 10,
    width: "50%"
  },
  buttonDel: {
    backgroundColor: "#E45352",
    padding: 20,
    borderBottomRightRadius: 10,

    width: "50%"
  },
  text: {
    fontWeight: "500",
    fontSize: 18,
    paddingRight: 15
  },
  textButton: {
    fontWeight: "500",
    fontSize: 18,
    textAlign: "center",
    color: "#FFF"
  },
  buttonList: {
    flexDirection: "row",
    width: width - 25
  }
});
export default TodoDetail;
