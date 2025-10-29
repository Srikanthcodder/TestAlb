import CartIcon from '@/components/icons/CartIcon';
import NotificationIcon from '@/components/icons/NotificationIcon';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { images } from '@/constants/images';
import { Colors } from '@/constants/theme';
import { useCart } from '@/contexts/CartContext';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Switch, TouchableOpacity, View } from 'react-native';

interface MenuItem {
  icon: string;
  label: string;
  hasArrow?: boolean;
  hasToggle?: boolean;
  onPress?: () => void;
}

export default function MyAccountScreen() {
  const colorScheme = useColorScheme();
  const iconColor = Colors[colorScheme ?? 'light'].text;
  const router = useRouter();
  const { getCartCount } = useCart();
  const [fingerprintEnabled, setFingerprintEnabled] = useState(false);

  const renderMenuItem = (item: MenuItem) => (
    <TouchableOpacity 
      key={item.label}
      style={styles.menuItem}
      onPress={item.onPress}
      activeOpacity={0.7}
    >
      <View style={styles.menuItemLeft}>
        <Ionicons name={item.icon as any} size={20} color="#000" />
        <ThemedText style={styles.menuItemText}>{item.label}</ThemedText>
      </View>
      {item.hasToggle && (
        <Switch
          value={fingerprintEnabled}
          onValueChange={setFingerprintEnabled}
          trackColor={{ false: '#ccc', true: '#ff0000' }}
          thumbColor="#fff"
        />
      )}
      {item.hasArrow && (
        <Ionicons name="chevron-forward" size={20} color="#666" />
      )}
    </TouchableOpacity>
  );

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

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Profile Section */}
          <View style={styles.profileSection}>
            <View style={styles.profileHeader}>
              <ThemedText style={styles.profileTitle}>Profile</ThemedText>
              <TouchableOpacity>
                <Ionicons name="create-outline" size={22} color="#fff" />
              </TouchableOpacity>
            </View>
            <View style={styles.profileContent}>
              <View style={styles.profileAvatar}>
                <Ionicons name="person" size={32} color="#ff0000" />
              </View>
              <ThemedText style={styles.profileName}>Srikanth</ThemedText>
            </View>
          </View>

          {/* Quick Access Cards */}
          <View style={styles.quickAccessContainer}>
            <View style={styles.quickAccessRow}>
              <TouchableOpacity style={styles.quickAccessCard}>
                <Ionicons name="location-outline" size={28} color="#666" />
                <ThemedText style={styles.quickAccessText}>Address Book</ThemedText>
              </TouchableOpacity>
              <TouchableOpacity style={styles.quickAccessCard}>
                <Ionicons name="wallet-outline" size={28} color="#666" />
                <ThemedText style={styles.quickAccessText}>My Wallet</ThemedText>
              </TouchableOpacity>
            </View>
            <View style={styles.quickAccessRow}>
              <TouchableOpacity style={styles.quickAccessCard}>
                <Ionicons name="chatbubble-outline" size={28} color="#666" />
                <ThemedText style={styles.quickAccessText}>Contact us</ThemedText>
              </TouchableOpacity>
              <TouchableOpacity style={styles.quickAccessCard}>
                <Ionicons name="share-social-outline" size={28} color="#666" />
                <ThemedText style={styles.quickAccessText}>Refer & Earn</ThemedText>
              </TouchableOpacity>
            </View>
          </View>

          {/* Menu Items */}
          <View style={styles.menuContainer}>
            {renderMenuItem({ icon: 'help-circle-outline', label: "FAQ's", hasArrow: true })}
            {renderMenuItem({ icon: 'document-text-outline', label: 'Terms & Conditions', hasArrow: true })}
            {renderMenuItem({ icon: 'shield-checkmark-outline', label: 'Privacy Policy', hasArrow: true })}
            {renderMenuItem({ icon: 'language-outline', label: 'Change Language', hasArrow: true })}
            {renderMenuItem({ icon: 'finger-print-outline', label: 'Enable Fingerprint Login', hasToggle: true })}
            {renderMenuItem({ icon: 'person-remove-outline', label: 'Delete Account', hasArrow: true })}
            {renderMenuItem({ icon: 'car-outline', label: 'Vehicle List', hasArrow: true })}
          </View>

          {/* Logout Button */}
          <TouchableOpacity style={styles.logoutButton}>
            <Ionicons name="log-out-outline" size={20} color="#ff0000" />
            <ThemedText style={styles.logoutText}>Log out</ThemedText>
          </TouchableOpacity>
        </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 30,
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
  profileSection: {
    backgroundColor: '#ff0000',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 20,
  },
  profileTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  profileContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  quickAccessContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  quickAccessRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  quickAccessCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  quickAccessText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  menuContainer: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingVertical: 14,
    paddingHorizontal: 15,
    marginBottom: 1,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  menuItemText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    marginHorizontal: 40,
    marginVertical: 20,
    marginBottom: 30,
    paddingVertical: 14,
    borderRadius: 25,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ff0000',
  },
});
