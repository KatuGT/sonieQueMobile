import { View, Text, Modal, Pressable, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button } from './Button';
import { MaterialCommunityIcons, Entypo, Octicons } from '@expo/vector-icons';
import { colors } from 'utils/colors';

const ModalEditUser = ({ modalVisible, setModalVisible }) => {

    const [isFocused, setIsFocused] = useState(false)
    const [borderColor, setBorderColor] = useState('border-default')



    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            className='bg-darkBlue'
            onRequestClose={() => {
                setModalVisible((prev: Boolean) => !prev);
            }}
        >
            <ScrollView className='bg-darkBlue flex-1 p-3'>
                <View style={{ rowGap: 10 }} className='justify-center items-center'>
                    <View className={`h-32 w-32 rounded-lg overflow-hidden border-2 ${borderColor} border-solid`}>
                        <Image source={{ uri: "https://i.pravatar.cc/150?u=a04258114e29026702d" }} resizeMode='cover' className='h-full' />
                    </View>
                    <Text className='text-white'>Cambia el color del borde</Text>
                    <View className='flex-row mb-5' style={{ columnGap: 5 }}>
                        <TouchableOpacity onPress={() => setBorderColor('border-primary')}>
                            <View className='h-10 w-10 bg-primary rounded-lg '></View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setBorderColor('border-secondary')}>
                            <View className='h-10 w-10 bg-secondary rounded-lg '></View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setBorderColor('border-default')}>
                            <View className='h-10 w-10 bg-default rounded-lg '></View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setBorderColor('border-success')}>
                            <View className='h-10 w-10 bg-success rounded-lg '></View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setBorderColor('border-danger')}>
                            <View className='h-10 w-10 bg-danger rounded-lg '></View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setBorderColor('border-warning')}>
                            <View className='h-10 w-10 bg-warning rounded-lg '></View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setBorderColor('border-white')}>
                            <View className='h-10 w-10 bg-white rounded-lg '></View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className='items-start justify-start' style={{ rowGap: 10 }}>
                    <Button color='primary' variant='light' text='Tomá una foto' startIcon={<MaterialCommunityIcons name="camera" size={24} />} />
                    <Button color='secondary' variant='light' text='Elegí una de tu galería' startIcon={<Entypo name="images" size={24} />
                    } />
                    <Button color='success' variant='light' text='Elegí uno de nuestro avatares' startIcon={<MaterialCommunityIcons name="cursor-pointer" size={24} />} />
                </View>
                <View className='h-[1px] bg-slate-500 w-full my-2'></View>
                <View className='mb-5'>
                    <View className='flex-row mb-2 items-center' style={{ columnGap: 5 }}>
                        <Octicons name="dot" size={24} color={colors.primary} />
                        <Text className='text-white text-lg'>Nuevo apodo: </Text>
                    </View>
                    <TextInput className={`bg-superDarkBlue py-1 px-3 rounded-lg text-white ${isFocused ? 'border border-1 border-secondary' : ''}`} cursorColor={colors.warning} placeholder='gokuSSJfase3' placeholderTextColor={colors.default} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
                </View>

                <View className='mb-5'>
                    <View className='flex-row mb-2 items-center' style={{ columnGap: 5 }}>
                        <Octicons name="dot" size={24} color={colors.primary} />
                        <Text className='text-white text-lg'>Nueva contraseña: </Text>
                    </View>
                    <TextInput className={`bg-superDarkBlue py-1 px-3 rounded-lg text-white ${isFocused ? 'border border-1 border-secondary' : ''}`} cursorColor={colors.warning} placeholder='************' placeholderTextColor={colors.default} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
                </View>

                <View className='mb-5'>
                    <View className='flex-row mb-2 items-center' style={{ columnGap: 5 }}>
                        <Octicons name="dot" size={24} color={colors.primary} />
                        <Text className='text-white text-lg'>Repetir contraseña: </Text>
                    </View>
                    <TextInput className={`bg-superDarkBlue py-1 px-3 rounded-lg text-white ${isFocused ? 'border border-1 border-secondary' : ''}`} cursorColor={colors.warning} placeholder='************' placeholderTextColor={colors.default} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
                </View>
                <Pressable
                    onPress={() => setModalVisible(prev => !prev)}>
                    <Text className='text-white'>Hide Modal</Text>
                </Pressable>
            </ScrollView>
        </Modal>
    )
}

export default ModalEditUser