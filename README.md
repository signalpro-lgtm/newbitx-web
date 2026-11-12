# NewBitX 官网（MVP）

域名：`www.newbitx.com`

## 定位（诚实版）

| 模块 | 现在做什么 | 以后做什么 |
|------|------------|------------|
| BD 学院 | 北美向 4 周训练路径与能力说明 | 课程视频、作业批改、学员案例 |
| KOL 名录 | 精选公开快照 + 北美标签筛选 | CRM、商务认领、撮合试单 |
| 交易所目录 | 公开 Affiliate 口径分层（可推 / 教材） | 仅签约后显示「官方伙伴」 |
| 加入 | mailto 意向收集 | 正式表单 + 审核流 |

**不要**在未签约时宣称「已关联所有大型交易所」。本站用「公开目录」与「官方伙伴」两级诚实表达。

## 技术

- Vite 多页静态站  
- 无后端；数据在 `src/data/*.js`  
- 仓库：https://github.com/signalpro-lgtm/newbitx-web  
- 自动发布：push `main` → GitHub Pages  

## 现在卡在哪

`www.newbitx.com` 在 Cloudflare 上返回 **521**（源站不可达）。  
最新版已发布到 GitHub Pages；**你只需在 Cloudflare DNS 把 `www` 改成 CNAME → `signalpro-lgtm.github.io`（先灰云）**。详见 [DEPLOY.md](./DEPLOY.md)。

日常更新：改代码 → `git push origin main`。
