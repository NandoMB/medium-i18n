import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from '@/i18n';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const { translate, language, setLanguage } = useTranslation();
  const isEnglish = language === 'en';
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
	      {translate('i18Next is working')}!
      </Text>
      <Text style={styles.text}>
	      {translate('You have changed the translation {{count}} times', { count })}
      </Text>
      <Text style={styles.icon}>
	      🎉
      </Text>
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, styles.resetButton]} onPress={() => setCount(state => 0)}>
          <Text style={[styles.buttonText, styles.resetButtonText]}>
            {translate('Reset counter')}
          </Text>
        </Pressable>
        <Pressable style={[styles.button, styles.translateButton]} onPress={() => {
          setCount(state => state + 1);
          setLanguage(isEnglish ? 'pt' : 'en');
        }}>
          <Text style={[styles.buttonText, styles.translateButtonText]}>
            {translate(`Translate to ${isEnglish ? 'Portuguese' : 'English'}`)}
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
    marginBottom: 12,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff'
  },
  text: {
    marginBottom: 24,
    fontSize: 16,
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
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resetButton: {
    marginBottom: 12,
    backgroundColor: '#3d3d3d'
  },
  resetButtonText: {
    color: '#acacac'
  },
  translateButton: {
    backgroundColor: '#ffffff'
  },
  translateButtonText: {
    color: '#171717'
  },
  icon: {
    fontSize: 60
  }
});
