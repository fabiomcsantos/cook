import { IRecipes } from '@/@types/recipes';
import { supabase } from './supabase';

const getRecipesByIngredients = async (ids: string[]) => {
    const { data, error } = await supabase
        .rpc('recipes_by_ingredients', { ids })
        .returns<IRecipes[]>()


    if (error) {
        console.log(error);
    }

    return data;
};

async function show(id: string) {
    const { data } = await supabase
        .from('recipes')
        .select()
        .eq('id', id)
        .returns<IRecipes>()
        .single()

    return data
}

export { getRecipesByIngredients, show }