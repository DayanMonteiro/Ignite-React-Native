import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons';
import {useTheme} from 'styled-components';

import {Dashboard} from '../screens/Dashboard';
import {Register} from '../screens/Register';
// import {RFValue} from 'react-native-responsive-fontsize';
// import {Resume} from '../screens/resume';

const {Screen, Navigator} = createBottomTabNavigator();

export function AppRoutes() {
    const theme = useTheme();
  return (
    <Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: theme.colors.secondary,
            tabBarInactiveTintColor: theme.colors.text,
            tabBarLabelPosition: 'beside-icon',
            tabBarStyle: {
                height: 88,
                paddingVertical: Platform.OS === 'ios' ? 20 : 0,
            }
        }}
    //   tabBarOptions={{
    //     activeTintColor: colors.secondary,
    //     inactiveTintColor: colors.subTitle,
    //     labelPosition: 'beside-icon',
    //     style: {
    //       height: RFValue(88),
    //       padding: Platform.OS === 'ios' ? 20 : 0,
    //     },
    //     labelStyle: {
    //       fontFamily: fonts.regular,
    //       fontSize: RFValue(14),
    //       lineHeight: RFValue(21),
    //     },
    //   }}
      >
      <Screen
        name="Listagem"
        component={Dashboard}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcons size={size} color={color} name="format-list-bulleted" />
          ),
        }}
      />
      <Screen
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcons size={size} color={color} name="attach-money" />
          ),
        }}
      />
      <Screen
        name="Resumo"
        component={Register}
        // component={Resume}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcons size={size} color={color} name="pie-chart" />
          ),
        }}
      />
    </Navigator>
  );
}