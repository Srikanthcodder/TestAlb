import CartIcon from '@/components/icons/CartIcon';
import CarWashDoorToDoorIcon from '@/components/icons/CarWashDoorToDoorIcon';
import CarWashServiceStationIcon from '@/components/icons/CarWashServiceStationIcon';
import MobileVanServiceIcon from '@/components/icons/MobileVanServiceIcon';
import TintingProtectionIcon from '@/components/icons/TintingProtectionIcon';
import { useCart } from '@/contexts/CartContext';
import { serviceService, type Service } from '@/services';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface ServiceCardProps {
  service: Service;
  onPress?: () => void;
}

const getServiceIcon = (serviceName: string) => {
  const name = serviceName.toLowerCase();
  if (name.includes('door to door') || name.includes('door-to-door')) {
    return <CarWashDoorToDoorIcon size={80} color="#E41E26" />;
  } else if (name.includes('service station') || name.includes('car wash')) {
    return <CarWashServiceStationIcon size={80} color="#999" />;
  } else if (name.includes('tinting') || name.includes('protection')) {
    return <TintingProtectionIcon size={80} color="#E41E26" />;
  } else if (name.includes('mobile') || name.includes('van')) {
    return <MobileVanServiceIcon size={80} color="#555" />;
  }
  return <CarWashServiceStationIcon size={80} color="#E41E26" />;
};

const ServiceCard = ({ service, onPress }: ServiceCardProps) => (
  <TouchableOpacity style={styles.serviceCard} onPress={onPress}>
    <View style={styles.iconContainer}>{getServiceIcon(service.name)}</View>
    <Text style={styles.serviceTitle}>{service.name}</Text>
    {service.description && (
      <Text style={styles.serviceDescription} numberOfLines={2}>{service.description}</Text>
    )}
  </TouchableOpacity>
);

export default function OurServicesScreen() {
  const router = useRouter();
  const { getCartCount } = useCart();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await serviceService.getAllServices();
      setServices(response.services || []);
    } catch (error) {
      Alert.alert('Error', 'Failed to load services. Please try again.');
      console.error('Failed to fetch services:', error);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchServices();
    setRefreshing(false);
  };

  const handleServicePress = (service: Service) => {
    // Navigate to service details or specific service screen
    const serviceName = service.name.toLowerCase().replace(/\s+/g, '-');
    router.push(`/${serviceName}` as any);
  };

  if (loading && !refreshing) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => router.back()} 
            style={styles.backButton}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          
          <Text style={styles.headerTitle}>Our Services</Text>
          
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.languageSelector}>
              <Text style={styles.languageText}>EN</Text>
              <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.cartButton} onPress={() => router.push('/cart')}>
              <CartIcon size={24} color="#000" />
              {getCartCount() > 0 && (
                <View style={styles.cartBadge}>
                  <Text style={styles.cartBadgeText}>{getCartCount()}</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#E41E26" />
          <Text style={styles.loadingText}>Loading services...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#E41E26']} />
        }
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => router.back()} 
            style={styles.backButton}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          
          <Text style={styles.headerTitle}>Our Services</Text>
          
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.languageSelector}>
              <Text style={styles.languageText}>EN</Text>
              <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.cartButton} onPress={() => router.push('/cart')}>
              <CartIcon size={24} color="#000" />
              {getCartCount() > 0 && (
                <View style={styles.cartBadge}>
                  <Text style={styles.cartBadgeText}>{getCartCount()}</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Services Grid */}
        <View style={styles.servicesContainer}>
          {services.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No services available</Text>
            </View>
          ) : (
            <View style={styles.servicesGridContainer}>
              {services.map((service, index) => (
                index % 2 === 0 && (
                  <View key={`row-${index}`} style={styles.servicesGrid}>
                    <ServiceCard
                      service={service}
                      onPress={() => handleServicePress(service)}
                    />
                    {services[index + 1] && (
                      <ServiceCard
                        service={services[index + 1]}
                        onPress={() => handleServicePress(services[index + 1])}
                      />
                    )}
                  </View>
                )
              ))}
            </View>
          )}
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
    padding: 60,
    justifyContent: 'center',
    alignItems: 'center',
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
  servicesGridContainer: {
    gap: 16,
  },
  servicesGrid: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  serviceCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 180,
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
    marginBottom: 16,
  },
  serviceTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    lineHeight: 20,
  },
  serviceDescription: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 16,
  },
});
