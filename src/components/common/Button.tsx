import React, {useRef} from 'react';
import styled from 'styled-components';
import {View, Pressable, Text, Animated} from 'react-native';

const ButtonContainer = styled(View)`
  width: ${props => props.theme.utils.pxToWp(300)}px;
  height: ${props => props.theme.utils.pxToHp(50)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  padding: 4px;
  border-radius: 50px;
`;

const ButtonText = styled(Text)`
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  text-align: center;
  color: ${props => props.theme.colors.white};
`;

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

export default function Button({onPress, children}: ButtonProps) {
  const animated = useRef(new Animated.Value(1)).current;

  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.5,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable onPressIn={fadeIn} onPressOut={fadeOut} onPress={onPress}>
      <Animated.View style={{opacity: animated}}>
        <ButtonContainer>
          <ButtonText>{children}</ButtonText>
        </ButtonContainer>
      </Animated.View>
    </Pressable>
  );
}
