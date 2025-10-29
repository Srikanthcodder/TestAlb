import BatteryCheckIcon from '@/components/icons/BatteryCheckIcon';
import BatteryInstallIcon from '@/components/icons/BatteryInstallIcon';
import CartIcon from '@/components/icons/CartIcon';
import TireRepairIcon from '@/components/icons/TireRepairIcon';
import { useCart } from '@/contexts/CartContext';
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

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  price: string;
  onAddToCart?: () => void;
}

const ServiceCard = ({ icon, title, price, onAddToCart }: ServiceCardProps) => (
  <View style={styles.serviceWrapper}>
    <View style={styles.serviceCard}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.serviceTitle}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
    <TouchableOpacity style={styles.addToCartButton} onPress={onAddToCart}>
      <Text style={styles.addToCartText}>Add to Cart</Text>
    </TouchableOpacity>
  </View>
);

export default function MobileVanServiceScreen() {
  const router = useRouter();
  const { addToCart, getCartCount } = useCart();

  const handleAddToCart = (serviceName: string, price: number) => {
    addToCart({
      id: `mobile-van-${serviceName.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`,
      name: serviceName,
      price: price,
      type: 'service',
      deliveryType: 'Service Station',
    });
    console.log(`Added ${serviceName} to cart`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => router.push('/our-services')} 
            style={styles.backButton}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          
          <Text style={styles.headerTitle}>MOBILE VAN SERVI...</Text>
          
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

        {/* Services List */}
        <View style={styles.servicesContainer}>
          <ServiceCard
            icon={<BatteryCheckIcon size={80} color="#E41E26" />}
            title="CHECK & REPLACE BATTERY DOOR TO DOOR SERVICE"
            price="KWD 10.000"
            onAddToCart={() => handleAddToCart('CHECK & REPLACE BATTERY DOOR TO DOOR SERVICE', 10.000)}
          />
          
          <ServiceCard
            icon={<TireRepairIcon size={80} color="#E41E26" />}
            title="REPAIR FLAT TIRE/PUNCTURE"
            price="KWD 10.000"
            onAddToCart={() => handleAddToCart('REPAIR FLAT TIRE/PUNCTURE', 10.000)}
          />
          
          <ServiceCard
            icon={<BatteryInstallIcon size={80} color="#E41E26" />}
            title="BATTERY INSTALLATION SERVICE"
            price="KWD 8.000"
            onAddToCart={() => handleAddToCart('BATTERY INSTALLATION SERVICE', 8.000)}
          />
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
    textAlign: 'center',
    marginLeft: -40,
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
  servicesContainer: {
    padding: 16,
    paddingTop: 24,
  },
  serviceWrapper: {
    marginBottom: 16,
  },
  serviceCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  addToCartButton: {
    backgroundColor: '#E41E26',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-end',
  },
  addToCartText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
