import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Household from '../pages/Household'
import Setting from '../pages/Setting'
import Statistics from '../pages/Statistics'


const Tab = createBottomTabNavigator()

const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Household" component={Household}/>
            <Tab.Screen name="Setting" component={Setting}/>
            <Tab.Screen name="Statistics" component={Statistics}/>
        </Tab.Navigator>
    )
}

export default AppNavigator