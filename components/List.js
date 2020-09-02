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

const url = "http://media.mw.metropolia.fi/wbma/";

const List = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const loadMedia = async (limit = 10) => {
      try {
        const response = await fetch(url + "media?limit=" + limit);
        const json = await response.json();
        const media = await Promise.all(
          json.map(async (item) => {
            const response = await fetch(url + "media/" + item.file_id);
            const json = await response.json();
            return json;
          })
        );
        console.log("loadMedia", media);
      } catch (error) {
        console.error("loadMedia error", error);
      }
      console.log("mediaArray:", mediaArray);
    };

    loadMedia();
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
};

export default List;
