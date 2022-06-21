import React from 'react';
import { SafeAreaView, ScrollView, Text, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styles from './profile.styles';

const Profile = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={styles.container}>
          <Text>Settings!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
