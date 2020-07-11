import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import CurrentGameScreen from '../screens/CurrentGameScreen'
import InstructionScreen from '../screens/InstructionScreen'
import HistoryScreen from '../screens/HistoryScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import AddPlayer from '../screens/AddPlayer'
import PlayerItem from '../components/PlayerItem'

const GameNavigator = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: {
        headerTitle: 'The Kings Tournament',
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
        // headerShown: false,
      },
    },
    CurrentGame: {
      screen: CurrentGameScreen,
      navigationOptions: {
        headerTitle: 'Current Game',
      },
    },

    AddPlayer: {
      screen: AddPlayer,
      navigationOptions: {
        // headerShown: false,
      },
    },
    History: {
      screen: HistoryScreen,
    },
    Instructions: {
      screen: InstructionScreen,
    },
    Player: {
      screen: PlayerItem,
    },
  },
  {
    defaultNavigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      },
    },
  }
)

export default createAppContainer(GameNavigator)
