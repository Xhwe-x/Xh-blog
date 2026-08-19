# Blog Identity Migration v1.0.1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish a clean v1.0.1 Quartz blog for 夏豪 / Xavier, archive all unowned content without deleting it, verify the build, and push the new `main` branch to `Xhwe-x/Xh-blog`.

**Architecture:** Keep all confirmed identity values in one typed module and consume it from navigation, contact, footer, GitHub activity, and SEO components. Public Markdown contains only confirmed current-author claims plus five clearly attributed legacy articles; every other legacy article, project, collection, and album is filtered by Quartz drafts. With no formal domain, URL-dependent metadata, RSS, and sitemap output remain disabled.

**Tech Stack:** TypeScript, Preact, Quartz 4, Markdown/front matter, SCSS, Node test runner, Prettier, Git.

**Spec:** `docs/superpowers/specs/2026-08-19-blog-identity-migration-design.md`

## Global Constraints

- Public identity is exactly 夏豪 / Xavier; `Xia Hao` is the SEO pinyin alias.
- Public personal facts are limited to Information Designer, Chongqing, Vibe Coding, English learning, the confirmed email, and confirmed social URLs.
- Never present an old project, employment record, education record, language score, collection, photograph, or preference as belonging to 夏豪.
- Keep existing visual structure, bilingual behavior, avatar, favicon, and generic Quartz OG image.
- Preserve unowned sources with `draft: true`; do not delete their media.
- Do not edit `node_modules`, `public`, `.quartz-cache`, or `quartz/.quartz-cache` as source.
- Project version is `1.0.1`; target repository is `https://github.com/Xhwe-x/Xh-blog.git`.
- Do not force-push or overwrite a changed remote.

---

## File Structure

- Create `quartz/siteIdentity.ts`: single source of truth for current identity and social links.
- Create `quartz/siteIdentity.test.ts`: exact identity regression tests.
- Create `quartz/util/siteUrl.ts` and `quartz/util/siteUrl.test.ts`: optional-domain URL normalization.
- Modify `quartz.config.ts`: use identity title, remove old domain, disable RSS/sitemap.
- Modify `quartz.layout.ts`: build footer links from the identity module.
- Modify `quartz/components/{Head,HomeContact,GithubActivity,TopTabs,Footer}.tsx`: consume confirmed identity and handle missing domain.
- Rewrite `content/index.md`, `content/技术/个人经历.md`, `content/llms.txt`, `content/Projects/index.md`, and `content/robots.txt`: public current-author content.
- Modify selected legacy Markdown: add a visible original-author notice.
- Modify all other legacy Markdown: add `draft: true` while preserving bodies and media.
- Modify `.gitignore`, `package.json`, `package-lock.json`, and `README.md`; create `.dockerignore` and `CHANGELOG.md`.

---

### Task 1: Central identity and optional-domain behavior

**Files:**

- Create: `quartz/siteIdentity.ts`
- Create: `quartz/siteIdentity.test.ts`
- Create: `quartz/util/siteUrl.ts`
- Create: `quartz/util/siteUrl.test.ts`
- Modify: `quartz.config.ts`
- Modify: `quartz.layout.ts`
- Modify: `quartz/components/Head.tsx`
- Modify: `quartz/components/HomeContact.tsx`
- Modify: `quartz/components/GithubActivity.tsx`
- Modify: `quartz/components/TopTabs.tsx`
- Modify: `quartz/components/Footer.tsx`

**Interfaces:**

- Produces: `siteIdentity`, an immutable object with names, role, location, email, and `socialLinks`.
- Produces: `getSiteUrl(baseUrl?: string): URL | undefined`.
- Consumes: Quartz `cfg.baseUrl`, component props, and existing footer link options.

- [ ] **Step 1: Write failing identity tests**

```ts
import assert from "node:assert/strict"
import test from "node:test"
import { siteIdentity } from "./siteIdentity"

test("site identity contains only confirmed public accounts", () => {
  assert.equal(siteIdentity.nameZh, "夏豪")
  assert.equal(siteIdentity.nameEn, "Xavier")
  assert.equal(siteIdentity.pinyin, "Xia Hao")
  assert.deepEqual(Object.keys(siteIdentity.socialLinks), ["GitHub", "Reddit", "X"])
  assert.equal(siteIdentity.email, "2039690860xh@gmail.com")
})
```

