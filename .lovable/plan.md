

## Strengthen Text Field Borders Uniformly

The current border on all text fields uses `border-input` which resolves to a very light grey (`#E0E0E0` equivalent). The border width is the default 1px. To make borders more visible without changing the color away from the IPPF guideline border grey, we increase the border width to **1.5px** across all form controls.

### Changes

**1. Input (`src/components/ui/input.tsx`)**
- Replace `border border-input` with `border-[1.5px] border-[#ccc]` for a stronger, more visible border

**2. Textarea (`src/components/ui/textarea.tsx`)**
- Same change: `border border-input` → `border-[1.5px] border-[#ccc]`

**3. Select trigger (`src/components/ui/select.tsx`)**
- Same border update on `SelectTrigger`

This keeps the neutral institutional look while making field boundaries clearly visible across all Business Plan tabs.

