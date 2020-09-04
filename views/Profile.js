import React, { useContext } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { AuthContext } from "../contexts/AuthContext";
import PropTypes from "prop-types";
import AsyncStorage from "@react-native-community/async-storage";

const Profile = ({ navigation }) => {
  const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext);
  console.log("profile", isLoggedIn);
  const logout = async () => {
    setIsLoggedIn(false);
    await AsyncStorage.clear();
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button title={"Logout"} onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
});

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;
