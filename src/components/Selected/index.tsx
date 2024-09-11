import { Text, View } from 'react-native';
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '@/theme';
import { Button } from '../Button';
import { router } from 'expo-router';

interface ISelectedProps {
    quantity: number;
    onSearch: () => void;
    clearSelectedIngredients: () => void;
}

const Selected = ({quantity, clearSelectedIngredients, onSearch }: ISelectedProps) => {

    return (
            <Animated.View
                style={styles.container}
                entering={SlideInDown.duration(500)}
                exiting={SlideOutDown.duration(500)}
            >
                <View style={styles.header}>
                    <Text style={styles.textHeader}>{quantity} ingrediente{quantity > 1 ? 's' : ''} selecionados</Text>
                    <MaterialIcons onPress={clearSelectedIngredients} name="close" size={24} color={theme.colors.gray_400} />
                </View>

                <Button title='Encontrar' onPress={onSearch} />
            </Animated.View>
    );
}

export { Selected };