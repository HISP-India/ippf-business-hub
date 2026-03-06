

## Remove Lovable Branding from Code

Two files contain Lovable references (excluding `node_modules` and lock files):

### 1. `README.md` — Rewrite entirely
Replace the default Lovable README with IPPF-branded content identifying HISP India as developer.

### 2. `vite.config.ts` — Remove lovable-tagger
Remove the `componentTagger` import and its usage from the plugins array. The `lovable-tagger` dev dependency can remain in `package.json` (it's harmless and lock-file only).

### 3. `.lovable/plan.md` — Clear contents
This is a Lovable-generated plan file. Clear it or leave minimal content.

