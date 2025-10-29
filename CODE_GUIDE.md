# TestAlb - Code Guide

## 📱 Project Overview
TestAlb is a React Native mobile application built with Expo Router for an automotive service business. The app provides services including tire sales, lubricants, batteries, car wash, mobile van service, and various other automotive products and services.

---

## 🚀 Getting Started

### Prerequisites
- Node.js and npm installed
- Expo CLI
- Android Studio (for Android development) or Xcode (for iOS development)

### Installation & Running
```bash
# Install dependencies
npm install

# Start the development server
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios

# Run on Web
npm run web
```

---

## 📂 Project Structure

### Root Configuration Files
- **`app.json`** - Expo configuration (app name, version, icons, splash screen, plugins)
- **`package.json`** - Dependencies and scripts
- **`tsconfig.json`** - TypeScript configuration
- **`eas.json`** - Expo Application Services configuration
- **`firebase.json`** - Firebase configuration

### Main Directories

#### `/app` - Application Screens (Expo Router)
Uses file-based routing. The folder structure defines the navigation structure.

- **`_layout.tsx`** - Root layout wrapper
  - Wraps the entire app with `CartProvider` for global cart state
  - Sets up theme provider (light/dark mode)
  - Configures navigation stack

- **`modal.tsx`** - Modal screen example

- **`(tabs)/`** - Tab-based navigation screens
  - **`_layout.tsx`** - Tab navigation configuration
  - **`index.tsx`** - **HOME SCREEN** (Main entry point)
  - **`cart.tsx`** - Shopping cart screen
  - **`notifications.tsx`** - Notifications screen
  - **`my-account.tsx`** - User account screen
  - **`my-booking.tsx`** - Booking history
  - **`chat.tsx`** - Customer support chat
  
  **Product Categories:**
  - `tires.tsx` - Tire selection
  - `batteries.tsx` / `batteries-listing.tsx` - Battery products
  - `lubricants.tsx` / `lubricants-listing.tsx` - Lubricant products
  - `accessories.tsx` - Automotive accessories
  - `equipment.tsx` - Equipment catalog
  
  **Services:**
  - `our-services.tsx` - Services overview
  - `car-wash-door-to-door.tsx` - Mobile car wash
  - `car-wash-in-service-station.tsx` - In-station car wash
  - `mobile-van-service.tsx` - Mobile service
  - `tinting-protection.tsx` - Tinting and protection services
  
  **Other:**
  - `our-products.tsx` - Products overview
  - `our-branches.tsx` - Branch locations

#### `/components` - Reusable Components

**UI Components:**
- `BackButton.tsx` - Navigation back button
- `themed-text.tsx` - Text with theme support
- `themed-view.tsx` - View with theme support
- `parallax-scroll-view.tsx` - Parallax scrolling effect
- `haptic-tab.tsx` - Tab with haptic feedback

**Icons (`/components/icons/`):**
Custom SVG icon components for various services and products:
- `CartIcon.tsx`, `NotificationIcon.tsx`, `SearchIcon.tsx`
- `BatteryIcon.tsx`, `TireIcon.tsx`, `LubricantIcon.tsx`
- `CarWashDoorToDoorIcon.tsx`, `CarWashServiceStationIcon.tsx`
- `MobileVanServiceIcon.tsx`, `TintingProtectionIcon.tsx`
- `SedanIcon.tsx`, `SUVIcon.tsx`, `TruckIcon.tsx`
- And more...

#### `/contexts` - Global State Management

**`CartContext.tsx`** - Shopping Cart Context
- Manages cart items globally
- Functions:
  - `addToCart(item)` - Add item to cart
  - `removeFromCart(id)` - Remove item by ID
  - `clearCart()` - Empty the cart
  - `getCartTotal()` - Calculate total price
  - `getCartCount()` - Get number of items
- CartItem interface:
  ```typescript
  {
    id: string;
    name: string;
    price: number;
    type: 'product' | 'service';
    deliveryType?: string;
    icon?: string;
  }
  ```

#### `/constants` - Static Data
- **`theme.ts`** - Color themes and styling constants
- **`images.ts`** - Image asset imports and references

#### `/hooks` - Custom React Hooks
- **`use-color-scheme.ts`** - Color scheme detection (light/dark mode)
- **`use-theme-color.ts`** - Get theme-specific colors

#### `/assets` - Static Assets
- **`/images`** - All image files (logos, icons, promo images, product images)

#### `/android` - Android Native Project
- Native Android build configuration
- `build.gradle` - Build configuration
- `google-services.json` - Firebase Android configuration
- `/app/src/main/` - Android source code and resources

---

## 🎯 Application Flow (Starting Point)

### 1. **App Entry** - `app/_layout.tsx`
```
App Loads → CartProvider initialized → Theme applied → Navigation stack created
```

