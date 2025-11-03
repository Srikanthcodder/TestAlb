import CartIcon from '@/components/icons/CartIcon';
import { useCart } from '@/contexts/CartContext';
import { productService, type Product } from '@/services';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect, useRouter } from 'expo-router';
import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface ProductCardProps {
  product: Product;
  onAddToCart: (quantity: number) => void;
}

const ProductCard = ({ 
  product,
  onAddToCart 
}: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const displayPrice = product.price;
  const originalPriceValue = product.originalPrice;

  return (
    <View style={styles.productCard}>
      {product.specialOffer && (
        <View style={styles.specialOfferBanner}>
          <Ionicons name="caret-down" size={20} color="#fff" style={styles.caretLeft} />
          <Text style={styles.specialOfferText}>SPECIAL OFFER</Text>
          <Ionicons name="caret-down" size={20} color="#fff" style={styles.caretRight} />
        </View>
      )}
      
      {product.discount && (
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>{product.discount}</Text>
          <Text style={styles.offText}>OFF</Text>
        </View>
      )}

      <View style={styles.productImageContainer}>
        <Image
          source={require('@/assets/images/battery_card_icon.png')}
          style={styles.productImage}
          resizeMode="contain"
        />
      </View>

      {product.warranty && (
        <View style={styles.warrantyContainer}>
          <View style={styles.warrantyBadge}>
            <Text style={styles.warrantyText}>{product.warranty}</Text>
          </View>
          <Text style={styles.warrantyLabel}>Warranty</Text>
        </View>
      )}

      <View style={styles.brandLogoContainer}>
        <Text style={styles.brandLogoText}>{product.brand}</Text>
      </View>

      <Text style={styles.productTitle}>{product.name}</Text>
      <Text style={styles.productSubtitle}>{product.sku}</Text>

      <View style={styles.priceContainer}>
        <Text style={styles.priceLabel}>KWD</Text>
        {hasDiscount && originalPriceValue && (
          <Text style={styles.originalPrice}>{originalPriceValue.toFixed(3)}</Text>
        )}
        <Text style={styles.price}>{displayPrice.toFixed(3)}</Text>
      </View>

      <View style={styles.actionContainer}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity 
            style={styles.quantityButton}
            onPress={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Text style={styles.quantityButtonText}>−</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity 
            style={styles.quantityButton}
            onPress={() => setQuantity(quantity + 1)}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
          style={styles.addToCartButton}
          onPress={() => onAddToCart(quantity)}
        >
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function BatteriesListingScreen() {
  const router = useRouter();
  const { getCartCount, addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch data when screen comes into focus
  useFocusEffect(
    useCallback(() => {
      fetchBatteries();
    }, [])
  );

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);

  const fetchBatteries = async () => {
    try {
      setLoading(true);
      const response = await productService.getBatteries();
      // Response interceptor already returns response.data
      if (response && response.products) {
        setProducts(response.products);
        setFilteredProducts(response.products);
      } else {
        console.error('Unexpected response structure:', response);
        Alert.alert('Error', 'Invalid data format received');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to load batteries. Please try again.');
      console.error('Failed to fetch batteries:', error);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchBatteries();
    setRefreshing(false);
  };

  const handleAddToCart = (product: Product, quantity: number) => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: `${product.id}-${Date.now()}-${i}`,
        name: product.name,
        price: product.price,
        type: 'product',
        icon: 'battery',
      });
    }
  };

  if (loading && !refreshing) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#E41E26" />
          <Text style={styles.loadingText}>Loading batteries...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => router.back()} 
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={28} color="#000" />
        </TouchableOpacity>
        
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.languageSelector}>
            <Text style={styles.languageText}>EN</Text>
            <Ionicons name="chevron-down" size={16} color="#E41E26" />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.cartButton}
            onPress={() => router.push('/cart')}
          >
            <CartIcon size={24} color="#000" />
            {getCartCount() > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{getCartCount()}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#999" />
          <TextInput 
            style={styles.searchInput}
            placeholder="Search by SKU or brand name"
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#E41E26']} />
        }
      >
        {filteredProducts.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              {searchQuery ? 'No batteries found matching your search.' : 'No batteries available.'}
            </Text>
          </View>
        ) : (
          <View style={styles.productsGrid}>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={(quantity) => handleAddToCart(product, quantity)}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
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
    padding: 8,
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
    fontSize: 16,
    fontWeight: 'bold',
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
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
    backgroundColor: '#FFFFFF',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  filterButton: {
    width: 50,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 12,
    gap: 12,
  },
  productCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
    position: 'relative',
  },
  specialOfferBanner: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    zIndex: 1,
  },
  caretLeft: {
    position: 'absolute',
    left: 8,
  },
  caretRight: {
    position: 'absolute',
    right: 8,
  },
  specialOfferText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  discountBadge: {
    position: 'absolute',
    top: 40,
    right: 8,
    backgroundColor: '#E41E26',
    borderRadius: 20,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  discountText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  offText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  productImageContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  productImage: {
    width: 100,
    height: 100,
  },
  warrantyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  warrantyBadge: {
    backgroundColor: '#E41E26',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  warrantyText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  warrantyLabel: {
    fontSize: 10,
    color: '#666',
  },
  brandLogoContainer: {
    marginBottom: 8,
  },
  brandLogoText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#E41E26',
    fontStyle: 'italic',
  },
  brandLogo: {
    width: 80,
    height: 30,
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  productSubtitle: {
    fontSize: 11,
    color: '#666',
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 4,
  },
  priceLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000',
  },
  originalPrice: {
    fontSize: 11,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  price: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  quantityButton: {
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 12,
    color: '#E41E26',
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000',
    paddingHorizontal: 4,
    minWidth: 16,
    textAlign: 'center',
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#E41E26',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 6,
  },
  addToCartText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
