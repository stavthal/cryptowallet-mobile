import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';

const Wrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

// TODO: Use effect to navigate to the appropriate screen if the user is registered already (should be the PIN screen)

const HomeScreen = () => {
  return (
    <Wrapper>
      <Text>Hello world</Text>
    </Wrapper>
  );
};

export default HomeScreen;
