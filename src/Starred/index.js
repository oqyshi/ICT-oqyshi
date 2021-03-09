import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import StarScreen from './StarScreen'
import DetailsScreen from '../Home/DetailsScreen'
import {
    STAR_HOME,
    OQYSHI_DETAILS
} from '../routes'

const AppNavigator = createStackNavigator(
    {
    STAR_HOME:{screen: StarScreen},
    OQYSHI_DETAILS: {screen: DetailsScreen}
    },
    {
        initialRouteName: STAR_HOME,
        headerMode:'none'

    }
)

export default createAppContainer(AppNavigator);