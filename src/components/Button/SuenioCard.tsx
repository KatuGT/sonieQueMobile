import { View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import React from "react";
import Button from "./Button";
import { Entypo, MaterialIcons, Ionicons } from "@expo/vector-icons";

const SuenioCard = () => {
  return (
    <View className=" w-full">
      <View className="bg-[#4e4d65] rounded-t-lg p-3 flex-row justify-between items-center">
        <TouchableOpacity>
          <View
            className=" flex-row justify-center items-center"
            style={{ columnGap: 5 }}
          >
            <Text className="text-white text-base">#dfgfdg</Text>
            <MaterialIcons name="open-in-new" size={24} color="white" />
          </View>
        </TouchableOpacity>
        <View className="flex-row flex" style={{ columnGap: 5 }}>
          <Button
            color="secondary"
            variant="bordereded"
            onlyIcon={true}
            startIcon={<MaterialIcons name="loyalty" size={24} />}
          />
          <Button
            color="success"
            variant="bordereded"
            onlyIcon={true}
            startIcon={<Entypo name="arrow-bold-up" size={24} />}
          />
          <Button
            color="warning"
            variant="bordereded"
            onlyIcon={true}
            startIcon={<Entypo name="arrow-bold-down" size={24} />}
          />
          <Button
            color="danger"
            variant="bordereded"
            onlyIcon={true}
            startIcon={<Ionicons name="alert-sharp" size={24} />}
          />
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
