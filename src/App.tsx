import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from '@/i18n';

export default function App() {
  const { translate, language, setLanguage } = useTranslation();
  const isEnglish = language === 'en';
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
	      {translate('i18Next is working')}!
      </Text>
      <Text style={styles.icon}>
	      🎉
      </Text>
      <Button title={translate(isEnglish ? 'Translate to Portuguese' : 'Translate to English')} onPress={() => setLanguage(isEnglish ? 'pt' : 'en')} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    marginBottom: 8,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff'
  },
  icon: {
    marginBottom: 24,
    fontSize: 60
  }
});
