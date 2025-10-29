import CartIcon from '@/components/icons/CartIcon';
import NotificationIcon from '@/components/icons/NotificationIcon';
import SearchIcon from '@/components/icons/SearchIcon';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { images } from '@/constants/images';
import { Colors } from '@/constants/theme';
import { useCart } from '@/contexts/CartContext';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, TextInput, TouchableOpacity, View, ViewStyle } from 'react-native';

interface ServiceCardProps {
  icon: { uri: string };
  title: string;
  onPress?: () => void;
}

interface QuickButtonProps {
  title: string;
  style?: ViewStyle;
  onPress?: () => void;
}

const promotions = [
  { id: '1', image: images.promo1 },
  { id: '2', image: images.promo2 },
  { id: '3', image: images.promo3 },
];

const ServiceCard = ({ icon, title, onPress }: ServiceCardProps) => (
  <TouchableOpacity style={styles.serviceCard} onPress={onPress}>
    <Image source={icon} style={styles.serviceIcon} contentFit="contain" />
    <ThemedText style={styles.serviceText}>{title}</ThemedText>
  </TouchableOpacity>
);

const QuickButton = ({ title, style, onPress }: QuickButtonProps) => (
  <TouchableOpacity style={[styles.quickButton, style]} onPress={onPress}>
    <ThemedText style={styles.quickButtonText}>{title}</ThemedText>
  </TouchableOpacity>
);

export default function HomeScreen() {
  const [activeSlide, setActiveSlide] = useState(0);
  const colorScheme = useColorScheme();
  const iconColor = Colors[colorScheme ?? 'light'].text;
  const router = useRouter();
  const { getCartCount } = useCart();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <View style={styles.topBar}>
          <Image source={images.logo} style={styles.logo} />
          <View style={styles.headerIcons}>
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

        <ThemedText style={styles.greeting}>Hey, Srikanth</ThemedText>
        <ThemedText style={styles.subGreeting}>Select your service!</ThemedText>

        <View style={styles.searchBar}>
          <SearchIcon size={20} color="#999" />
          <TextInput style={styles.searchInput} placeholder="Search" />
        </View>
      </ThemedView>

      <ThemedView style={styles.content}>
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Promotions</ThemedText>
          <FlatList
            data={promotions}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={({ nativeEvent }) => {
              const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
              if (slide !== activeSlide) {
                setActiveSlide(slide);
              }
            }}
            renderItem={({ item }) => (
              <View style={styles.promoPlaceholder}>
                <Image source={item.image} style={styles.promoImage} contentFit="cover" />
              </View>
            )}
            keyExtractor={item => item.id}
          />
          <View style={styles.pagination}>
            {promotions.map((_, index) => (
              <View key={index} style={[styles.paginationDot, activeSlide === index && styles.paginationDotActive]} />
            ))}
          </View>
        </View>

        <View style={styles.servicesGrid}>
          <ServiceCard icon={images.tires} title="TIRES" />
          <ServiceCard icon={images.lubricants} title="LUBRICANTS" onPress={() => router.push('/lubricants-listing')} />
          <ServiceCard icon={images.battery} title="BATTERIES" onPress={() => router.push('/batteries-listing')} />
        </View>

        <View style={styles.quickLinks}>
          <QuickButton 
            title="Quick Enquiry" 
            style={styles.quickEnquiry}
          />
          <QuickButton 
            title="Book your Appointment" 
            style={styles.bookAppointment}
            onPress={() => router.push('/our-products')}
          />
        </View>

        <View style={styles.servicesGrid}>
          <ServiceCard icon={images.products} title="Our Products" onPress={() => router.push('/our-products')} />
          <ServiceCard icon={images.branches} title="Branches" onPress={() => router.push('/our-branches')} />
          <ServiceCard icon={images.services} title="Our Services" onPress={() => router.push('/our-services')} />
          <ServiceCard icon={images.customerService} title="Our Customer Service" />
          <ServiceCard icon={images.rewards} title="Rewarding System" />
          <ServiceCard icon={images.offers} title="Special Offers" />
        </View>

        
      </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff', // Or use theme color
  },
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    // paddingTop: 10,
    paddingBottom: 10,
    marginTop: 40,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30, // Add this line
  },
  logo: {
    width: 150,
    height: 40,
    resizeMode: 'contain',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 15,
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
  icon: {
    width: 24,
    height: 24,
  },
  greeting: {
    marginTop: 5,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subGreeting: {
    fontSize: 20,
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 10,
    marginBottom: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  searchPlaceholder: {
    color: '#999',
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  promoPlaceholder: {
    width: 300,
    height: 150,
    borderRadius: 15,
    marginRight: 15,
    backgroundColor: '#ff0000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  promoImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  promoText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
    marginTop: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ddd',
  },
  paginationDotActive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ff0000',
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  serviceCard: {
    width: '30%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  serviceIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  serviceText: {
    fontSize: 11,
    textAlign: 'center',
    fontWeight: '600',
    color: '#ff0000',
  },
  quickLinks: {
    gap: 15,
    marginBottom: 30,
  },
  quickButton: {
    backgroundColor: '#ff0000',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  quickEnquiry: {
    backgroundColor: '#ff0000',
  },
  bookAppointment: {
    backgroundColor: '#ff0000',
  },
  quickButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialConnect: {
    alignItems: 'center',
    marginTop: 20,
  },
  connectText: {
    fontSize: 16,
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 15,
  },
});
