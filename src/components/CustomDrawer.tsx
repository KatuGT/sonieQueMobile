import { View, Text, Image} from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { colors } from 'utils/colors';
import {  useState } from 'react';
import { Checkbox, CheckboxGroup } from './Checkbox';

const CustomDrawer = (props) => {


    const filters = [
        {
            id: '34324324',
            value: 'volaba',
            displayText: 'Volaba',
            isChecked: false, // Set to true if 'volaba' should be initially checked
        },
        {
            id: '3432432dd4',
            value: 'caia',
            displayText: 'Caía',
            isChecked: false, // Set to true if 'caia' should be initially checked
        },
    ];

    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleCheckboxChange = (selectedValues: string[]) => {
        setSelectedValues(selectedValues);
    };

    console.log(selectedValues);

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: colors.darkBlue, flex: 1, }}>
            <View>
                <Image source={require('../../assets/fondoconLogo.png')} resizeMode='contain' className='w-full h-48' />
            </View>
            <View className='mb-10'>
                <CheckboxGroup options={filters} onChange={handleCheckboxChange} />
                <Text className='text-white'>Selected values: {selectedValues.join(', ')}</Text>
            </View>

            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

export default CustomDrawer