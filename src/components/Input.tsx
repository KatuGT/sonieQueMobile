import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { colors } from 'utils/colors'

interface InputProps {
    error?: string
    placeholder?: string
    secureTextEntry?: boolean
    label: string
    keyboardType?: 'numeric' | 'email-address' | 'default' | 'phone-pad'
    inputMode?: 'numeric' | 'email' | 'decimal' | 'tel'
}

const Input = ({ error, label, keyboardType, placeholder, secureTextEntry, inputMode }: InputProps) => {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <View>

            <View className={`bg-[#2e104c] rounded-md py-1 px-2 ${isFocused ? 'border border-solid border-secondary' : ''} ${error ? 'border border-solid border-danger bg-[#2f0412]' : ''}`}>
                <Text className={`text-secondary ${error ? 'text-danger' : ''}`}>{label}</Text>
                <TextInput className={`border-b border-secondary border-solid text-white mb-2 ${error ? 'border-b  border-danger border-solid bg-[#2f0412] text-danger' : ''}`} cursorColor={colors.secondary} placeholder={placeholder} placeholderTextColor={colors.default}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    inputMode={inputMode}
                />
            </View>
            {error && <Text className='text-danger'> - {error}</Text>}
        </View>
    )
}

export default Input