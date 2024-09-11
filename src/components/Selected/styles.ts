import { theme } from '@/theme';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container:{
        padding: 15,
        borderRadius: theme.borderRadius.lg,
        backgroundColor: theme.colors.black,
        position: 'absolute',
        bottom: 24,
        width: '100%',
        alignSelf: 'center'
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 27
    },
    textHeader:{
        color: theme.colors.white,
        fontFamily: theme.fonts.family.regular,
        fontSize: theme.fonts.size.heading.xs
    }
});

export { styles };