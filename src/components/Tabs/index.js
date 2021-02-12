import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, TabsContainer, TabsItem, TabsText} from './styles';

export default function Tabs({translateY}) {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 30],
              extrapolate: 'clamp',
            }),
          },
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: 'clamp',
        }),
      }}>
      <TabsContainer>
        <TabsItem onPress={() => {}}>
          <Icon name="person-add" size={24} color="#fff" />
          <TabsText>Indicar amigos</TabsText>
        </TabsItem>
        <TabsItem onPress={() => {}}>
          <Icon name="chat-bubble-outline" size={24} color="#fff" />
          <TabsText>Cobrar</TabsText>
        </TabsItem>
        <TabsItem onPress={() => {}}>
          <Icon name="arrow-downward" size={24} color="#fff" />
          <TabsText>Depositar</TabsText>
        </TabsItem>
        <TabsItem onPress={() => {}}>
          <Icon name="arrow-upward" size={24} color="#fff" />
          <TabsText>Transferir</TabsText>
        </TabsItem>
        <TabsItem onPress={() => {}}>
          <Icon name="lock" size={24} color="#fff" />
          <TabsText>Bloquear Cartão</TabsText>
        </TabsItem>
      </TabsContainer>
    </Container>
  );
}
