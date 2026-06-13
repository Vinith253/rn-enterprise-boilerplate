import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: safeAreaInsets.top,
          paddingBottom: safeAreaInsets.bottom,
        },
      ]}>
      <View style={styles.content}>
        <Text style={styles.eyebrow}>React Native Enterprise Boilerplate</Text>
        <Text style={styles.title}>Ready for product work.</Text>
        <Text style={styles.description}>
          This app starts with a clean TypeScript setup, native iOS and Android
          projects, Jest, ESLint, Prettier, and safe-area handling.
        </Text>

        <View style={styles.checklist}>
          <Text style={styles.checklistItem}>- Type-safe React Native base</Text>
          <Text style={styles.checklistItem}>- Platform projects committed</Text>
          <Text style={styles.checklistItem}>- Test and lint scripts included</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  eyebrow: {
    color: '#2563EB',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.3,
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  title: {
    color: '#0F172A',
    fontSize: 36,
    fontWeight: '800',
    lineHeight: 42,
    marginBottom: 16,
  },
  description: {
    color: '#334155',
    fontSize: 17,
    lineHeight: 26,
    marginBottom: 28,
  },
  checklist: {
    gap: 10,
  },
  checklistItem: {
    color: '#1E293B',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default App;
