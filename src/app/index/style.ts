import { theme } from '@/theme/index';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 25,
        marginTop: 25
    },
    title:{
        fontSize: 24,
        fontFamily: theme.fonts.family.bold
    },
    subtitle:{
        fontFamily: theme.fonts.family.regular
    },
    message:{
        fontSize: theme.fonts.size.body.md,
        fontFamily: theme.fonts.family.regular,
        color: theme.colors.gray_400,
        marginTop: 12,
        marginBottom: 38
    },
    containerIngredients:{
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    }
})

export { styles };