import { StyleSheet, Text, View } from 'react-native';

import RootStack from './navigators/RootStack';
export default function App() {
  return <RootStack />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
