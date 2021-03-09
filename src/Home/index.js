import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import {
    OQYSHI_HOME,
    OQYSHI_DETAILS
} from '../routes'

const AppNavigator = createStackNavigator(
    {
    OQYSHI_HOME:{screen: HomeScreen},
    OQYSHI_DETAILS: {screen: DetailsScreen}
    },
    {
        initialRouteName: OQYSHI_HOME,
        headerMode:'none'

    }
)

export default createAppContainer(AppNavigator);