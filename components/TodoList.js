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
  ListViewDataSource
} from "react-native";

const { height, width } = Dimensions.get("window");

class TodoList extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor() {
    super();
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

  pressRow(todo) {
    console.log(todo);
  }

  renderRow(todo) {
    return (
      <TouchableOpacity
        onPress={() => {
          this.pressRow(todo);
        }}
      >
        <View style={styles.rowContainer}>
          <Text style={styles.text}>{todo.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  getTodos() {
    let todos = [
      { text: "Todo One", completed: false },
      { text: "Todo Two", completed: false },
      { text: "Todo Three", completed: false }
    ];

    this.setState({
      todoDataSource: this.state.todoDataSource.cloneWithRows(todos)
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
    width: width - 50,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
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
  }
});
export default TodoList;
