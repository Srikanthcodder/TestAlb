import CartIcon from '@/components/icons/CartIcon';
import CarWashDoorToDoorIcon from '@/components/icons/CarWashDoorToDoorIcon';
import CarWashServiceStationIcon from '@/components/icons/CarWashServiceStationIcon';
import MobileVanServiceIcon from '@/components/icons/MobileVanServiceIcon';
import TintingProtectionIcon from '@/components/icons/TintingProtectionIcon';
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
  onPress?: () => void;
}

const ServiceCard = ({ icon, title, onPress }: ServiceCardProps) => (
  <TouchableOpacity style={styles.serviceCard} onPress={onPress}>
    <View style={styles.iconContainer}>{icon}</View>
    <Text style={styles.serviceTitle}>{title}</Text>
  </TouchableOpacity>
);

export default function OurServicesScreen() {
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
          
          <Text style={styles.headerTitle}>Our Services</Text>
          
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

        {/* Services Grid */}
        <View style={styles.servicesContainer}>
          <View style={styles.servicesGrid}>
            <ServiceCard
              icon={<CarWashDoorToDoorIcon size={80} color="#E41E26" />}
              title="CAR WASH DOOR TO DOOR"
              onPress={() => router.push('/car-wash-door-to-door')}
            />
            <ServiceCard
              icon={<CarWashServiceStationIcon size={80} color="#999" />}
              title="CAR WASH IN SERVICE STATION"
              onPress={() => router.push('/car-wash-in-service-station')}
            />
          </View>

          <View style={styles.servicesGrid}>
            <ServiceCard
              icon={<TintingProtectionIcon size={80} color="#E41E26" />}
              title="TINTING & PROTECTION"
              onPress={() => router.push('/tinting-protection')}
            />
            <ServiceCard
              icon={<MobileVanServiceIcon size={80} color="#555" />}
              title="MOBILE VAN SERVICE"
              onPress={() => router.push('/mobile-van-service')}
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
});