- [ ] **Step 2: Write failing optional-domain tests**

```ts
import assert from "node:assert/strict"
import test from "node:test"
import { getSiteUrl } from "./siteUrl"

test("returns undefined without a configured domain", () => {
  assert.equal(getSiteUrl(undefined), undefined)
  assert.equal(getSiteUrl("  "), undefined)
})

test("normalizes a configured domain to HTTPS", () => {
  assert.equal(getSiteUrl("example.com")?.toString(), "https://example.com/")
})
```

- [ ] **Step 3: Run the focused tests and confirm failure**

Run: `npx tsx --test quartz/siteIdentity.test.ts quartz/util/siteUrl.test.ts`

Expected: FAIL because both implementation modules are missing.

- [ ] **Step 4: Implement the identity and URL modules**

```ts
export const siteIdentity = {
  nameZh: "夏豪",
  nameEn: "Xavier",
  pinyin: "Xia Hao",
  initials: "XH",
  roleZh: "信息化设计师",
  roleEn: "Information Designer",
  location: "Chongqing",
  countryCode: "CN",
  email: "2039690860xh@gmail.com",
  socialLinks: {
    GitHub: "https://github.com/Xhwe-x",
    Reddit: "https://www.reddit.com/user/PrimaryLeg9045/",
    X: "https://x.com/Xavier9823",
  },
} as const
```

