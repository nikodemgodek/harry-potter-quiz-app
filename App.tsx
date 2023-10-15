import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GeneralScreen from './screens/GeneralScreen';
import QuizScreen from './screens/QuizScreen';

export default function App() {

  const Stack = createStackNavigator();

  const isStarted :boolean = true;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isStarted ? <Stack.Screen name="Quiz" component={QuizScreen} options={{headerShown: false}}/> : <Stack.Screen name="General" component={GeneralScreen}  options={{headerShown: false}}/>}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
