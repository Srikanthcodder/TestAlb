# Quick Start Commands

## Backend Setup (First Time)
```powershell
# Navigate to backend directory
cd backend-api

# Install dependencies
npm install

# Start server
npm start
```

Server will run at: `http://localhost:3000`

---

## Frontend Setup (First Time)
```powershell
# From project root directory
npm install
```

**Configure API URL** in `services/api-client.ts`:
- Android Emulator: `http://10.0.2.2:3000/api`
- Physical Device: `http://YOUR_IP_ADDRESS:3000/api`

---

## Daily Development Commands

### Start Backend (Terminal 1)
```powershell
cd backend-api
npm start
```

### Start Mobile App (Terminal 2)
```powershell
# From root directory
npm start
```
Then press 'a' for Android or 'i' for iOS

---

## Test APIs Quickly

### In Browser
```
http://localhost:3000
```

### Using PowerShell
```powershell
# Get all batteries
curl http://localhost:3000/api/products/batteries

# Get all services
curl http://localhost:3000/api/services

# Get all branches
curl http://localhost:3000/api/branches
```

---

## Common API Usage in Screens

### Import services
```typescript
import { productService, serviceService, branchService } from '@/services';
```

### Fetch batteries
```typescript
const response = await productService.getBatteries();
const batteries = response.products;
```

### Fetch services
```typescript
const response = await serviceService.getAllServices();
const services = response.services;
```

### Fetch branches
```typescript
const response = await branchService.getAllBranches();
const branches = response.branches;
```

### Fetch notifications
```typescript
const response = await notificationService.getAllNotifications();
const notifications = response.notifications;
```

---

## File Locations

- **Backend Code**: `backend-api/`
- **API Services**: `services/`
- **Dummy Data**: `backend-api/data/`
- **API Routes**: `backend-api/routes/`
- **Screens**: `app/(tabs)/`
- **Documentation**: 
  - `SETUP_SUMMARY.md`
  - `API_INTEGRATION_GUIDE.md`
  - `EXAMPLE_API_INTEGRATION.tsx`

---

## Quick Tips

✅ Always start backend server before testing app
✅ Use correct IP address for physical device testing
✅ Check backend console for API request logs
✅ Add error handling (try-catch) for all API calls
✅ Show loading state while fetching data
✅ Test APIs in browser first before integrating

---

## Change Dummy Data

Edit files in `backend-api/data/`:
- `batteries.js`
- `lubricants.js`
- `tires.js`
- `services.js`
- `branches.js`
- `notifications.js`
- `bookings.js`

Restart backend server after changes.
