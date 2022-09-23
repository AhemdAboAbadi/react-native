import { useCallback, useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Header from "./components/Header";
import ToDoItem from "./components/ToDoItem";
import AddItem from "./components/AddItem";

export default function App() {
  const [toDo, setToDo] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const handelPress = (key) => {
    setToDo((previousToDo) => {
      return previousToDo.filter((item) => item.key != key);
    });
  };

  const handelSubmit = (textFromInput) => {
    setToDo((prevText) => {
      return [
        { text: textFromInput, key: Math.random().toString() },
        ...prevText,
      ];
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddItem handelSubmit={handelSubmit} />

        <View style={styles.list}>
          <FlatList
            data={toDo}
            renderItem={({ item }) => (
              <ToDoItem
                item={item}
                pressHandler={() => handelPress(item.key)}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
