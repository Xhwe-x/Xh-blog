# 夏豪 Xavier 的个人博客

当前版本：**1.0.1**

这是夏豪（Xavier / Xia Hao）的个人网站与博客，记录信息化设计、Vibe Coding、英语学习，以及个人项目的阶段复盘。项目基于 [Quartz 4](https://quartz.jzhao.xyz/) 构建，内容使用 Markdown 维护，并输出为纯静态网站。

正式域名尚未配置。项目源代码位于：[Xhwe-x/Xh-blog](https://github.com/Xhwe-x/Xh-blog)。

## 内容与项目记录

- **博客**：技术笔记、英语学习方法和个人项目复盘；保留的旧站文章明确标注原作者。
- **项目**：展示页保留现有布局，具体产品与工具条目待整理。
- **相册**：城市暮色、天空与山野、街巷日常和夜游灯火，共 15 张原始照片，点击可查看原图。
- **收藏**：游戏、喜欢的音乐作品与黑胶封套展示、三件办公设备，以及 Steam 和邮箱账号。

最新文章：[五个项目的阶段总结：从无障碍小程序到推理调试器](content/技术/五个项目的阶段总结.md)。

以下概览与文章采用同一份截至 **2026-10-14** 的资料。状态来自本地代码、规格和交接记录，不等同于每个项目都已上线或已完整推送。

| 项目                                                     | 方向                                 | 当前阶段与边界                                                                        |
| -------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------- |
| **伴行 WalkWith**                                        | 微信小程序形态的多模态无障碍生活助手 | Phase 0 产品规格与交互设计；尚无可运行小程序，三条最小旅程和真实能力接入待实现        |
| **InfraPilot**                                           | FDE 学习与信息化工程实践             | 已有独立 Python 工程量计算练习；完整应用、RAG、Agent、部署与可观测性仍是后续方向      |
| **VisionLint Local**                                     | 本地网页视觉与响应式审计 Skill       | 已有规则、DOM 定位、本地视觉接入和修复复验代码；真实模型、宿主调用和比赛发布仍需确认  |
| **[Lexora](https://github.com/Xhwe-x/Lexora)**           | 本地优先英语学习 Web 应用            | 已有词汇、句子练习和阅读流程；核心数据默认保存在本地，最新本地进展可能领先公开仓库    |
| **[ReasonTrace](https://github.com/Xhwe-x/reasontrace)** | 代数 Reasoning Debugger              | 已有确定性检查、AI 诊断、复述与迁移检查流程；支持范围受限，交付文档中的验证为历史记录 |

文章详细说明了各项目的问题、工作流程、技术取舍、已有能力和下一步。

## 作者与联系

夏豪 / Xavier，来自重庆的信息化设计师，关注如何把想法整理成清晰、可验证的数字体验。

- GitHub：[Xhwe-x](https://github.com/Xhwe-x)
- Gmail：[alexxh1goog@gmail.com](mailto:alexxh1goog@gmail.com)
- QQ：2039690860 · [2039690860@qq.com](mailto:2039690860@qq.com)
- Steam：[76561199212782956](https://steamcommunity.com/profiles/76561199212782956/)

## 本地运行

### 环境要求

- Git
- Node.js `22.16.0`（以 `.node-version` 为准）
- npm `10.9.2` 或更高版本

```bash
git clone https://github.com/Xhwe-x/Xh-blog.git
cd Xh-blog
npm ci
npm run dev
```

默认开发地址为 [http://localhost:8080](http://localhost:8080)。如果本地 WebSocket 端口被占用或被 Windows 保留，可以另选端口：

```bash
npx quartz build --serve --watch --port 8081 --wsPort 3010
```

## 常用命令

| 命令             | 用途                           |
| ---------------- | ------------------------------ |
| `npm run dev`    | 启动本地开发服务器             |
| `npm run format` | 使用 Prettier 格式化源文件     |
| `npm run check`  | 检查 TypeScript 类型与代码格式 |
| `npm run build`  | 构建静态站点到 `public/`       |
| `npm test`       | 运行自动化测试                 |

发布前应依次运行：

```bash
npm run format
npm run check
npm run build
npm test
```

## 内容维护

### 修改个人身份

- 全站姓名、职业、所在地、邮箱和社交链接：`quartz/siteIdentity.ts`
- 首页中英文介绍：`content/index.md`
- 完整个人介绍：`content/技术/个人经历.md`
- 搜索引擎和结构化数据：`quartz/components/Head.tsx`
- AI/爬虫内容说明：`content/llms.txt`

修改身份资料时，只填写已经确认并愿意公开的内容。不要把草稿中的旧作者经历改名后继续使用。

### 添加自己的项目

项目首页位于 `content/Projects/index.md`，目前每个分区保留两个“待补充”位置。可以把占位块替换为自己的项目名称、简介和链接。

新增详情页时，在 `content/Projects/` 下创建 Markdown 文件。确认内容归属后，将 Front Matter 中的：

```yaml
draft: true
```

改为：

```yaml
draft: false
```

旧项目详情和截图仍保留为草稿，仅供后续参考，不会进入公开构建。

旧项目的独立 HTML 演示保存在 `archive/playground/`，该目录不参与 Quartz 静态资源发布。需要重新使用时，请先确认项目归属，再将对应演示移回公开资源目录并更新链接。

### 修改相册与收藏

- 相册文字与图片引用：`content/album.md`
- 设备、游戏和音乐收藏：`content/collections.md`
- 相册原图：`content/Hobbies/`
- 收藏封面：`content/blog-assets/collections/`

当前相册和收藏已纳入网站构建。照片直接保留原文件，构建时按字节复制；不要对这些原图运行 `scripts/optimize-images.mjs`，该脚本会缩放和重新编码图片。

新增草稿时使用 `draft: true`，内容和媒体确认后再改为 `draft: false`。音乐条目应核对封面、年份和外部链接；未确认精确豆瓣条目的作品使用对应作品的搜索入口。

### 添加博客文章

个人技术文章放在 `content/技术/`，英语学习文章放在 `content/英语/`。博客列表和首页最近文章会自动收录符合条件的文章，无需另写页面组件。

新增文章沿用 Markdown 与 Front Matter，例如：

```yaml
---
title: 文章标题
author: 夏豪 / Xavier
description: 一句话说明文章内容。
created: 2026-10-14
modified: 2026-10-14
published: 2026-10-14
tags:
  - 技术
draft: false
---
```

日期填写实际写作与更新日期。项目总结应区分设计、实现、历史测试和本次验证，避免把 Mock 或规划写成已交付能力。

### 旧文章策略

旧站文章不会被冒充为夏豪的经历：

- 少量旧站资料继续保留，并显示原作者说明；不代表夏豪的个人经历或项目归属。
- 其他文章设置为 `draft: true`，源文件仍保留。
- 当前作者页面 `content/技术/个人经历.md` 已完全重写。

## 正式域名

当前没有设置 `baseUrl`，RSS 与 Sitemap 也暂时关闭，以免生成错误链接。确定正式域名后需要同步修改：

1. 在 `quartz.config.ts` 中添加 `baseUrl`；
2. 将 `ContentIndex` 的 `enableSiteMap` 和 `enableRSS` 改为 `true`；
3. 在 `content/robots.txt` 中添加正确的 Sitemap URL；
4. 更新 `content/llms.txt` 和本 README 的站点地址；
5. 重新运行完整验证。

## 项目结构

```text
content/                 网站内容和媒体
archive/playground/      不参与构建的旧项目 HTML 演示
quartz/components/       自定义页面组件
quartz/siteIdentity.ts   全站身份配置
quartz/styles/           全局和页面样式
quartz.config.ts         Quartz、主题和构建配置
quartz.layout.ts         页面布局与组件装配
public/                  构建产物（不提交）
```

## Docker

```bash
docker build -t xh-blog .
docker run --rm -p 8080:8080 -p 3001:3001 xh-blog
```

`.dockerignore` 会排除本地依赖、构建产物、Git 数据和 Quartz 缓存。

## 上游与许可证

本项目基于 Jacky Zhao 创建的开源项目 [Quartz](https://github.com/jackyzha0/quartz) 修改，遵循仓库中的 MIT 许可证。Quartz 的上游作者、文档和依赖归属不会被视为本博客作者身份。
