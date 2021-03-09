import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import ProfileScreen from './ProfileScreen'
import LoginScreen from './LoginScreen'
import RegistrationScreen from './RegistrationScreen'
import LoadingScreen from './LoadingScreen'
import {
  PROFILE_HOME,
  LOGIN_HOME,
  REGISTRATION,
  LOADINGSCREEN
} from '../routes'

const AppNavigator = createStackNavigator(
  {
  LOGIN_HOME:{screen: LoginScreen},
  PROFILE_HOME: {screen: ProfileScreen},
  REGISTRATION : {screen: RegistrationScreen},
  LOADINGSCREEN: {screen: LoadingScreen}
  },
  {
  initialRouteName: LOADINGSCREEN,
  headerMode:'none'
  }
)

export default createAppContainer(AppNavigator);