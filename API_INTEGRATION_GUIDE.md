# API Integration Guide

## Backend Setup

### 1. Install Backend Dependencies

```bash
cd backend-api
npm install
```

### 2. Start the Backend Server

```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

The server will start on `http://localhost:3000`

## Mobile App Setup

### 1. Install Frontend Dependencies

```bash
# From the root directory of your project
npm install
```

This will install axios which is needed for API calls.

### 2. Configure API Base URL

The API base URL is configured in `services/api-client.ts`:

```typescript
export const API_BASE_URL = 'http://localhost:3000/api';
```

**For testing on physical device or emulator:**

- **Android Emulator**: Use `http://10.0.2.2:3000/api`
- **iOS Simulator**: Use `http://localhost:3000/api`
- **Physical Device**: Use your computer's IP address, e.g., `http://192.168.1.100:3000/api`

To find your computer's IP address:
- **Windows**: Run `ipconfig` in PowerShell
- **Mac/Linux**: Run `ifconfig` or `ip addr`

### 3. Update API Base URL

Edit `services/api-client.ts` and change:

```typescript
export const API_BASE_URL = 'http://YOUR_COMPUTER_IP:3000/api';
```

## API Services Available

The app includes the following service modules in the `services/` folder:

1. **productService** - Products (batteries, lubricants, tires, accessories)
2. **serviceService** - Services and packages
3. **branchService** - Branch locations
4. **notificationService** - Notifications
5. **bookingService** - Booking management
6. **promotionService** - Promotions and offers
7. **userService** - User profile and vehicles

## Using API Services in Components

### Example: Fetching Batteries

```typescript
import { useState, useEffect } from 'react';
import { productService } from '@/services';

export default function BatteriesScreen() {
  const [batteries, setBatteries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBatteries();
  }, []);

  const fetchBatteries = async () => {
    try {
      setLoading(true);
      const response = await productService.getBatteries();
      setBatteries(response.products);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching batteries:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <FlatList
      data={batteries}
      renderItem={({ item }) => <ProductCard product={item} />}
      keyExtractor={item => item.id}
    />
  );
}
```

### Example: Fetching Services

```typescript
import { serviceService } from '@/services';

const fetchServices = async () => {
  try {
    const response = await serviceService.getAllServices();
    console.log('Services:', response.services);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

### Example: Creating a Booking

```typescript
import { bookingService } from '@/services';

const createBooking = async () => {
  try {
    const bookingData = {
      userId: 'user-001',
      serviceId: 'srv-001',
      packageId: 'pkg-002',
      serviceName: 'Car Wash - Door to Door',
      packageName: 'Premium Wash',
      price: 15.000,
      scheduledDate: '2025-11-05',
      scheduledTime: '10:00 AM',
      location: {
        address: 'Building 15, Block 3, Salmiya'
      },
      vehicleInfo: {
        make: 'Toyota',
        model: 'Camry',
        year: 2021,
        plateNumber: '12345'
      }
    };

    const response = await bookingService.createBooking(bookingData);
    console.log('Booking created:', response.booking);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## Error Handling

All API calls should be wrapped in try-catch blocks to handle errors properly:

```typescript
try {
  const response = await productService.getBatteries();
  // Handle success
} catch (error) {
  // Handle error
  if (error.message) {
    console.error('Error message:', error.message);
  }
}
```

## Testing the APIs

You can test the APIs using:

1. **Browser**: Navigate to `http://localhost:3000` to see all available endpoints
2. **Postman** or **Thunder Client**: Import and test individual endpoints
3. **curl**:
   ```bash
   curl http://localhost:3000/api/products/batteries
   ```

## Next Steps

1. Install dependencies in both backend and frontend
2. Start the backend server
3. Update API_BASE_URL for your testing environment
4. Integrate API calls in your screens (examples provided in next section)
