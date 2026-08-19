# 夏豪 / Xavier 博客身份迁移设计（v1.0.1）

## 目标

将现有 Quartz 4 博客从旧作者身份迁移为夏豪 / Xavier 的个人博客，清除公开页面中的旧姓名、账号、联系方式、职业经历、项目归属和域名，同时保留可供日后参考的旧内容源文件。站点保持现有视觉结构、中英文切换和 Quartz 核心功能。

## 已确认身份

- 中文名：夏豪
- 英文显示名：Xavier
- SEO 拼音别名：Xia Hao
- 职业：信息化设计师 / Information Designer
- 家乡与现居地：Chongqing, China
- 关注领域：Vibe Coding、英语学习
- 邮箱：2039690860xh@gmail.com
- GitHub：https://github.com/Xhwe-x
- Reddit：https://www.reddit.com/user/PrimaryLeg9045/
- X：https://x.com/Xavier9823
- 品牌缩写：XH
- 中文首页介绍：大家好，我叫夏豪，一位信息化设计师。
- 英文首页介绍：Hi, I’m Xia Hao, a design workhorse.

未确认的公司、学校、英语成绩、收藏、摄影、音乐偏好、技术栈和项目经历不得继续作为夏豪的公开资料。

## 身份与页面设计

### 首页

- 中文标题使用“夏豪”，英文标题使用“Xavier”。
- 首页只展示已确认的介绍、身份、所在地、Vibe Coding 与英语学习。
- 删除公开页面中对旧项目、旧技术栈、旧收藏和旧经历的所有第一人称归属声明。
- 保持当前双语布局、视觉样式与语言切换。
- 修复中英文项目状态行中多余的闭合 `span`。

### 页眉、联系方式与页脚

- 页眉品牌标记从 `LC` 改为 `XH`。
- 页眉社交入口保持三个位置，依次使用 GitHub、Reddit、X。
- 首页联系区保持原有布局，展示 GitHub、Reddit、X，并在独立文本行显示公开邮箱。
- 页脚展示 GitHub、Reddit、X；署名改为夏豪 / Xavier，所在地改为 Chongqing · CN。
- 删除旧 Threads、小红书、小黑盒个人主页和旧邮箱。

### SEO 与结构化数据

- 作者和创建者统一为“夏豪 / Xavier”。
- `Person` 使用姓名夏豪，别名 Xavier 与 Xia Hao，职业 Information Designer，所在地 Chongqing，关注领域 Vibe Coding 与英语学习。
- `sameAs` 只包含已确认的 GitHub、Reddit 与 X，邮箱使用已确认地址。
- 删除旧作者的姓名、账号、公司、技能、南京地址和其他未确认字段。
- 保留通用 Quartz OG 图片与现有 favicon、头像。

## 无域名模式

当前没有正式域名，因此不得使用旧域名或假定 GitHub Pages 已部署。

- 从配置中移除旧 `baseUrl`。
- 暂时关闭 RSS 和 Sitemap 输出，避免生成无效绝对 URL。
- `Head.tsx` 在没有 `baseUrl` 时不输出 canonical、绝对 OG URL、Twitter domain 和依赖正式站点 URL 的结构化字段。
- `robots.txt` 不声明 Sitemap。
- `llms.txt` 不声明未配置的 canonical site。
- README 仅引用 GitHub 仓库地址。

以后确定域名时，可重新配置 `baseUrl`，开启 RSS/Sitemap，并恢复 canonical、OG 与 robots Sitemap。

## 项目归档

现有项目均不属于夏豪。

- 所有项目详情页设置 `draft: true`，保留 Markdown 和媒体资源。
- 项目首页删除旧项目名、仓库、App Store、用户数和上架状态。
- 项目首页保留现有三个视觉分区，每个分区显示两个中性“待补充 / Coming soon”位置，以便以后替换。
- 首页不再展示旧项目或旧项目链接。
- App Store 项目入口不再公开显示。
- `album.md` 与 `collections.md` 设置为草稿，保留文本和媒体资源供以后修改。

## 旧文章归档与署名

采用软归档策略：不删除旧文章，未选中的文章统一设置 `draft: true`。

每个现有内容目录公开保留一篇代表文章：

- 技术根目录：`学习资源.md`
- Prompt Engineering：`Model Context Protocol（MCP）笔记.md`
- Prompt Engineering 术语库：`LLM.md`
- 刷题：`643-子数组最大平均数-I.md`
- 英语：`学习词汇的方法.md`

每篇公开保留的旧文章必须加入可见署名说明：“原作者：梁程（旧站内容）”。不得把旧文中的第一人称经历改写为夏豪的经历。

`content/技术/个人经历.md` 作为当前作者资料单独重写，不属于旧文章保留配额。内容只包含已确认身份、所在地、关注领域和联系方式，中英文同步。

## 文档、版本与项目卫生

- README 改为“夏豪 Xavier 的个人博客”，克隆地址使用 `https://github.com/Xhwe-x/Xh-blog.git`。
- 项目包名改为 `xh-blog`，版本设为 `1.0.1`，作者与仓库元数据改为当前项目，同时在 README 和许可证说明中保留 Quartz 上游归属。
- 同步更新 `package-lock.json`。
- 新增 `CHANGELOG.md`，记录 v1.0.1 身份迁移。
- 删除 `.gitignore` 中忽略 `.gitignore` 自身的规则。
- 新增 `.dockerignore`，排除依赖、构建产物、Git、Quartz 缓存、Vercel 文件和日志。
- 不修改 `node_modules`、`public` 和 Quartz 缓存中的生成文件；通过构建刷新输出。

## Git 与发布

目标仓库为 `https://github.com/Xhwe-x/Xh-blog.git`。只读检查确认仓库当前没有分支或提交。

- 在当前目录初始化 Git，默认分支为 `main`。
- 先提交设计规格，再提交 v1.0.1 实施结果。
- 实施提交信息使用 `release: migrate blog identity to Xia Hao v1.0.1`。
- 所有验证通过后推送 `main`，不使用强制推送。
- 如果推送前远程状态发生变化，停止推送并报告，不覆盖远程历史。

## 验证与交付

依次执行：

1. `npm run format`
2. `npm run check`
3. `npm run build`
4. `npm test`

随后重新扫描源文件，区分：

- 已清除的旧作者身份；
- 草稿归档中按用户要求保留的旧字符串；
- 公开旧文章中的明确原作者署名；
- Quartz 上游和其他合法第三方引用。

最终报告列出主要文件修改、隐藏内容、保留字符串原因、验证结果、版本号、提交哈希和 GitHub 推送结果，并说明用户以后修改首页、项目、相册和收藏内容的位置。
