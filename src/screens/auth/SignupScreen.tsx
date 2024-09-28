import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styled from 'styled-components';

const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
`;

const HyperLinkWrapper = styled(View)`
  flex-direction: row;
  margin-top: 20px;
`;

const StyledText = styled(Text)`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
`;

const HyperLink = styled(Text)`
  color: #672082;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
`;

const Heading = styled(Text)`
  font-size: 32px;
  text-align: center;
  margin-top: 30px;
  font-weight: 700;
`;

export default function LoginScreen() {
  return (
    <Container>
      <HyperLinkWrapper>
        <StyledText>Already have an account? </StyledText>
        <HyperLink>Sign in</HyperLink>
      </HyperLinkWrapper>
      <Heading>Sign Up</Heading>
    </Container>
  );
}
