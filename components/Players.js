import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { Card } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'

const Players = ({ navigation, player }) => {
  const { name, id, score, scores, total } = player

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate({ routeName: 'Player', params: { id: id } })
      }
    >
      <View style={styles.screen}>
        <Card
          title={name}
          containerStyle={styles.cardContainer}
          titleStyle={{ color: 'white', fontSize: 18 }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}
          >
            <Text style={{ color: 'white', fontSize: 15 }}>
              Current Score: {score}{' '}
            </Text>
            <Text style={{ color: 'white', fontSize: 15 }}>
              Total Score: {total}{' '}
            </Text>
          </View>
        </Card>
      </View>
    </TouchableOpacity>
  )
}

export default Players

const styles = StyleSheet.create({
  screen: {
    width: '100%',
  },
  cardContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    // flex: 1,
    // marginBottom: 20,
    // width: Dimensions.get('screen').width > 640 ? '' : 600,
    // borderRadius: 10,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 12,
    // },
    // shadowOpacity: 0.58,
    // shadowRadius: 16.0,
    // elevation: 24,
    // padding: 15,
  },
})
