import React from 'react';

import {
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#363636',
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  instructions: {
    color: '#4f4f4f',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  logo: {
    height: Dimensions.get('window').height * 0.11,
    marginVertical: Dimensions.get('window').height * 0.11,
    width: Dimensions.get('window').height * 0.11 * (1950 / 662),
  },
  welcome: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Main = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor="#95a5a6" />
    <Image
      source={{
        uri:
          'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/rocketseat_logo.png',
      }}
      style={styles.logo}
      resizeMode="contain"
    />
    <Text style={styles.welcome}>Bem-vindo ao Template Básico!</Text>
    <Text style={styles.instructions}>
      Essa é a tela principal da sua aplicação =)
    </Text>
    <Text style={styles.instructions}>Você pode editar a tela no arquivo:</Text>
    <Text style={[styles.instructions, styles.fileName]}>
      src/pages/Main/index.js
    </Text>
  </View>
);

export default Main;
