import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'
import Players from '../components/Players'
import { FlatList } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Image } from 'react-native-elements'

const CurrentGameScreen = ({ navigation }) => {
  const players = useSelector(state => state.player.players)
  if (players.length < 1) {
    return (
      <View style={styles.noPlayersContainer}>
        <Image
          source={require('../assets/pool2.jpg')}
          style={{
            resizeMode: 'cover',
            flex: Dimensions.get('screen').width > 360 && 1,
            width: Dimensions.get('screen').width > 360 ? 800 : 360,
            height: 1640,
          }}
        >
          <Text style={styles.warning} numberOfLines={3}>
            No Players have been added, Please add players
          </Text>
          <AntDesign
            name='warning'
            size={50}
            color='red'
            style={styles.warningIcon}
          />
        </Image>
      </View>
    )
  }
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../assets/pool2.jpg')}
        style={{
          resizeMode: 'cover',
          flex: 1,
          width: Dimensions.get('screen').width > 360 ? 720 : 360,
          height: 1453,
        }}
      >
        <FlatList
          data={players}
          renderItem={itemData => (
            <Players player={itemData.item} navigation={navigation} />
          )}
        />
      </Image>
    </View>
  )
}

export default CurrentGameScreen

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  noPlayersContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning: {
    fontSize: 30,
    marginTop: '25%',
    textAlign: 'center',
    color: 'white',
    textShadowColor: 'red',
    textShadowOffset: { width: 1, height: 1 },
    // elevation: 2,
    textShadowRadius: 10,
    padding: 10,
  },
  warningIcon: {
    color: 'white',
    textShadowColor: 'red',
    textShadowOffset: { width: -2, height: -2 },
    // elevation: 2,
    textShadowRadius: 2,
    alignSelf: 'center',
    fontSize: 60,
  },
})
