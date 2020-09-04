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

const ListItem = ({ navigation, singleMedia }) => {
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => {
        navigation.navigate("Single");
      }}
    >
      <Image
        style={styles.image}
        source={{ uri: mediaUrl + props.singleMedia.thumbnails.w160 }}
      />
      <View style={styles.textbox}>
        <Text style={styles.listTitle}>{singleMedia.title}</Text>
        <Text>{singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    padding: 15,
    marginBottom: 5,
    backgroundColor: "#eee",
    borderRadius: 16,
  },
  imagebox: {
    flex: 1,
  },
  image: {
    flex: 1,
    borderRadius: 16,
  },
  textbox: {
    flex: 2,
    padding: 10,
  },
  listTitle: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 15,
  },
});

export default ListItem;
