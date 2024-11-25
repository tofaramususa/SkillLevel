import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '@/components/tabbar'

const _layout = () => {
  return (
    <Tabs
        tabBar={props=> <TabBar {...props} />}
		screenOptions={{
			tabBarStyle: {
			  display: 'none',
			},
			headerShown: false 
		  }}
    >
        <Tabs.Screen
            name="home"
            options={{
                title: "Home"
            }}
        />
			<Tabs.Screen
				name="leaderboard"
				options={{
					title: "leaderboard"
				}}
			/>
        <Tabs.Screen
            name="explore"
            options={{
                title: "Explore"
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title: "Profile"
            }}
        />
    </Tabs>
  )
}

export default _layout