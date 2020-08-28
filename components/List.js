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

//const url = 'https://raw.githubusercontent.com/mattpe/wpma/master/assets/test.json'

const List = () => {
  const [mediaArray, setMediaArray] = useState([]);
};

const loadMedia = async (limit = 10) => {
  try {
    const response = await fetch(url + "media?limit=" + limit);
    const json = await response.json(
      json.map(async (item) => {
        const response = await fetch(url + "media/" + item.file_id);
        const json = await response.json();
        return json;
      })
    );
    const media = await Promise.all();
  } catch (error) {
    console.error("loadMedia error", error);
  }
  console.log("mediaArray:", mediaArray);
};

useEffect(() => {
  loadMedia(5);
}, []);

return (
  <FlatList
    data={mediaArray}
    keyExtractor={(item, index) => index.toString()}
    renderItem={({ item }) => {
      <ListItem singleMedia={item} />;
    }}
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default List;
export default loadMedia;
