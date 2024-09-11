import { IIngredient } from '@/@types/ingredients';
import { supabase } from './supabase';


export const getAll = async () => {
    const { data } = await supabase
        .from('ingredients')
        .select()
        .order('name')
        .returns<IIngredient[]>();

    return data || [];
}

export const findByIds = async(ids: string[]) => {
    const { data} = await supabase
        .from('ingredients')
        .select()
        .in('id', ids)
        .order('name')
        .returns<IIngredient[]>()

        return data
}

export const findByRecipeId = async(id: string) => {
    const { data } = await supabase
      .from("recipes_ingredients")
      .select("ingredients (id, name, image)")
      .eq("recipe_id", id)
      .returns<{ ingredients: IIngredient }[]>()
  
    return data ? data.map((item) => item.ingredients) : []
  }