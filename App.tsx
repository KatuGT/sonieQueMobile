import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Updates from "expo-updates";
import { useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import SuenioCard from "components/SuenioCard";

export default function App() {
  // useEffect(() => {
  //   onFetchUpdateAsync();
  // }, []);

  // async function onFetchUpdateAsync() {
  //   try {
  //     const update = await Updates.checkForUpdateAsync();

  //     if (update.isAvailable) {
  //       await Updates.fetchUpdateAsync();
  //       await Updates.reloadAsync();
  //     }
  //   } catch (error) {
  //     alert(`Error fetching latest Expo update: ${error}`);
  //   }
  // }

  return (
    <LinearGradient
      colors={["#03001A", "#01002E"]}
      style={styles.container}>
      <StatusBar style="light" />
      <SuenioCard />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
