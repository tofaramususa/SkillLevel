import { View, Text, ScrollView, TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import {ArrowDownTrayIcon, Bars3CenterLeftIcon, BellIcon} from 'react-native-heroicons/solid'
import {storeColors} from '@/theme';
import GradientButton from '@/components/gradientButton'
import GameCard from '@/components/gameCard'
import { useRouter } from 'expo-router'


/////// subscribe for more videos like this :)

const categories = ['Dance', 'Fitness', 'Art', 'Puzzles', 'DIY', 'Robotics', 'Maze'];
const featured = [
  {
      id: 1,
      title: 'Cultural Dance Intro',
      image: require('@/assets/images/dance2.png'),
      downloads: '200k',
      stars: 4
  },
  {
      id: 2,
      title: 'Art Adventures',
      image: require('@/assets/images/drawing.jpg'),
      downloads: '5M',
      stars: 4
  },
  {
      id: 3,
      title: 'Fitness Fun',
      image: require('@/assets/images/fitness.jpg'),
      downloads: '100M',
      stars: 3
  },
  
  {
      id: 4,
      title: "Problem Solving Puzzles",
      image: require('@/assets/images/solving.png'),
      downloads: '20k views',
      stars: 4
  },
]

const games = [
  {
      id: 1,
      title: 'Puzzles Path',
      image: require('@/assets/images/puzzles1.jpg'),
      downloads: '20,000 views',
      stars: 4.5
  },
  {
	  id: 2,
	  title: 'Nature Discovery',
	  image: require('@/assets/images/nature.jpg'),
	  downloads: '80k views',
	  stars: 4.6
  },
  {
      id: 3,
      title: 'The Ayyalah',
      image: require('@/assets/images/dance2.png'),
      downloads: '10,000 views',
      stars: 3.4
  },
  {
      id: 4,
      title: "Culinary Creators",
      image: require('@/assets/images/cook.png'),
      downloads: '40k views',
      stars: 3.5
  },
  {
      id: 4,
      title: "The Yolla",
      image: require('@/assets/images/clashofclans.png'),
      downloads: '20k views',
      stars: 4.2
  },
];

export default function StoreScreen() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('Action');
   const [selectedGame, setSelectedGame] = useState(null);

  const handleGamePress = (game) => {
    if (game.title === 'Cultural Dance Intro' || game.title === 'The Ayyalah') {
      router.push('/(tabs)/home/pageDetails');
    }
  };

  return (
    <LinearGradient
      colors={['rgba(58, 131, 244,0.4)', 'rgba(9, 181, 211, 0.4)']}
      className="rounded w-full flex-1"
    >
      <SafeAreaView>
        <View className="container">
          <View className="flex-row justify-between items-center px-4">
            <Bars3CenterLeftIcon color={storeColors.text} size="30" />
            <BellIcon color={storeColors.text} size="30" />
          </View>
           
          {/* categories */}
          <View className="mt-3 space-y-4">
            <Text
              style={{
                marginLeft: 16,
                fontSize: 24,
                fontWeight: 'bold',
                marginBottom: 20,
                color: storeColors.text
              }}
            >
            Skill Level
            </Text>
            <View className="pl-4">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                  categories.map(cat=> {
                    if(cat==activeCategory){
                      // show gradient category
                      return (
                        <GradientButton key={cat} containerClass="rounded-3xl mr-2" value={cat} />
                      )
                    }else{
                      // show normal category
                      return (
                        <TouchableOpacity
                          onPress={()=> setActiveCategory(cat)}
                         key={cat}
                         className="bg-blue-200 p-3 px-4 rounded-full mr-2">
                          <Text>
                            {cat}
                          </Text>
                         </TouchableOpacity>
  
                      )
                    }
                    
                  })
                }
              </ScrollView>
            </View>
          </View>
          
          {/* featured row  */}
          <View className="mt-3 space-y-4">
                <Text
                  style={{color: storeColors.text}}
                  className="ml-4 text-lg font-bold mb-3">
                    Featured Adventures
                  </Text>
                <View className="pl-4 mb-3">
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                      featured.map((item, index) => {
                        return (
                          <TouchableOpacity key={index} onPress={() => handleGamePress(item)}>
                            <GameCard game={item} />
                          </TouchableOpacity>
                        )
                      })
                    }
                  </ScrollView>
                </View>
          </View>
          {/* top action games list */}
          <View className="mt-3">
            <View className="flex-row justify-between items-center mb-2">
              <Text
                  style={{color: storeColors.text}}
                  className="ml-4 text-lg font-bold">
                    Top Featured Adventures
              </Text>
              <TouchableOpacity className="mr-4">
                <Text className="text-blue-600 font-bold">
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={{height: 320}} showsVerticalScrollIndicator={false}>
              {
                games.map((game, index)=>{
                  let bg= game.id==selectedGame? 'rgba(255,255,255,0.4)': 'transparent';

                  return (
                    <TouchableOpacity 
                    style={{backgroundColor: bg}}
                    className="mx-4 p-2 mb-2 flex-row rounded-3xl"
                    onPress={() => {
                      setSelectedGame(game.id);
                      handleGamePress(game);
                    }}
                    key={index}>
                      <Image source={game.image} style={{width: 80, height: 80}}
                        className="rounded-2xl" />
                      <View className="flex-1 flex justify-center pl-3 space-y-3">
                        <Text style={{color: storeColors.text}}
                          className="font-semibold">
                            {game.title}
                        </Text>
                        <View className="flex-row space-x-3">
                          <View className="flex-row space-x-1">
                            <Image className="h-4 w-4 opacity-80"
                              source={require('@/assets/images/fullStar.png')} />
                            <Text className="text-xs text-gray-700">
                              {game.stars} stars
                            </Text>
                          </View>
                          <View className="flex-row space-x-1">
                            <ArrowDownTrayIcon size="15" className="text-blue-500" />
                            <Text className="text-xs text-gray-700">
                              {game.downloads}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View className="flex justify-center items-center">
                        <GradientButton value="PLAY" buttonClass="round-3xl py-2 px-5" />
                      </View>
                    </TouchableOpacity>
                  )
                })
              }
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>   

    </LinearGradient>
      
  )
}