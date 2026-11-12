# NewBitX（www.newbitx.com）发布与更新

站点源码：本目录 `newbitx-web/`。

## 当前诊断（2026-11-12）

| 项 | 状态 |
|----|------|
| 域名 NS | Cloudflare（`mallory` / `marvin`） |
| `www` DNS | 已走 Cloudflare 代理（橙云） |
| `https://www.newbitx.com` | **HTTP 521** = Cloudflare 找不到可用源站 |
| 结论 | 域名已接入 Cloudflare，但**源站未正确托管本站静态文件** |

因此「把最新版部署上去」= **① 发布静态产物到可靠源站** + **② 把 Cloudflare 的 www 指到该源站**。

本仓库已配置 **GitHub Pages** 自动发布（推送 `main` 即构建 `dist/`）。

---

## 日常更新（代码已上 GitHub 后）

```bash
cd newbitx-web
# 改完页面/数据后
npm run build          # 可选：本地确认
git add -A
git commit -m "Update NewBitX site"
git push origin main   # 触发 GitHub Actions → Pages
```

几分钟后：

- 预览：`https://signalpro-lgtm.github.io/newbitx-web/`
- 自定义域（DNS 切好后）：`https://www.newbitx.com`

也可在 GitHub → Actions → **Deploy NewBitX to GitHub Pages** → **Run workflow** 手动跑。

---

## 一次性：修复 521（Cloudflare DNS 切到 GitHub Pages）

在 [Cloudflare Dashboard](https://dash.cloudflare.com) → 选中 **newbitx.com** → **DNS** → **Records**：

1. **删除或改掉** 现有导致 521 的 `www` 记录（错误的 A / 空源站等）。
2. **新增 / 改为**：

| 类型 | 名称 | 内容 | Proxy |
|------|------|------|--------|
| CNAME | `www` | `signalpro-lgtm.github.io` | 先 **DNS only（灰云）** |

3. SSL/TLS → 模式先用 **Full**（证书签发后可 Full strict）。
4. 等待 GitHub Pages 设置里 Custom domain `www.newbitx.com` 显示已验证（仓库 Settings → Pages）。
5. 网站打开正常后，可将 `www` 改回 **Proxied（橙云）**（可选）。

根域 `newbitx.com`（无 www）若也要打开：可加 Cloudflare **Redirect Rule**  
`newbitx.com/*` → `https://www.newbitx.com/$1`（301）。

---

## 备选：Cloudflare Pages（域名已在 CF 时也很合适）

1. Cloudflare → Workers & Pages → Create → 连接本 GitHub 仓库 `newbitx-web`。  
2. Build：`npm run build`；Output：`dist`；Root：`/`（独立仓库时）。  
3. Custom domains → 添加 `www.newbitx.com`（会自动改 DNS）。  
4. 此后同样：`git push origin main` 即更新。

本机直接上传（需先 `npx wrangler login`）：

```bash
npm run build
npx wrangler pages deploy dist --project-name=newbitx
```

---

## 发布前检查

1. `join.html` 内 `INBOX` 改成真实收件邮箱。  
2. `npm run build` 无报错。  
3. 勿只上传单个 `index.html`——必须包含 `train.html` / `kols.html` 等及 `assets/`。
