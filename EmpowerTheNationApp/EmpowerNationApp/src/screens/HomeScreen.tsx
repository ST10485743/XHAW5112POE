import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Image source={require('../../img/logo.png')} style={styles.logo} />
      <Text style={styles.paragraph}>
        Precious Radebe's creative small-to-medium-sized business (SME) is transforming the gardening and housekeeping industries by providing specialized training skills. The SME is designed to create a digital presence via a website and mobile application in order to increase its reach and optimize operations. By utilizing technology, the SME hopes to raise its profile, enhance client interaction, and eventually help its trainees become more economically independent. Realizing the unrealized potential in her community, especially among gardeners and domestic workers without formal schooling, Radebe's project offers people the opportunity to launch their own businesses.
      </Text>

      <CustomButton title="COURSE LIST" onPress={() => navigation.navigate('CourseList')} />
      <CustomButton title="CONTACT/REGISTER" onPress={() => navigation.navigate('Contact')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 18, alignItems: 'center' },
  logo: { width: 140, height: 140, resizeMode: 'contain', marginTop: 8 },
  paragraph: { marginVertical: 16, textAlign: 'left', lineHeight: 20 },
});
