import { Image, Pressable, PressableProps, Text, View } from 'react-native';
import { styles } from './style';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export interface IIngredientProps {
    name: string;
    image: string;
    selected?: boolean;
}

const Ingredient = ({ name, image, selected = false, ...rest }: IIngredientProps & PressableProps) => {
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => {
        return ({
            transform: [{ scale: scale.value }]
        });
    });

    const onPressIn = () => {
        scale.value = 0.98;
    }

    const onPressOut = () => {
        scale.value = 1;
    }

    return (
        <Animated.View style={animatedStyle}>
            <Pressable onPressIn={onPressIn} onPressOut={onPressOut} style={[styles.container, selected && styles.containerSelected]}
                {...rest}
            >
                <Image source={{uri: image}} height={16} width={16} />
                <Text>{name}</Text>
            </Pressable>
        </Animated.View>
    );
}

export { Ingredient };