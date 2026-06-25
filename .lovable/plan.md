## Keep Login Title on One Line

The login page title currently breaks across two lines: `Business Planning<br />& Reporting Portal` at `text-[30px]`.

### Change
- File: `src/pages/LoginPage.tsx`
- Remove the `<br />` line break.
- Reduce the font size slightly so the heading fits on one line within the form container (e.g., from `text-[30px]` to `text-[26px]`).

### Verification
- Preview the login page to confirm the title displays as a single line.