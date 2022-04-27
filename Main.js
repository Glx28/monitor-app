import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GlobalStyles from './GlobalStyles';


export default function Main({ navigation }) {
    return(
    <SafeAreaView style={GlobalStyles.loginScreen}>
        <Text style={GlobalStyles.titleText}>Test</Text>
    </SafeAreaView>
    )
}
