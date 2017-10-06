import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Touchable,
  View,
} from 'react-native';
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

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
    // header: 'Home',
  };

  render() {
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

        <Content
          style={{ flex: 1, padding: 10 }}
          contentContainerStyle={{ flex: 1 }}
        >
          <Card style={{ flex: 2 }}>
            <CardItem button style={{ backgroundColor: '#ee3d24', flex: 2 }}>
              <Body
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    fontSize: 40,
                    color: `${Colors.noticeText}`,
                    alignSelf: 'center',
                  }}
                >
                  Declare goods
                </Text>
                <Entypo
                  name="shopping-cart"
                  size={70}
                  style={{}}
                  color="#fff"
                />
              </Body>
            </CardItem>
          </Card>

          <Card style={{ flex: 2 }}>
            <CardItem button style={{ backgroundColor: 'grey', flex: 2 }}>
              <Body
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    fontSize: 40,
                    color: `${Colors.noticeText}`,
                    alignSelf: 'center',
                  }}
                >
                  Quota
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={{ flex: 1 }}>
            <CardItem button style={{ backgroundColor: 'grey', flex: 1 }}>
              <Body
                style={{
                  flex: 2,
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    fontSize: 40,
                    color: `${Colors.noticeText}`,
                    alignSelf: 'center',
                  }}
                >
                  Quittung
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
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
