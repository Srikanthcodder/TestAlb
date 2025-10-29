import CartIcon from '@/components/icons/CartIcon';
import NotificationIcon from '@/components/icons/NotificationIcon';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { images } from '@/constants/images';
import { Colors } from '@/constants/theme';
import { useCart } from '@/contexts/CartContext';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useRouter } from 'expo-router';
import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function ChatScreen() {
  const colorScheme = useColorScheme();
  const iconColor = Colors[colorScheme ?? 'light'].text;
  const router = useRouter();
  const { getCartCount } = useCart();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={images.logo} style={styles.logo} />
          <View style={styles.headerIcons}>
            <View style={styles.languageSelector}>
              <ThemedText style={styles.languageText}>EN</ThemedText>
              <ThemedText style={styles.languageArrow}>∨</ThemedText>
            </View>
            <TouchableOpacity onPress={() => router.push('/cart')}>
              <CartIcon size={24} color={iconColor} />
              {getCartCount() > 0 && (
                <View style={styles.cartBadge}>
                  <ThemedText style={styles.cartBadgeText}>{getCartCount()}</ThemedText>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/notifications')}>
              <NotificationIcon size={24} color={iconColor} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <ThemedText style={styles.messageText}>
            Please schedule an appointment to enable the chatservice.
          </ThemedText>
        </View>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 20,
    marginTop: 20,
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 150,
    height: 40,
    resizeMode: 'contain',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  languageSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  languageText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ff0000',
  },
  languageArrow: {
    fontSize: 12,
    color: '#ff0000',
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -8,
    backgroundColor: '#E41E26',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    backgroundColor: '#ffffff',
  },
  messageText: {
    fontSize: 24,
    color: '#ff0000',
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 36,
  },
});
