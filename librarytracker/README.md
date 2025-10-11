# Vintage Library - Personal Library Tracker

A beautifully designed vintage-themed digital library application that allows users to explore classic and modern literature from renowned authors. Built with modern web technologies and featuring an elegant, dark vintage aesthetic.

## Features

### **Vintage Design**
- Dark, elegant vintage theme with custom color palette
- Responsive design that works on all devices
- Beautiful animations and hover effects
- Custom typography using Google Fonts (Cinzel, Crimson Text, Playfair Display)

### **Author Collections**
- **Classical Authors**: Rabindranath Tagore, William Shakespeare, Jane Austen
- **Modern Writers**: Agatha Christie, Ruskin Bond, J.K. Rowling, Ana Huang, Ai Qie De Haizi, Gillian Flynn
- Individual author pages with curated book collections
- Author biographies and featured works

### **Library Features**
- Browse complete book collection
- Advanced search functionality
- Featured books section
- Book categorization by author and genre

### **User Management**
- User registration and authentication system
- Secure password handling
- MongoDB database integration
- User session management

### **Navigation**
- Intuitive sidebar navigation
- Home, Library, Search, and User sections
- Smooth page transitions
- Mobile-responsive navigation

## Technology Stack

### **Frontend**
- **HTML5** - Semantic markup
- **CSS3** - Custom styling with advanced features
- **JavaScript** - Interactive functionality
- **Tailwind CSS** - Utility-first CSS framework
- **Font Awesome** - Icon library
- **Google Fonts** - Custom typography

### **Backend**
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### **Development Tools**
- **Vite** - Build tool and development server
- **Nodemon** - Development server auto-restart
- **npm** - Package management

### **Security & Environment**
- **bcrypt** - Password hashing
- **dotenv** - Environment variable management
- **EJS** - Templating engine

## Project Structure

```
librarytracker/
├── src/
│   ├── authors/           # Individual author pages
│   │   ├── agathacristie.html
│   │   ├── anahuang.html
│   │   ├── cuttlefish.html
│   │   ├── gilianflyn.html
│   │   ├── janeausten.html
│   │   ├── jkrowling.html
│   │   ├── ruskinbond.html
│   │   ├── tagore.html
│   │   └── william.html
│   ├── backend/
│   │   ├── db/
│   │   │   └── db.js        # Database connection
│   │   └── model/
│   │       └── user.js      # User schema
│   ├── library/
│   │   ├── library.html     # Main library page
│   │   └── search.html      # Search functionality
│   ├── signin/
│   │   ├── signin.html      # User registration
│   │   └── login.html       # User login
│   ├── index.js            # Express server
│   ├── main.js             # Frontend JavaScript
│   └── style.css           # Custom styles
├── public/
│   └── assets/             # Static assets
├── index.html              # Main homepage
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── .gitignore             # Git ignore rules
```

## Getting Started

### **Prerequisites**
- Node.js (v14 or higher)
- MongoDB database
- npm or yarn package manager

### **Installation**

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd librarytracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   MONGO_URL=mongodb://localhost:27017/librarytracker
   PORT=5000
   ```

4. **Database Setup**
   - Ensure MongoDB is running on your system
   - The application will automatically connect to the database specified in your `.env` file

### **Running the Application**

#### **Development Mode**
```bash
# Start the backend server with auto-restart
npm run server

# In a separate terminal, start the frontend development server
npm run dev
```

#### **Production Mode**
```bash
# Build the application
npm run build

# Start the production server
npm start
```

### **Available Scripts**
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm start` - Start Express server
- `npm run server` - Start server with nodemon (development)

## Application Routes

### **Frontend Routes**
- `/` - Homepage with featured authors and books
- `/src/library/library.html` - Complete book collection
- `/src/library/search.html` - Search functionality
- `/src/signin/signin.html` - User registration
- `/src/authors/[author].html` - Individual author pages

### **Backend API Routes**
- `GET /` - Serve homepage
- `GET /signin` - Serve registration page
- `POST /submit` - Handle user registration

## Key Features Explained

### **User Registration System**
- Secure user registration with email validation
- Password encryption using bcrypt
- Duplicate email prevention
- JSON response handling for frontend integration

### **Database Schema**
```javascript
User Schema:
- username: String (required)
- email: String (required, lowercase)
- password: String (required, min 8 characters)
```

### **Responsive Design**
- Mobile-first approach
- Flexible grid layouts
- Adaptive navigation
- Touch-friendly interfaces

### **Author Collections**
Each author page features:
- Author biography and background
- Curated book collection
- Genre-specific styling
- Interactive book cards
- Related recommendations

## Design Philosophy

The application follows a **vintage library aesthetic** with:
- **Dark color scheme** - Evoking the atmosphere of an old library
- **Elegant typography** - Classic serif fonts for readability
- **Subtle animations** - Enhancing user experience without distraction
- **Consistent branding** - Unified visual language throughout

## Security Features

- **Password Hashing** - Using bcrypt for secure password storage
- **Environment Variables** - Sensitive data stored in .env files
- **Input Validation** - Server-side validation for user inputs
- **Error Handling** - Comprehensive error management

## Future Enhancements

- [ ] User authentication and login system
- [ ] Personal book tracking and favorites
- [ ] Book rating and review system
- [ ] Advanced search filters
- [ ] Reading progress tracking
- [ ] Social features and book recommendations
- [ ] Admin panel for content management
- [ ] Book availability status
- [ ] Export/import functionality

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Authors & Acknowledgments

- **Development Team** - Initial work and design
- **Font Providers** - Google Fonts for typography
- **Icon Library** - Font Awesome for icons
- **Framework Contributors** - Tailwind CSS and Express.js communities

## Support

For support, email[miku23100@gmail.com] or create an issue in the repository.

---

**Built with love for book lovers everywhere**
