import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { Image, Button } from 'react-native-elements'
import { AntDesign, FontAwesome } from '@expo/vector-icons'

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.welcome}>
      <Image
        source={require('../assets/pool2.jpg')}
        style={{
          resizeMode: 'cover',
          flex: 1,
          width: 1550,
          height: 1453,
        }}
      >
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: '8%',
          }}
        >
          <Text style={styles.title}>Welcome to The Kings Tournament</Text>
          <Text style={styles.motto}>
            Store your game progress and know who is leading!!!
          </Text>
          <Text style={{ color: 'white' }}>By Prince M</Text>
        </View>
        <View
          style={{
            height: Dimensions.get('screen').height > 640 ? '30%' : '10%',
          }}
        />
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            // width: '25%',
          }}
        >
          <Button
            onPress={() => navigation.navigate('CurrentGame')}
            buttonStyle={{
              width: Dimensions.get('screen').width > 640 ? 350 : 200,
              backgroundColor: 'red',
            }}
            icon={<AntDesign name='play' size={18} color='white' />}
            title={`   CURRENT GAME`}
          />
          <View style={{ height: 15 }} />
          <Button
            onPress={() => navigation.navigate('AddPlayer')}
            buttonStyle={{
              width: Dimensions.get('screen').width > 640 ? 350 : 200,
              backgroundColor: 'red',
            }}
            icon={<AntDesign name='adduser' size={18} color='white' />}
            title={`   PLAYERS`}
          />
          <View style={{ height: 15 }} />
          <Button
            title='   GAME HISTORY'
            onPress={() => navigation.navigate('History')}
            buttonStyle={{
              width: Dimensions.get('screen').width > 640 ? 350 : 200,
              backgroundColor: 'red',
            }}
            icon={<FontAwesome name='history' size={18} color='white' />}
            disabled
          />
          <View style={{ height: 15 }} />
          <Button
            title='   INSTRUCTIONS'
            onPress={() => navigation.navigate('Instructions')}
            buttonStyle={{
              width: Dimensions.get('screen').width > 640 ? 350 : 200,
              backgroundColor: 'red',
            }}
            icon={<AntDesign name='warning' size={18} color='white' />}
            disabled
          />
        </View>
      </Image>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    // height: 1500,
  },
  title: {
    fontSize: Dimensions.get('screen').width > 640 ? 32 : 16,
    fontWeight: '900',
    color: 'white',
  },
  motto: {
    fontSize: Dimensions.get('screen').width > 640 ? 28 : 14,
    marginVertical: 15,
    color: 'white',
  },
})
