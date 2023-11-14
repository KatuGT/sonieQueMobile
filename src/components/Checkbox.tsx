import { View, Text, Animated } from 'react-native'
import { useRef, useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';

interface CheckboxProps {
    displayText: string
    value: string
    onChange?: (value: string, isChecked: boolean) => void
    isChecked: Boolean
}

export const Checkbox = ({ displayText, onChange, value, isChecked }: CheckboxProps) => {
    const [internalChecked, setInternalChecked] = useState(isChecked);


    const animatedWidth = useRef(new Animated.Value(0)).current;

    const startAnimation = (newValue) => {
        const toValue = newValue ? 23 : 0;
        Animated.timing(animatedWidth, {
            toValue: toValue,
            duration: 500,
            useNativeDriver: false,
        }).start();
    };

    const handlePress = () => {
        const newChecked = !internalChecked;
        setInternalChecked(newChecked);
        startAnimation(newChecked);

        if (onChange) {
            onChange(value, newChecked);
        }
    };

    useEffect(() => {
        startAnimation(internalChecked);
    }, [internalChecked]);

    useEffect(() => {
        setInternalChecked(isChecked);
    }, [isChecked]);

    return (
        <TouchableOpacity onPress={handlePress} className='flex-row flex items-center' style={{ columnGap: 10 }}>
            <View
                className={`h-7 w-7 border-2 justify-center items-center border-gray-600 border-solid rounded-md ${isChecked ? 'border-0 bg-warning' : ''}`}
            >
                <Animated.View style={{ width: animatedWidth }}>
                    <Entypo name="check" size={24} color="black" />
                </Animated.View>
            </View>
            <Text className='text-white'>{displayText}</Text>
        </TouchableOpacity>
    )
}

interface CheckboxGroupProps {
    options: { id: string, displayText: string, value: string }[],
    onChange: (selectedValues: string[]) => void
}

export const CheckboxGroup = ({ options, onChange }: CheckboxGroupProps) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleCheckboxChange = (value: string, isChecked: boolean) => {

        setSelectedValues(prevValues => {
            if (isChecked) {
                return [...prevValues, value];
            } else {
                return prevValues.filter(item => item !== value);
            }
        });

    };

    useEffect(() => {
        onChange(selectedValues);
    }, [selectedValues, onChange]);

    return (
        <View style={{ rowGap: 10 }}>
            {options.map(item => (
                <Checkbox key={item.id} displayText={item.displayText} value={item.value} onChange={handleCheckboxChange} isChecked={selectedValues.includes(item.value)} />
            ))}
        </View>
    )
}