import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ScrollView } from 'react-native';
import CustomButton from '../components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export default function ContactScreen() {
  const nav = useNavigation<NavProp>();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    (async () => {
      const raw = await AsyncStorage.getItem('contactData');
      if (raw) {
        const parsed = JSON.parse(raw);
        setName(parsed.name || '');
        setPhone(parsed.phone || '');
        setEmail(parsed.email || '');
      }
    })();
  }, []);

  const validate = () => {
    if (!name.trim()) { Alert.alert('Validation', 'Please enter your name.'); return false; }
    if (!/^[0-9+\s-]{7,}$/.test(phone)) { Alert.alert('Validation', 'Please enter a valid phone number.'); return false; }
    if (!/^\S+@\S+\.\S+$/.test(email)) { Alert.alert('Validation', 'Please enter a valid email address.'); return false; }
    return true;
  };

  const submit = async () => {
    if (!validate()) return;
    const data = { name, phone, email };
    await AsyncStorage.setItem('contactData', JSON.stringify(data));
    Alert.alert('Submitted', 'Thank you — a consultant will contact you.');
  };

  const reset = () => { setName(''); setPhone(''); setEmail(''); };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={styles.header}><Text style={styles.headerText}>CONTACT/REGISTRATION</Text></View>

      <Text style={styles.title}>Contact Details</Text>
      <Text>Telephone number: +27 11 5437 668</Text>
      <Text>Email Address: empowernation@emp.ac.za</Text>
      <Text>Locations: Johannesburg, Durban, Polokwane</Text>

      <View style={styles.formBox}>
        <Text style={styles.formTitle}>FORMS</Text>

        <Text style={styles.label}>Name:</Text>
        <TextInput value={name} onChangeText={setName} placeholder="Please enter your name" style={styles.input} />

        <Text style={styles.label}>Phone Number:</Text>
        <TextInput value={phone} onChangeText={setPhone} placeholder="Please enter your number" keyboardType="phone-pad" style={styles.input} />

        <Text style={styles.label}>Email address:</Text>
        <TextInput value={email} onChangeText={setEmail} placeholder="Please enter email address" keyboardType="email-address" style={styles.input} />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }}>
          <CustomButton title="Submit" onPress={submit} style={{ width: '48%' }} />
          <CustomButton title="Reset" onPress={reset} style={{ width: '48%', backgroundColor: '#666' }} />
        </View>
      </View>

      <CustomButton title="COURSE LIST" onPress={() => nav.navigate('CourseList')} />
      <CustomButton title="HOME" onPress={() => nav.navigate('Home')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: { backgroundColor: '#5840FF', padding: 12 },
  headerText: { color: '#fff', fontWeight: '700' },
  title: { fontSize: 20, fontWeight: '700', marginTop: 12 },
  formBox: { backgroundColor: '#eee', padding: 12, borderRadius: 6, marginTop: 12 },
  formTitle: { fontWeight: '700', marginBottom: 8 },
  label: { marginTop: 8 },
  input: { backgroundColor: '#fff', padding: 8, borderRadius: 6, marginTop: 6 }
});
