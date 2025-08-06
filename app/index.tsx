import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}>

      {/* Today's Task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>

        </View>



      </View>
    </View>
  );
}
const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    taskWrapper: {
flex: 1,
backgroundColor : '#fff',
      },

      sectionTitle: {
flex: 1,
backgroundColor : '#fff',
      },
      items: {
flex: 1,
backgroundColor : '#fff',
      },







  }
)






