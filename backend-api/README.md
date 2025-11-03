# DazzaleDale Backend API

Dummy REST API server for the DazzaleDale mobile application.

## Setup

1. Install dependencies:
```bash
cd backend-api
npm install
```

2. Start the server:
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

The server will run on `http://localhost:3000`

## API Endpoints

### Products

- `GET /api/products` - Get all products
  - Query params: `category`, `brand`, `search`, `minPrice`, `maxPrice`, `sort`
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/batteries` - Get all batteries
- `GET /api/products/batteries/brands` - Get battery brands
- `GET /api/products/batteries/:id` - Get battery by ID
- `GET /api/products/lubricants` - Get all lubricants
- `GET /api/products/lubricants/brands` - Get lubricant brands
- `GET /api/products/lubricants/:id` - Get lubricant by ID
- `GET /api/products/tires` - Get all tires
- `GET /api/products/tires/brands` - Get tire brands
- `GET /api/products/tires/:id` - Get tire by ID
- `GET /api/products/accessories` - Get all accessories
- `GET /api/products/accessories/brands` - Get accessory brands
- `GET /api/products/accessories/:id` - Get accessory by ID

### Services

- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get service by ID
- `GET /api/services/category/:category` - Get services by category
- `GET /api/services/:id/packages` - Get service packages

### Branches

- `GET /api/branches` - Get all branches
  - Query params: `city`, `service`
- `GET /api/branches/:id` - Get branch by ID
- `POST /api/branches/nearest` - Get nearest branch
  - Body: `{ latitude, longitude }`

### Notifications

- `GET /api/notifications` - Get all notifications
  - Query params: `type`, `read`, `priority`
- `GET /api/notifications/:id` - Get notification by ID
- `PUT /api/notifications/:id/read` - Mark notification as read
- `PUT /api/notifications/read-all` - Mark all notifications as read
- `DELETE /api/notifications/:id` - Delete notification

### Bookings

- `GET /api/bookings` - Get all bookings
  - Query params: `status`, `userId`
- `GET /api/bookings/:id` - Get booking by ID
- `POST /api/bookings` - Create new booking
- `PUT /api/bookings/:id/status` - Update booking status
- `PUT /api/bookings/:id/cancel` - Cancel booking
- `PUT /api/bookings/:id/review` - Add review to completed booking
- `DELETE /api/bookings/:id` - Delete booking

### Promotions

- `GET /api/promotions` - Get all promotions
  - Query params: `featured`, `active`
- `GET /api/promotions/:id` - Get promotion by ID

### User

- `GET /api/user/profile` - Get user profile
  - Query params: `userId`
- `PUT /api/user/profile` - Update user profile
- `GET /api/user/vehicles` - Get user vehicles
- `POST /api/user/vehicles` - Add vehicle
- `PUT /api/user/vehicles/:vehicleId` - Update vehicle
- `DELETE /api/user/vehicles/:vehicleId` - Delete vehicle

## Configuration

To change the port, set the `PORT` environment variable:
```bash
PORT=5000 npm start
```

## Updating Data

All dummy data is stored in the `/data` directory:
- `batteries.js` - Battery products and brands
- `lubricants.js` - Lubricant products and brands
- `tires.js` - Tire products and brands
- `accessories.js` - Accessory products and brands
- `services.js` - Service offerings and packages
- `branches.js` - Branch locations and details
- `notifications.js` - Notifications and promotions
- `bookings.js` - Booking records
- `users.js` - User profiles and vehicles

You can modify these files to update the dummy data returned by the API.
