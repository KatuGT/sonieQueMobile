import {
  Canvas,
  Rect,
  BackdropFilter,
  Blur,
  Group,
} from "@shopify/react-native-skia";
import { useEffect, useRef, useState } from "react";
import { Text, Pressable, View } from "react-native";
import { btnVariantStyles } from "utils/btnVariantStyles";
import { colors } from "utils/colors";

interface ButtonProps {
  color: "primary" | "secondary" | "default" | "success" | "warning" | "danger";
  variant: "solid" | "shadow" | "bordereded" | "light";
}

const Button = ({ color, variant }: ButtonProps) => {
  const [btnVariant, setBtnVariant] = useState({
    bgColor: "",
    textColor: "",
    bordered: "",
  });

  useEffect(() => {
    const styles = btnVariantStyles[variant][color];
    setBtnVariant(styles || { bgColor: "", textColor: "", bordered: "" });
  }, [color, variant]);

  const textRef = useRef<Text>(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.measure((fx, fy, width, height, px, py) => {
        setTextWidth(width);
      });
    }
  }, []);

  return (
    <View className="relative ">
      {variant === "shadow" && (
        <Canvas
          style={{
            width: textWidth + textWidth,
            height: "200%",
            position: "absolute",
            top: 9,
            left: "-8%",
          }}
        >
          <Group
            //   transform={fitbox("contain", src, dst)}
            layer={<Blur blur={15} />}
          >
            <Rect
              x={30}
              y={20}
              width={textWidth + 5}
              height={25}
              color={colors[color]}
            ></Rect>
          </Group>
        </Canvas>
      )}
      <Pressable
        android_ripple={{
          color:
            btnVariant.bgColor === "bg-transparent" ? colors[color] : "white",
          borderless: false,
          foreground: true,
        }}
        className={`overflow-hidden  ${btnVariant.bordered} relative  rounded-xl `}
      >
        <Text
          ref={textRef}
          className={`px-5 py-2.5 ${btnVariant.textColor} ${btnVariant.bgColor} font-medium text-lg #a9a9a9`}
        >
          button
        </Text>
      </Pressable>
    </View>
  );
};

export default Button;
