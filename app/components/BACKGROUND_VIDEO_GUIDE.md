# Cinematic Background Video Feature - Usage Guide

## 📦 Components Created

### 1. BackgroundVideo.jsx
Reusable component for individual background videos.

### 2. CinematicVideoSection.jsx
Container component that manages multiple background videos with layering.

### 3. ShowreelSection.jsx
Production-ready example implementation.

---

## 🚀 Quick Start

The ShowreelSection has been added to your page right after the HeroSection. It features:
- ✅ 2 background videos (left & right positions)
- ✅ Fully interactive CTA buttons
- ✅ Stats showcase
- ✅ Gradient overlays for readability
- ✅ Mobile-optimized

---

## 🎯 How to Use

### Basic Usage

```jsx
import CinematicVideoSection from './components/CinematicVideoSection';

const videos = [
  {
    src: '/vids/Background/background_1.mp4',
    position: 'left',
    opacity: 0.6
  }
];

<CinematicVideoSection videos={videos}>
  <h1>Your Content Here</h1>
</CinematicVideoSection>
```

### Advanced Configuration

```jsx
const videos = [
  {
    src: '/vids/Background/background_1.mp4',
    position: 'left',      // 'left' | 'center' | 'right' | custom%
    opacity: 0.6,          // 0-1
    rounded: 'rounded-3xl', // Tailwind class
    className: 'hidden md:block' // Custom classes
  },
  {
    src: '/vids/Background/background_2.mp4',
    position: 'right',
    opacity: 0.5
  }
];
```

---

## 📁 Available Videos

Located in `/public/vids/Background/`:
- background_1.mp4
- background_2.mp4
- background_3.mp4
- background_4.mp4
- background_5.mp4

---

## ⚙️ Component Props

### BackgroundVideo
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| videoSrc | string | required | Path to video file |
| position | string | 'center' | 'left', 'center', 'right', or custom |
| opacity | number | 0.7 | 0-1 opacity value |
| rounded | string | 'rounded-2xl' | Tailwind border-radius class |
| className | string | '' | Additional Tailwind classes |

### CinematicVideoSection
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| videos | array | [] | Array of video config objects |
| children | ReactNode | - | Foreground content (always interactive) |
| className | string | '' | Additional section classes |

---

## 🎨 Customization Examples

### 3-Video Layout
```jsx
const videos = [
  { src: '/vids/Background/background_1.mp4', position: 'left', opacity: 0.5 },
  { src: '/vids/Background/background_2.mp4', position: 'center', opacity: 0.6 },
  { src: '/vids/Background/background_3.mp4', position: 'right', opacity: 0.5 }
];
```

### Mobile-Only Video
```jsx
const videos = [
  { 
    src: '/vids/Background/background_4.mp4', 
    position: 'center',
    className: 'md:hidden' // Only show on mobile
  }
];
```

### Custom Positioning
```jsx
const videos = [
  { 
    src: '/vids/Background/background_5.mp4',
    position: 'left-[10%]', // Custom Tailwind position
    opacity: 0.8
  }
];
```

---

## 🔧 Features

✅ **HTML5 Native** - No external dependencies
✅ **Autoplay Handling** - Automatically handles browser restrictions
✅ **Mobile Optimized** - playsInline for iOS compatibility
✅ **Always Muted** - Ensures autoplay works everywhere
✅ **Infinite Loop** - Videos loop seamlessly
✅ **Proper Layering** - z-index management for interactive content
✅ **Aspect Ratio** - object-fit: cover maintains video proportions
✅ **Performance** - pointer-events: none on videos
✅ **Accessibility** - Respects prefers-reduced-motion

---

## 🎭 Styling Tips

### Adjust Gradient Overlay
Edit in `CinematicVideoSection.jsx`:
```jsx
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60">
```

### Change Video Opacity Dynamically
```jsx
const [opacity, setOpacity] = useState(0.6);

const videos = [
  { src: '/vids/Background/background_1.mp4', opacity: opacity }
];
```

### Add Blur Effect
```jsx
const videos = [
  { 
    src: '/vids/Background/background_1.mp4',
    className: 'blur-sm' // Add Tailwind blur
  }
];
```

---

## ⚡ Performance Notes

- Videos use `preload="auto"` for smooth playback
- `pointer-events: none` ensures no interaction blocking
- GPU-accelerated transforms for smooth animations
- Videos are background decorations, content always stays interactive

---

## 🐛 Troubleshooting

**Videos not autoplaying?**
- Ensure `muted` attribute is present
- Check browser console for autoplay policy errors
- Component includes fallback handling

**Videos blocking interaction?**
- Check z-index layering in CinematicVideoSection
- Verify `pointer-events: none` on video containers
- Ensure foreground content has higher z-index (z-10)

**Poor mobile performance?**
- Reduce number of videos on mobile using `className="hidden md:block"`
- Lower video resolution/bitrate
- Reduce opacity for lighter rendering
