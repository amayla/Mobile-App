import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import ProfileScreen from '../screens/ProfileScreen'
import Stack1Screen from '../screens/Stack1Screen'
import Stack2Screen from '../screens/Stack2Screen'

const ProfileTabNavigator = createMaterialTopTabNavigator({
    ProfileScreen,
    Stack1Screen,
    Stack2Screen
},
{
    swipeEnabled : true
}
)

export default ProfileTabNavigator