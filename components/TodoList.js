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
  AsyncStorage,
  Image
} from "react-native";

import { withNavigation } from "react-navigation";

const { height, width } = Dimensions.get("window");

class TodoList extends React.Component {
  // static navigationOptions = {
  //   header: null
  // };
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      todoDataSource: ds
    };
    this.pressRow = this.pressRow.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  componentDidMount() {
    this.getTodos();
  }

  componentWillMount() {
    this.getTodos();
  }

  pressRow = todo => {
    this.props.navigation.navigate("Detail", { todo: todo });
  };

  renderRow(todo) {
    if (todo.completed) {
      image = <Text>✅</Text>;
    } else {
      image = <Text />;
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.pressRow(todo);
          }}
        >
          <Text
            style={[
              styles.text,
              styles.input,
              todo.completed ? styles.strikeText : styles.unstrikeText
            ]}
          >
            {todo.text}
          </Text>
        </TouchableOpacity>
        <View style={styles.check}>{image}</View>
      </View>
    );
  }

  getTodos() {
    AsyncStorage.getItem("todos").then(value => {
      if (value == undefined) {
        console.log("No Todos...");
      } else {
        let todos = JSON.parse(value);
        this.setState({
          todoDataSource: this.state.todoDataSource.cloneWithRows(todos)
        });
      }
    });
  }

  render() {
    return (
      <ListView
        dataSource={this.state.todoDataSource}
        renderRow={this.renderRow}
      />
      // <View style={styles.container}>
      //   <Button
      //     title="Go back to LoginScreen"
      //     onPress={() => this.props.navigation.goBack()}
      //   />
      //   <Button
      //     title="Go back to LoginScreen"
      //     onPress={() => this.props.navigation.popToTop()}
      //   />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width - 40,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10
  },
  rowContainer: {
    flexDirection: "row",
    width: width / 2,
    alignItems: "center",
    justifyContent: "space-between"
  },
  buttons: {
    flexDirection: "row"
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10
  },
  text: {
    fontWeight: "500",
    fontSize: 18,
    marginVertical: 20
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    //   borderColor: 'red',
    borderWidth: 3,
    marginRight: 20
  },
  completeCicle: {
    borderColor: "#bbb"
  },
  incompleteCircle: {
    borderColor: "#DA4453"
  },
  strikeText: {
    color: "#bbb",
    textDecorationLine: "line-through"
  },
  unstrikeText: {
    color: "#29323c"
  },
  input: {
    marginVertical: 15,
    width: width / 2,
    paddingBottom: 5
  },
  check: {
    alignSelf: "auto",
    marginRight: 20
  },
  checkImage: {
    alignSelf: "flex-end"
  }
});
export default withNavigation(TodoList);
