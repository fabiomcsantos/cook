import { TouchableOpacity, TouchableOpacityProps, Text, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';

interface IRecipeProps extends TouchableOpacityProps {
    image: string;
    minutes: number;
    name: string
}

const Recipe = ({
    image,
    minutes,
    name,
    ...rest
}: IRecipeProps) => {
    return (
        <TouchableOpacity
            {...rest}
            style={styles.container}
        >

            <ImageBackground
                source={{uri: image}}
                style={styles.image}
            >
                <LinearGradient colors={['rgba(0,0,0,0.5)', '#000']} style={styles.linear}>

                    <Text style={styles.name} numberOfLines={1} lineBreakMode='tail'>{name}</Text>

                    <Text style={styles.minutes}  numberOfLines={1} lineBreakMode='tail'>{minutes} Minutos</Text>

                </LinearGradient>
            </ImageBackground>

        </TouchableOpacity>
    );
}

export { Recipe };