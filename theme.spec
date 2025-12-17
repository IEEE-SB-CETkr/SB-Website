# Design & Theme Specification: Frost Interface (Light)
**Project:** IEEE SB CET Website
**Theme Name:** "Lumina"
**Version:** 3.0.0

## 1. Design Philosophy
A complete pivot to **Light Mode**. reliable, clean, and airy.
*   **Aesthetic:** "Clean Paper & Glass". High brightness, soft shadows, and crisp typography.
*   **Glassmorphism:** Used for stratification. Translucent white layers over subtle, high-key gradients.
*   **Vibe:** Professional, Academic, Welcoming.

### Key Pillars
*   **Airiness:** Extensive use of whitespace and `#FFFFFF`.
*   **Soft depth:** Shadows are diffused and colored (e.g., subtle blue-tinted shadows), not harsh black.
*   **Crispness:** High contrast text (Zinc 900) against white.

---

## 2. Color System

### 2.1. Backgrounds
*   **`bg-paper`**: `#FFFFFF` (Pure White) - The main canvas.
*   **`bg-surface`**: `#F4F4F5` (Zinc 100) - Secondary sections.
*   **`bg-glass`**: `rgba(255, 255, 255, 0.7)`
*   **`bg-glass-strong`**: `rgba(255, 255, 255, 0.9)`

### 2.2. Borders & Outlines
*   **`border-subtle`**: `#E4E4E7` (Zinc 200) - Standard divider.
*   **`border-glass`**: `rgba(255, 255, 255, 0.5)` (For glass highlights).

### 2.3. Accents
*   **`primary`**: `#2563EB` (Royal Blue) -> Gradient: `linear-gradient(to right, #2563EB, #3B82F6)`
*   **`secondary`**: `#8B5CF6` (Violet) - Sparse usage for gradients.
*   **`text-heading`**: `#09090B` (Zinc 950 - Sharp Black)
*   **`text-body`**: `#52525B` (Zinc 600 - Readable Gray)

---

## 3. Component Architecture

### 3.1. The "Frost" Card
*   **Background**: `bg-white/70` (High opacity white).
*   **Backdrop**: `backdrop-blur-xl`.
*   **Border**: `border border-zinc-200/50`.
*   **Shadow**: `shadow-xl` (Soft, diffused: `0 20px 25px -5px rgba(0, 0, 0, 0.05)`).
*   **Hover**: Elevate `translate-y-[-2px]`, `shadow-2xl`.

### 3.2. Buttons
#### Primary
*   **Fill**: `bg-zinc-900` (Black) or `bg-blue-600`.
    *   *Decision*: Use **Black (`bg-zinc-900`)** for primary actions to contrast the white theme (Linear/Vercel style).
*   **Text**: White.
*   **Radius**: `rounded-full`.

#### Secondary
*   **Fill**: `bg-white`.
*   **Border**: `border border-zinc-200`.
*   **Shadow**: `shadow-sm`.
*   **Text**: `text-zinc-700`.

### 3.3. Navigation
*   **Style**: Sticky Glass Bar.
*   **Background**: `bg-white/80` + `backdrop-blur-md`.
*   **Border**: `border-b border-zinc-100`.
*   **Links**: `text-zinc-500` -> Hover `text-black`.

---

## 4. Effects (The Look)
*   **"Aurora" Blurs**:
    *   Use very faint, pastel gradients (Blue/Cyan/Purple) *behind* the glass content.
    *   Opacity: 30-50%.
    *   Blur: `blur-3xl`.
    *   Purpose: breaks the monotony of pure white without overwhelming the content.

## 5. Implementation (Tailwind)

### Utility Mapping
*   `.card-frost`: `bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg ring-1 ring-black/5`
*   `.text-gradient`: `bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600`
