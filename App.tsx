import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GeneralScreen from './screens/GeneralScreen';
import QuizScreen from './screens/QuizScreen';
import FinishScreen from './screens/FinishScreen';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='General'>
        <Stack.Screen name="Quiz" component={QuizScreen} options={{headerShown: false}}/>
        <Stack.Screen name="General" component={GeneralScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="Finish" component={FinishScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
