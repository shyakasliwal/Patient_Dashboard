# Patient Records Dashboard

A professional, responsive React application for managing patient records with a clean and intuitive user interface. Built with modern web technologies and best practices.

## 🚀 Features

### ✅ Core Features
- **Landing Page**: Clean header with "Jarurat Care" branding and navigation
- **Patient Management**: View, search, and add patient records
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Search Functionality**: Real-time filtering of patients by name
- **Patient Details Modal**: Detailed view of individual patient information
- **Add New Patient**: Form to add new patients with validation
- **Loading States**: Proper loading indicators during data fetching
- **Error Handling**: User-friendly error messages

### 🎨 UI/UX Features
- Modern gradient design with clean typography
- Smooth animations and hover effects
- Card-based layout for patient information
- Responsive grid system
- Professional color scheme
- Accessible form controls

### 🔧 Technical Features
- **React Hooks**: useState and useEffect for state management
- **API Integration**: Fetches data from JSON Placeholder API
- **Form Validation**: Client-side validation for patient data
- **Responsive CSS**: Mobile-first design approach
- **Error Boundaries**: Graceful error handling

## 📸 Screenshots

### Desktop View
[![Desktop View](Screenshot 2024-07-20 090331.png)](Screenshot 2024-07-20 090331.png)


### Mobile View
![Mobile View](https://via.placeholder.com/400x600/3b82f6/ffffff?text=Mobile+Dashboard+View)

### Patient Details Modal
![Modal View](https://via.placeholder.com/600x400/3b82f6/ffffff?text=Patient+Details+Modal)

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/patient-records-dashboard.git
   cd patient-records-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🏗️ Project Structure

```
patient-records-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles and components
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: 1200px+ (3-column grid layout)
- **Tablet**: 768px - 1199px (2-column grid layout)
- **Mobile**: < 768px (1-column layout)

## 🎯 Key Components

### Header
- Brand logo/name
- Navigation menu (Home, Patients, About)

### Hero Section
- Welcome message
- Application description

### Patient Management
- Search bar for filtering patients
- Add new patient button
- Patient cards grid
- Patient details modal

### Patient Card
- Patient avatar (initials)
- Name and age
- Contact information
- View details button

### Add Patient Form
- Name (required)
- Age (0-120 validation)
- Contact (phone number validation)
- Email (email format validation)
- Address
- Notes

## 🔌 API Integration

The application uses [JSON Placeholder](https://jsonplaceholder.typicode.com/) as a mock API to fetch user data, which is then transformed into patient records with:
- Generated ages (20-80 years)
- Contact information
- Address details
- Notes

## 🚀 Deployment

### Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** to connect your GitHub repository

### Netlify Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Drag and drop** the `dist` folder to [Netlify](https://vercel.com)

3. **Or connect** your GitHub repository for automatic deployments

## 🎨 Customization

### Colors
The application uses CSS custom properties for easy theming:
```css
:root {
  --primary-color: #3b82f6;
  --primary-hover: #2563eb;
  --success-color: #10b981;
  --error-color: #ef4444;
  --warning-color: #f59e0b;
  /* ... more variables */
}
```

### Styling
- Modify `src/index.css` for global styles
- All components use utility classes for consistent styling
- Responsive breakpoints are defined in the CSS

## 🧪 Testing

The application has been thoroughly tested for:
- Form validation and user input handling
- Responsive design across all device sizes
- API error handling and edge cases
- Loading states and user feedback

## 📋 Planned Features

- [ ] Patient editing and deletion functionality
- [ ] Advanced search filters (age, contact, medical conditions)
- [ ] Data persistence with backend integration
- [ ] Export functionality (PDF/CSV reports)
- [ ] Dark mode theme toggle
- [ ] Patient photo uploads
- [ ] Appointment scheduling system
- [ ] Medical history tracking
- [ ] User authentication and role-based access

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


---

**Note**: This is a demo application using mock data. For production use, integrate with a proper backend API and implement proper authentication and data validation.
