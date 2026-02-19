

## Post-Login Landing Page (Updated Flow)

### User Flow

1. User logs in and lands on the Dashboard
2. User first selects an MA/CP using Region and Member Association dropdowns
3. After selecting, the three navigation cards become active/clickable
4. Clicking a card navigates to the relevant screen/dashboard for that module

### Layout Structure

```text
+----------------------------------------------------------+
| HEADER (64px, Fire Red #EE3124)                          |
| [IPPF Logo]                        [Maint] [EN] [LOGOUT]|
+----------------------------------------------------------+
|                                                          |
|   "Select MA / CP"                                       |
|   +--------------------------------------------------+   |
|   | Region: [dropdown]  | Member Assoc: [dropdown]   |   |
|   |                                      [Submit]    |   |
|   +--------------------------------------------------+   |
|                                                          |
|   Three Navigation Cards (row, equal width)              |
|   +----------------+ +----------------+ +-------------+  |
|   | Annual         | | Annual/Semi-   | | Standard    |  |
|   | Business Plan  | | Annual Report  | | Report Gen  |  |
|   |                | | Submission &   | | from BP     |  |
|   |  [icon]        | | Approval [icon]| | Portal[icon]|  |
|   +----------------+ +----------------+ +-------------+  |
|   (disabled/greyed out until MA/CP is selected)          |
+----------------------------------------------------------+
```

### Behavior Details

- **Before MA/CP selection**: The three cards appear visually muted/disabled with reduced opacity and are not clickable
- **After selecting Region + Member Association and clicking Submit**: Cards become active with full color and hover effects; a toast confirms the selection
- **Clicking a card**: Navigates to a placeholder page for that module (e.g., `/business-plan`, `/report-submission`, `/report-generation`) -- each shows a simple "Coming Soon" page with the selected MA/CP context displayed

### Components

**Header Bar** (Fire Red background)
- IPPF white logo left
- Right: "Maintenance" outlined button, Language selector, "LOG OUT" button

**MA/CP Selection Card** (white card on grey background)
- "Select MA / CP" heading
- Two dropdowns side by side: Region and Member Association
- Fire Red "Submit" button
- Member Association dropdown filters based on selected Region

**Three Navigation Cards** (displayed as a row below the selection)
- **Annual Business Plan** -- Deep Blue (#3B5998) background, white text, calendar/clipboard icon
- **Annual / Semi-Annual Report Submission and Approval** -- Deep Teal (#005F6A) background, white text, file-check icon
- **Standard Report Generation from the BP Portal** -- Purple (#8B5CF6) background, white text, bar-chart icon
- Each card is a simple clickable block (no dropdown, no chevron) with hover scale effect
- Cards are disabled (opacity 50%, pointer-events none) until MA/CP is submitted

### Technical Details

- **Files modified**: `src/pages/Dashboard.tsx` (full rewrite)
- **New placeholder pages**: `src/pages/BusinessPlan.tsx`, `src/pages/ReportSubmission.tsx`, `src/pages/ReportGeneration.tsx` -- each shows "Coming Soon" with selected MA/CP in header
- **New routes** in `src/App.tsx`: `/business-plan`, `/report-submission`, `/report-generation`
- **State management**: Selected MA/CP stored in Dashboard state; passed to target pages via URL query params or route state
- **Sample data**: Hardcoded regions (AR, AF, ESEAOR, EN, SAR, AWR) and sample Member Association names per region
- **Responsive**: Cards stack vertically on mobile
- **shadcn components used**: Select, Button, Card

