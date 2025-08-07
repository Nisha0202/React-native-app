import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Task from "../components/Task";

export default function Index() {
  return (
    <View
      style={styles.container}>

      {/* Today's Task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View >
    <Task> hello</Task>
             <Task> hellogyyyyuuuuuuuuuuyuuu</Task>
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
      paddingTop: 50,
      paddingHorizontal: 20,
    },

    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#02040f',
      paddingBottom: 12,
    },
    itemText: {
      maxWidth: '80%'

    },







  }
)






