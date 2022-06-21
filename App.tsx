import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Home, HomeSelected, Profile, ProfileSelected, Wallet, WalletSelected } from './src/assets/icons';
import HistoryScreen from './src/screens/history';
import HomeScreen from './src/screens/home';
import ProfileScreen from './src/screens/profile';
import { SafeAreaView, StatusBar } from 'react-native';
import { Colors } from './src/styles';
import { AppProvider } from './src/context/store';

const Tab = createBottomTabNavigator();
export const AppStatusBar = ({ backgroundColor, ...props }: any) => (
  <SafeAreaView style={{ height: StatusBar.currentHeight, backgroundColor }}>
    <StatusBar translucent barStyle="light-content" backgroundColor={backgroundColor} {...props} />
  </SafeAreaView>
);

const HomeStack = createNativeStackNavigator();

function HomeNav() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Dashboard" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

function App() {
  return (
    <>
      <AppProvider>
        <AppStatusBar backgroundColor={Colors.primary.base} />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ focused }) => {
                const iconProps = {
                  width: 24,
                  height: 24,
                };

                switch (route.name) {
                  case 'Home':
                    return focused ? <HomeSelected {...iconProps} /> : <Home {...iconProps} />;
                  case 'History':
                    return focused ? <WalletSelected {...iconProps} /> : <Wallet {...iconProps} />;
                  case 'Profile':
                    return focused ? <ProfileSelected {...iconProps} /> : <Profile {...iconProps} />;
                }
              },
            })}>
            <Tab.Screen name="Home" component={HomeNav} />
            <Tab.Screen name="History" component={HistoryScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </AppProvider>
    </>
  );
}

export default App;
