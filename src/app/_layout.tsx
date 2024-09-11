
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import {
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    useFonts
} from '@expo-google-fonts/poppins';

SplashScreen.preventAutoHideAsync();
const Layout = () => {
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return;
    }

    SplashScreen.hideAsync();
    return (
        <>
            <StatusBar style='dark' />
            <Stack screenOptions={{headerShown: false}} />
        </>
    )
}

export default Layout;