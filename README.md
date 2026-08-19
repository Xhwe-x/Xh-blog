# 夏豪 Xavier 的个人博客

当前版本：**1.0.1**

这是夏豪（Xavier / Xia Hao）的个人网站与博客，主要记录信息化设计、Vibe Coding 与英语学习。项目基于 [Quartz 4](https://quartz.jzhao.xyz/) 构建，内容使用 Markdown 维护，并输出为纯静态网站。

正式域名尚未配置。项目源代码位于：[Xhwe-x/Xh-blog](https://github.com/Xhwe-x/Xh-blog)。

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

| 命令             | 用途                               |
| ---------------- | ---------------------------------- |
| `npm run dev`    | 启动本地开发服务器                 |
| `npm run format` | 使用 Prettier 格式化源文件         |
| `npm run check`  | 检查 TypeScript 类型与代码格式     |
| `npm run build`  | 构建静态站点到 `public/`           |
| `npm test`       | 运行自动化测试                     |

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

### 修改相册与收藏

- 相册文字与图片引用：`content/album.md`
- 设备、游戏和音乐收藏：`content/collections.md`
- 相册原图：`content/Hobbies/`
- 收藏封面：`content/blog-assets/collections/`

先替换成自己的文字和媒体，再把对应页面的 `draft: true` 改为 `draft: false`。

### 旧文章策略

旧站文章不会被冒充为夏豪的经历：

- 每个内容目录只公开保留一篇代表文章，并显示旧站原作者说明。
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
