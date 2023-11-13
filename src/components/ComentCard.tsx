import { View, Text } from 'react-native'
import React from 'react'
import UserMini from './UserMini'
import { Button } from './Button'
import { Entypo, Ionicons } from '@expo/vector-icons';

const ComentCard = () => {
    return (
        <View className='bg-slate-900 p-2 rounded-xl flex-row'>
            <View className='flex-1'>
                <UserMini />
                <Text className='text-white'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus fuga corporis ipsa officiis quisquam facilis culpa molestias veniam hic! Dicta, libero. Perferendis nesciunt eum consectetur! Distinctio magnam sint ullam officiis.</Text>
            </View>
            <View style={{ rowGap: 5 }}>
                <Button
                    color="warning"
                    variant="bordereded"
                    onlyIcon={true}
                    startIcon={<Entypo name="trash" size={24} />}
                />
                <Button
                    color="danger"
                    variant="bordereded"
                    onlyIcon={true}
                    startIcon={<Ionicons name="alert-sharp" size={24} />}
                />
            </View>
        </View>
    )
}

export default ComentCard