import React from 'react';
import QRCode from 'react-native-webview-qrcode';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from '~/components/Menu/styles';

export default function Menu({translateY}) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}>
      <Code>
        <QRCode
          value="https://rocketseat.com.br"
          size={80}
          fgColor="#fff"
          bgColor="#8b10ae"
          overflow="hidden"
        />
      </Code>

      <Nav>
        <NavItem onPress={() => {}}>
          <Icon name="help-outline" size={20} color="#fff" />
          <NavText>Me Ajuda</NavText>
        </NavItem>
        <NavItem onPress={() => {}}>
          <Icon name="person-outline" size={20} color="#fff" />
          <NavText>Meu Perfil</NavText>
        </NavItem>
        <NavItem onPress={() => {}}>
          <Icon name="credit-card" size={20} color="#fff" />
          <NavText>Configuraçôes do Cartão</NavText>
        </NavItem>
        <NavItem onPress={() => {}}>
          <Icon name="smartphone" size={20} color="#fff" />
          <NavText>Configuraçôes do App</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>Sair do App</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
