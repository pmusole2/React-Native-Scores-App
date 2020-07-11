import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import playerReducer from './store/reducers/playerReducer'
import GameNavigator from './navigation/GameNavigator'

const rootReducer = combineReducers({
  player: playerReducer,
})

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style='inverted' />
      <GameNavigator />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
