

## Update Context Bar Color to #F8F9EB

**File:** `src/pages/BusinessPlan.tsx` (line ~166)

- Replace `bg-[#00AEEF]` with `bg-[#F8F9EB]`
- Since `#F8F9EB` is a very light warm white, update `text-white` to `text-[#333333]` for WCAG AA contrast compliance
- Update the input styling from `bg-white/20 border-white/30 text-white placeholder:text-white/60` to `bg-white border-[#ccc] text-[#333333] placeholder:text-[#999]` so fields remain visible on the light background
- Update the label opacity class `opacity-80` to `text-[#666666]` for readable secondary text

