# UK Student Guide - Essential Services Finder

A comprehensive web application designed to help international students navigate essential services in the UK. This platform provides easy access to information about pharmacies, grocery stores, hospitals, and study-friendly cafes.

## 🌟 Features

### Location-Based Services
- **Pharmacy Finder**: Locate nearby pharmacies with opening hours and contact details
- **Grocery Store Locator**: Find supermarkets and local stores with student discounts
- **Hospital Directory**: Access information about NHS hospitals and medical facilities
- **Study Spots**: Discover cafes and quiet places perfect for studying

### User Experience
- 🔍 Smart search functionality with city-based filtering
- 📱 Responsive design for all devices
- 🌓 Dark mode support
- ⚡ Performance-optimized with caching and pagination
- 🗺️ Direct links to Google Maps for easy navigation

### Student-Focused Features
- Student discount indicators
- NHS registration guidance
- Public transport information
- Banking and mobile network setup guides

## 🚀 Development Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Access to the private repository

### Installation

1. Clone the repository (requires authorization)
```bash
git clone [private-repository-url]
cd uk-student-guide
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Built With

- **React** - Frontend framework
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Styling and responsive design
- **Lucide Icons** - Modern icon set
- **Axios** - API requests
- **React Router** - Navigation and routing

## 🔍 API Integration

The application uses the Overpass API for location data:

```typescript
// Basic query structure
https://overpass-api.de/api/interpreter?data=[query]

// Example queries:
- Pharmacies: node[amenity=pharmacy]
- Grocery Stores: node[shop=supermarket]
- Hospitals: node[amenity=hospital]
- Cafes: node[amenity=cafe]
```

### API Optimization Features
- City-level result caching
- Request debouncing
- Pagination for large datasets
- Error handling and timeouts
- Loading states

## 🎨 Styling

The project uses Tailwind CSS with a custom configuration:
- Responsive design breakpoints
- Dark mode support
- Custom color scheme
- Consistent spacing and typography

## 🔐 Performance Considerations

1. **API Optimization**
   - Results caching
   - Debounced searches
   - Paginated results
   - Request timeouts

2. **UI Performance**
   - Lazy loading of components
   - Optimized re-renders
   - Efficient state management

## 📱 Responsive Design

The application is fully responsive across:
- Mobile devices
- Tablets
- Desktop computers
- Large screens

## 📞 Support & Contact

For technical support or inquiries, please contact:
- Burhan: [burhan.sq4906@gmail.com]
- Haris: [harisejaz2206@gmail.com]

---

© 2024 UK Student Guide. All rights reserved.

