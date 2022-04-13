import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Elements from '../Component/Elements'
import Test from '../Component/Test'

const Stack =  createStackNavigator()
const Navigation = () => {
  return (
    <Stack.Navigator >
        <Stack.Screen name='home' component={Elements} />
        <Stack.Screen name='rosan ka ghar' component={Test} />
    </Stack.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({})