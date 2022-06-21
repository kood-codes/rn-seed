import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import styles from './history.styles';

const History = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text>History!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default History;
