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

export default function CartScreen() {
  const router = useRouter();
  const { cartItems, removeFromCart, getCartTotal } = useCart();

  const handleCheckout = () => {
    console.log('Proceeding to checkout...');
    // Navigate to checkout page (to be implemented)
  };

  const handleContinueShopping = () => {
    router.push('/our-services');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Cart Page</Text>

        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.languageSelector}>
            <Text style={styles.languageText}>EN</Text>
            <Text style={styles.dropdownIcon}>▼</Text>
          </TouchableOpacity>
        </View>
      </View>

      {cartItems.length === 0 ? (
        // Empty Cart State
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>Cart Empty</Text>
          <Text style={styles.emptySubtitle}>No Products Added</Text>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinueShopping}
          >
            <Text style={styles.continueButtonText}>Continue to service</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // Cart with Items
        <ScrollView style={styles.contentContainer}>
          {/* Services Section */}
          <Text style={styles.sectionTitle}>Services:</Text>

          {cartItems.map((item) => (
            <View key={item.id} style={styles.cartItemContainer}>
              <View style={styles.cartItem}>
                <View style={styles.itemImageContainer}>
                  {item.icon === 'battery' ? (
                    <Image
                      source={require('@/assets/images/battery_card_icon.png')}
                      style={styles.itemImage}
                      resizeMode="contain"
                    />
                  ) : item.icon === 'lubricant' ? (
                    <Image
                      source={require('@/assets/images/lubricant_card_icon.png')}
                      style={styles.itemImage}
                      resizeMode="contain"
                    />
                  ) : (
                    <Text style={styles.itemIcon}>🚗</Text>
                  )}
                </View>

                <View style={styles.itemDetails}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>KWD {item.price.toFixed(3)}</Text>
                </View>

                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => removeFromCart(item.id)}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                  <Text style={styles.deleteIcon}>🗑️</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}

          {/* Delivery Type */}
          {cartItems.length > 0 && cartItems[0].deliveryType && (
            <View style={styles.deliverySection}>
              <Text style={styles.deliveryTitle}>
                Delivery Type: {cartItems[0].deliveryType}
              </Text>
            </View>
          )}

          {/* Bill Details */}
          <View style={styles.billSection}>
            <Text style={styles.billTitle}>Bill Details:</Text>

            <View style={styles.billRow}>
              <Text style={styles.billLabel}>Subtotal</Text>
              <Text style={styles.billValue}>KWD {getCartTotal().toFixed(3)}</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.billRow}>
              <Text style={styles.totalLabel}>Total Amount</Text>
              <Text style={styles.totalValue}>KWD {getCartTotal().toFixed(3)}</Text>
            </View>
          </View>
        </ScrollView>
      )}

      {/* Checkout Button - Only show when cart has items */}
      {cartItems.length > 0 && (
        <View style={styles.checkoutContainer}>
          <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
            <Text style={styles.checkoutButtonText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
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
    marginLeft: -40,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 16,
  },
  emptySubtitle: {
    fontSize: 24,
    color: '#666',
    marginBottom: 40,
  },
  continueButton: {
    backgroundColor: '#E41E26',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 30,
    alignSelf: 'center',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  cartItemContainer: {
    marginBottom: 16,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  itemImageContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  itemImage: {
    width: 60,
    height: 60,
  },
  itemIcon: {
    fontSize: 40,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  deleteButton: {
    padding: 8,
  },
  deleteIcon: {
    fontSize: 24,
  },
  deliverySection: {
    marginTop: 20,
    marginBottom: 24,
  },
  deliveryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  billSection: {
    marginBottom: 100,
  },
  billTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  billRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  billLabel: {
    fontSize: 18,
    color: '#555',
  },
  billValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  divider: {
    height: 1,
    backgroundColor: '#DDD',
    marginVertical: 12,
  },
  totalLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  totalValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  checkoutContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'transparent',
  },
  checkoutButton: {
    backgroundColor: '#E41E26',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
