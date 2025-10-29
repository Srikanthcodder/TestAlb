import CartIcon from '@/components/icons/CartIcon';
import EquipmentIcon from '@/components/icons/EquipmentIcon';
import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface BrandCardProps {
  brandName?: string;
  onPress?: () => void;
}

const BrandCard = ({ brandName = 'Brand', onPress }: BrandCardProps) => (
  <TouchableOpacity style={styles.brandCard} onPress={onPress}>
    <Text style={styles.brandName}>{brandName}</Text>
  </TouchableOpacity>
);

export default function EquipmentScreen() {
  const router = useRouter();
  const { getCartCount } = useCart();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => router.push('/our-products')} 
            style={styles.backButton}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.languageSelector}>
              <Text style={styles.languageText}>EN</Text>
              <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.cartButton}
              onPress={() => router.push('/cart')}
            >
              <CartIcon size={24} color="#000" />
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{getCartCount()}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Banner */}
        <View style={styles.bannerContainer}>
          <Image
            source={require('@/assets/images/promo1.jpg')}
            style={styles.bannerImage}
            resizeMode="cover"
          />
        </View>

        {/* All Brands Equipment Button */}
        <TouchableOpacity style={styles.allBrandsButton}>
          <EquipmentIcon size={60} color="#555" />
          <Text style={styles.allBrandsText}>ALL BRANDS EQUIPMENT</Text>
        </TouchableOpacity>

        {/* Branded Equipment Section */}
        <View style={styles.brandsSection}>
          <ScrollView 
            showsVerticalScrollIndicator={true}
            nestedScrollEnabled={true}
            style={styles.brandsScrollView}
          >
            <View style={styles.brandsGrid}>
              <BrandCard brandName="Brand 1" />
              <BrandCard brandName="Brand 2" />
            </View>
            <View style={styles.brandsGrid}>
              <BrandCard brandName="Brand 3" />
              <BrandCard brandName="Brand 4" />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    marginTop: 30,
  },
  backButton: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -14,
  },
  backIcon: {
    fontSize: 36,
    color: '#000',
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  languageSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  languageText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E41E26',
  },
  dropdownIcon: {
    fontSize: 12,
    color: '#E41E26',
  },
  cartButton: {
    position: 'relative',
    padding: 4,
  },
  cartBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
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
  bannerContainer: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  bannerImage: {
    width: '100%',
    height: 180,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  allBrandsButton: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  allBrandsText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#333',
    letterSpacing: 1,
  },
  brandsSection: {
    flex: 1,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  brandsScrollView: {
    maxHeight: 600,
  },
  brandsGrid: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  brandCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  brandName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#E41E26',
    textAlign: 'center',
  },
});
