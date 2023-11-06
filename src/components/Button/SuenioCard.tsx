import { View, Text } from "react-native";
import React from "react";
import Button from "./Button";

const SuenioCard = () => {
  return (
    <View className=" w-full">
      <View className="bg-[#4e4d65] rounded-t-lg p-3 ">
        <Text className=" text-white">#dfgfdg</Text>
        <View>
            <Button color="secondary" variant="bordereded" />
        </View>
      </View>
      <View className="p-3">
        <Text className=" text-white text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, officiis consequuntur mollitia quam quisquam minima
          laborum modi incidunt voluptatem voluptate ab ut suscipit temporibus
          amet odit eum cumque nobis? Amet?
        </Text>
      </View>
      <View className="bg-[#4e4d65] rounded-b-lg p-3">
        <Text className=" text-white">#dfgfdg</Text>
      </View>
    </View>
  );
};

export default SuenioCard;
