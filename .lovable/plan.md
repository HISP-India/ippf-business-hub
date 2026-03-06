

## Make "Annual Business Plan" Tab Fixed (Non-Collapsible)

Currently the "Annual Business Plan" section header in the sidebar uses a collapsible pattern with a down arrow. The user wants it to be a fixed, always-visible header without the collapse toggle.

### Change

**File:** `src/pages/BusinessPlan.tsx`

Find the sidebar section where "Annual Business Plan" is rendered as a collapsible/accordion trigger and convert it to a static heading — remove the `ChevronDown` icon and any collapsible wrapper, keeping the menu items always visible beneath it.

Let me inspect the file to confirm the exact implementation.

