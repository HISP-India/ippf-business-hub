

# Align Accordion Design Across Sections 2.2, 2.3, and 2.4 to Match 1.1

## Problem
Sections 2.2, 2.3, and 2.4 use a flat `Collapsible` style with teal-tinted backgrounds and no numbered badges, while section 1.1 uses a more polished `SectionAccordion` pattern with numbered circle badges, bordered containers, and a light blue active state. This creates visual inconsistency.

## Solution
Replace the `Collapsible`-based accordion in all three sections with the same `SectionAccordion` pattern used in 1.1.

### Design Pattern (from 1.1)
- Each accordion item wrapped in a `border border-border rounded-md` container
- Trigger has a **numbered circle badge** (Deep Teal `#005F6A` background with white text when open, plain teal text when closed)
- Active trigger background: `#00AEEF/20` (light Sky Blue)
- Inactive trigger: white background with hover effect
- Content area: white background with `p-5` padding
- Items stacked with `space-y-3` gap

### Extract Shared Component
Create a reusable `SectionAccordion` component in `src/components/business-plan/SectionAccordion.tsx` so all sections share the exact same accordion UI, avoiding code duplication.

## Technical Changes

### New File: `src/components/business-plan/SectionAccordion.tsx`
- Extract the `SectionAccordion` component currently defined inside `OrganizationDetails.tsx`
- Export it for use across all business plan sections

### File: `src/components/business-plan/OrganizationDetails.tsx`
- Import `SectionAccordion` from the new shared file
- Remove the local `SectionAccordion` definition

### File: `src/components/business-plan/ProjectExpenseBudget.tsx`
- Remove `Collapsible` imports
- Import `SectionAccordion` from the shared file
- Replace each `Collapsible`/`CollapsibleTrigger`/`CollapsibleContent` with `SectionAccordion`
- Accordion items get numbered badges (1-11) matching the project item index

### File: `src/components/business-plan/ExpenseBudgetByFocusArea.tsx`
- Same replacement: swap `Collapsible` for `SectionAccordion`
- Each project item gets its numbered badge

### File: `src/components/business-plan/BudgetByExpenseCategory.tsx`
- Same replacement: swap `Collapsible` for `SectionAccordion`
- Each project item gets its numbered badge

## Visual Result
All accordion sections across 1.1, 2.2, 2.3, and 2.4 will have:
- Consistent bordered containers
- Numbered circle badges with Deep Teal colouring
- Light Sky Blue active state background
- White content areas
- Uniform spacing and typography
