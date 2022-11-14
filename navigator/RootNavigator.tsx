import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';

const RootStack = createNativeStackNavigator();

export type RootStackParamList = {
  Main: undefined;
  MyModal: { userId: string, name: string }
  Order: { order: any }
}

const RootNavigator:FC<unknown> = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name='Main' component={TabNavigator} />
      </RootStack.Group>
    </RootStack.Navigator>
  )
}

export default RootNavigator