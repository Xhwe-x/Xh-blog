import assert from "node:assert/strict"
import test from "node:test"
import { getSiteUrl } from "./siteUrl"

test("omits site URLs when no formal domain is configured", () => {
  assert.equal(getSiteUrl(undefined), undefined)
  assert.equal(getSiteUrl(""), undefined)
  assert.equal(getSiteUrl("   "), undefined)
})

test("normalizes a configured bare domain to HTTPS", () => {
  assert.equal(getSiteUrl("example.com")?.toString(), "https://example.com/")
  assert.equal(getSiteUrl(" www.example.com ")?.toString(), "https://www.example.com/")
})
