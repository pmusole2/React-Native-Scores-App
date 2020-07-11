import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { Card, Input, Button, Image } from 'react-native-elements'
import { useSelector, useDispatch } from 'react-redux'
import { FlatList } from 'react-native'
import { addScore } from '../store/actions/playerActions'

const PlayerItem = ({ navigation }) => {
  const [newScore, setNewScore] = useState('')
  const playerID = navigation.getParam('id')
  const player = useSelector(state =>
    state.player.players.find(item => item.id === playerID)
  )
  const numberInputHandler = inputText => {
    setNewScore(inputText.replace(/[^-0-9]/g, ''))
  }

  const dispatch = useDispatch()
  const { name, id, score, scores, total } = player
  return (
    <View style={styles.pageContainer}>
      <Image
        source={require('../assets/pool2.jpg')}
        style={{
          resizeMode: 'cover',
          //   flex: 1,
          width: Dimensions.get('screen').width > 360 ? 720 : 360,
          height: 1250,
        }}
      >
        <Card
          containerStyle={styles.containerStyle}
          titleStyle={{ fontSize: 25, color: 'white' }}
          title={name}
        >
          <View style={styles.highlight}>
            <Text style={styles.highlightContent}>Current Score: {score} </Text>
            <Text style={styles.highlightContent}>Total Score: {total} </Text>
          </View>
          <View style={styles.inputContainer}>
            <Input
              placeholder='Score'
              value={newScore}
              onChangeText={numberInputHandler}
              blurOnSubmit
              keyboardType='number-pad'
              maxLength={3}
              label='ADD SCORE'
              labelStyle={{ alignSelf: 'center', color: 'white' }}
              inputContainerStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                borderRadius: 5,
                width: '20%',
                alignSelf: 'center',
              }}
            />
            <Button
              title='ADD'
              onPress={() => {
                dispatch(addScore({ id, score: newScore }))
                navigation.pop()
              }}
            />
          </View>
          <Text style={styles.prevScores}> Previous Scores </Text>
          {scores.length > 0 && (
            <FlatList
              data={scores}
              keyExtractor={item => item.toString()}
              renderItem={({ item }) => (
                <View style={styles.prevScoresContainer}>
                  <Text style={styles.scores}> {item} </Text>
                </View>
              )}
            />
          )}
        </Card>
      </Image>
    </View>
  )
}

export default PlayerItem

const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 10,
  },
  pageContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    // alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  highlightContent: {
    fontSize: 25,
    color: 'white',
    textTransform: 'uppercase',
  },
  prevScores: {
    textAlign: 'center',
    marginTop: 15,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    fontSize: 24,
    color: 'white',
  },
  prevScoresContainer: {
    marginTop: 25,
  },
  scores: {
    padding: 10,
    borderTopColor: 'gray',
    borderWidth: 1,
    margin: 3,
    textAlign: 'center',
    borderRadius: 5,
    marginTop: 10,
    fontSize: 20,
    color: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  inputContainer: {
    marginTop: 30,
  },
})
