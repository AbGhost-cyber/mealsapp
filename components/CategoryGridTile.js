import React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

const CategoryGridtile = (props) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableCmp
        style={{ flex: 1 }}
        activeOpacity={0.8}
        onPress={props.onSelect}
      >
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 8,
    height: 150,
    borderRadius: 10,
    elevation: 5,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 1, height: 6 },
    shadowRadius: 10,

    padding: 15,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 19,
    textAlign: "right",
  },
});
export default CategoryGridtile;