### 2. **Home Screen** - `app/(tabs)/index.tsx`
This is the **main entry point** for users:

**Features:**
- Logo and header with cart and notification icons
- User greeting
- Search bar
- **Promotions carousel** with pagination
- **Service cards grid:**
  - Tires
  - Lubricants (navigates to lubricants-listing)
  - Batteries (navigates to batteries-listing)
- **Quick action buttons:**
  - Quick Enquiry
  - Book your Appointment (navigates to our-products)
- **Additional service cards:**
  - Our Products
  - Branches
  - Our Services
  - Customer Service
  - Rewarding System
  - Special Offers

### 3. **Navigation Flow**
```
Home Screen (index.tsx)
    ├→ Lubricants Listing → Lubricants Details
    ├→ Batteries Listing → Batteries Details
    ├→ Our Products
    ├→ Our Branches
    ├→ Our Services
    │   ├→ Car Wash Door-to-Door
    │   ├→ Car Wash In-Service Station
    │   ├→ Mobile Van Service
    │   └→ Tinting & Protection
    ├→ Cart
    ├→ Notifications
    ├→ My Account
    └→ My Booking
```

---

## 💻 Key Technologies

### Core Stack
- **React Native** (0.81.5) - Mobile framework
- **Expo** (~54.0.20) - Development platform
- **Expo Router** (~6.0.13) - File-based routing
- **TypeScript** (~5.9.2) - Type safety
- **React Navigation** - Navigation library

### Key Libraries
- **react-native-maps** - Map integration
- **react-native-reanimated** - Smooth animations
- **react-native-gesture-handler** - Touch gestures
- **react-native-svg** - SVG support
- **expo-image** - Optimized image component

---

## 🎨 Styling & Theming

### Theme System
- Supports light and dark modes
- Theme colors defined in `/constants/theme.ts`
- Components use `ThemedText` and `ThemedView` for automatic theme adaptation

### Color Scheme
- Primary color: Red (#ff0000, #E41E26)
- Uses React Navigation themes (DarkTheme, DefaultTheme)

---

## 🔧 State Management

### Global State
- **Cart Context** (`CartContext.tsx`) - Shopping cart management across all screens

### Local State
- React `useState` hooks for component-specific state
- Examples: active slide in carousel, search input, form data

---

## 📱 Screen Breakdown

### Product Screens
These screens typically include:
- Product listings with images
- Filtering options (by brand, type, vehicle)
- Add to cart functionality
- Price information
- Delivery options

### Service Screens
These screens typically include:
- Service description
- Vehicle type selection (Sedan, SUV, Truck)
- Pricing tiers
- Add to cart/booking functionality
- Service details

---

## 🔍 How to Read the Code

### Recommended Reading Order

1. **Start Here:**
   - `app.json` - Understand app configuration
   - `package.json` - See dependencies
   - `app/_layout.tsx` - Understand app structure

2. **Core Functionality:**
   - `contexts/CartContext.tsx` - Cart management
   - `app/(tabs)/index.tsx` - Home screen (main UI)

3. **Navigation:**
   - `app/(tabs)/_layout.tsx` - Tab structure
   - Individual screen files in `app/(tabs)/`

4. **Components:**
   - `components/themed-text.tsx` & `themed-view.tsx` - UI building blocks
   - `components/icons/` - Icon components
   - `components/BackButton.tsx` - Navigation helper

5. **Utilities:**
   - `constants/theme.ts` - Styling constants
   - `constants/images.ts` - Image imports
   - `hooks/` - Custom hooks

### Code Patterns

#### Navigation
```typescript
import { useRouter } from 'expo-router';
const router = useRouter();
router.push('/path-to-screen');
```

#### Using Cart
```typescript
import { useCart } from '@/contexts/CartContext';
const { addToCart, cartItems, getCartCount } = useCart();

addToCart({
  id: 'item-1',
  name: 'Product Name',
  price: 100,
  type: 'product'
});
```

#### Theming
```typescript
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';

const colorScheme = useColorScheme();
const color = Colors[colorScheme ?? 'light'].text;
```

---

## 🚧 Development Tips

### Adding a New Screen
1. Create a new file in `app/(tabs)/` (e.g., `new-screen.tsx`)
2. The file name becomes the route path
3. Export a default React component
4. Use `ThemedView` and `ThemedText` for consistency

### Adding a New Icon
1. Create SVG component in `components/icons/`
2. Accept `size` and `color` props
3. Export the component
4. Import where needed

### Modifying the Cart
- All cart logic is in `contexts/CartContext.tsx`
- Use `useCart()` hook in any component
- Cart state persists across navigation

---

## 📞 Support & Contact
- Repository: TestAlb
- Owner: Srikanthcodder
- Author: Srikanth <kalamatasrikanth@gmail.com>

---

## 📄 License
Private project

---

**Last Updated:** October 29, 2025
