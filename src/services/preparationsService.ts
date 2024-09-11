import { IPreparation } from '@/@types/preparations';
import { supabase } from './supabase';


async function findByRecipeId(id: string) {
    const { data } = await supabase
        .from("preparations")
        .select()
        .eq("recipe_id", id)
        .returns<IPreparation[]>();

    return data || [];
}

export { findByRecipeId }