import { View, Text, TouchableOpacity, TouchableHighlight, TouchableHighlightBase, Image } from "react-native";
import React, { useState } from "react";
import Button from "./Button/Button";
import { Entypo, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Chip } from "./Chip";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParams } from "types/navigationTypes";


const SuenioCard = () => {
  const [like, setLike] = useState<'like' | 'dislike' | 'none'>()
  const [numberOfDreamLines, setNumberOfDreamLines] = useState(0)
  const [maxNumberOfLines, setMaxNumberOfLines] = useState(6)

  const navigation = useNavigation<StackNavigationProp<StackParams, 'SuenioDetalle'>>()

  return (
    <View className=" w-full">
      <View className="bg-[#4e4d65] p-3 flex-row justify-between items-center">
        <TouchableOpacity onPress={() => navigation.navigate('SuenioDetalle')}>
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
            variant="shadow"
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
        <View className="flex-row items-center" style={{ columnGap: 8 }}>
          <View className="h-12 w-12 rounded-full overflow-hidden">
            <Image source={{ uri: "https://i.pravatar.cc/150?u=a04258114e29026702d" }} className="h-full" />
          </View>
          <View>
            <Text className="text-white">KatuDev</Text>
            <Text className="text-gray-500 text-xs">Hace 2 horas</Text>
          </View>
        </View>
        <Text className=" text-white text-lg" numberOfLines={maxNumberOfLines} onTextLayout={(e) => setNumberOfDreamLines(e.nativeEvent.lines.length)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, officiis consequuntur mollitia quam quisquam minima
          laborum modi incidunt voluptatem voluptate ab ut suscipit temporibus
          amet odit eum cumque nobis? Amet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, vitae adipisci, molestiae inventore quibusdam voluptatem quasi excepturi explicabo corrupti quos ad. Quod architecto quidem totam commodi minima nulla laudantium et.
        </Text>
        {numberOfDreamLines > maxNumberOfLines &&
          <TouchableOpacity onPress={() => setMaxNumberOfLines(prev => prev + 5)} className="items-center">
            <Text className="mx-auto text-white mt-2">Ver mas</Text>
            <Ionicons name="md-chevron-down-outline" size={24} color="white" />
          </TouchableOpacity>
        }
      </View>
      <View className="bg-[#4e4d65] p-3 flex flex-row flex-wrap" style={{ columnGap: 5, rowGap: 5 }}>
        <Chip color="danger" text="Caí" variant="solid" />
        <Chip color="default" text="me perseguian" variant="solid" />
        <Chip color="primary" text="hacia pís" variant="solid" />
        <Chip color="success" text="volaba" variant="solid" />
        <Chip color="warning" text="alguien moría" variant="solid" />
      </View>
    </View>
  );
};

export default SuenioCard;
