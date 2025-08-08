# portfolio
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
# Hrishikesh Portfolio

A modern, responsive portfolio website built with Next.js, featuring interactive animations and a sleek dark theme.

## 🚀 Features

- **Modern Design**: Clean, professional interface with gradient accents
- **Interactive Animations**: Smooth scroll animations and typewriter effects
- **Responsive Layout**: Optimized for all devices and screen sizes
- **3D Background**: Dynamic Vanta.js network animation
- **Smooth Navigation**: Seamless scrolling between sections
- **Contact Form**: Functional contact form for client inquiries
- **Portfolio Showcase**: Interactive project gallery with hover effects

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.5
- **Frontend**: React 19.1.0
- **Styling**: Custom CSS with modern animations
- **3D Graphics**: Vanta.js with Three.js
- **Icons**: Emoji-based icons for performance
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── hrishi_img.png      # Profile image
│   └── favicon.ico         # Site favicon
├── src/
│   ├── pages/
│   │   ├── _app.js         # Global app configuration
│   │   └── index.js        # Main page
│   ├── components/
│   │   ├── Navbar.js       # Navigation component
│   │   ├── HomeSection.js  # Hero section with typewriter
│   │   ├── AboutSection.js # About section with tech stack
│   │   ├── ServicesSection.js # Services offered
│   │   ├── PortfolioSection.js # Project showcase
│   │   ├── ContactSection.js # Contact form
│   │   └── Footer.js       # Footer with social links
│   ├── styles/
│   │   └── globals.css     # Global styles and animations
│   └── utils/
│       └── useVanta.js     # Vanta.js hook for 3D background
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your profile image**
   - Replace `public/hrishi_img.png` with your actual profile image
   - Recommended size: 400x400px

4. **Customize content**
   - Update personal information in components
   - Modify social media links in Footer.js
   - Add your actual projects in PortfolioSection.js
   - Update contact information in ContactSection.js

5. **Run development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information
Edit the following files to update your information:
- `src/components/AboutSection.js` - Personal details and tech stack
- `src/components/ContactSection.js` - Contact information
- `src/components/Footer.js` - Social media links
- `src/components/HomeSection.js` - Name and introduction

### Portfolio Projects
Update `src/components/PortfolioSection.js` with your actual projects:
```javascript
const portfolioItems = [
  {
    title: 'Your Project Name',
    description: 'Project description',
    url: 'https://your-project-url.com',
    preview: 'https://your-project-url.com'
  }
];
```

### Styling
Modify `src/styles/globals.css` to customize:
- Color scheme and gradients
- Animations and transitions
- Layout and spacing
- Typography

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Manual Deployment
```bash
npm run build
npm start
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Features in Detail

### Animations
- Scroll-triggered animations with Intersection Observer
- Typewriter effect for dynamic text
- Hover effects on cards and buttons
- Smooth scrolling navigation

### Performance
- Next.js automatic code splitting
- Optimized images with Next.js Image component
- CSS animations for better performance
- Lazy loading for better initial load times

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

Hrishikesh Atole - [Your Email] - [Your LinkedIn]

Project Link: [Your Portfolio URL]
