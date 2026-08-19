import assert from "node:assert/strict"
import test from "node:test"
import { h } from "preact"
import renderToString from "preact-render-to-string"
import Head from "./Head"
import { QuartzComponentProps } from "./types"
import { GlobalConfiguration } from "../cfg"

const cfg = {
  pageTitle: "夏豪 | Xavier",
  pageTitleSuffix: "",
  enableSPA: true,
  enablePopovers: false,
  analytics: null,
  locale: "zh-CN",
  ignorePatterns: [],
  defaultDateType: "created",
  theme: {
    fontOrigin: "googleFonts",
    cdnCaching: false,
    typography: {
      header: { name: "Inter", weights: [400], includeItalic: false },
      body: { name: "Inter", weights: [400], includeItalic: false },
      code: { name: "JetBrains Mono", weights: [400], includeItalic: false },
    },
    colors: { lightMode: {}, darkMode: {} },
  },
} as unknown as GlobalConfiguration

function renderHead(frontmatter: Record<string, unknown>): string {
  const Component = Head(undefined)
  const props = {
    cfg,
    fileData: {
      slug: "legacy-article",
      description: "Legacy article description",
      frontmatter: { title: "Legacy article", tags: [], ...frontmatter },
    },
    externalResources: { css: [], js: [], additionalHead: [] },
    ctx: { cfg: { plugins: { emitters: [] } } },
    children: [],
    tree: { type: "root", children: [] },
    allFiles: [],
  } as unknown as QuartzComponentProps

  return renderToString(h(Component, props))
}

test("uses the article author in generic metadata for attributed legacy writing", () => {
  const html = renderHead({ author: "梁程" })

  assert.match(html, /<meta name="author" content="梁程"/)
  assert.match(html, /<meta name="creator" content="梁程"/)
})

test("does not invent canonical URLs when no domain is configured", () => {
  const html = renderHead({ author: "梁程" })

  assert.doesNotMatch(html, /rel="canonical"/)
  assert.doesNotMatch(html, /example\.com/)
  assert.doesNotMatch(html, /https:\/\/undefined/)
})
