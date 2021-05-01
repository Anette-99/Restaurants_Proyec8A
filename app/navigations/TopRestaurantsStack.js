import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import search from '../screens/Search'
import TopRestaurants from '../screens/TopRestaurants'

const Stack = createStackNavigator()

export default function TopRestaurantsStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='toprestaurants'
                component={TopRestaurants}
                options={{ title:'Top 5' }}
            />
        </Stack.Navigator>
    )
}