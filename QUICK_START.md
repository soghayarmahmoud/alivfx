# Quick Start Guide

## 🚀 Getting Started

### 1. Install Dependencies (if not already done)
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

The website will be available at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
npm start
```

## 📝 Customization Guide

### Edit Testimonials (Client Reviews)
**File:** `app/components/TestimonialsSection.jsx`

Find the `testimonialsData` array and edit:
```javascript
{
  id: 1,
  name: "Your Client Name",
  role: "Their Role/Title",
  image: "/images/client1.jpg", // Optional
  rating: 5,
  review: "Your client's review text here...",
}
```

### Edit Services
**File:** `app/components/services.jsx`

Find the `servicesData` array and edit:
```javascript
{
  icon: <YourIcon size={50} className="mx-auto text-cyan-400" />,
  title: 'Service Title',
  description: 'Service description...',
}
```

### Edit Projects
**File:** `app/components/ProjectSection.jsx`

Find the `projectData` array and edit:
```javascript
{
  id: 1,
  title: "Project Title",
  description: "Project description",
  image: "/images/project1.PNG",
  insta: "https://instagram.com/your-post-url",
}
```

### Edit About Section
**File:** `app/components/about.jsx`

Find the `TAB_DATA` array to edit Skills, Education, and Styles tabs.

### Edit Achievements/Stats
**File:** `app/components/AchievementsSection.jsx`

Find the `achievementsList` array:
```javascript
{ metric: "Projects", value: "100", postfix: "+" }
```

### Edit Contact Links
**Files to update:**
- `app/components/header.jsx` - Navigation links
- `app/components/ContactSection.jsx` - Social media links
- `app/components/footer.jsx` - Footer links
- `app/components/CTASection.jsx` - CTA buttons

### Change Colors
**File:** `app/globals.css`

The main color scheme uses:
- Blue: `#3b82f6`
- Cyan: `#06b6d4`

Search and replace these hex codes to change the color scheme.

## 📁 Project Structure

```
app/
├── components/
│   ├── header.jsx              # Navigation bar
│   ├── heroSection.jsx         # Hero/Landing section
│   ├── services.jsx            # Services slider
│   ├── about.jsx               # About section with tabs
│   ├── AchievementsSection.jsx # Stats/Numbers section
│   ├── ProjectSection.jsx      # Projects grid
│   ├── ProjectCard.jsx         # Individual project card
│   ├── TestimonialsSection.jsx # Client reviews ⭐ NEW
│   ├── CTASection.jsx          # Call-to-action ⭐ NEW
│   ├── ContactSection.jsx      # Contact/Social links
│   ├── footer.jsx              # Footer
│   └── TabButton.jsx           # Tab button component
├── globals.css                 # Global styles
├── layout.js                   # Root layout
└── page.js                     # Main page

public/
└── images/                     # Add your images here
    ├── l.jpg                   # Hero profile image
    ├── about.jpg               # About section image
    ├── pro1.PNG - pro5.PNG     # Project thumbnails
    └── client1.jpg - client6.jpg # Optional client photos
```

## 🎨 Features Included

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth animations with Framer Motion
- ✅ Swiper carousels for services and testimonials
- ✅ CountUp animations for stats
- ✅ Type animation in hero section
- ✅ Instagram embed for projects
- ✅ Modern gradient design
- ✅ Glass morphism effects
- ✅ Custom scrollbar
- ✅ SEO optimized

## 🔧 Technologies Used

- **Framework:** Next.js 15.5.4
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Carousels:** Swiper
- **Icons:** React Icons
- **Other:** React CountUp, React Type Animation

## 📱 Sections Overview

1. **Header** - Fixed navigation with mobile menu
2. **Hero** - Animated introduction with profile image
3. **Services** - Swiper carousel of services offered
4. **About** - Bio with tabbed content (Skills, Education, Styles)
5. **Achievements** - Animated statistics counter
6. **Projects** - Grid of portfolio projects with Instagram embeds
7. **Testimonials** ⭐ NEW - Client reviews carousel
8. **CTA** ⭐ NEW - Call-to-action section
9. **Contact** - Social media links
10. **Footer** - Copyright and credits

## 🎯 Next Steps

1. ✅ Add your images to `/public/images/`
2. ✅ Edit testimonials with real client reviews
3. ✅ Update project data with your actual projects
4. ✅ Customize text content
5. ✅ Update social media links
6. ✅ Test on different devices
7. ✅ Deploy to Vercel/Netlify

## 🐛 Troubleshooting

### Images not showing?
- Make sure images are in `/public/images/` directory
- Check file names match exactly (case-sensitive)
- Verify image formats (JPG, PNG, WebP supported)

### Animations not working?
- Clear browser cache
- Check console for errors
- Ensure all dependencies are installed

### Mobile menu not working?
- Check if JavaScript is enabled
- Clear browser cache
- Try different browser

## 📞 Support

For questions or issues, refer to:
- `UI_IMPROVEMENTS.md` - Detailed list of all improvements
- `IMAGES_NEEDED.md` - Image requirements
- Next.js documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs

## 🎉 Enjoy Your New Portfolio!

Your portfolio now has a modern, professional design that will impress clients and showcase your work beautifully!
