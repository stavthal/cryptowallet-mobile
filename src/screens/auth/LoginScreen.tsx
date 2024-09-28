import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import {NavigationProp} from '@react-navigation/native';

interface LoginScreenProps {
  navigation: NavigationProp<any>;
}

export default function LoginScreen({navigation}: LoginScreenProps) {
  return (
    <SafeAreaView>
      <Text onPress={navigation.goBack}>Login Screen</Text>
    </SafeAreaView>
  );
}
