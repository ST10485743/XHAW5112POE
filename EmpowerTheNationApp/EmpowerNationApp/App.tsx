import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import CourseListScreen from './src/screens/CourseListScreen';
import CourseDetailScreen from './src/screens/CourseDetailScreen';
import CalculatorScreen from './src/screens/CalculatorScreen';
import ContactScreen from './src/screens/ContactScreen';

// Exported type for typed navigation across screens
export type RootStackParamList = {
  Home: undefined;
  CourseList: undefined;
  CourseDetail: { courseId: string };
  Calculator: { selectedCourseIds?: string[] } | undefined;
  Contact: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Empowering the Nation' }} />
        <Stack.Screen name="CourseList" component={CourseListScreen} options={{ title: 'Course List' }} />
        <Stack.Screen name="CourseDetail" component={CourseDetailScreen} options={{ title: 'Course Details' }} />
        <Stack.Screen name="Calculator" component={CalculatorScreen} options={{ title: 'Fee Calculator' }} />
        <Stack.Screen name="Contact" component={ContactScreen} options={{ title: 'Contact / Register' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