```ts
export function getSiteUrl(baseUrl?: string): URL | undefined {
  const domain = baseUrl?.trim()
  return domain ? new URL(`https://${domain}`) : undefined
}
```

- [ ] **Step 5: Run the focused tests and confirm PASS**

Run: `npx tsx --test quartz/siteIdentity.test.ts quartz/util/siteUrl.test.ts`

Expected: 3 passing tests.

- [ ] **Step 6: Replace component identity literals and make domain metadata conditional**

Use `siteIdentity` in layout and components. In `Head.tsx`, omit canonical, absolute social image tags, URL IDs, address/company fields, RSS-dependent values, and Twitter domain when `getSiteUrl(cfg.baseUrl)` is undefined. Retain name, description, role, email, social links, locale, and non-URL structured data.

- [ ] **Step 7: Configure the site for no formal domain**

Remove `baseUrl` from `quartz.config.ts` and set `ContentIndex({ enableSiteMap: false, enableRSS: false })`.

- [ ] **Step 8: Run component/type verification**

Run: `npx tsc --noEmit`

Expected: PASS with no TypeScript diagnostics.

- [ ] **Step 9: Commit the identity layer**

```bash
git add quartz/siteIdentity.ts quartz/siteIdentity.test.ts quartz/util/siteUrl.ts quartz/util/siteUrl.test.ts quartz.config.ts quartz.layout.ts quartz/components/Head.tsx quartz/components/HomeContact.tsx quartz/components/GithubActivity.tsx quartz/components/TopTabs.tsx quartz/components/Footer.tsx
git commit -m "feat: centralize Xavier site identity"
```

### Task 2: Rewrite public current-author pages

**Files:**

- Modify: `content/index.md`
- Modify: `content/技术/个人经历.md`
- Modify: `content/llms.txt`
- Modify: `content/robots.txt`

**Interfaces:**

- Consumes: the confirmed copy and links in `siteIdentity`.
- Produces: bilingual public homepage and biography without unverified claims.

- [ ] **Step 1: Record the expected public-copy audit**

Run before editing:

```text
rg -n "梁程|梁非凡|Ray|CHENG-LIANG1|南京|雅思|霸王茶姬" content/index.md content/技术/个人经历.md content/llms.txt content/robots.txt
```

Expected: matches for the legacy identity.

- [ ] **Step 2: Rewrite the homepage**

Keep the bilingual `home-profile` structure and avatar. English uses title `Xavier` and introduction `Hi, I’m Xia Hao, a design workhorse.` Chinese uses title `夏豪` and introduction `大家好，我叫夏豪，一位信息化设计师。` Status content is limited to Vibe Coding, English learning, and Chongqing. Remove old project, technology, collection, singer, score, and work-language claims. Correct the extra closing `span`.

- [ ] **Step 3: Rewrite the biography**

Create a compact bilingual profile with name, role, Chongqing, Vibe Coding, English learning, email, GitHub, Reddit, and X. Do not include employment, education, scores, or projects.

- [ ] **Step 4: Rewrite LLM and robots metadata**

Describe the current blog without a canonical URL. Remove the old Sitemap declaration from `robots.txt` while keeping crawling allowed.

- [ ] **Step 5: Run the public-copy audit**

Run the same `rg` command from Step 1.

Expected: no matches.

- [ ] **Step 6: Commit public current-author content**

```bash
git add content/index.md content/技术/个人经历.md content/llms.txt content/robots.txt
git commit -m "content: rewrite public Xavier profile"
```

### Task 3: Archive unowned projects and collections

**Files:**

- Modify: `content/Projects/index.md`
- Modify: `content/Projects/Active Habits.md`
- Modify: `content/Projects/ActiveToDo.md`
- Modify: `content/Projects/ActiveTranslation.md`
- Modify: `content/Projects/ForceTrack.md`
- Modify: `content/Projects/GeekBio.md`
- Modify: `content/Projects/Roam Focus.md`
- Modify: `content/Projects/Tikkuu MultiPlanner.md`
- Modify: `content/Projects/兴曰.md`
- Modify: `content/album.md`
- Modify: `content/collections.md`

**Interfaces:**

- Produces: public project placeholder index.
- Preserves: all legacy bodies and media behind Quartz draft filtering.

- [ ] **Step 1: Add `draft: true` to every unowned detail page**

Add the field inside existing front matter for the eight project pages, `album.md`, and `collections.md`. Do not alter their bodies or delete media.

- [ ] **Step 2: Rewrite the project index with six neutral slots**

Preserve the three current visual sections and use two non-link cards per section. Public copy is limited to `项目待补充 / Coming soon`; remove all old names, URLs, App Store claims, user counts, and repository links.

- [ ] **Step 3: Verify public project content**

Run:

```text
rg -n "Roam Focus|兴曰|Active Habits|GeekBio|CHENG-LIANG1|App Store|1,000\+|15K\+" content/Projects/index.md
```

Expected: no matches.

- [ ] **Step 4: Verify draft markers**

Run a PowerShell loop over the ten archived files and fail if `^draft: true$` is missing.

Expected: all ten files report `draft: true`.

- [ ] **Step 5: Commit project archival**

```bash
git add content/Projects content/album.md content/collections.md
git commit -m "content: archive unowned projects and collections"
```

### Task 4: Reduce and attribute legacy writing

**Files:**

- Modify: all Markdown files under `content/技术` and `content/英语` except the rewritten biography.

**Interfaces:**

- Produces: exactly five published legacy articles with visible attribution.
- Preserves: all other legacy article bodies as drafts.

- [ ] **Step 1: Add visible attribution to the five selected articles**

Immediately after front matter, add:

```markdown
> 原作者：梁程（旧站内容）。本文作为旧站资料保留，不代表夏豪的个人经历或项目归属。
```

Apply it only to:

- `content/技术/学习资源.md`
- `content/技术/Prompt Engineering/Model Context Protocol（MCP）笔记.md`
- `content/技术/Prompt Engineering/术语库/LLM.md`
- `content/技术/刷题/滑动窗口/643-子数组最大平均数-I.md`
- `content/英语/学习词汇的方法.md`

- [ ] **Step 2: Draft every other legacy article**

Add `draft: true` to the front matter of all other `.md` files below `content/技术` and `content/英语`, excluding `content/技术/个人经历.md` and the five selected articles.

- [ ] **Step 3: Verify the publication set**

Use a PowerShell front-matter scan to list all non-draft `.md` files under `content/技术` and `content/英语`.

Expected: the rewritten biography plus exactly the five selected legacy files.

- [ ] **Step 4: Verify attribution count**

Run:

```text
rg -l "原作者：梁程（旧站内容）" content/技术 content/英语
```

Expected: exactly five files.

- [ ] **Step 5: Commit legacy writing policy**

```bash
git add content/技术 content/英语
git commit -m "content: retain one attributed article per section"
```

### Task 5: Version, documentation, and repository hygiene

**Files:**

- Modify: `.gitignore`
- Create: `.dockerignore`
- Modify: `package.json`
- Modify: `package-lock.json`
- Rewrite: `README.md`
- Create: `CHANGELOG.md`

**Interfaces:**

- Produces: installable v1.0.1 repository metadata and maintenance guidance.

- [ ] **Step 1: Fix ignore rules**

Remove the `.gitignore` self-ignore entry. Add `.dockerignore` containing:

```text
node_modules
public
.git
.quartz-cache
quartz/.quartz-cache
.vercel
*.log
```

- [ ] **Step 2: Update package metadata**

Set `name` to `xh-blog`, `version` to `1.0.1`, author to `夏豪 / Xavier <2039690860xh@gmail.com>`, homepage to `https://github.com/Xhwe-x/Xh-blog`, and repository URL to `https://github.com/Xhwe-x/Xh-blog.git`. Preserve Quartz dependencies, scripts, license, and upstream attribution in documentation.

