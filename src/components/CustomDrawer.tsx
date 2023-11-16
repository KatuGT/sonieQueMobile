import { View, Text, Image} from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { colors } from 'utils/colors';
import {  useState } from 'react';
import { CheckboxGroup } from './Checkbox';
import { filters } from 'utils/filters';

const CustomDrawer = (props) => {
   

    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleCheckboxChange = (selectedValues: string[]) => {
        setSelectedValues(selectedValues);
    };

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: colors.darkBlue, flex: 1, }}>
            <View>
                <Image source={require('../../assets/fondoconLogo.png')} resizeMode='contain' className='w-full h-48' />
            </View>
            <View className='mb-10 mx-2.5'>
                <Text className='text-white text-xl mb-2'>Soñe...</Text>
                <CheckboxGroup options={filters} onChange={handleCheckboxChange} />
            </View>

            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

export default CustomDrawer