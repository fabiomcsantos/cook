import { router, useLocalSearchParams } from 'expo-router';
import { Text, View, ScrollView, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { theme } from '@/theme';
import { styles } from './styles';
import { useEffect, useState } from 'react';
import { services } from '@/services';
import { Ingredient } from '@/components/Ingredient';
import { IIngredient } from '@/@types/ingredients';
import { IRecipes } from '@/@types/recipes';
import { Recipe } from '@/components/Recipe';


const Recipes = () => {
    const [ingredients, setIngredients] = useState<IIngredient[]>([]);
    const [recipes, setRecipes] = useState<IRecipes[]>([]);

    const params = useLocalSearchParams<{ selectedIngredients: string }>();
    const ingredientsIds = params.selectedIngredients.split(",");


    useEffect(() => {


        const getRecipes = async () => {
            const result = await services.recipes.getRecipesByIngredients(ingredientsIds);

            console.log(result);

            if (result) {
                setRecipes(result);
            }
        }

        const getSelectedIngredients = async () => {
            const result = await services.ingredients.findByIds(ingredientsIds);

            if (result) setIngredients(result);
        }

        getRecipes();

        getSelectedIngredients();

    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <Pressable onPress={() => router.back()}>
                    <AntDesign name='arrowleft' size={35} color={theme.colors.black} />
                </Pressable>

                <Text style={styles.title}>Ingredientes</Text>

                <ScrollView
                    contentContainerStyle={styles.containerSelectedIngredients}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {ingredients.map((ingredient, index) => {
                        return (
                            <Ingredient
                                key={index}
                                name={ingredient.name}
                                image={`${services.storage.imagePath}${ingredient.image}`}
                            />
                        )
                    })}
                </ScrollView>

                <ScrollView>
                    {recipes.map(recipe => (
                        <Recipe
                            name={recipe.name}
                            image={recipe.image}
                            minutes={recipe.minutes}
                            key={recipe.id}
                            onPress={() => router.navigate(`recipes/${recipe.id}`)}
                        />
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}

export default Recipes;