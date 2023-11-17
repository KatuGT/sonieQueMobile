import { View, Text, Image, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Octicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { colors } from 'utils/colors';
import { Button } from 'components/Button';
import ModalEditUser from 'components/ModalEditUser';

const UserData = () => {
  const [modalVisible, setModalVisible] = useState<Boolean>(false);

  return (
    <LinearGradient
      colors={["#03001A", "#01002E"]}
      className='flex-1 p-3'
    >
      <View className='flex-row items-center' style={{ columnGap: 15 }}>
        <View className='h-20 w-20 rounded-lg overflow-hidden border-2 border-secondary border-solid'>
          <Image source={{ uri: "https://i.pravatar.cc/150?u=a04258114e29026702d" }} resizeMode='cover' className='h-full' />
        </View>
        <View>
          <Text className='text-white text-2xl font-bold'>
            KatuDEv
          </Text>
          <Text className='text-gray-400 text-xs'>Miembro desde 16/11/2023</Text>
          <Text className='text-gray-400 text-xs'>E-mail: 93katu@gmail.com</Text>
        </View>
      </View>
      <View className='mt-3 bg-darkBlue rounded-lg px-3 py-2'
        style={{ rowGap: 10 }}>
        <View className='flex-row' style={{ columnGap: 5 }}>
          <Octicons name="dot" size={24} color={colors.primary} />
          <Text className='text-white text-base'>Haz publicado 0 sueños desde que te uniste</Text>
        </View>
        <View className='flex-row' style={{ columnGap: 5 }}>
          <Octicons name="dot" size={24} color={colors.primary} />
          <Text className='text-white text-base'>Tenes guardados 0 sueños en tu lista de favoritos
          </Text>
        </View>
      </View>
      <View className='flex-row mt-3 mx-1' style={{ columnGap: 20 }}>
        <Button onPress={() => setModalVisible(prev => !prev)} color='success' variant='bordereded' text='Editar' startIcon={<MaterialIcons name="edit" size={24} />} />

        <Button color='default' variant='bordereded' text='Cerrar sesión' startIcon={<FontAwesome5 name="door-open" size={24} />} />
      </View>


      <TouchableHighlight
        onPress={() => setModalVisible(prev => !prev)}
      >
        <Text className='text-white'>Show Modal</Text>
      </TouchableHighlight>
      <ModalEditUser modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </LinearGradient>
  )

}

export default UserData