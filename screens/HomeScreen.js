import { View, Text, SafeAreaView, Image, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="pt-5 px-3 bg-white">
      <View className="flex-col px-1">
        <View className="w-full mx-auto flex items-end flex-row justify-between">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 rounded-full  mr-2"
          />
          <View className="mr-auto ">
            <Text className="font-bold text-gray-400 text-xs">Deliver now</Text>
            <Text className="font-bold text-xl">
              Current location
              <Icons.ChevronDownIcon
                size={20}
                color="#00CDBC"
              />
            </Text>
          </View>
          <View className="bg-gray-100 rounded-full p-2">
            <Icons.UserIcon
              size={25}
              color="#00CDBC"
            />
          </View>
        </View>

        <View className="flex-row items-center py-3">
          <View className="bg-gray-100 p-2 flex-row mr-auto flex-1">
            <Icons.MagnifyingGlassIcon
              size={25}
              color="gray"
            />
            <TextInput
              placeholder="Restaurant or Address..."
              keyboardAppearance="default"
            />
          </View>
          <View className="p-2">
            <Icons.AdjustmentsHorizontalIcon
              size={25}
              color="#00CDBC"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
