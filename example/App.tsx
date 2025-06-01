// import { useEvent } from 'expo';
import ExpoIR from 'expo-ir';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';

export default function App() {
  // const onChangePayload = useEvent(ExpoIR, 'onChange');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Module API Example</Text>
        <Group name="Functions">
          <Text>{`Infrared Blaster:`}</Text>
          <Text>{`${ExpoIR.isSupporting() ? "True" : "False"}`}</Text>
        </Group>
        <Group name="Transmit">
          <Button
            title="Transmit data"
            onPress={() => {
              ExpoIR.transmit(38000, [169, 168, 21, 63, 21, 63, 21, 63, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 63, 21, 63, 21, 63, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 63, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 64, 21, 21, 21, 63, 21, 63, 21, 63, 21, 63, 21, 63, 21, 63, 21, 1794, 169, 168, 21, 21, 21, 3694]);
            }}
          />
        </Group>
        {/* <Group name="Async functions">
          <Button
            title="Set value"
            onPress={async () => {
              await ExpoIR.setValueAsync('Hello from JS!');
            }}
          />
        </Group>
        <Group name="Events">
          <Text>{onChangePayload?.value}</Text>
        </Group> */}
      </ScrollView>
    </SafeAreaView>
  );
}

function Group(props: { name: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
  );
}

const styles = {
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  group: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  view: {
    flex: 1,
    height: 200,
  },
};
