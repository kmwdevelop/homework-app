import { View, Text, StyleSheet, Dimensions } from "react-native";

function StartGameScreen() {
  return (
    <View style={styles.container}>
      <TopContainer />
      <CenterContainer />
    </View>
  );
}

// 컨테이너
function TopContainer() {
  return (
    <View style={styles.topContainer}>
      <TitleComponent />
    </View>
  );
}
function CenterContainer() {
  return (
    <View style={styles.centerContainer}>
      <Text style={styles.textStyle}>Center Container</Text>
    </View>
  );
}

// 컴포넌트
function TitleComponent() {
  return (
    <View style={styles.titleComponent}>
      <Text style={styles.textStyle}>Top Container</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    width: Dimensions.get("window").width,
    // justifyContent: "center",
    // alignItems: "center",
  },
  centerContainer: {
    flex: 2,
    // justifyContent: "center",
    // alignItems: "center",
  },
  titleComponent: {
    color: "transparent",
    borderColor: "white",
    borderWidth: 2,
    alignItems: "center",
    verticalAlign: "center",
    // width:
  },
  container: {
    backgroundColor: "green",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,

    borderColor: "white",
    // border,
  },

  textStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default StartGameScreen;
