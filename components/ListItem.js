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
  List,
} from "react-native";

const mediaUrl = "http://media.mw.metropolia.fi/wbma/uploads/";

const ListItem = (props) => {
  return (
    <TouchableOpacity style={StyleSheet.row}>
      <Image
        style={styles.image}
        source={{ uri: mediaUrl + props.singleMedia.thumbnails.w160 }}
      />
      <View>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {},
});

export default ListItem;
