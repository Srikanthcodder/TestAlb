# Complete API Integration Setup - Summary

## What Has Been Created

### 1. Backend API Server (`backend-api/` directory)
A complete Node.js Express server with dummy data for all your screens.

**Structure:**
```
backend-api/
├── server.js               # Main server file
├── package.json            # Backend dependencies
├── README.md              # Backend documentation
├── data/                  # Dummy data files
│   ├── batteries.js
│   ├── lubricants.js
│   ├── tires.js
│   ├── accessories.js
│   ├── services.js
│   ├── branches.js
│   ├── notifications.js
│   ├── bookings.js
│   └── users.js
└── routes/                # API endpoints
    ├── products.js
    ├── services.js
    ├── branches.js
    ├── notifications.js
    ├── bookings.js
    ├── promotions.js
    └── user.js
```

**API Endpoints Available:**
- `/api/products/batteries` - Battery products
- `/api/products/lubricants` - Lubricant products
- `/api/products/tires` - Tire products
- `/api/products/accessories` - Accessory products
- `/api/services` - Service offerings
- `/api/branches` - Branch locations
- `/api/notifications` - User notifications
- `/api/bookings` - Service bookings
- `/api/promotions` - Promotional offers
- `/api/user/profile` - User profile
- `/api/user/vehicles` - User vehicles

### 2. API Service Layer (`services/` directory)
TypeScript service modules to interact with the backend from your React Native app.

**Files Created:**
```
services/
├── api-client.ts          # Axios configuration
├── product-service.ts     # Product APIs
├── service-service.ts     # Service APIs
├── branch-service.ts      # Branch APIs
├── notification-service.ts # Notification APIs
├── booking-service.ts     # Booking APIs
├── promotion-service.ts   # Promotion APIs
├── user-service.ts        # User APIs
└── index.ts              # Central exports
```

### 3. Documentation
- `API_INTEGRATION_GUIDE.md` - Complete integration guide
- `EXAMPLE_API_INTEGRATION.tsx` - Example screen with API integration
- `backend-api/README.md` - Backend API documentation

## Setup Instructions

### Step 1: Install Backend Dependencies

```powershell
cd backend-api
npm install
```

### Step 2: Start Backend Server

```powershell
# From backend-api directory
npm start
```

The server will start on `http://localhost:3000`

You can test it by opening `http://localhost:3000` in your browser.

### Step 3: Install Frontend Dependencies

```powershell
# From root directory
npm install
```

This will install `axios` that was added to package.json.

### Step 4: Configure API URL

**For Android Emulator:**
Edit `services/api-client.ts` and change:
```typescript
export const API_BASE_URL = 'http://10.0.2.2:3000/api';
```

**For Physical Device:**
1. Find your computer's IP address:
   ```powershell
   ipconfig
   ```
   Look for "IPv4 Address" under your active network connection.

2. Update `services/api-client.ts`:
   ```typescript
   export const API_BASE_URL = 'http://YOUR_IP:3000/api';
   ```
   Example: `http://192.168.1.100:3000/api`

### Step 5: Start Your React Native App

```powershell
# From root directory
npm start
```

Then press 'a' for Android or 'i' for iOS.

## How to Integrate APIs in Your Screens

### Example 1: Fetch and Display Products

See `EXAMPLE_API_INTEGRATION.tsx` for a complete example.

**Basic pattern:**

```typescript
import { useState, useEffect } from 'react';
import { productService } from '@/services';

export default function YourScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await productService.getBatteries();
      setData(response.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Render loading, error, and data states
}
```

### Example 2: Fetch Services

```typescript
import { serviceService } from '@/services';

const fetchServices = async () => {
  const response = await serviceService.getAllServices();
  console.log(response.services);
};
```

### Example 3: Fetch Branches

```typescript
import { branchService } from '@/services';

const fetchBranches = async () => {
  const response = await branchService.getAllBranches();
  console.log(response.branches);
};
```

### Example 4: Fetch Notifications

```typescript
import { notificationService } from '@/services';

const fetchNotifications = async () => {
  const response = await notificationService.getAllNotifications();
  console.log(response.notifications);
};
```

### Example 5: Create a Booking

```typescript
import { bookingService } from '@/services';

const createBooking = async () => {
  const booking = await bookingService.createBooking({
    userId: 'user-001',
    serviceId: 'srv-001',
    packageId: 'pkg-002',
    serviceName: 'Car Wash',
    packageName: 'Premium Wash',
    price: 15.000,
    scheduledDate: '2025-11-05',
    scheduledTime: '10:00 AM',
    location: { address: 'Your location' },
    vehicleInfo: {
      make: 'Toyota',
      model: 'Camry',
      year: 2021,
      plateNumber: '12345'
    }
  });
};
```

## Screens That Need API Integration

Update these screens to use the API services:

1. **batteries-listing.tsx** - Use `productService.getBatteries()`
2. **lubricants-listing.tsx** - Use `productService.getLubricants()`
3. **tires.tsx** - Use `productService.getTires()`
4. **accessories.tsx** - Use `productService.getAccessories()`
5. **our-services.tsx** - Use `serviceService.getAllServices()`
6. **our-branches.tsx** - Use `branchService.getAllBranches()`
7. **notifications.tsx** - Use `notificationService.getAllNotifications()`
8. **my-booking.tsx** - Use `bookingService.getAllBookings()`
9. **index.tsx** (home) - Use `promotionService.getFeaturedPromotions()`

## Updating Dummy Data

To change the data returned by APIs, edit files in `backend-api/data/`:
- `batteries.js` - Battery products
- `lubricants.js` - Lubricant products
- `tires.js` - Tire products
- `services.js` - Service offerings
- `branches.js` - Branch locations
- etc.

After editing, restart the backend server.

## Testing APIs

### Option 1: Browser
Open `http://localhost:3000` to see available endpoints.

### Option 2: VS Code Thunder Client
Install Thunder Client extension and test endpoints directly.

### Option 3: curl
```powershell
curl http://localhost:3000/api/products/batteries
curl http://localhost:3000/api/services
curl http://localhost:3000/api/branches
```

## Troubleshooting

### Backend server won't start
- Make sure you ran `npm install` in `backend-api/` directory
- Check if port 3000 is already in use
- Change port: `PORT=5000 npm start`

### Can't connect from app
- **Android Emulator**: Use `http://10.0.2.2:3000/api`
- **Physical Device**: Make sure phone and computer are on same WiFi
- Check firewall settings
- Verify backend server is running

### TypeScript errors in services
- Run `npm install` to install axios
- Restart your development server

## Next Steps

1. ✅ Backend server created and ready
2. ✅ API services created
3. ✅ Documentation provided
4. ⏳ Install dependencies (npm install in both directories)
5. ⏳ Start backend server
6. ⏳ Update API_BASE_URL for your environment
7. ⏳ Integrate APIs into screens (use EXAMPLE_API_INTEGRATION.tsx as template)

When you're ready to switch to real APIs, just update the `API_BASE_URL` in `services/api-client.ts` to point to your production server!
