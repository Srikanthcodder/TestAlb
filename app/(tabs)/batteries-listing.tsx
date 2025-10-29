import CartIcon from '@/components/icons/CartIcon';
import { useCart } from '@/contexts/CartContext';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

interface ProductCardProps {
  title: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  warranty?: string;
  specialOffer?: boolean;
  onAddToCart: (quantity: number) => void;
}

const ProductCard = ({ 
  title, 
  subtitle, 
  price, 
  originalPrice, 
  discount, 
  warranty, 
  specialOffer,
  onAddToCart 
}: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.productCard}>
      {specialOffer && (
        <View style={styles.specialOfferBanner}>
          <Ionicons name="caret-down" size={20} color="#fff" style={styles.caretLeft} />
          <Text style={styles.specialOfferText}>SPECIAL OFFER</Text>
          <Ionicons name="caret-down" size={20} color="#fff" style={styles.caretRight} />
        </View>
      )}
      
      {discount && (
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>{discount}</Text>
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

      {warranty && (
        <View style={styles.warrantyContainer}>
          <View style={styles.warrantyBadge}>
            <Text style={styles.warrantyText}>{warranty}</Text>
          </View>
          <Text style={styles.warrantyLabel}>Warranty</Text>
        </View>
      )}

      <View style={styles.brandLogoContainer}>
        <Text style={styles.brandLogoText}>EMTRAC Plus</Text>
      </View>

      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.productSubtitle}>{subtitle}</Text>

      <View style={styles.priceContainer}>
        <Text style={styles.priceLabel}>KWD</Text>
        {originalPrice && (
          <Text style={styles.originalPrice}>{originalPrice}</Text>
        )}
        <Text style={styles.price}>{price}</Text>
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

  const handleAddToCart = (productId: string, title: string, price: string, quantity: number) => {
    // Add item to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: `${productId}-${Date.now()}-${i}`,
        name: title,
        price: parseFloat(price),
        type: 'product',
        icon: 'battery',
      });
    }
  };

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
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.productsGrid}>
          <ProductCard
            title="Batteries-EMTRAC PLUS-MF-105D31L"
            subtitle="MF-105D31L"
            price="47.159"
            warranty="2 YEAR"
            specialOffer={true}
            onAddToCart={(quantity) => handleAddToCart('battery-1', 'Batteries-EMTRAC PLUS-MF-105D31L', '47.159', quantity)}
          />
          <ProductCard
            title="Batteries-EMTRAC PLUS-MF-105D31R"
            subtitle="MF-105D31R"
            price="35.369"
            originalPrice="47.159"
            discount="25%"
            warranty="2 YEAR"
            specialOffer={true}
            onAddToCart={(quantity) => handleAddToCart('battery-2', 'Batteries-EMTRAC PLUS-MF-105D31R', '35.369', quantity)}
          />
          <ProductCard
            title="Batteries-EMTRAC PLUS-MF-105D31L"
            subtitle="MF-105D31L"
            price="47.159"
            discount="25%"
            warranty="2 YEAR"
            specialOffer={true}
            onAddToCart={(quantity) => handleAddToCart('battery-3', 'Batteries-EMTRAC PLUS-MF-105D31L', '47.159', quantity)}
          />
          <ProductCard
            title="Batteries-EMTRAC PLUS-MF-105D31R"
            subtitle="MF-105D31R"
            price="35.369"
            originalPrice="47.159"
            discount="25%"
            warranty="2 YEAR"
            specialOffer={true}
            onAddToCart={(quantity) => handleAddToCart('battery-4', 'Batteries-EMTRAC PLUS-MF-105D31R', '35.369', quantity)}
          />
          <ProductCard
            title="Batteries-EMTRAC PLUS-MF-80D26L"
            subtitle="MF-80D26L"
            price="52.000"
            warranty="3 YEAR"
            specialOffer={true}
            onAddToCart={(quantity) => handleAddToCart('battery-5', 'Batteries-EMTRAC PLUS-MF-80D26L', '52.000', quantity)}
          />
          <ProductCard
            title="Batteries-EMTRAC PLUS-MF-80D26R"
            subtitle="MF-80D26R"
            price="39.000"
            originalPrice="52.000"
            discount="25%"
            warranty="3 YEAR"
            specialOffer={true}
            onAddToCart={(quantity) => handleAddToCart('battery-6', 'Batteries-EMTRAC PLUS-MF-80D26R', '39.000', quantity)}
          />
          <ProductCard
            title="Batteries-EMTRAC PLUS-MF-55B24L"
            subtitle="MF-55B24L"
            price="42.500"
            discount="15%"
            warranty="2 YEAR"
            onAddToCart={(quantity) => handleAddToCart('battery-7', 'Batteries-EMTRAC PLUS-MF-55B24L', '42.500', quantity)}
          />
          <ProductCard
            title="Batteries-EMTRAC PLUS-MF-55B24R"
            subtitle="MF-55B24R"
            price="38.250"
            originalPrice="45.000"
            discount="15%"
            warranty="2 YEAR"
            onAddToCart={(quantity) => handleAddToCart('battery-8', 'Batteries-EMTRAC PLUS-MF-55B24R', '38.250', quantity)}
          />
          <ProductCard
            title="Batteries-EMTRAC PLUS-MF-75D23L"
            subtitle="MF-75D23L"
            price="48.000"
            warranty="2 YEAR"
            specialOffer={true}
            onAddToCart={(quantity) => handleAddToCart('battery-9', 'Batteries-EMTRAC PLUS-MF-75D23L', '48.000', quantity)}
          />
          <ProductCard
            title="Batteries-EMTRAC PLUS-MF-75D23R"
            subtitle="MF-75D23R"
            price="36.000"
            originalPrice="48.000"
            discount="25%"
            warranty="2 YEAR"
            specialOffer={true}
            onAddToCart={(quantity) => handleAddToCart('battery-10', 'Batteries-EMTRAC PLUS-MF-75D23R', '36.000', quantity)}
          />
          <ProductCard
            title="Batteries-EMTRAC PLUS-MF-95D31L"
            subtitle="MF-95D31L"
            price="55.000"
            warranty="3 YEAR"
            onAddToCart={(quantity) => handleAddToCart('battery-11', 'Batteries-EMTRAC PLUS-MF-95D31L', '55.000', quantity)}
          />
          <ProductCard
            title="Batteries-EMTRAC PLUS-MF-95D31R"
            subtitle="MF-95D31R"
            price="44.000"
            originalPrice="55.000"
            discount="20%"
            warranty="3 YEAR"
            specialOffer={true}
            onAddToCart={(quantity) => handleAddToCart('battery-12', 'Batteries-EMTRAC PLUS-MF-95D31R', '44.000', quantity)}
          />
          <ProductCard
            title="Batteries-EMTRAC PLUS-MF-65D23L"
            subtitle="MF-65D23L"
            price="43.500"
            discount="10%"
            warranty="2 YEAR"
            onAddToCart={(quantity) => handleAddToCart('battery-13', 'Batteries-EMTRAC PLUS-MF-65D23L', '43.500', quantity)}
          />
          <ProductCard
            title="Batteries-EMTRAC PLUS-MF-65D23R"
            subtitle="MF-65D23R"
            price="39.150"
            originalPrice="43.500"
            discount="10%"
            warranty="2 YEAR"
            specialOffer={true}
            onAddToCart={(quantity) => handleAddToCart('battery-14', 'Batteries-EMTRAC PLUS-MF-65D23R', '39.150', quantity)}
          />
          <ProductCard
            title="Batteries-EMTRAC PLUS-MF-90D26L"
            subtitle="MF-90D26L"
            price="58.000"
            warranty="3 YEAR"
            specialOffer={true}
            onAddToCart={(quantity) => handleAddToCart('battery-15', 'Batteries-EMTRAC PLUS-MF-90D26L', '58.000', quantity)}
          />
          <ProductCard
            title="Batteries-EMTRAC PLUS-MF-90D26R"
            subtitle="MF-90D26R"
            price="46.400"
            originalPrice="58.000"
            discount="20%"
            warranty="3 YEAR"
            specialOffer={true}
            onAddToCart={(quantity) => handleAddToCart('battery-16', 'Batteries-EMTRAC PLUS-MF-90D26R', '46.400', quantity)}
          />
          <ProductCard
            title="Batteries-EMTRAC PLUS-MF-45B19L"
            subtitle="MF-45B19L"
            price="36.500"
            warranty="2 YEAR"
            onAddToCart={(quantity) => handleAddToCart('battery-17', 'Batteries-EMTRAC PLUS-MF-45B19L', '36.500', quantity)}
          />
          <ProductCard
            title="Batteries-EMTRAC PLUS-MF-45B19R"
            subtitle="MF-45B19R"
            price="32.850"
            originalPrice="36.500"
            discount="10%"
            warranty="2 YEAR"
            specialOffer={true}
            onAddToCart={(quantity) => handleAddToCart('battery-18', 'Batteries-EMTRAC PLUS-MF-45B19R', '32.850', quantity)}
          />
          <ProductCard
            title="Batteries-EMTRAC PLUS-MF-70D23L"
            subtitle="MF-70D23L"
            price="50.000"
            warranty="3 YEAR"
            specialOffer={true}
            onAddToCart={(quantity) => handleAddToCart('battery-19', 'Batteries-EMTRAC PLUS-MF-70D23L', '50.000', quantity)}
          />
          <ProductCard
            title="Batteries-EMTRAC PLUS-MF-70D23R"
            subtitle="MF-70D23R"
            price="42.500"
            originalPrice="50.000"
            discount="15%"
            warranty="3 YEAR"
            specialOffer={true}
            onAddToCart={(quantity) => handleAddToCart('battery-20', 'Batteries-EMTRAC PLUS-MF-70D23R', '42.500', quantity)}
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
