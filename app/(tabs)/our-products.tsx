import AccessoriesIcon from '@/components/icons/AccessoriesIcon';
import BatteryIcon from '@/components/icons/BatteryIcon';
import CartIcon from '@/components/icons/CartIcon';
import EquipmentIcon from '@/components/icons/EquipmentIcon';
import LubricantIcon from '@/components/icons/LubricantIcon';
import TireIcon from '@/components/icons/TireIcon';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface ProductCategoryProps {
  icon: React.ReactNode;
  title: string;
  onPress?: () => void;
}

const ProductCategory = ({ icon, title, onPress }: ProductCategoryProps) => (
  <TouchableOpacity style={styles.categoryCard} onPress={onPress}>
    <View style={styles.iconContainer}>{icon}</View>
    <Text style={styles.categoryTitle}>{title}</Text>
  </TouchableOpacity>
);

export default function OurProductsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => router.back()} 
            style={styles.backButton}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          
          <Text style={styles.headerTitle}>Our Products</Text>
          
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.languageSelector}>
              <Text style={styles.languageText}>EN</Text>
              <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.cartButton}>
              <CartIcon size={24} color="#000" />
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>1</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Products Grid */}
        <View style={styles.productsContainer}>
          <View style={styles.productsGrid}>
            <ProductCategory
              icon={<TireIcon size={80} color="#E41E26" />}
              title="TIRES"
              onPress={() => router.push('/tires')}
            />
            <ProductCategory
              icon={<LubricantIcon size={80} color="#E41E26" />}
              title="LUBRICANTS"
              onPress={() => router.push('/lubricants')}
            />
          </View>

          <View style={styles.productsGrid}>
            <ProductCategory
              icon={<BatteryIcon size={80} color="#E41E26" />}
              title="BATTERIES"
              onPress={() => router.push('/batteries')}
            />
            <ProductCategory
              icon={<EquipmentIcon size={80} color="#555" />}
              title="EQUIPMENT"
              onPress={() => router.push('/equipment')}
            />
          </View>

          <View style={styles.productsGridSingle}>
            <ProductCategory
              icon={<AccessoriesIcon size={80} color="#E41E26" />}
              title="ACCESSORIES"
              onPress={() => router.push('/accessories')}
            />
          </View>
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
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
    textAlign: 'center',
    marginLeft: -40, // Compensate for right side elements to center the title
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
  productsContainer: {
    padding: 16,
    paddingTop: 24,
  },
  productsGrid: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  productsGridSingle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 16,
  },
  categoryCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 160,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  iconContainer: {
    marginBottom: 12,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
});
