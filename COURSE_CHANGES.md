# Course changes and how to remove them

This portfolio temporarily includes work added for a university web course. This file
records exactly what was added and how to remove it later without losing professional
portfolio content.

This file lives in its own commit, separate from the course changes, so reverting
those changes does not delete these instructions. Delete this file yourself once
everything below is done.

Never remove course changes by rewriting history (no `git reset --hard`, rebase, or
force push on `main`). Use `git revert`, which adds new commits that undo old ones.

## Summary

| Change | Where it lives on `main` | Course-specific? |
| --- | --- | --- |
| Module 5 multimedia section ("Inside the build" on `/about`) | Squash commit `62822219fb5fd428c3d5b66d30ef483092840cfc` | Yes |
| About page and five-page navigation | Merge commit `2b4f119189c3920edba1a98bd11d8023ed5cd8c6` (PR #2, contains `bcd0f2e`) | Yes, but partly reusable (see below) |
| Project detail pages (`/projects/...`) | Commit `e82c59e` (Sep 8, 2026) | No. Professional content, keep it |

## 1. Module 5 multimedia components

- **Feature branch:** `course-website-assignment` (pushed to `origin`)
- **Baseline before this work:** `2b4f119189c3920edba1a98bd11d8023ed5cd8c6`
  (merge of PR #2, the production `main` when the branch was created)
- **Squash commit on `main`:** `62822219fb5fd428c3d5b66d30ef483092840cfc`
  `feat: add temporary course multimedia components`

Files added or modified:

| File | Change |
| --- | --- |
| `components/inside-the-build.tsx` | Added. The "Inside the build" section: carousel block, YouTube embed, audio player and transcript |
| `components/project-carousel.tsx` | Added. Client component for the auto-rotating, accessible screenshot carousel |
| `public/media/intro-narration.mp3` | Added. 37-second synthetic narration (Piper TTS, public-domain LJSpeech voice) |
| `app/about/page.tsx` | Modified. 3 lines: one import and `<InsideTheBuild />` between the project cards and "Looking ahead" |

The carousel reuses the existing screenshots in `public/projects/`. Those files predate
the course work and are not touched by removing it.

### Remove the multimedia section

```bash
git checkout main
git pull origin main
git revert --no-edit 62822219fb5fd428c3d5b66d30ef483092840cfc
npm run build          # confirm it still builds
git push origin main   # Vercel redeploys automatically
```

This was tested before the commit was pushed: the revert applies cleanly and leaves the
code identical to the baseline `2b4f119`.

Afterwards, optionally delete the feature branch. Deleting it does **not** remove
anything from `main`; only the revert above does that.

```bash
git branch -d course-website-assignment
git push origin --delete course-website-assignment
```

## 2. Earlier course changes: About page and five-page navigation

These were added for an earlier assignment that required an About page and navigation
between five pages (Home, About, QuotaForge, SignalWatch, RouteMesh).

- **Commit:** `bcd0f2e` "Add About page and connect it to site navigation"
- **Merged into `main` by:** `2b4f119189c3920edba1a98bd11d8023ed5cd8c6` (PR #2)
- **Baseline before it:** `e82c59e` "added projects overview page"

Files added or modified:

| File | Change |
| --- | --- |
| `app/about/page.tsx` | Added. The About page |
| `components/ui/detail-section.tsx` | Added. Shared layout moved out of the project page |
| `lib/data.ts` | Modified. Added `{ href: '/about', label: 'About' }` to `navLinks` |
| `app/projects/[slug]/page.tsx` | Modified. Uses the shared `DetailSection`; adds a "More projects" section linking to the other two projects |
| `components/hero.tsx` | Modified. Added one sentence under the homepage headline describing the site's purpose |
| `app/sitemap.ts` | Modified. Added `/about` |

### Decide what to keep

None of this content mentions the course. Some of it may be worth keeping on a
professional portfolio, so decide before removing it:

- **About page:** written from the resume. Many portfolios keep one.
- **"More projects" links on project pages:** ordinary cross-linking.
- **Hero sentence:** "This is where I share the projects I've built..."

### Option A: remove all of it

Do this **after** step 1, because the multimedia section lives on the About page.

```bash
git checkout main
git pull origin main
git revert --no-edit -m 1 2b4f119189c3920edba1a98bd11d8023ed5cd8c6
npm run build
git push origin main
```

`-m 1` tells Git to undo the merge relative to `main`'s side. This was also tested: after
step 1, this revert applies cleanly and leaves the code identical to `e82c59e`. The
project pages, home page, and everything else from before the course still build.

### Option B: remove only some of it

Revert without committing, put back the parts you want, then commit:

```bash
git checkout main
git pull origin main
git revert --no-commit -m 1 2b4f119189c3920edba1a98bd11d8023ed5cd8c6
# Keep a file as it is on main, for example the "More projects" links:
git restore --source=HEAD --staged --worktree "app/projects/[slug]/page.tsx" components/ui/detail-section.tsx
npm run build
git commit -m "Remove About page added for course"
git push origin main
```

To keep the About page but drop its nav link, restore the page, the shared layout it
uses, and the sitemap entry instead. The page stays reachable at `/about` but not from
the menu:

```bash
git restore --source=HEAD --staged --worktree app/about/page.tsx components/ui/detail-section.tsx app/sitemap.ts
```

Both of these partial variants were tested and type-check cleanly.

## If a revert conflicts

A conflict means you edited the same lines after these commits. Your later edits are
not lost. Git stops and shows both versions.

```bash
git status                 # lists conflicted files
# edit each file and keep what you want, then:
git add <file>
git revert --continue
```

To back out of a revert in progress without changing anything: `git revert --abort`.

## Production deployment workflow

- `main` is the production branch. The site deploys to tanaydesai.com through Vercel's
  GitHub integration: every push to `main` triggers a production build and deploy.
  Branches and pull requests get preview deployments.
- There are no GitHub Actions or `vercel.json`. The build is `npm run build`
  (`next build`).
- After pushing a revert, check the deployment in the Vercel dashboard, then confirm
  the change at https://tanaydesai.com/about.

## Verification checklist after removal

- [ ] `npm run build` passes locally
- [ ] Vercel production deployment for the revert commit succeeded
- [ ] The home page and all three project pages load
- [ ] After step 1: `/about` no longer shows "Inside the build"
- [ ] After step 2 (option A): `/about` returns 404 and "About" is gone from the nav
- [ ] Delete this file: `git rm COURSE_CHANGES.md && git commit -m "Remove course change log" && git push origin main`
