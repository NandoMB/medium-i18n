import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
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
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => setLanguage(isEnglish ? 'pt' : 'en')}>
          <Text style={styles.buttonText}>
            {translate(isEnglish ? 'Translate to Portuguese' : 'Translate to English')}
          </Text>
        </Pressable>
      </View>
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
    marginBottom: 24,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff'
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    paddingVertical: 50,
    paddingHorizontal: 32,
    width: '100%'
  },
  button: {
    paddingVertical: 16,
    borderRadius: 32,
    backgroundColor: '#ffffff'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#171717'
  },
  icon: {
    fontSize: 60
  }
});
