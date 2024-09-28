import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import {NavigationProp} from '@react-navigation/native';

interface WelcomeScreenProps {
  navigation: NavigationProp<any>;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default WelcomeScreen;
