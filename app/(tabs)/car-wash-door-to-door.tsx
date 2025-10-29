import CartIcon from '@/components/icons/CartIcon';
import SedanIcon from '@/components/icons/SedanIcon';
import SUVIcon from '@/components/icons/SUVIcon';
import TruckIcon from '@/components/icons/TruckIcon';
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

interface VehicleCardProps {
  icon: React.ReactNode;
  type: string;
  price: string;
  onAddToCart?: () => void;
}

const VehicleCard = ({ icon, type, price, onAddToCart }: VehicleCardProps) => (
  <View style={styles.vehicleWrapper}>
    <View style={styles.vehicleCard}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.vehicleType}>{type}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
    <TouchableOpacity style={styles.addToCartButton} onPress={onAddToCart}>
      <Text style={styles.addToCartText}>Add to Cart</Text>
    </TouchableOpacity>
  </View>
);

export default function CarWashDoorToDoorScreen() {
  const router = useRouter();
  const { addToCart, getCartCount } = useCart();

  const handleAddToCart = (vehicleType: string, price: number) => {
    addToCart({
      id: `car-wash-${vehicleType.toLowerCase()}-${Date.now()}`,
      name: `Car wash Service - ${vehicleType}`,
      price: price,
      type: 'service',
      deliveryType: 'Service Station',
    });
    console.log(`Added ${vehicleType} to cart`);
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
          
          <Text style={styles.headerTitle}>CAR WASH DOOR T...</Text>
          
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

        {/* Vehicle Options */}
        <View style={styles.vehiclesContainer}>
          <VehicleCard
            icon={<SedanIcon size={80} color="#E41E26" />}
            type="SEDAN"
            price="KWD 18.000"
            onAddToCart={() => handleAddToCart('SEDAN', 18.000)}
          />
          
          <VehicleCard
            icon={<SUVIcon size={80} color="#E41E26" />}
            type="SUV"
            price="KWD 20.000"
            onAddToCart={() => handleAddToCart('SUV', 20.000)}
          />
          
          <VehicleCard
            icon={<TruckIcon size={80} color="#E41E26" />}
            type="Truck Pickup"
            price="KWD 25.000"
            onAddToCart={() => handleAddToCart('Truck Pickup', 25.000)}
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
  vehiclesContainer: {
    padding: 16,
    paddingTop: 24,
  },
  vehicleWrapper: {
    marginBottom: 16,
  },
  vehicleCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
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
    padding: 12,
    marginBottom: 10,
  },
  vehicleType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
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
