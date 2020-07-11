import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Alert,
  FlatList,
  Dimensions,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { addPlayer, removePlayer } from '../store/actions/playerActions'
import { Card, Input, Button, Image } from 'react-native-elements'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'
import { AntDesign, Entypo } from '@expo/vector-icons'

const CustomCard = ({ name, id }) => {
  const dispatch = useDispatch()
  return (
    <View style={{ flex: 1 }}>
      <Card containerStyle={styles.cardContainer} title='Player'>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'white', fontSize: 25 }}>{name}</Text>
          <Entypo
            name='trash'
            onPress={() => dispatch(removePlayer(id))}
            size={30}
            color='white'
          />
        </View>
      </Card>
    </View>
  )
}

const AddPlayer = () => {
  const [name, setName] = useState('')
  const players = useSelector(state => state.player.players)
  const dispatch = useDispatch()
  const submitName = () => {
    if (name === '') {
      return
    }
    const newPlayer = {
      id: `${name}${Math.ceil(Math.random() * 99999)}`,
      name,
      score: 0,
      scores: [],
      total: 0,
    }
    dispatch(addPlayer(newPlayer))
    Alert.alert('Name Added', 'Name has been added')
    setName('')
  }

  let Alternative

  if (players.length < 1) {
    Alternative = (
      <View style={styles.noPlayersContainer}>
        <Text style={styles.warning}>No Players</Text>
        <AntDesign
          name='warning'
          //   size={50}
          //   color='red'
          style={styles.warningIcon}
        />
      </View>
    )
  } else {
    Alternative = (
      <FlatList
        data={players}
        renderItem={itemData => (
          <CustomCard name={itemData.item.name} id={itemData.item.id} />
        )}
      />
    )
  }
  return (
    <View style={styles.screen}>
      <Image
        source={require('../assets/pool2.jpg')}
        style={{
          resizeMode: 'cover',
          flex: 1,
          width: Dimensions.get('screen').width > 640 ? 720 : 360,
          height: Dimensions.get('screen').height > 640 ? 1138 : 630,
        }}
      >
        <View style={styles.inputContainer}>
          <Input
            placeholder='Enter Player Name'
            value={name}
            onChangeText={setName}
            style={styles.input}
            blurOnSubmit
            inputContainerStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              borderRadius: 5,
            }}
          />
          <Button title='ADD' onPress={submitName} />
        </View>
        {Alternative}
      </Image>
    </View>
  )
}

AddPlayer.navigationOptions = navData => {
  return {
    headerTitle: 'ADD PLAYER',
    headerTitleAlign: 'center',
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            iconName='clipboard-text-play-outline'
            title='Start'
            onPress={() => navData.navigation.navigate('CurrentGame')}
          />
        </HeaderButtons>
      )
    },
  }
}

export default AddPlayer

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    alignContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 20,
  },
  buttonContainer: {
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  names: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
  },
  list: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  startButton: {
    marginTop: 15,
    marginBottom: 5,
    marginHorizontal: '20%',
  },
  cardContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    flex: 1,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  input: {
    color: 'white',
    backgroundColor: 'black',
    textAlign: 'center',
  },

  noPlayersContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: '15%',
  },
  warning: {
    fontSize: 30,
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
    fontSize: 60,
  },
})
