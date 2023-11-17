import { View, Text, Image } from 'react-native'
import React from 'react'

const UserMini = () => {
    return (
        <View className="flex-row items-center" style={{ columnGap: 8 }}>
            <View className="h-12 w-12 rounded-lg overflow-hidden border-2 border-solid border-secondary">
                <Image source={{ uri: "https://i.pravatar.cc/150?u=a04258114e29026702d" }} className="h-full" />
            </View>
            <View>
                <Text className="text-white">KatuDev</Text>
                <Text className="text-gray-500 text-xs">Hace 2 horas</Text>
            </View>
        </View>
    )
}

export default UserMini