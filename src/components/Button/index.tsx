import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import { styles } from './styles'

type Props = TouchableOpacityProps & {
  title: string
}

export function Button({ title, ...rest }: Props) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return ({
      transform: [{ scale: withTiming(scale.value) }],
    })
  });

  const onPressIn = () => {
    scale.value = 0.95;
  }

  const onPressOut = () => {
    scale.value = 1;
  }

  return (
    <Animated.View style={animatedStyle}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.button]}
        {...rest}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      >
        <Text style={[styles.text]}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  )
}
