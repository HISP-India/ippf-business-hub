

# Dashboard Enhancement: Welcome Banner, Deadlines, Status & Notice Board

## Overview

Add four new informational sections to the Dashboard page below the navigation cards, inspired by the uploaded reference screenshots. All elements will follow the IPPF brand design system (Fire Red, Barlow typography, institutional layout).

## New Elements

### 1. Welcome Banner
A clean welcome message card at the top of the content area (before the MA/CP selector), introducing the portal purpose.

- White card with subtle border
- Text: "Welcome to the IPPF Business Planning and Reporting Portal. The portal is your one-stop-shop for uploading your annual business plans, submitting annual and half-year reports, or for downloading reports and relevant documents."
- Styled with Barlow 15px regular body text, #333333

### 2. Deadlines Card
A structured card displaying key reporting deadlines.

- Card title "Deadlines" in Fire Red (#EE3124), Barlow SemiBold
- List of deadline items with bold labels and date values:
  - Annual Report: June 10
  - HYR: October 1
  - BP: October 1
  - TRT Review: November 1
  - AR/HYR Review: June 20
- Clean vertical list layout with subtle separators

### 3. Now Active / Status Card
A status summary card showing current reporting activity.

- Left border accent in Fire Red (4px)
- Title "Now Active" in Fire Red bold
- Status lines: "Annual reporting", "50% of MAs Commenced reporting", "05% finalized reporting"
- Clean institutional style with progress context

### 4. Notice Board Card
An announcements/notice card with FAQ link.

- Card title "Notice Board" in Fire Red
- Sample notice text about system updates
- "FAQs" link styled in Fire Red as a clickable hyperlink

## Layout

The new sections will be arranged below the navigation cards in a responsive grid:

- Welcome banner: full width, placed above the MA/CP selector
- Bottom row: 3-column grid on desktop (Deadlines | Now Active | Notice Board), stacking on mobile

## Technical Changes

### File: `src/pages/Dashboard.tsx`

1. Import `Calendar`, `Bell`, `HelpCircle`, `Activity` icons from lucide-react
2. Add Welcome Banner section before the "Select MA/CP" heading
3. Add a new 3-column grid section after the navigation cards containing:
   - Deadlines card
   - Now Active status card  
   - Notice Board card
4. All cards use existing `Card` / `CardContent` components
5. Typography follows Barlow hierarchy from the design system
6. Fire Red (#EE3124) used for card titles and accent borders via `text-primary` and `border-primary` classes

No new files or dependencies needed -- all built with existing UI components.
