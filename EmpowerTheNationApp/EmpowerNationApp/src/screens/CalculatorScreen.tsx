import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COURSES, Course } from '../data/courses';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App'; // ✅ ensure path correct

type NavProp = NativeStackNavigationProp<RootStackParamList>; // ✅ define type

export default function CalculatorScreen() {
  const navigation = useNavigation<NavProp>(); // ✅ type your navigation
  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);

  useEffect(() => {
    (async () => {
      const raw = await AsyncStorage.getItem('selectedCourses');
      if (raw) {
        const ids: string[] = JSON.parse(raw);
        const found = COURSES.filter(c => ids.includes(c.id));
        setSelectedCourses(found);
      }
    })();
  }, []);

  const discountPercentage =
    selectedCourses.length === 1 ? 0 :
    selectedCourses.length === 2 ? 5 :
    selectedCourses.length === 3 ? 10 :
    selectedCourses.length > 3 ? 15 : 0;

  const subtotal = selectedCourses.reduce((sum, c) => sum + c.fee, 0);
  const discountAmount = subtotal * (discountPercentage / 100);
  const vat = (subtotal - discountAmount) * 0.15;
  const total = subtotal - discountAmount + vat;

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>FEE CALCULATOR</Text>
      </View>

      <FlatList
        data={selectedCourses}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text>{item.title}</Text>
            <Text>R {item.fee.toFixed(2)}</Text>
          </View>
        )}
        ListFooterComponent={() => (
          <View style={{ padding: 16 }}>
            <Text style={styles.summary}>Courses Chosen: {selectedCourses.length}</Text>
            <Text style={styles.summary}>Discount: {discountPercentage}%</Text>
            <Text style={styles.summary}>Subtotal (excl. VAT): R{subtotal.toFixed(2)}</Text>
            <Text style={[styles.summary, { fontWeight: '700' }]}>
              Grand Total: R{total.toFixed(2)}
            </Text>

            <CustomButton title="CONTACT" onPress={() => navigation.navigate('Contact')} />
            <CustomButton title="BACK TO COURSES" onPress={() => navigation.navigate('CourseList')} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: { backgroundColor: '#5840FF', padding: 14 },
  headerText: { color: '#fff', fontSize: 20, fontWeight: '700' },
  row: { flexDirection: 'row', justifyContent: 'space-between', padding: 12 },
  summary: { marginVertical: 4, fontSize: 16 },
});
