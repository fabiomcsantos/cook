import { Alert, ScrollView, Text, View } from 'react-native';
import { styles } from './style';
import { Ingredient } from '@/components/Ingredient';
import { useEffect, useState } from 'react';
import { Selected } from '@/components/Selected';
import { services } from '@/services';
import { Loading } from '@/components/Loading';
import { router } from 'expo-router';
import { IIngredient } from '@/@types/ingredients';

const App = () => {
    const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
    const [ingredients, setIngredients] = useState<IIngredient[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleToggleSelected = (value: string) => {
        if (selectedIngredients.includes(value)) {
            setSelectedIngredients(state => state.filter(ingredient => ingredient !== value));
        } else {
            setSelectedIngredients(state => [...state, value]);
        }
    };

    const onSearch = () => {
        router.push({
            pathname: 'recipes',
            params: { selectedIngredients }
        });
    };

    const clearSelectedIngredients = () => {
        Alert.alert('Limpar', 'Tem certeza que deseja limpar tudo?', [
            { text: 'Não', style: 'cancel' },
            { text: 'Sim', onPress: () => setSelectedIngredients([]) },
        ]);
    };

    useEffect(() => {
        setIsLoading(true);
        const getIngredients = async () => {
            try {
                const data = await services.ingredients.getAll();
                setIngredients(data);
            } catch (error) {
                console.error('Failed to fetch ingredients:', error);
            } finally {
                setIsLoading(false);
            }
        };

        getIngredients();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha {"\n"}
                <Text style={styles.subtitle}>os produtos</Text>
            </Text>

            <Text style={styles.message}>Descubra receitas baseadas nos produtos que você escolheu.</Text>

            {isLoading ? (
                <Loading />
            ) : (
                <ScrollView contentContainerStyle={styles.containerIngredients}>
                    <View style={styles.containerIngredients}>
                        {ingredients.map((ingredient) => (
                            <Ingredient
                                onPress={() => handleToggleSelected(ingredient.id)}
                                key={ingredient.id}
                                name={ingredient.name}
                                image={`${services.storage.imagePath}${ingredient.image}`}
                                selected={selectedIngredients.includes(ingredient.id)}
                            />
                        ))}
                    </View>
                </ScrollView>
            )}

            {selectedIngredients.length > 0 && (
                <Selected
                    quantity={selectedIngredients.length}
                    onSearch={onSearch}
                    clearSelectedIngredients={clearSelectedIngredients}
                />
            )}
        </View>
    );
};

export default App;
