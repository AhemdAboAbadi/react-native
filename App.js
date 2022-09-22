import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useCallback, useState } from "react";

export default function App() {
  const [people, setPeople] = useState([
    { name: " shaun ", id: " 1 " },
    { name: " yoshi ", id: " 2 " },
    { name: " mario ", id: " 3 " },
    { name: " luigi ", id: " 4 " },
    { name: " peach ", id: " 5 " },
    { name: " toad ", id: " 6 " },
    { name: " bowser ", id: " 7 " },
    { name: " Ahmed ", id: " 8 " },
    { name: " ASD ", id: " 9 " },
  ]);

  const pressHandler = useCallback((id) => {
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.id != id);
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        numColumns={2}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={(e) => {
              pressHandler(item.id);
            }}
          >
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    margin: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
