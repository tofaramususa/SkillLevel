import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs 
    screenOptions={{
      tabBarStyle: {
        display: 'none',
      },
	  headerShown: false 
    }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
    </Tabs>
  );
}
