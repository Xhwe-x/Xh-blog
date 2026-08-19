import { i18n } from "../i18n"
import { FullSlug, getFileExtension, joinSegments, pathToRoot, simplifySlug } from "../util/path"
import { CSSResourceToStyleElement, JSResourceToScriptElement } from "../util/resources"
import { googleFontHref, googleFontSubsetHref } from "../util/theme"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { unescapeHTML } from "../util/escape"
import { CustomOgImagesEmitterName } from "../plugins/emitters/ogImage"
import { siteIdentity } from "../siteIdentity"
import { getSiteUrl } from "../util/siteUrl"
export default (() => {
  const Head: QuartzComponent = ({
    cfg,
    fileData,
    externalResources,
    ctx,
  }: QuartzComponentProps) => {
    const titleSuffix = cfg.pageTitleSuffix ?? ""
    const title =
      (fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title) + titleSuffix
    const seoTitle = fileData.slug === "index" ? cfg.pageTitle : title
    const description =
      fileData.frontmatter?.socialDescription ??
      fileData.frontmatter?.description ??
      unescapeHTML(fileData.description?.trim() ?? i18n(cfg.locale).propertyDefaults.description)
    const seoDescription =
      fileData.slug === "index"
        ? "夏豪（Xavier / Xia Hao）的个人网站与博客，记录信息化设计、Vibe Coding 与英语学习。"
        : description
    const keywords =
      fileData.slug === "index"
        ? "夏豪, Xavier, Xia Hao, 信息化设计师, Vibe Coding, 英语学习, 个人博客"
        : undefined

    const { css, js, additionalHead } = externalResources

    const site = getSiteUrl(cfg.baseUrl)
    const path = (site?.pathname ?? "") as FullSlug
    const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug!)
    const iconPath = joinSegments(baseDir, "static/icon.png")

    // Url of current page
    const canonicalSlug = fileData.slug === "index" ? "/" : simplifySlug(fileData.slug!)
    const socialUrl = site
      ? fileData.slug === "404"
        ? site.toString()
        : new URL(encodeURI(canonicalSlug), site).toString()
      : undefined

    const usesCustomOgImage = ctx.cfg.plugins.emitters.some(
      (e) => e.name === CustomOgImagesEmitterName,
    )
    const siteUrl = site?.toString().replace(/\/$/, "")
    const ogImageDefaultPath = siteUrl ? `${siteUrl}/static/og-image.png` : undefined
    const canonicalUrl = socialUrl
    const websiteId = siteUrl ? `${siteUrl}/#website` : undefined
    const personId = siteUrl ? `${siteUrl}/#person` : undefined
    const tags = fileData.frontmatter?.tags ?? []
    const hubSlugs = new Set([
      "index",
      "blog",
      "Projects/index",
      "projects",
      "album",
      "collections",
    ])
    const isCollectionPage =
      hubSlugs.has(fileData.slug ?? "") ||
      fileData.slug?.startsWith("tags/") ||
      fileData.slug?.endsWith("/index")
    const isArticle = fileData.slug !== "404" && !isCollectionPage
    const publishedDate = fileData.frontmatter?.published
      ? fileData.dates?.published
      : fileData.dates?.created
    const modifiedDate = fileData.dates?.modified ?? publishedDate
    const rawCustomStructuredData = fileData.frontmatter?.structuredData
    const customStructuredData = Array.isArray(rawCustomStructuredData)
      ? rawCustomStructuredData.filter(
          (entry) => typeof entry === "object" && entry !== null && "@type" in entry,
        )
      : []
    const frontmatterAuthor = fileData.frontmatter?.author
    const articleAuthorName =
      typeof frontmatterAuthor === "string" && frontmatterAuthor.trim().length > 0
        ? frontmatterAuthor.trim()
        : siteIdentity.nameZh
    const isCurrentAuthor = articleAuthorName === siteIdentity.nameZh
    const articleAuthor = {
      "@type": "Person",
      name: articleAuthorName,
      ...(isCurrentAuthor
        ? {
            alternateName: [siteIdentity.nameEn, siteIdentity.pinyin],
            sameAs: Object.values(siteIdentity.socialLinks),
          }
        : {}),
      ...(isCurrentAuthor && personId && siteUrl ? { "@id": personId, url: siteUrl } : {}),
    }
    const articleStructuredData = isArticle
      ? [
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            ...(canonicalUrl ? { "@id": `${canonicalUrl}#article` } : {}),
            headline: seoTitle,
            description: seoDescription,
            ...(canonicalUrl ? { url: canonicalUrl, mainEntityOfPage: canonicalUrl } : {}),
            ...(ogImageDefaultPath ? { image: [ogImageDefaultPath] } : {}),
            datePublished: publishedDate?.toISOString(),
            dateModified: modifiedDate?.toISOString(),
            inLanguage: fileData.frontmatter?.lang ?? cfg.locale,
            isAccessibleForFree: true,
            articleSection: tags[0] ?? "博客",
            keywords: tags,
            author: articleAuthor,
            publisher: {
              "@type": "Person",
              name: siteIdentity.nameZh,
              ...(personId && siteUrl ? { "@id": personId, url: siteUrl } : {}),
            },
            ...(websiteId ? { isPartOf: { "@id": websiteId } } : {}),
          },
          ...(canonicalUrl && siteUrl
            ? [
                {
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "首页",
                      item: `${siteUrl}/`,
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: seoTitle,
                      item: canonicalUrl,
                    },
                  ],
                },
              ]
            : []),
          ...customStructuredData,
        ]
      : customStructuredData.length > 0
        ? customStructuredData
        : undefined
    const structuredData =
      fileData.slug === "index"
        ? [
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              ...(websiteId ? { "@id": websiteId } : {}),
              name: cfg.pageTitle,
              alternateName: [siteIdentity.nameZh, siteIdentity.nameEn, siteIdentity.pinyin],
              ...(siteUrl ? { url: siteUrl } : {}),
              description: seoDescription,
              inLanguage: ["zh-CN", "en"],
            },
            {
              "@context": "https://schema.org",
              "@type": "Person",
              ...(personId ? { "@id": personId } : {}),
              name: siteIdentity.nameZh,
              alternateName: [siteIdentity.nameEn, siteIdentity.pinyin],
              description: seoDescription,
              jobTitle: siteIdentity.roleEn,
              ...(siteUrl ? { url: siteUrl, mainEntityOfPage: siteUrl } : {}),
              sameAs: Object.values(siteIdentity.socialLinks),
              email: `mailto:${siteIdentity.email}`,
              address: {
                "@type": "PostalAddress",
                addressLocality: siteIdentity.location,
                addressCountry: siteIdentity.countryCode,
              },
              knowsAbout: siteIdentity.interests,
            },
            ...(siteUrl && websiteId && personId
              ? [
                  {
                    "@context": "https://schema.org",
                    "@type": "ProfilePage",
                    "@id": `${siteUrl}/#profile`,
                    url: siteUrl,
                    name: seoTitle,
                    description: seoDescription,
                    isPartOf: { "@id": websiteId },
                    about: { "@id": personId },
                    mainEntity: { "@id": personId },
                  },
                ]
              : []),
          ]
        : articleStructuredData

    return (
      <head>
        <title>{seoTitle}</title>
        <meta charSet="utf-8" />
        {cfg.theme.cdnCaching && cfg.theme.fontOrigin === "googleFonts" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href={googleFontHref(cfg.theme)} />
            {cfg.theme.typography.title && (
              <link rel="stylesheet" href={googleFontSubsetHref(cfg.theme, cfg.pageTitle)} />
            )}
          </>
        )}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@700&family=Noto+Sans+HK:wght@300&display=swap"
        />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content={`${siteIdentity.nameZh} / ${siteIdentity.nameEn}`} />
        <meta name="creator" content={`${siteIdentity.nameZh} / ${siteIdentity.nameEn}`} />

        <meta property="og:site_name" content={cfg.pageTitle}></meta>
        <meta property="og:title" content={seoTitle} />
        <meta property="og:type" content={isArticle ? "article" : "website"} />
        <meta property="og:locale" content="zh_CN" />
        {fileData.slug !== "404" && canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        <meta
          name="robots"
          content={
            fileData.slug === "404"
              ? "noindex, nofollow"
              : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          }
        />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="twitter:card" content={ogImageDefaultPath ? "summary_large_image" : "summary"} />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta property="og:description" content={seoDescription} />
        {ogImageDefaultPath && <meta property="og:image:alt" content={seoDescription} />}
        {isArticle && publishedDate && (
          <meta property="article:published_time" content={publishedDate.toISOString()} />
        )}
        {isArticle && modifiedDate && (
          <meta property="article:modified_time" content={modifiedDate.toISOString()} />
        )}
        {isArticle && tags.map((tag) => <meta property="article:tag" content={tag} />)}

        {!usesCustomOgImage && ogImageDefaultPath && (
          <>
            <meta property="og:image" content={ogImageDefaultPath} />
            <meta property="og:image:url" content={ogImageDefaultPath} />
            <meta name="twitter:image" content={ogImageDefaultPath} />
            <meta
              property="og:image:type"
              content={`image/${getFileExtension(ogImageDefaultPath) ?? "png"}`}
            />
          </>
        )}

        {cfg.baseUrl && socialUrl && (
          <>
            <meta property="twitter:domain" content={cfg.baseUrl}></meta>
            <meta property="og:url" content={socialUrl}></meta>
            <meta property="twitter:url" content={socialUrl}></meta>
          </>
        )}

        <link rel="icon" href={iconPath} />
        <meta name="description" content={seoDescription} />
        <meta name="generator" content="Quartz" />
        {structuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
            }}
          />
        )}

        {css.map((resource) => CSSResourceToStyleElement(resource, true))}
        {js
          .filter((resource) => resource.loadTime === "beforeDOMReady")
          .map((res) => JSResourceToScriptElement(res, true))}
        {additionalHead.map((resource) => {
          if (typeof resource === "function") {
            return resource(fileData)
          } else {
            return resource
          }
        })}
      </head>
    )
  }

  return Head
}) satisfies QuartzComponentConstructor
