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
  navigationOptions,
  Share
} from "react-native";

import LinearGradient from "react-native-linear-gradient";

const { height, width } = Dimensions.get("window");

class TodoDetail extends React.Component {
  static navigationOptions = {
    title: "voltar",
    headerTitleStyle: { textAlign: "left" }
  };

  onEdit() {
    // let newTodo = {
    //   id: this.state.id,
    //   text: this.state.text,
    //   completed: this.state.completed
    // };
  }

  onDelete() {}

  render() {
    const { navigation } = this.props;
    const todo = navigation.getParam("todo");
    return (
      <LinearGradient style={styles.container} colors={["#37C0A2", "#164359"]}>
        <Text style={styles.appTittle}>{todo.text}</Text>

        <View style={styles.card}>
          <View style={styles.buttonList}>
            <TouchableOpacity
              style={styles.buttonEdit}
              onPress={this.onEdit.bind(this)}
            >
              <Text style={styles.textButton}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonDel}
              onPress={this.onDelete.bind(this)}
            >
              <Text style={styles.textButton}>Deletar</Text>
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
    width: width - 25,
    borderRadius: 10,
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
  buttonEdit: {
    backgroundColor: "#F6B815",
    padding: 20,
    color: "#FFF",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: "50%"
  },
  buttonDel: {
    backgroundColor: "#E45352",
    padding: 20,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: "50%"
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
