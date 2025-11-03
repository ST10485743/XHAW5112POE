import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Checkbox from '../components/Checkbox';
import CustomButton from '../components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COURSES, Course } from '../data/courses';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

export default function CourseListScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const raw = await AsyncStorage.getItem('selectedCourses');
      if (raw) setSelected(JSON.parse(raw));
    })();
  }, []);

  const toggle = async (id: string) => {
    const updated = selected.includes(id) ? selected.filter(x => x !== id) : [...selected, id];
    setSelected(updated);
    await AsyncStorage.setItem('selectedCourses', JSON.stringify(updated));
  };

  const sixMonth = COURSES.filter(c => c.type === 'six-month');
  const sixWeek = COURSES.filter(c => c.type === 'six-week');

  const renderCourse = ({ item }: { item: Course }) => (
    <View style={styles.row} key={item.id}>
      <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('CourseDetail', { courseId: item.id })}>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
      <Checkbox checked={selected.includes(item.id)} onToggle={() => toggle(item.id)} />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}><Text style={styles.headerText}>COURSE LIST</Text></View>
      <FlatList
        data={[...sixMonth, ...sixWeek]}
        keyExtractor={i => i.id}
        renderItem={renderCourse}
        ListHeaderComponent={() => (
          <View style={{ padding: 12 }}>
            <Text style={styles.sectionTitle}>Courses Included:</Text>
          </View>
        )}
        ListFooterComponent={() => (
          <View style={{ padding: 16 }}>
            <CustomButton title="CONTACT/REGISTER" onPress={() => navigation.navigate('Contact')} />
            <CustomButton title="CALCULATOR" onPress={() => navigation.navigate('Calculator')} />
            <CustomButton title="HOME" onPress={() => navigation.navigate('Home')} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: { backgroundColor: '#5840FF', padding: 14 },
  headerText: { color: '#fff', fontSize: 20, fontWeight: '700' },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 12, borderBottomWidth: 0.5, borderColor: '#ddd' },
  title: { fontSize: 16 },
  sectionTitle: { fontWeight: '700' }
});
