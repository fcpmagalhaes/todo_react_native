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
  TextInput
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import TodoList from "./TodoList";
const { height, width } = Dimensions.get("window");

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.TodoList;
  }

  render() {
    return (
      <LinearGradient style={styles.container} colors={["#37C0A2", "#164359"]}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.appTittle}>Lista de Tarefas</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Add")}
        >
          <Text style={styles.text}>Adicionar Item +</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          {/* <TextInput style={styles.input} placeholder="Adicione um item!" /> */}
          {/* <TextInput style={styles.input}
        placeholder="Adicione uma tarefa"
        value={this.newTodoItem}
        onChangeText={this.newTodoItemController}
        placeholderTextColor={'#999'}
        returnKeyType={'done'}
        autoCorrect={false}
      /> */}

          <ScrollView contentContainerStyle={styles.listContainer}>
            <TodoList />
          </ScrollView>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center"
  },
  appTittle: {
    color: "#FFF",
    fontSize: 36,
    marginTop: 60,
    marginBottom: 30,
    fontWeight: "300"
  },
  card: {
    backgroundColor: "#fff",
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
  listContainer: {
    // alignItems: "center"
  },
  button: {
    backgroundColor: "#3960E4",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: width - 25,
    color: "#FFF"
  },
  text: {
    fontWeight: "500",
    fontSize: 18,
    textAlign: "center",
    color: "#FFF"
  }
});
export default LoginScreen;
