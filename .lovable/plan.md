

## Replace Purple with Deep Teal in Business Plan Module

The purple color (`#5B4A9E`) is used in two places and needs to be replaced with **Deep Teal (`#005F6A`)** from the IPPF brand palette. Deep Teal is designated for "section headers and structural highlights" and complements the Fire Red header bar well — both are dark, institutional tones that create a cohesive visual hierarchy.

### Changes

**1. Business Plan context bar** (`src/pages/BusinessPlan.tsx`, line 166)
- Replace `bg-[#5B4A9E]` with `bg-[#005F6A]` (Deep Teal)

**2. Dashboard navigation card for "Standard Report Generation"** (`src/pages/Dashboard.tsx`, lines 112-113)
- Replace `bg-[hsl(258,90%,66%)]` with a Deep Teal variant, e.g. `bg-[#007A8A]` (slightly lighter teal for differentiation from the existing teal card)
- Update hover to `hover:bg-[#006575]`

This keeps all three dashboard cards visually distinct (Deep Blue, Deep Teal, Medium Teal) while staying within the IPPF palette and eliminating purple entirely.

