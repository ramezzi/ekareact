import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useLoadMedia } from "../hooks/APIhooks";
import ListItem from "./ListItem";

const List = ({ navigation }) => {
  const mediaArray = useLoadMedia();

  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => {
        <ListItem singleMedia={item} navigation={navigation} />;
      }}
    />
  );
};

List.propTypes = {
  navigation: PropTypes.object,
};

export default List;
