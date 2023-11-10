import { StackNavigationProp } from '@react-navigation/stack'
import SuenioCard from 'components/SuenioCard'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { StackParams } from 'types/navigationTypes'
import { useNavigation } from '@react-navigation/native';

const Home = () => {

    const navigation = useNavigation<StackNavigationProp<StackParams, 'SuenioFormulario'>>()

    return (

        <LinearGradient
            colors={["#03001A", "#01002E"]}
            className='flex-1'
        >
            <Text className='text-white'>Home</Text>
            <SuenioCard />
            <TouchableOpacity className='absolute bottom-3 right-3' onPress={() => navigation.navigate('SuenioFormulario')}>
                <Text className='text-white'>Esc</Text>
            </TouchableOpacity>
        </LinearGradient>

    )
}

export default Home