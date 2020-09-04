import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import List from "../components/List";
import PropTypes from "prop-types";

const LoginForm = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <List navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

Home.propTypes = {
  navigation: PropTypes.object,
};

export default LoginForm;
