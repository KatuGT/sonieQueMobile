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
  text?: string;
  startIcon?: any;
  endIcon?: any;
  onlyIcon?: boolean;
}

const Button = ({
  color,
  variant,
  endIcon,
  startIcon,
  text,
  onlyIcon,
}: ButtonProps) => {
  const [btnVariant, setBtnVariant] = useState({
    bgColor: "",
    textColor: "",
    bordered: "",
  });

  useEffect(() => {
    const styles = btnVariantStyles[variant][color];
    setBtnVariant(styles || { bgColor: "", textColor: "", bordered: "" });
  }, [color, variant]);

  const pressableRef = useRef<Text>(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    if (pressableRef.current) {
      pressableRef.current.measure((fx, fy, width, height, px, py) => {
        setTextWidth(width);
      });
    }
  }, []);

  return (
    <View className="relative">
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
          <Group layer={<Blur blur={15} />}>
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
        ref={pressableRef}
        className={`overflow-hidden ${btnVariant.bordered
          } relative  rounded-xl ${btnVariant.bgColor
          } flex justify-center items-center flex-row  ${!onlyIcon && "gap-x-1"
          }  ${onlyIcon && "h-10 w-10"}`}
      >
        {startIcon && <Text className={`${btnVariant.textColor}`}
        >{startIcon}</Text>}
        {text && (
          <Text
            className={`${!onlyIcon && "py-2.5"} ${btnVariant.textColor
              } font-medium text-lg #a9a9a9 ${!endIcon && "pr-2.5"}`}
          >
            {text}
          </Text>
        )}
        {endIcon && (
          <Text
            className={`${!onlyIcon && "pr-1.5"} ${btnVariant.textColor}`}
          >
            {endIcon}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default Button;
