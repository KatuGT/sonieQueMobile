import { useEffect, useState } from 'react';
import { Text, View } from 'react-native'
import { btnVariantStyles } from 'utils/btnVariantStyles';

interface ChipProps {
    color: "primary" | "secondary" | "default" | "success" | "warning" | "danger";
    variant: "solid" | "bordereded" | "light";
    text: string;
}


const Chip = ({ color, variant, text }: ChipProps) => {
    const [btnVariant, setBtnVariant] = useState({
        bgColor: "",
        textColor: "",
        bordered: "",
    });

    useEffect(() => {
        const styles = btnVariantStyles[variant][color];
        setBtnVariant(styles || { bgColor: "", textColor: "", bordered: "" });
    }, [color, variant]);
    return (
        <View className={`px-3 py-0.5 rounded-full ${btnVariant.bgColor} ${btnVariant.bordered} `}>
            <Text className={` ${btnVariant.textColor}`}>{text}</Text>
        </View>
    )
}

export default Chip