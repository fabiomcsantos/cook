import { useEffect, useState } from 'react';
import { FlatList, Image, Text, View, ScrollView } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Redirect, router, useLocalSearchParams } from 'expo-router';

import { services } from '@/services';

import { styles } from './recipeIdStyles';
import { Step } from '@/components/Step';
import { Loading } from '@/components/Loading';
import { Ingredients } from '@/components/Ingredients';
import { IRecipes } from '@/@types/recipes';
import { IIngredient } from '@/@types/ingredients';
import { IPreparation } from '@/@types/preparations';


export default function Recipes() {
  const [isLoading, setIsLoading] = useState(true);
  const [recipe, setRecipe] = useState<IRecipes | null>(null);
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);
  const [preparations, setPreparations] = useState<IPreparation[]>([]);

  const { recipeId } = useLocalSearchParams<{ recipeId: string }>();

  useEffect(() => {
    services.recipes
      .show(recipeId)
      .then((response) => setRecipe(response))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    services.ingredients
      .findByRecipeId(recipeId)
      .then((response) => {
        if(response) setIngredients(response)
      });
  }, []); 

  useEffect(() => {
    services.preparations
      .findByRecipeId(recipeId)
      .then((response) => setPreparations(response));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!recipeId || !recipe) {
    return <Redirect href="/" />;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />

      <View style={styles.body}>
        <View style={styles.header}>
          <MaterialIcons
            size={32}
            name="arrow-back"
            onPress={() => router.back()}
          />

          <Text style={styles.name}>{recipe.name}</Text>
          <Text style={styles.time}>{recipe.minutes} minutos de preparo</Text>
        </View>

        <Ingredients ingredients={ingredients} />

        <View style={styles.content}>
          <Text style={styles.preparation}>Modo de preparado</Text>

          <ScrollView showsVerticalScrollIndicator={false} style={{gap: 16}}>
                {preparations.map(preparation => (
                    <Step step={preparation.step} description={preparation.description} key={preparation.id} />
                ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}