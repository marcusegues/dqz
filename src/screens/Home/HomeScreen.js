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
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container
        style={{ flex: 1, backgroundColor: 'white', flexDirection: 'column' }}
      >
        <Header
          style={{
            backgroundColor: 'white',
            borderBottomColor: 'rgb(217,10,35)',
            borderBottomWidth: 4,
            height: 65,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Image
            source={require('../../../assets/images/kreuz.png')}
            resizeMode="contain"
            fadeDuration={0}
            style={{ width: 30, height: 30 }}
          />
          <Button transparent title="menu">
            <Icon name="menu" />
          </Button>
        </Header>

        <View
          style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}
        >
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
            {`Willkommen in Ihrer Zollwerwaltungs-App`}
          </Text>

          <Text style={{ fontSize: 18, color: 'grey' }}>
            {`Dieser Zollrechner für die Schweiz gibt ihnen schnell und einfach Auskunft über die Höhe von Zoll und MwSt. Berechnet werden die Gebühren auf den persönlichen Auslandeinkauf.`}
          </Text>

          <Touchable
            onPress={() => navigate('DeclareGoods')}
            // onPress={() => console.log('hello!')}
            style={{
              height: 230,
              width: 230,
              flexDirection: 'column',
              backgroundColor: 'rgb(62,106,151)',
              marginVertical: 5,
              borderRadius: 115,
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
              <Entypo name="shopping-cart" size={70} color="#fff" />
              <Text
                style={{
                  fontSize: 20,
                  color: `${Colors.noticeText}`,
                }}
              >
                Declare goods
              </Text>
            </View>
          </Touchable>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Touchable
              onPress={() => console.log('hello!')}
              style={{
                backgroundColor: '#b2b2b2',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 5,
                height: 40,
                width: 125,
                borderRadius: 4,
                marginRight: 10,
                marginLeft: 10,
              }}
              background={Touchable.Ripple('blue')}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: `${Colors.noticeText}`,
                }}
              >
                Quota
              </Text>
            </Touchable>
            <Touchable
              onPress={() => console.log('hello!')}
              style={{
                backgroundColor: '#b2b2b2',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 5,
                height: 40,
                width: 125,
                borderRadius: 4,
                marginRight: 10,
                marginLeft: 10,
              }}
              background={Touchable.Ripple('blue')}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: `${Colors.noticeText}`,
                }}
              >
                Quittung
              </Text>
            </Touchable>
          </View>
        </View>
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
  },
});
