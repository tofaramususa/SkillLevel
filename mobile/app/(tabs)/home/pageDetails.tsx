import React, { useState } from "react";
import { Image, Pressable, FlatList, View, Text, Dimensions } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";

// Dummy data remains the same
const dummaDanceData = {
  id: "1",
  title: "Emirati Traditional Dance",
  year: 2024,
  numberOfLevels: 5,
  plot: "Emirati traditional dance is a vibrant expression of the UAE's rich cultural heritage, showcasing the spirit and history of the Emirati people.",
  instructor: "Fatima Al Marri",
  expertise: "Emirati Dance, 15 years experience",
  poster: require("@/assets/images/dance2.png"),
};

const dummyLevels = [
  { id: "1", name: "Beginner Level", dance: dummaDanceData },
  { id: "2", name: "Intermediate Level", dance: dummaDanceData },
  { id: "3", name: "Advanced Level", dance: dummaDanceData },
];

const dummyLessons = [
  { id: "1", title: "Basic Hand Movements", duration: "15 min", level: dummyLevels[0] },
  { id: "2", title: "Footwork Basics", duration: "20 min", level: dummyLevels[0] },
  { id: "3", title: "Group Dance Coordination", duration: "25 min", level: dummyLevels[0] },
  { id: "4", title: "Cultural Storytelling through Dance", duration: "30 min", level: dummyLevels[0] },
  { id: "5", title: "Rhythm and Clapping Techniques", duration: "15 min", level: dummyLevels[0] },
];

const PageDetails = () => {
  const [dance] = useState(dummaDanceData);
  const [levels] = useState(dummyLevels);
  const [lessons] = useState(dummyLessons);
  const [currentLevel, setCurrentLevel] = useState(dummyLevels[0]);
  const [currentLesson, setCurrentLesson] = useState(dummyLessons[0]);

  const levelNames = levels.map((level) => level.name);
  const screenWidth = Dimensions.get('window').width;

  return (
    <View className="flex-1 bg-gray-950">
      {/* Image positioned absolutely to cover top of viewport */}
      <View className="absolute top-0 left-0 right-0">
        <Image 
          source={dance.poster} 
          className="w-full h-80 object-cover" 
          style={{ 
            width: screenWidth, 
            height: 320, // Explicit height to ensure consistent sizing
            opacity: 0.7 // Slightly dim the image for better text readability
          }}
        />
      </View>

      {/* Content container with top padding to push content below image */}
      <FlatList
        data={lessons}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => setCurrentLesson(item)}
            className="bg-gray-800 p-4 rounded-lg mb-2 mx-4 flex-row justify-between items-center shadow-lg"
          >
            <View className="flex-col">
              <Text className="text-white text-lg font-semibold">{item.title}</Text>
              <Text className="text-gray-400">{item.duration}</Text>
            </View>
            <AntDesign name="play" size={24} color="white" />
          </Pressable>
        )}
        ListHeaderComponent={
          <View className="mt-80 p-4 bg-gray-900 rounded-t-3xl -mt-8 shadow-2xl">
            {/* Dance Title and Details */}
            <Text className="text-3xl font-bold text-white mb-2">{dance.title}</Text>
            <View className="flex-row items-center mb-2">
              <Text className="text-gray-300 mr-4">{dance.year}</Text>
              <Text className="text-gray-300">{dance.numberOfLevels} Levels</Text>
            </View>

            <Text className="text-gray-400 mb-4">{dance.plot}</Text>

            {/* Instructor Details */}
            <View className="bg-gray-800 p-4 rounded-lg mb-4">
              <Text className="text-white font-semibold mb-1">Instructor</Text>
              <Text className="text-gray-200">{dance.instructor}</Text>
              <Text className="text-gray-400">{dance.expertise}</Text>
            </View>

            {/* Action Buttons */}
            <View className="flex-row justify-between mb-4">
              <Pressable
                onPress={() => console.warn("My List")}
                className="items-center flex-1 mr-2 bg-gray-700 p-3 rounded-lg"
              >
                <AntDesign name="plus" size={24} color="white" />
                <Text className="text-white mt-1">My List</Text>
              </Pressable>

              <Pressable
                onPress={() => console.warn("Rate")}
                className="items-center flex-1 mr-2 bg-gray-700 p-3 rounded-lg"
              >
                <Feather name="thumbs-up" size={24} color="white" />
                <Text className="text-white mt-1">Rate</Text>
              </Pressable>

              <Pressable
                onPress={() => console.warn("Share")}
                className="items-center flex-1 bg-gray-700 p-3 rounded-lg"
              >
                <FontAwesome name="send-o" size={24} color="white" />
                <Text className="text-white mt-1">Share</Text>
              </Pressable>
            </View>

            {/* Level Picker */}
            {currentLevel && (
              <View className="bg-gray-800 rounded-lg mb-4">
                <Picker
                  selectedValue={currentLevel.name}
                  onValueChange={(itemValue, itemIndex) => {
                    setCurrentLevel(levels[itemIndex]);
                  }}
                  dropdownIconColor="white"
                  style={{ color: 'white' }}
                >
                  {levelNames.map((levelName) => (
                    <Picker.Item
                      label={levelName}
                      value={levelName}
                      key={levelName}
                      color="white"
                    />
                  ))}
                </Picker>
              </View>
            )}
          </View>
        }
        className="w-full"
        contentContainerClassName="pb-4"
      />
    </View>
  );
};

export default PageDetails;