- [ ] **Step 3: Synchronize the lockfile**

Run: `npm install --package-lock-only --ignore-scripts`

Expected: root package name and version in `package-lock.json` are `xh-blog` and `1.0.1`.

- [ ] **Step 4: Rewrite README and add changelog**

README must include the current owner, v1.0.1, repository clone URL, setup/build commands, draft archive policy, exact files to edit for identity/projects/collections/domain, and Quartz upstream credit. `CHANGELOG.md` records the 2026-08-19 v1.0.1 identity migration.

- [ ] **Step 5: Commit the release metadata**

```bash
git add .gitignore .dockerignore package.json package-lock.json README.md CHANGELOG.md
git commit -m "release: migrate blog identity to Xia Hao v1.0.1"
```

### Task 6: Full verification and GitHub publication

**Files:**

- Verify: all repository source files.
- Commit: any formatting-only changes from the required formatter.

**Interfaces:**

- Consumes: all earlier task outputs.
- Produces: verified `main` branch pushed to the empty GitHub repository.

- [ ] **Step 1: Run the required formatter**

Run: `npm run format`

Expected: exit code 0. Review formatting changes and ensure they do not alter generated or dependency directories.

- [ ] **Step 2: Run type and formatting checks**

Run: `npm run check`

Expected: PASS.

- [ ] **Step 3: Build the production site**

Run: `npm run build`

Expected: Quartz parses only non-draft content and emits `public` successfully. Port errors are irrelevant because this is not a serve/watch command.

- [ ] **Step 4: Run tests**

Run: `npm test`

Expected: PASS, including identity and optional-domain tests.

- [ ] **Step 5: Audit old identifiers by publication status**

Search source files for `梁程`, `梁非凡`, `Ray`, `Liang Cheng`, `CHENG-LIANG1`, old domains, old emails, old social accounts, and 霸王茶姬. Confirm each remaining occurrence is either a draft archive, one of five visible author notices, or legitimate third-party/upstream material.

- [ ] **Step 6: Inspect the working tree and commit formatter changes**

Run `git status --short` and `git diff --check`. If tracked source changed only because of formatting, commit it as `style: format v1.0.1 source`.

- [ ] **Step 7: Stage the complete clean repository snapshot**

Add all non-ignored source files, verify that `node_modules`, `public`, and cache directories are absent from the index, then commit remaining previously-untracked repository files as `chore: add Quartz blog source`.

- [ ] **Step 8: Re-check the remote without changing it**

Run: `git ls-remote --symref https://github.com/Xhwe-x/Xh-blog.git HEAD`

Expected: no refs. If refs appear, stop before pushing.

- [ ] **Step 9: Configure and push the remote**

```bash
git remote add origin https://github.com/Xhwe-x/Xh-blog.git
git push -u origin main
```

Expected: new `main` branch created successfully without force.

- [ ] **Step 10: Record delivery evidence**

Capture `git rev-parse HEAD`, `git log --oneline`, `git status --short`, package version, test/build outcomes, and the remote tracking state for the final report.
