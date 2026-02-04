# 🖥️ Terminal Dark Theme

A cyberpunk/hacker terminal-inspired theme with rich micro-interactions and animations.

## 🎨 Visual Design

### Color Scheme
- **Primary Green**: `#00ff41` (Matrix green)
- **Secondary Green**: `#00cc33`
- **Background**: Pure black `#000000`
- **Glow Effect**: `rgba(0, 255, 65, 0.5)`

### Effects
- **CRT Scanlines**: Continuously scrolling horizontal lines
- **Screen Flicker**: Subtle animation mimicking old CRT monitors
- **Text Glow**: All text has green glow shadow
- **Matrix Background**: Falling binary code (0s and 1s)
- **Grid Overlay**: Subtle cyberpunk-style grid pattern

## ⚡ Micro-Interactions

### On Hover
- Cards slide right with glowing accent marker
- Avatar rotates and scales with glitch effect
- Links get underline animation and glow
- Tags lift up with glow effect
- Skills shift right with border glow

### On Load
- **Boot Sequence**: 3-line terminal initialization (1.5s)
- **Staggered Cards**: Sequential fade-in (100ms delay each)
- **Typing Cursor**: Blinking underscore on title

### On Click
- **Ripple Effect**: Expanding circle on all interactive elements
- Visual feedback on all clicks

## 🎯 Terminal Elements

### Prompts & Markers
- `>` - Before cards and sections
- `#` - Author names
- `$` - Commands and skills
- `@` - Timestamps
- `//` - Section headers
- `< >` - Around tags
- `[ ]` - Around navigation

### Terminal Window Chrome
- MacOS-style control dots
- Status indicator (blinking green)
- Terminal prompt: `ghost@machine:~/$`
- "ONLINE" status display

## 📁 Files

### Modified
- `src/styles/global.css` - Complete terminal theme
- `src/layouts/Layout.astro` - Terminal chrome, boot sequence
- `src/pages/index.astro` - Enhanced empty state
- `src/content.config.ts` - Content collections config

### Created
- `public/matrix-bg.js` - Matrix rain animation
- `public/interactions.js` - Micro-interactions
- `TERMINAL_THEME.md` - This documentation

## 🚀 Features

1. **Boot Animation** - Terminal startup sequence on page load
2. **Matrix Rain** - Subtle falling binary code background
3. **CRT Effects** - Scanlines and flicker animations
4. **Glow Effects** - All text and interactive elements glow
5. **Hover Transforms** - Scale, rotate, translate on hover
6. **Click Ripples** - Visual feedback on all clicks
7. **Staggered Reveals** - Cards animate in sequence
8. **Typing Cursor** - Blinking cursor on page title
9. **Grid Pattern** - Cyberpunk-style background grid
10. **Terminal Markers** - Command-line prefixes throughout

## 🎮 Try It Out

Open http://localhost:4321/ and:
- Watch the boot sequence
- Hover over cards, avatars, and links
- Click on interactive elements for ripple effect
- Notice the matrix rain background
- See the CRT scanlines scrolling
- Observe staggered card animations

## 🎨 Design Philosophy

**Bold terminal aesthetic** with:
- Monospace typography throughout
- Matrix green color scheme
- No rounded corners (terminal aesthetic)
- Command-line inspired UI elements
- Retro-futuristic cyberpunk vibe
- High contrast for readability
- Smooth, polished animations

The design avoids generic AI aesthetics by committing fully to a distinctive terminal/hacker aesthetic that's memorable and functional.
