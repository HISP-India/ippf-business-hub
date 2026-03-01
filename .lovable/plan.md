

## Highlight Section Headers in Total Income Table

The section headers ("Locally generated income", "International income (Non - IPPF)", "IPPF income") currently use a subtle `bg-secondary/30` which blends in with the rest of the table rows. They need to stand out visually.

### Change

**File:** `src/components/business-plan/TotalIncome.tsx` (lines 45-51)

Update the section header `<tr>` styling in the `IncomeTable` component from:
- `bg-secondary/30` with plain text

To:
- **Deep Teal (`#005F6A`) background** with **white text**, bold font, and slightly more padding — consistent with the IPPF brand palette used for section headers throughout the Business Plan module.

```tsx
<tr>
  <td
    colSpan={4}
    className="text-center font-semibold text-sm py-3.5 bg-[#005F6A] text-white border-b border-border"
  >
    {title}
  </td>
</tr>
```

This creates a clear visual separation between section groups while staying within the IPPF design system (Deep Teal for structural highlights).

