import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './App/Screen/Home';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './App/Navigations/HomeNavigator';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <HomeNavigator/>
      </NavigationContainer>
      {/* <Home/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:45,
    padding:20
  },
});
