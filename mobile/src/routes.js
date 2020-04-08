import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Casos from './pages/casos'
import Detalhes from './pages/detalhes'

const AppStack = createStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Casos" component={Casos}></AppStack.Screen>
                <AppStack.Screen name="Detalhes" component={Detalhes}></AppStack.Screen>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}