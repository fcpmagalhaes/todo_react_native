import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";

import LoginScreen from "./components/LoginScreens";
import TodoList from "./components/TodoList";
import AddForm from "./components/AddForm";
import TodoDetail from "./components/TodoDetail";

export default class App extends React.Component {
  render() {
    return <AppStackNavigator />;
  }
}

const AppStackNavigator = createStackNavigator({
  Login: LoginScreen,
  Home: TodoList,
  Add: AddForm,
  Detail: TodoDetail
});
