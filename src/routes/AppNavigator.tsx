import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Household from '../pages/Household'
import Setting from '../pages/Setting'
import Statistics from '../pages/Statistics'


const Tab = createBottomTabNavigator()

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Household" component={Household}/>
                <Tab.Screen name="Setting" component={Setting}/>
                <Tab.Screen name="Statistics" component={Statistics}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator