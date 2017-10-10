import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Title,
} from 'native-base';
import Colors from '../../constants/Colors';
import Touchable from 'react-native-platform-touchable';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
    // header: 'Home',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => console.log('Menu icon pressed')}
              title="menu"
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            {/*<Title>Home</Title>*/}
          </Body>
          <Right />
        </Header>

        <Touchable
          onPress={() => navigate('DeclareGoods')}
          // onPress={() => console.log('hello!')}
          style={{
            flex: 2,
            flexDirection: 'column',
            backgroundColor: '#f44336',
            marginVertical: 5,
          }}
          background={Touchable.Ripple('blue')}
        >
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 40,
                color: `${Colors.noticeText}`,
              }}
            >
              Declare goods
            </Text>
            <Entypo name="shopping-cart" size={70} color="#fff" />
          </View>
        </Touchable>

        <Touchable
          onPress={() => console.log('hello!')}
          style={{
            flex: 2,
            backgroundColor: '#b2b2b2',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 5,
          }}
          background={Touchable.Ripple('blue')}
        >
          <Text
            style={{
              fontSize: 40,
              color: `${Colors.noticeText}`,
            }}
          >
            Quota
          </Text>
        </Touchable>
        <Touchable
          onPress={() => console.log('hello!')}
          style={{
            flex: 1,
            backgroundColor: '#b2b2b2',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 5,
          }}
          background={Touchable.Ripple('blue')}
        >
          <Text
            style={{
              fontFamily: 'open-sans-bold',
              fontSize: 40,
              color: `${Colors.noticeText}`,
            }}
          >
            Quittung
          </Text>
        </Touchable>
        {/*</Content>*/}
        {/*<ScrollView*/}
        {/*style={styles.container}*/}
        {/*contentContainerStyle={styles.contentContainer}*/}
        {/*>*/}
        {/*<View style={styles.welcomeContainer}>*/}
        {/*<Image*/}
        {/*source={*/}
        {/*__DEV__*/}
        {/*? require('../../../assets/images/ch.png')*/}
        {/*: require('../../../assets/images/ch.png')*/}
        {/*}*/}
        {/*style={styles.welcomeImage}*/}
        {/*/>*/}
        {/*<Text style={styles.title}>DaziT by ambrite</Text>*/}
        {/*<Text style={{}}>*/}

        {/*</Text>*/}
        {/*</View>*/}
        {/*</ScrollView>*/}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
