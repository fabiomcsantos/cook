import { theme } from "@/theme";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        marginTop: 25
    },
    header:{
        
    },
    title:{
        fontSize: theme.fonts.size.heading.sm,
        marginTop: 20,
        fontFamily: theme.fonts.family.bold
    },
    containerSelectedIngredients:{
        marginTop: 5
    }
});

export { styles };