import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="my-booking"
        options={{
          title: 'My Booking',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="briefcase.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="message.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="my-account"
        options={{
          title: 'My Account',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="tires"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="batteries"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="lubricants"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="equipment"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="accessories"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="our-products"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="our-services"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="car-wash-door-to-door"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="car-wash-in-service-station"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="tinting-protection"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="mobile-van-service"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="our-branches"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="lubricants-listing"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="batteries-listing"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
