---
name: High-Density Operations System
colors:
  surface: '#13131b'
  surface-dim: '#13131b'
  surface-bright: '#393841'
  surface-container-lowest: '#0d0d15'
  surface-container-low: '#1b1b23'
  surface-container: '#1f1f27'
  surface-container-high: '#292932'
  surface-container-highest: '#34343d'
  on-surface: '#e4e1ed'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#e4e1ed'
  inverse-on-surface: '#303038'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#bdc7db'
  on-secondary: '#273140'
  secondary-container: '#404a5a'
  on-secondary-container: '#afb9cc'
  tertiary: '#ffb783'
  on-tertiary: '#4f2500'
  tertiary-container: '#d97721'
  on-tertiary-container: '#452000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#d9e3f7'
  secondary-fixed-dim: '#bdc7db'
  on-secondary-fixed: '#121c2a'
  on-secondary-fixed-variant: '#3d4757'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703700'
  background: '#13131b'
  on-background: '#e4e1ed'
  surface-variant: '#34343d'
typography:
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-xs:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.03em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  gutter: 12px
  margin: 16px
---

## Brand & Style
This design system is engineered for high-stakes, fast-paced kitchen and front-of-house operations. The personality is **Professional, Calm, and Urgent**. It prioritizes utility and speed of recognition over decorative flair. 

The aesthetic follows a **Corporate/Modern** direction with a focus on data density and high-contrast status signaling. The interface remains unobtrusive to minimize cognitive load, using a dark-mode foundation to reduce eye strain in dimly lit restaurant environments while making vibrant status indicators pop immediately.

## Colors
The palette is built on a "Graphite & Slate" foundation. 
- **Primary Accent**: Indigo (#6366F1) is used exclusively for primary actions and interactive states.
- **Surface Strategy**: Use `#121826` for the base background and `#1F2937` for elevated card surfaces or sidebars.
- **Semantic Status**: These colors are critical for operational flow. Always pair these colors with their designated icons to ensure accessibility for colorblind users. 
- **Text**: Use Off-White (#F9FAFB) for primary content and Slate-400 (#9CA3AF) for secondary metadata.

## Typography
We utilize **Inter** for its neutral, systematic qualities and exceptional legibility at small sizes. 
- **Density**: Leading is kept tight (approx 1.2x to 1.4x) to allow more information to be visible on one screen without scrolling.
- **Tracking**: Use slight negative letter-spacing on headlines and slight positive tracking on labels (XS) to maintain readability.
- **Hierarchy**: Use font weight (Medium/SemiBold) rather than massive size increases to differentiate information levels.

## Layout & Spacing
The layout relies on a **4px/8px incremental grid**. 
- **Grid Model**: A fluid 12-column system for desktop dashboards, transitioning to a single-column stacked view for handheld POS devices.
- **Density**: Padding inside cards should default to `12px` (3 units) to maximize the number of visible orders.
- **Touch Targets**: While the visual density is high, interactive elements (buttons) must maintain a minimum hit area of 40px height to accommodate fast-paced kitchen environment interactions.

## Elevation & Depth
In this operational environment, depth is used to separate the "Stage" from the "Action."
- **Tonal Layering**: Depth is primarily communicated through color shifts. Background is the lowest level, Surface is the secondary level.
- **Low-Contrast Outlines**: Every card or container must have a 1px border (#374151). 
- **Shadows**: Use a single, tight, high-opacity shadow (e.g., `0 2px 4px rgba(0,0,0,0.4)`) for active or "hovered" states to make them appear physically closer to the user.

## Shapes
The shape language is **Soft but Functional**. 
- **Base Radius**: 6px (`0.375rem`) for cards and inputs. This provides a professional look that is slightly more approachable than sharp corners while remaining space-efficient.
- **Buttons**: Match the 6px radius for a consistent, "blocked" feel.
- **Badges/Pills**: Use a fully rounded (999px) radius to distinguish status labels from interactive buttons.

## Components
- **Buttons**:
    - *Primary*: Solid #6366F1 with White text.
    - *Secondary*: Border #374151 with #F9FAFB text.
    - *Danger*: Solid #EF4444 for order cancellations.
- **Order Cards**: Must contain a header with a timestamp, a central list of items (High Contrast), and a footer with a status badge. Use a border-left accent (4px) with the semantic status color for instant recognition.
- **Status Badges**: Pill-shaped. Use a 10% opacity background of the status color with a 100% opacity text/icon of the same color.
- **Input Fields**: Background #121826, border #374151. On focus, the border shifts to #6366F1.
- **Lists**: Tight vertical spacing. Use "Zebra striping" on long item lists (Surface vs Background) to help the eye track rows during busy shifts.
- **Active Indicators**: Use a pulse animation on the "Delayed" icon to draw immediate attention.