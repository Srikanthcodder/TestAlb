# Project Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    REACT NATIVE APP                         │
│                    (Mobile Frontend)                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  SCREENS (app/(tabs)/)                               │  │
│  │  - batteries-listing.tsx                             │  │
│  │  - lubricants-listing.tsx                            │  │
│  │  - our-services.tsx                                  │  │
│  │  - our-branches.tsx                                  │  │
│  │  - notifications.tsx                                 │  │
│  │  - my-booking.tsx                                    │  │
│  │  - cart.tsx                                          │  │
│  └──────────────────┬───────────────────────────────────┘  │
│                     │                                       │
│                     │ Uses                                  │
│                     ▼                                       │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  API SERVICES (services/)                            │  │
│  │  - productService                                    │  │
│  │  - serviceService                                    │  │
│  │  - branchService                                     │  │
│  │  - notificationService                               │  │
│  │  - bookingService                                    │  │
│  │  - promotionService                                  │  │
│  │  - userService                                       │  │
│  └──────────────────┬───────────────────────────────────┘  │
│                     │                                       │
│                     │ HTTP Requests (Axios)                 │
│                     │                                       │
└─────────────────────┼───────────────────────────────────────┘
                      │
                      │ API_BASE_URL
                      │ (http://localhost:3000/api)
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                  NODE.JS BACKEND API                        │
│                  (Express Server)                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  API ROUTES (backend-api/routes/)                    │  │
│  │  ┌─────────────────────────────────────────────┐     │  │
│  │  │  /api/products/*                            │     │  │
│  │  │  - GET /batteries                           │     │  │
│  │  │  - GET /lubricants                          │     │  │
│  │  │  - GET /tires                               │     │  │
│  │  │  - GET /accessories                         │     │  │
│  │  └─────────────────────────────────────────────┘     │  │
│  │  ┌─────────────────────────────────────────────┐     │  │
│  │  │  /api/services/*                            │     │  │
│  │  │  - GET /                                    │     │  │
│  │  │  - GET /:id/packages                        │     │  │
│  │  └─────────────────────────────────────────────┘     │  │
│  │  ┌─────────────────────────────────────────────┐     │  │
│  │  │  /api/branches/*                            │     │  │
│  │  │  - GET /                                    │     │  │
│  │  │  - POST /nearest                            │     │  │
│  │  └─────────────────────────────────────────────┘     │  │
│  │  ┌─────────────────────────────────────────────┐     │  │
│  │  │  /api/notifications/*                       │     │  │
│  │  │  - GET /                                    │     │  │
│  │  │  - PUT /:id/read                            │     │  │
│  │  └─────────────────────────────────────────────┘     │  │
│  │  ┌─────────────────────────────────────────────┐     │  │
│  │  │  /api/bookings/*                            │     │  │
│  │  │  - GET /                                    │     │  │
│  │  │  - POST /                                   │     │  │
│  │  │  - PUT /:id/cancel                          │     │  │
│  │  └─────────────────────────────────────────────┘     │  │
│  └──────────────────┬───────────────────────────────────┘  │
│                     │                                       │
│                     │ Reads from                            │
│                     ▼                                       │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  DUMMY DATA (backend-api/data/)                      │  │
│  │  - batteries.js     (10 battery products)            │  │
│  │  - lubricants.js    (10 lubricant products)          │  │
│  │  - tires.js         (8 tire products)                │  │
│  │  - accessories.js   (8 accessory products)           │  │
│  │  - services.js      (4 services with packages)       │  │
│  │  - branches.js      (5 branch locations)             │  │
│  │  - notifications.js (7 notifications)                │  │
│  │  - bookings.js      (3 sample bookings)              │  │
│  │  - users.js         (1 user profile)                 │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Data Flow Example: Loading Batteries

```
1. USER opens BatteriesListingScreen
   │
   ▼
2. Screen calls: productService.getBatteries()
   │
   ▼
3. productService makes HTTP request
   GET http://localhost:3000/api/products/batteries
   │
   ▼
4. Express server receives request
   Routes to: routes/products.js
   │
   ▼
5. Products route handler
   Reads data from: data/batteries.js
   │
   ▼
6. Server responds with JSON:
   {
     success: true,
     total: 10,
     products: [...]
   }
   │
   ▼
7. productService receives response
   Returns data to screen
   │
   ▼
8. Screen updates state and displays products
```

## Request/Response Flow

```
FRONTEND (React Native)          BACKEND (Express)
─────────────────────            ─────────────────

Screen Component
     │
     │ useState/useEffect
     │
     ▼
API Service                      
     │                           
     │ HTTP GET/POST              
     │─────────────────────────► Route Handler
     │                                │
     │                                │ Read
     │                                ▼
     │                           Dummy Data File
     │                                │
     │                                │ Return
     │                                ▼
     │◄───────────────────────── JSON Response
     │ {success: true, data: [...]}
     ▼
Screen Component
(Update State)
     │
     ▼
UI Updates
(Display Data)
```

## Key Concepts

### 1. Separation of Concerns
- **Screens**: UI and user interactions
- **Services**: API communication logic
- **Backend**: Data management and business logic

### 2. Easy to Switch APIs
When ready for production:
1. Update `API_BASE_URL` in `services/api-client.ts`
2. No changes needed in screen components
3. Service layer handles all API communication

### 3. Modular Design
- Each service handles one domain (products, bookings, etc.)
- Easy to add new endpoints
- Easy to modify dummy data

### 4. Type Safety
- TypeScript interfaces for all data models
- Compile-time error checking
- Better IDE autocomplete

## File Dependencies

```
batteries-listing.tsx
    ↓ imports
productService
    ↓ imports
api-client.ts
    ↓ makes request to
http://localhost:3000/api/products/batteries
    ↓ handled by
routes/products.js
    ↓ reads from
data/batteries.js
```
