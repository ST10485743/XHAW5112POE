import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { COURSES } from '../data/courses';
import CustomButton from '../components/CustomButton';

type Props = NativeStackScreenProps<RootStackParamList, 'CourseDetail'>;

export default function CourseDetailScreen({ route, navigation }: Props) {
  const { courseId } = route.params;
  const course = COURSES.find(c => c.id === courseId);

  if (!course) {
    return <View style={styles.center}><Text>Course not found</Text></View>;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}><Text style={styles.headerText}>{course.title}</Text></View>
      <View style={{ padding: 16 }}>
        <Text style={{ fontWeight: '700' }}>
          Duration: <Text style={{ fontWeight: '400' }}>{course.duration}</Text>
        </Text>
        <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.fee}>Fees: R{course.fee}</Text>
        <Text style={styles.sectionTitle}>Purpose:</Text>
      <Text style={styles.text}>{course.purpose}</Text>

      <Text style={styles.sectionTitle}>Content:</Text>
      {course.content.map((item: string, index: number) => (
        <Text key={index} style={styles.listItem}>
          {index + 1}. {item}
        </Text>
      ))}

        <CustomButton title="Calculate Fee" onPress={() => navigation.navigate('Calculator', { selectedCourseIds: [course.id] })} />
        <CustomButton title="Back" onPress={() => navigation.goBack()} style={{ backgroundColor: '#eee' }} textStyle={{ color: '#000' }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { backgroundColor: '#5840FF', padding: 12 },
  headerText: { color: '#fff', fontWeight: '700' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  sectionTitle: { fontWeight: 'bold', marginTop: 10 },
  listItem: { marginLeft: 10, marginBottom: 5 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 }
});
