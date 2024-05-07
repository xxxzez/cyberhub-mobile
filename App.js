import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CyberHub</Text>
      {/* <Text style={styles.subtitle}>Алга Казахстан</Text> */}
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff345f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '60px',
    fontWeight: '900',
  },
  subtitle: {
    color: '#fff',
    fontSize: '30px',
  },
})
