import { theme } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: theme.colors.gray_200,
        borderRadius: theme.borderRadius.full,
        paddingHorizontal: 16,
        height: 42,
        width: 100,
        marginBottom: 15,
        marginRight: 6,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 6
    },
    containerSelected:{
        backgroundColor: theme.colors.green_100,
        borderColor: theme.colors.green_600
    }
});

export { styles };