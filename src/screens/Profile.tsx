import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Text } from 'react-native'

const Profile = () => {
  return (
    <LinearGradient
      colors={["#03001A", "#01002E"]}
      className='flex-1 p-3'
    >

      <Text className='text-white'>Profile</Text>
    </LinearGradient>
  )
}

export default Profile