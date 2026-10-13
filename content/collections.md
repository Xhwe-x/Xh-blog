---
title: 收藏
description: 我的 Steam 与邮箱账号、办公设备、游戏和喜欢的音乐作品。
---

<section class="collection-tabs">
<input class="collection-tab-input" type="radio" name="collection-tab" id="collection-tab-account" />
<input class="collection-tab-input" type="radio" name="collection-tab" id="collection-tab-device" />
<input class="collection-tab-input" type="radio" name="collection-tab" id="collection-tab-game" checked />
<input class="collection-tab-input" type="radio" name="collection-tab" id="collection-tab-album" />
<input class="collection-tab-input" type="radio" name="collection-tab" id="collection-tab-vinyl" />
<div class="collection-tab-nav">
<label class="collection-tab-label" for="collection-tab-game">游戏</label>
<label class="collection-tab-label" for="collection-tab-album">专辑</label>
<label class="collection-tab-label" for="collection-tab-vinyl">黑胶</label>
<label class="collection-tab-label" for="collection-tab-device">设备</label>
<label class="collection-tab-label" for="collection-tab-account">账号</label>
</div>

<section class="collection-tab-panel collection-tab-panel-account" id="collection-account">
<div class="collection-panel-head"><p>我的 Steam 账号与常用邮箱。</p></div>
<section class="collection-accounts">
<div class="collection-account-card collection-account-steam">
<span class="collection-account-label">Steam</span>
<span class="collection-account-id">76561199212782956</span>
<div class="collection-account-footer"><span class="collection-account-note">Steam ID64</span><button class="collection-copy-button" type="button" data-copy="76561199212782956" onclick="const text=this.dataset.copy; const done=()=>{this.textContent='已复制'; setTimeout(()=>this.textContent='复制',1200)}; if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(text).then(done)}else{const input=document.createElement('textarea'); input.value=text; input.style.position='fixed'; input.style.opacity='0'; document.body.appendChild(input); input.select(); document.execCommand('copy'); input.remove(); done()}">复制</button></div>
</div>
<div class="collection-account-card">
<span class="collection-account-label">QQ 邮箱</span>
<span class="collection-account-id">2039690860@qq.com</span>
<div class="collection-account-footer"><span class="collection-account-note">QQ：2039690860</span><button class="collection-copy-button" type="button" data-copy="2039690860@qq.com" onclick="const text=this.dataset.copy; const done=()=>{this.textContent='已复制'; setTimeout(()=>this.textContent='复制',1200)}; if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(text).then(done)}else{const input=document.createElement('textarea'); input.value=text; input.style.position='fixed'; input.style.opacity='0'; document.body.appendChild(input); input.select(); document.execCommand('copy'); input.remove(); done()}">复制</button></div>
</div>
<div class="collection-account-card">
<span class="collection-account-label">Gmail</span>
<span class="collection-account-id">alexxh1goog@gmail.com</span>
<div class="collection-account-footer"><span class="collection-account-note">邮箱</span><button class="collection-copy-button" type="button" data-copy="alexxh1goog@gmail.com" onclick="const text=this.dataset.copy; const done=()=>{this.textContent='已复制'; setTimeout(()=>this.textContent='复制',1200)}; if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(text).then(done)}else{const input=document.createElement('textarea'); input.value=text; input.style.position='fixed'; input.style.opacity='0'; document.body.appendChild(input); input.select(); document.execCommand('copy'); input.remove(); done()}">复制</button></div>
</div>
</section>
</section>

<section class="collection-tab-panel collection-tab-panel-device" id="collection-device">
<div class="collection-panel-head"><p>日常使用的电脑与手机。</p></div>

<nav class="collection-device-index" aria-label="设备分类索引">
<div class="collection-device-index-group"><a class="collection-device-index-region" href="#device-region-office">办公</a></div>
</nav>

<section class="collection-device-region" id="device-region-office">
<h3 class="collection-section-title">办公设备</h3>
<div class="collection-device-grid">
<div class="collection-device-card"><div class="collection-device-body"><span class="collection-device-name">华硕飞行堡垒 7</span><span class="collection-device-meta">ASUS TUF Gaming</span><span class="collection-device-role">电脑</span></div></div>
<div class="collection-device-card"><div class="collection-device-body"><span class="collection-device-name">iPhone 14 Pro</span><span class="collection-device-meta">黑色</span><span class="collection-device-role">手机</span></div></div>
<div class="collection-device-card"><div class="collection-device-body"><span class="collection-device-name">真我 GT 150W</span><span class="collection-device-meta">150W</span><span class="collection-device-role">手机</span></div></div>
</div>
</section>
</section>

<section class="collection-tab-panel collection-tab-panel-game" id="collection-game">
<div class="collection-panel-head"><p>实体盘按平台分类，支持跳转豆瓣、小黑盒和 HowLongToBeat。</p></div>

<nav class="collection-game-index" aria-label="游戏平台索引">
<div class="collection-game-index-group"><a class="collection-game-index-region" href="#game-region-switch-1">Switch 1</a></div>
<div class="collection-game-index-group"><a class="collection-game-index-region" href="#game-region-switch-2">Switch 2</a></div>
<div class="collection-game-index-group"><a class="collection-game-index-region" href="#game-region-ps4">PS4</a></div>
<div class="collection-game-index-group"><a class="collection-game-index-region" href="#game-region-ps5">PS5</a></div>
<div class="collection-game-index-group"><a class="collection-game-index-region" href="#game-region-ps5-digital">PS5 数字版</a></div>
</nav>

<!-- 新增游戏时按平台 → 分组，优先关联本地封面、豆瓣、小黑盒详情和 HowLongToBeat；没有精确条目时使用对应站内搜索入口。 -->

<section class="collection-game-region" id="game-region-switch-1">
<h3 class="collection-section-title">Switch 1</h3>
<div class="collection-game-grid">
<div class="collection-game-card"><div class="collection-game-cover-wrap"><img class="collection-game-cover" src="/blog-assets/collections/games/塞尔达传说-旷野之息.jpg" alt="塞尔达传说 旷野之息 游戏封面" loading="lazy" /></div><div class="collection-game-body"><span class="collection-game-name">塞尔达传说 旷野之息</span><span class="collection-game-year">Switch 1 · 实体盘</span><div class="collection-game-actions"><a class="collection-game-link collection-game-link-douban" href="https://www.douban.com/game/26817171/" target="_blank" rel="noopener">豆瓣</a><a class="collection-game-link collection-game-link-xhh" href="https://www.xiaoheihe.cn/game/900000069" target="_blank" rel="noopener">小黑盒</a><a class="collection-game-link collection-game-link-hltb" href="https://howlongtobeat.com/?q=The%20Legend%20of%20Zelda%20Breath%20of%20the%20Wild" target="_blank" rel="noopener">HLTB</a></div></div></div>
<div class="collection-game-card"><div class="collection-game-cover-wrap"><img class="collection-game-cover" src="/blog-assets/collections/games/塞尔达传说-王国之泪.jpg" alt="塞尔达传说 王国之泪 游戏封面" loading="lazy" /></div><div class="collection-game-body"><span class="collection-game-name">塞尔达传说 王国之泪</span><span class="collection-game-year">Switch 1 · 实体盘</span><div class="collection-game-actions"><a class="collection-game-link collection-game-link-douban" href="https://www.douban.com/game/34430168/" target="_blank" rel="noopener">豆瓣</a><a class="collection-game-link collection-game-link-xhh" href="https://www.xiaoheihe.cn/game/900011199" target="_blank" rel="noopener">小黑盒</a><a class="collection-game-link collection-game-link-hltb" href="https://howlongtobeat.com/?q=The%20Legend%20of%20Zelda%20Tears%20of%20the%20Kingdom" target="_blank" rel="noopener">HLTB</a></div></div></div>
<div class="collection-game-card"><div class="collection-game-cover-wrap"><img class="collection-game-cover" src="/blog-assets/collections/games/宝可梦朱.jpg" alt="宝可梦朱 游戏封面" loading="lazy" /></div><div class="collection-game-body"><span class="collection-game-name">宝可梦朱</span><span class="collection-game-year">Switch 1 · 实体盘</span><div class="collection-game-actions"><a class="collection-game-link collection-game-link-douban" href="https://www.douban.com/game/35784221/" target="_blank" rel="noopener">豆瓣</a><a class="collection-game-link collection-game-link-xhh" href="https://www.xiaoheihe.cn/game/900031753" target="_blank" rel="noopener">小黑盒</a><a class="collection-game-link collection-game-link-hltb" href="https://howlongtobeat.com/?q=Pokemon%20Scarlet" target="_blank" rel="noopener">HLTB</a></div></div></div>
<div class="collection-game-card"><div class="collection-game-cover-wrap"><img class="collection-game-cover" src="/blog-assets/collections/games/马里奥奥德赛.jpg" alt="马里奥奥德赛 游戏封面" loading="lazy" /></div><div class="collection-game-body"><span class="collection-game-name">马里奥奥德赛</span><span class="collection-game-year">Switch 1 · 实体盘</span><div class="collection-game-actions"><a class="collection-game-link collection-game-link-douban" href="https://www.douban.com/game/26954652/" target="_blank" rel="noopener">豆瓣</a><a class="collection-game-link collection-game-link-xhh" href="https://www.xiaoheihe.cn/game/900000070" target="_blank" rel="noopener">小黑盒</a><a class="collection-game-link collection-game-link-hltb" href="https://howlongtobeat.com/?q=Super%20Mario%20Odyssey" target="_blank" rel="noopener">HLTB</a></div></div></div>
<div class="collection-game-card"><div class="collection-game-cover-wrap"><img class="collection-game-cover" src="/blog-assets/collections/games/马里奥卡丁车-8.jpg" alt="马里奥卡丁车 8 游戏封面" loading="lazy" /></div><div class="collection-game-body"><span class="collection-game-name">马里奥卡丁车 8</span><span class="collection-game-year">Switch 1 · 实体盘</span><div class="collection-game-actions"><a class="collection-game-link collection-game-link-douban" href="https://www.douban.com/game/26954660/" target="_blank" rel="noopener">豆瓣</a><a class="collection-game-link collection-game-link-xhh" href="https://www.xiaoheihe.cn/game/900000090" target="_blank" rel="noopener">小黑盒</a><a class="collection-game-link collection-game-link-hltb" href="https://howlongtobeat.com/?q=Mario%20Kart%208%20Deluxe" target="_blank" rel="noopener">HLTB</a></div></div></div>
</div>
</section>

<section class="collection-game-region" id="game-region-switch-2">
<h3 class="collection-section-title">Switch 2</h3>
<div class="collection-game-grid">
<div class="collection-game-card"><div class="collection-game-cover-wrap"><img class="collection-game-cover" src="/blog-assets/collections/games/pokopia.jpg" alt="Pokopia 游戏封面" loading="lazy" /></div><div class="collection-game-body"><span class="collection-game-name">Pokopia</span><span class="collection-game-year">Switch 2 · 实体盘</span><div class="collection-game-actions"><a class="collection-game-link collection-game-link-douban" href="https://www.douban.com/game/37523504/" target="_blank" rel="noopener">豆瓣</a><a class="collection-game-link collection-game-link-xhh" href="https://www.xiaoheihe.cn/game/900202553" target="_blank" rel="noopener">小黑盒</a><a class="collection-game-link collection-game-link-hltb" href="https://howlongtobeat.com/?q=Pokemon%20Pokopia" target="_blank" rel="noopener">HLTB</a></div></div></div>
</div>
</section>

<section class="collection-game-region" id="game-region-ps4">
<h3 class="collection-section-title">PS4</h3>
<div class="collection-game-grid">
<div class="collection-game-card"><div class="collection-game-cover-wrap"><img class="collection-game-cover" src="/blog-assets/collections/games/只狼.jpg" alt="只狼 游戏封面" loading="lazy" /></div><div class="collection-game-body"><span class="collection-game-name">只狼</span><span class="collection-game-year">PS4 · 实体盘</span><div class="collection-game-actions"><a class="collection-game-link collection-game-link-douban" href="https://www.douban.com/game/30245105/" target="_blank" rel="noopener">豆瓣</a><a class="collection-game-link collection-game-link-xhh" href="https://www.xiaoheihe.cn/game/814380" target="_blank" rel="noopener">小黑盒</a><a class="collection-game-link collection-game-link-hltb" href="https://howlongtobeat.com/?q=Sekiro%20Shadows%20Die%20Twice" target="_blank" rel="noopener">HLTB</a></div></div></div>
<div class="collection-game-card"><div class="collection-game-cover-wrap"><img class="collection-game-cover" src="/blog-assets/collections/games/血源诅咒.jpg" alt="血源诅咒 游戏封面" loading="lazy" /></div><div class="collection-game-body"><span class="collection-game-name">血源诅咒</span><span class="collection-game-year">PS4 · 实体盘</span><div class="collection-game-actions"><a class="collection-game-link collection-game-link-douban" href="https://www.douban.com/game/26142568/" target="_blank" rel="noopener">豆瓣</a><a class="collection-game-link collection-game-link-xhh" href="https://www.xiaoheihe.cn/game/900000075" target="_blank" rel="noopener">小黑盒</a><a class="collection-game-link collection-game-link-hltb" href="https://howlongtobeat.com/?q=Bloodborne" target="_blank" rel="noopener">HLTB</a></div></div></div>
<div class="collection-game-card"><div class="collection-game-cover-wrap"><img class="collection-game-cover" src="/blog-assets/collections/games/荒野大镖客-2.jpg" alt="荒野大镖客 2 游戏封面" loading="lazy" /></div><div class="collection-game-body"><span class="collection-game-name">荒野大镖客 2</span><span class="collection-game-year">PS4 · 实体盘</span><div class="collection-game-actions"><a class="collection-game-link collection-game-link-douban" href="https://www.douban.com/game/26815212/" target="_blank" rel="noopener">豆瓣</a><a class="collection-game-link collection-game-link-xhh" href="https://www.xiaoheihe.cn/game/1174180" target="_blank" rel="noopener">小黑盒</a><a class="collection-game-link collection-game-link-hltb" href="https://howlongtobeat.com/?q=Red%20Dead%20Redemption%202" target="_blank" rel="noopener">HLTB</a></div></div></div>
</div>
</section>

<section class="collection-game-region" id="game-region-ps5">
<h3 class="collection-section-title">PS5</h3>
<div class="collection-game-grid">
<div class="collection-game-card"><div class="collection-game-cover-wrap"><img class="collection-game-cover" src="/blog-assets/collections/games/死亡搁浅-2.jpg" alt="死亡搁浅 2 游戏封面" loading="lazy" /></div><div class="collection-game-body"><span class="collection-game-name">死亡搁浅 2</span><span class="collection-game-year">PS5 · 实体盘</span><div class="collection-game-actions"><a class="collection-game-link collection-game-link-douban" href="https://www.douban.com/game/35921439/" target="_blank" rel="noopener">豆瓣</a><a class="collection-game-link collection-game-link-xhh" href="https://www.xiaoheihe.cn/game/3280350" target="_blank" rel="noopener">小黑盒</a><a class="collection-game-link collection-game-link-hltb" href="https://howlongtobeat.com/?q=Death%20Stranding%202%20On%20The%20Beach" target="_blank" rel="noopener">HLTB</a></div></div></div>
<div class="collection-game-card"><div class="collection-game-cover-wrap"><img class="collection-game-cover" src="/blog-assets/collections/games/007-first-light.jpg" alt="007 First Light 游戏封面" loading="lazy" /></div><div class="collection-game-body"><span class="collection-game-name">007 First Light</span><span class="collection-game-year">PS5 · 实体盘</span><div class="collection-game-actions"><a class="collection-game-link collection-game-link-douban" href="https://www.douban.com/game/35259036/" target="_blank" rel="noopener">豆瓣</a><a class="collection-game-link collection-game-link-xhh" href="https://www.xiaoheihe.cn/game/3768760" target="_blank" rel="noopener">小黑盒</a><a class="collection-game-link collection-game-link-hltb" href="https://howlongtobeat.com/?q=007%20First%20Light" target="_blank" rel="noopener">HLTB</a></div></div></div>
<div class="collection-game-card"><div class="collection-game-cover-wrap"><img class="collection-game-cover" src="/blog-assets/collections/games/红色沙漠.jpg" alt="红色沙漠 游戏封面" loading="lazy" /></div><div class="collection-game-body"><span class="collection-game-name">红色沙漠</span><span class="collection-game-year">PS5 · 实体盘</span><div class="collection-game-actions"><a class="collection-game-link collection-game-link-douban" href="https://www.douban.com/game/35284133/" target="_blank" rel="noopener">豆瓣</a><a class="collection-game-link collection-game-link-xhh" href="https://www.xiaoheihe.cn/game/3321460" target="_blank" rel="noopener">小黑盒</a><a class="collection-game-link collection-game-link-hltb" href="https://howlongtobeat.com/?q=Crimson%20Desert" target="_blank" rel="noopener">HLTB</a></div></div></div>
<div class="collection-game-card"><div class="collection-game-cover-wrap"><img class="collection-game-cover" src="/blog-assets/collections/games/怪物猎人物语-3.jpg" alt="怪物猎人物语 3 游戏封面" loading="lazy" /></div><div class="collection-game-body"><span class="collection-game-name">怪物猎人物语 3</span><span class="collection-game-year">PS5 · 实体盘</span><div class="collection-game-actions"><a class="collection-game-link collection-game-link-douban" href="https://www.douban.com/game/37461615/" target="_blank" rel="noopener">豆瓣</a><a class="collection-game-link collection-game-link-xhh" href="https://www.xiaoheihe.cn/game/2852190" target="_blank" rel="noopener">小黑盒</a><a class="collection-game-link collection-game-link-hltb" href="https://howlongtobeat.com/?q=Monster%20Hunter%20Stories%203%20Twisted%20Reflection" target="_blank" rel="noopener">HLTB</a></div></div></div>
<div class="collection-game-card"><div class="collection-game-cover-wrap"><img class="collection-game-cover" src="/blog-assets/collections/games/蜘蛛侠-2.jpg" alt="蜘蛛侠 2 游戏封面" loading="lazy" /></div><div class="collection-game-body"><span class="collection-game-name">蜘蛛侠 2</span><span class="collection-game-year">PS5 · 实体盘</span><div class="collection-game-actions"><a class="collection-game-link collection-game-link-douban" href="https://www.douban.com/game/35151783/" target="_blank" rel="noopener">豆瓣</a><a class="collection-game-link collection-game-link-xhh" href="https://www.xiaoheihe.cn/game/2651280" target="_blank" rel="noopener">小黑盒</a><a class="collection-game-link collection-game-link-hltb" href="https://howlongtobeat.com/?q=Marvel%27s%20Spider-Man%202" target="_blank" rel="noopener">HLTB</a></div></div></div>
<div class="collection-game-card"><div class="collection-game-cover-wrap"><img class="collection-game-cover" src="/blog-assets/collections/games/lies-of-p.jpg" alt="Lies of P 游戏封面" loading="lazy" /></div><div class="collection-game-body"><span class="collection-game-name">Lies of P</span><span class="collection-game-year">PS5 · 实体盘</span><div class="collection-game-actions"><a class="collection-game-link collection-game-link-douban" href="https://www.douban.com/game/35468391/" target="_blank" rel="noopener">豆瓣</a><a class="collection-game-link collection-game-link-xhh" href="https://www.xiaoheihe.cn/game/1627720" target="_blank" rel="noopener">小黑盒</a><a class="collection-game-link collection-game-link-hltb" href="https://howlongtobeat.com/?q=Lies%20of%20P" target="_blank" rel="noopener">HLTB</a></div></div></div>
<div class="collection-game-card"><div class="collection-game-cover-wrap"><img class="collection-game-cover" src="/blog-assets/collections/games/astro-bot.jpg" alt="Astro Bot 游戏封面" loading="lazy" /></div><div class="collection-game-body"><span class="collection-game-name">Astro Bot</span><span class="collection-game-year">PS5 · 实体盘</span><div class="collection-game-actions"><a class="collection-game-link collection-game-link-douban" href="https://www.douban.com/game/36910870/" target="_blank" rel="noopener">豆瓣</a><a class="collection-game-link collection-game-link-xhh" href="https://www.xiaoheihe.cn/game/900000084" target="_blank" rel="noopener">小黑盒</a><a class="collection-game-link collection-game-link-hltb" href="https://howlongtobeat.com/?q=Astro%20Bot" target="_blank" rel="noopener">HLTB</a></div></div></div>
</div>
</section>

<section class="collection-game-region" id="game-region-ps5-digital">
<h3 class="collection-section-title">PS5 数字版</h3>
<div class="collection-game-grid">
<div class="collection-game-card"><div class="collection-game-cover-wrap"><img class="collection-game-cover" src="/blog-assets/collections/games/gt7.jpg" alt="GT7 游戏封面" loading="lazy" /></div><div class="collection-game-body"><span class="collection-game-name">GT7</span><span class="collection-game-year">PS5 · 数字版</span><div class="collection-game-actions"><a class="collection-game-link collection-game-link-douban" href="https://www.douban.com/game/35097644/" target="_blank" rel="noopener">豆瓣</a><a class="collection-game-link collection-game-link-xhh" href="https://www.xiaoheihe.cn/game/900023508" target="_blank" rel="noopener">小黑盒</a><a class="collection-game-link collection-game-link-hltb" href="https://howlongtobeat.com/?q=Gran%20Turismo%207" target="_blank" rel="noopener">HLTB</a></div></div></div>
<div class="collection-game-card"><div class="collection-game-cover-wrap"><img class="collection-game-cover" src="/blog-assets/collections/games/黑神话悟空.jpg" alt="黑神话悟空 游戏封面" loading="lazy" /></div><div class="collection-game-body"><span class="collection-game-name">黑神话悟空</span><span class="collection-game-year">PS5 · 数字版</span><div class="collection-game-actions"><a class="collection-game-link collection-game-link-douban" href="https://www.douban.com/game/35184766/" target="_blank" rel="noopener">豆瓣</a><a class="collection-game-link collection-game-link-xhh" href="https://www.xiaoheihe.cn/game/2358720" target="_blank" rel="noopener">小黑盒</a><a class="collection-game-link collection-game-link-hltb" href="https://howlongtobeat.com/?q=Black%20Myth%20Wukong" target="_blank" rel="noopener">HLTB</a></div></div></div>
<div class="collection-game-card"><div class="collection-game-cover-wrap"><img class="collection-game-cover" src="/blog-assets/collections/games/双影奇境.jpg" alt="双影奇境 游戏封面" loading="lazy" /></div><div class="collection-game-body"><span class="collection-game-name">双影奇境</span><span class="collection-game-year">PS5 · 数字版</span><div class="collection-game-actions"><a class="collection-game-link collection-game-link-douban" href="https://www.douban.com/game/37083957/" target="_blank" rel="noopener">豆瓣</a><a class="collection-game-link collection-game-link-xhh" href="https://www.xiaoheihe.cn/game/2001120" target="_blank" rel="noopener">小黑盒</a><a class="collection-game-link collection-game-link-hltb" href="https://howlongtobeat.com/?q=Split%20Fiction" target="_blank" rel="noopener">HLTB</a></div></div></div>
<div class="collection-game-card"><div class="collection-game-cover-wrap"><img class="collection-game-cover" src="/blog-assets/collections/games/33-号远征军.jpg" alt="33 号远征军 游戏封面" loading="lazy" /></div><div class="collection-game-body"><span class="collection-game-name">33 号远征军</span><span class="collection-game-year">PS5 · 数字版</span><div class="collection-game-actions"><a class="collection-game-link collection-game-link-douban" href="https://www.douban.com/game/36919085/" target="_blank" rel="noopener">豆瓣</a><a class="collection-game-link collection-game-link-xhh" href="https://www.xiaoheihe.cn/game/1903340" target="_blank" rel="noopener">小黑盒</a><a class="collection-game-link collection-game-link-hltb" href="https://howlongtobeat.com/?q=Clair%20Obscur%20Expedition%2033" target="_blank" rel="noopener">HLTB</a></div></div></div>
<div class="collection-game-card"><div class="collection-game-cover-wrap"><img class="collection-game-cover" src="/blog-assets/collections/games/奇异人生-reunion.jpg" alt="奇异人生 reunion 游戏封面" loading="lazy" /></div><div class="collection-game-body"><span class="collection-game-name">奇异人生 reunion</span><span class="collection-game-year">PS5 · 数字版</span><div class="collection-game-actions"><a class="collection-game-link collection-game-link-douban" href="https://www.douban.com/game/38191579/" target="_blank" rel="noopener">豆瓣</a><a class="collection-game-link collection-game-link-xhh" href="https://www.xiaoheihe.cn/game/2624870" target="_blank" rel="noopener">小黑盒</a><a class="collection-game-link collection-game-link-hltb" href="https://howlongtobeat.com/?q=Life%20is%20Strange%20Reunion" target="_blank" rel="noopener">HLTB</a></div></div></div>
</div>
</section>

</section>

<section class="collection-tab-panel collection-tab-panel-album" id="collection-album">
<div class="collection-cd-wall" aria-label="流动专辑封面墙">
<div class="collection-cd-wall-stage" aria-hidden="true"></div>
</div>

<nav class="collection-album-index" aria-label="专辑地区索引">
<div class="collection-album-index-group"><a class="collection-album-index-region" href="#album-region-western">欧美</a></div>
<div class="collection-album-index-group"><a class="collection-album-index-region" href="#album-region-japan">日本</a></div>
<div class="collection-album-index-group"><a class="collection-album-index-region" href="#album-region-hktw">港台</a></div>
</nav>

<!-- 沿用原卡片结构；未确认精确豆瓣条目的作品使用歌手与作品名搜索链接。 -->

<section class="collection-album-region" id="album-region-western">
<h3 class="collection-section-title">欧美</h3>

<section class="gear-category collection-category-albums">
<h5 class="collection-artist-heading">The Chainsmokers</h5>

<div class="collection-album-grid">
<div class="collection-album-card"><div class="collection-album-cover-wrap"><img class="collection-album-cover" src="/blog-assets/collections/albums/Young.jpg" alt="Young 专辑封面" loading="lazy" /></div><div class="collection-album-body"><span class="collection-album-name">Young</span><span class="collection-album-year">2017</span><div class="collection-album-actions"><a class="collection-album-link collection-album-link-apple" href="https://music.apple.com/us/song/young/1207120543" target="_blank" rel="noopener">Apple Music</a></div></div></div>
<div class="collection-album-card"><div class="collection-album-cover-wrap"><img class="collection-album-cover" src="/blog-assets/collections/albums/Sick Boy.jpg" alt="Sick Boy 专辑封面" loading="lazy" /></div><div class="collection-album-body"><span class="collection-album-name">Sick Boy</span><span class="collection-album-year">2018</span><div class="collection-album-actions"><a class="collection-album-link collection-album-link-apple" href="https://music.apple.com/us/album/sick-boy/1445725433" target="_blank" rel="noopener">Apple Music</a></div></div></div>
<div class="collection-album-card"><div class="collection-album-cover-wrap"><img class="collection-album-cover" src="/blog-assets/collections/albums/Who Do You Love.jpg" alt="Who Do You Love 专辑封面" loading="lazy" /></div><div class="collection-album-body"><span class="collection-album-name">Who Do You Love</span><span class="collection-album-year">2019</span><div class="collection-album-actions"><a class="collection-album-link collection-album-link-douban" href="https://music.douban.com/subject/33921600/" target="_blank" rel="noopener">豆瓣</a><a class="collection-album-link collection-album-link-apple" href="https://music.apple.com/us/song/who-do-you-love/1489350828" target="_blank" rel="noopener">Apple Music</a></div></div></div>
<div class="collection-album-card"><div class="collection-album-cover-wrap"><img class="collection-album-cover" src="/blog-assets/collections/albums/High.jpg" alt="High 专辑封面" loading="lazy" /></div><div class="collection-album-body"><span class="collection-album-name">High</span><span class="collection-album-year">2022</span><div class="collection-album-actions"><a class="collection-album-link collection-album-link-douban" href="https://music.douban.com/subject/35753662/" target="_blank" rel="noopener">豆瓣</a><a class="collection-album-link collection-album-link-apple" href="https://music.apple.com/us/album/high/1637996232?i=1637996467" target="_blank" rel="noopener">Apple Music</a></div></div></div>
<div class="collection-album-card"><div class="collection-album-cover-wrap"><img class="collection-album-cover" src="/blog-assets/collections/albums/Summertime Friends.jpg" alt="Summertime Friends 专辑封面" loading="lazy" /></div><div class="collection-album-body"><span class="collection-album-name">Summertime Friends</span><span class="collection-album-year">2023</span><div class="collection-album-actions"><a class="collection-album-link collection-album-link-douban" href="https://search.douban.com/music/subject_search?search_text=Summertime+Friends&cat=1003" target="_blank" rel="noopener">豆瓣</a><a class="collection-album-link collection-album-link-apple" href="https://music.apple.com/us/album/summertime-friends/1710237078" target="_blank" rel="noopener">Apple Music</a></div></div></div>
<div class="collection-album-card"><div class="collection-album-cover-wrap"><img class="collection-album-cover" src="/blog-assets/collections/albums/Breathe.jpg" alt="Breathe 专辑封面" loading="lazy" /></div><div class="collection-album-body"><span class="collection-album-name">Breathe</span><span class="collection-album-year">2025</span><div class="collection-album-actions"><a class="collection-album-link collection-album-link-apple" href="https://music.apple.com/us/album/breathe/1844692222" target="_blank" rel="noopener">Apple Music</a></div></div></div>
</div>
</section>

<section class="gear-category collection-category-albums">
<h5 class="collection-artist-heading">ILLENIUM</h5>

<div class="collection-album-grid">
<div class="collection-album-card"><div class="collection-album-cover-wrap"><img class="collection-album-cover" src="/blog-assets/collections/albums/personal/illenium-ascend.jpg" alt="Ascend 封面" loading="lazy" /></div><div class="collection-album-body"><span class="collection-album-name">Ascend</span><span class="collection-album-year">2019</span><div class="collection-album-actions"><a class="collection-album-link collection-album-link-douban" href="https://search.douban.com/music/subject_search?search_text=ILLENIUM%20Ascend&amp;cat=1003" target="_blank" rel="noopener">豆瓣</a><a class="collection-album-link collection-album-link-apple" href="https://music.apple.com/us/album/ascend/1468053314" target="_blank" rel="noopener">Apple Music</a></div></div></div>
<div class="collection-album-card"><div class="collection-album-cover-wrap"><img class="collection-album-cover" src="/blog-assets/collections/albums/personal/illenium-fallen-embers.jpg" alt="Fallen Embers 封面" loading="lazy" /></div><div class="collection-album-body"><span class="collection-album-name">Fallen Embers</span><span class="collection-album-year">2021</span><div class="collection-album-actions"><a class="collection-album-link collection-album-link-douban" href="https://search.douban.com/music/subject_search?search_text=ILLENIUM%20Fallen%20Embers&amp;cat=1003" target="_blank" rel="noopener">豆瓣</a><a class="collection-album-link collection-album-link-apple" href="https://music.apple.com/us/album/fallen-embers/1572859144" target="_blank" rel="noopener">Apple Music</a></div></div></div>
</div>
</section>

<section class="gear-category collection-category-albums">
<h5 class="collection-artist-heading">JVKE</h5>

<div class="collection-album-grid">
<div class="collection-album-card"><div class="collection-album-cover-wrap"><img class="collection-album-cover" src="/blog-assets/collections/albums/personal/jvke-feels.jpg" alt="this is what ____ feels like (Vol. 1-4) 封面" loading="lazy" /></div><div class="collection-album-body"><span class="collection-album-name">this is what ____ feels like (Vol. 1-4)</span><span class="collection-album-year">2022</span><div class="collection-album-actions"><a class="collection-album-link collection-album-link-douban" href="https://search.douban.com/music/subject_search?search_text=JVKE%20this%20is%20what%20____%20feels%20like%20(Vol.%201-4)&amp;cat=1003" target="_blank" rel="noopener">豆瓣</a><a class="collection-album-link collection-album-link-apple" href="https://music.apple.com/us/album/this-is-what-feels-like-vol-1-4/1640157064" target="_blank" rel="noopener">Apple Music</a></div></div></div>
<div class="collection-album-card"><div class="collection-album-cover-wrap"><img class="collection-album-cover" src="/blog-assets/collections/albums/personal/jvke-her.jpg" alt="her (feat. Annika Wells &amp; Kaden Hawke) 封面" loading="lazy" /></div><div class="collection-album-body"><span class="collection-album-name">her (feat. Annika Wells &amp; Kaden Hawke)</span><span class="collection-album-year">2025</span><div class="collection-album-actions"><a class="collection-album-link collection-album-link-douban" href="https://search.douban.com/music/subject_search?search_text=JVKE%20her%20(feat.%20Annika%20Wells%20%26%20Kaden%20Hawke)&amp;cat=1003" target="_blank" rel="noopener">豆瓣</a><a class="collection-album-link collection-album-link-apple" href="https://music.apple.com/us/album/her-feat-annika-wells-kaden-hawke-single/1855570652" target="_blank" rel="noopener">Apple Music</a></div></div></div>
</div>
</section>

<section class="gear-category collection-category-albums">
<h5 class="collection-artist-heading">Justin Bieber</h5>

<div class="collection-album-grid">
<div class="collection-album-card"><div class="collection-album-cover-wrap"><img class="collection-album-cover" src="/blog-assets/collections/albums/personal/bieber-purpose.jpg" alt="Purpose 封面" loading="lazy" /></div><div class="collection-album-body"><span class="collection-album-name">Purpose</span><span class="collection-album-year">2015</span><div class="collection-album-actions"><a class="collection-album-link collection-album-link-douban" href="https://search.douban.com/music/subject_search?search_text=Justin%20Bieber%20Purpose&amp;cat=1003" target="_blank" rel="noopener">豆瓣</a><a class="collection-album-link collection-album-link-apple" href="https://music.apple.com/us/album/purpose/1440825845" target="_blank" rel="noopener">Apple Music</a></div></div></div>
<div class="collection-album-card"><div class="collection-album-cover-wrap"><img class="collection-album-cover" src="/blog-assets/collections/albums/personal/bieber-justice.jpg" alt="Justice 封面" loading="lazy" /></div><div class="collection-album-body"><span class="collection-album-name">Justice</span><span class="collection-album-year">2021</span><div class="collection-album-actions"><a class="collection-album-link collection-album-link-douban" href="https://music.douban.com/subject/35379380/" target="_blank" rel="noopener">豆瓣</a><a class="collection-album-link collection-album-link-apple" href="https://music.apple.com/us/album/justice/1556169567" target="_blank" rel="noopener">Apple Music</a></div></div></div>
</div>
</section>

<section class="gear-category collection-category-albums">
<h5 class="collection-artist-heading">Bea Miller</h5>

<div class="collection-album-grid">
<div class="collection-album-card"><div class="collection-album-cover-wrap"><img class="collection-album-cover" src="/blog-assets/collections/albums/personal/bea-not-an-apology.jpg" alt="Not an Apology 封面" loading="lazy" /></div><div class="collection-album-body"><span class="collection-album-name">Not an Apology</span><span class="collection-album-year">2015</span><div class="collection-album-actions"><a class="collection-album-link collection-album-link-douban" href="https://search.douban.com/music/subject_search?search_text=Bea%20Miller%20Not%20an%20Apology&amp;cat=1003" target="_blank" rel="noopener">豆瓣</a><a class="collection-album-link collection-album-link-apple" href="https://music.apple.com/us/album/not-an-apology/1440807223" target="_blank" rel="noopener">Apple Music</a></div></div></div>
</div>
</section>

<section class="gear-category collection-category-albums">
<h5 class="collection-artist-heading">Bruno Mars</h5>

<div class="collection-album-grid">
<div class="collection-album-card"><div class="collection-album-cover-wrap"><img class="collection-album-cover" src="/blog-assets/collections/albums/personal/bruno-24k-magic.jpg" alt="24K Magic 封面" loading="lazy" /></div><div class="collection-album-body"><span class="collection-album-name">24K Magic</span><span class="collection-album-year">2016</span><div class="collection-album-actions"><a class="collection-album-link collection-album-link-douban" href="https://search.douban.com/music/subject_search?search_text=Bruno%20Mars%2024K%20Magic&amp;cat=1003" target="_blank" rel="noopener">豆瓣</a><a class="collection-album-link collection-album-link-apple" href="https://music.apple.com/us/album/24k-magic/1161503945" target="_blank" rel="noopener">Apple Music</a></div></div></div>
</div>
</section>

<section class="gear-category collection-category-albums">
<h5 class="collection-artist-heading">Secondhand Serenade</h5>

<div class="collection-album-grid">
<div class="collection-album-card"><div class="collection-album-cover-wrap"><img class="collection-album-cover" src="/blog-assets/collections/albums/personal/secondhand-a-twist.jpg" alt="A Twist in My Story 封面" loading="lazy" /></div><div class="collection-album-body"><span class="collection-album-name">A Twist in My Story</span><span class="collection-album-year">2008</span><div class="collection-album-actions"><a class="collection-album-link collection-album-link-douban" href="https://search.douban.com/music/subject_search?search_text=Secondhand%20Serenade%20A%20Twist%20in%20My%20Story&amp;cat=1003" target="_blank" rel="noopener">豆瓣</a><a class="collection-album-link collection-album-link-apple" href="https://music.apple.com/us/album/a-twist-in-my-story/1771717116" target="_blank" rel="noopener">Apple Music</a></div></div></div>
</div>
</section>

<section class="gear-category collection-category-albums">
<h5 class="collection-artist-heading">Stars</h5>

<div class="collection-album-grid">
<div class="collection-album-card"><div class="collection-album-cover-wrap"><img class="collection-album-cover" src="/blog-assets/collections/albums/personal/stars-set-yourself-on-fire.jpg" alt="Set Yourself on Fire 封面" loading="lazy" /></div><div class="collection-album-body"><span class="collection-album-name">Set Yourself on Fire</span><span class="collection-album-year">2004</span><div class="collection-album-actions"><a class="collection-album-link collection-album-link-douban" href="https://search.douban.com/music/subject_search?search_text=Stars%20Set%20Yourself%20on%20Fire&amp;cat=1003" target="_blank" rel="noopener">豆瓣</a><a class="collection-album-link collection-album-link-apple" href="https://music.apple.com/us/album/set-yourself-on-fire/1599777709" target="_blank" rel="noopener">Apple Music</a></div></div></div>
</div>
</section>

<section class="gear-category collection-category-albums">
<h5 class="collection-artist-heading">Trent Dabbs</h5>

<div class="collection-album-grid">
<div class="collection-album-card"><div class="collection-album-cover-wrap"><img class="collection-album-cover" src="/blog-assets/collections/albums/personal/trent-positano.jpg" alt="Positano 封面" loading="lazy" /></div><div class="collection-album-body"><span class="collection-album-name">Positano</span><span class="collection-album-year">2018</span><div class="collection-album-actions"><a class="collection-album-link collection-album-link-douban" href="https://search.douban.com/music/subject_search?search_text=Trent%20Dabbs%20Positano&amp;cat=1003" target="_blank" rel="noopener">豆瓣</a><a class="collection-album-link collection-album-link-apple" href="https://music.apple.com/us/album/positano/1440610169" target="_blank" rel="noopener">Apple Music</a></div></div></div>
</div>
</section>
</section>

<section class="collection-album-region" id="album-region-japan">
<h3 class="collection-section-title">日本</h3>

<section class="gear-category collection-category-albums">
<h5 class="collection-artist-heading">Rie fu</h5>

<div class="collection-album-grid">
<div class="collection-album-card"><div class="collection-album-cover-wrap"><img class="collection-album-cover" src="/blog-assets/collections/albums/personal/rie-fu-life-is-like-a-boat.jpg" alt="Life Is Like a Boat（生如行舟） 封面" loading="lazy" /></div><div class="collection-album-body"><span class="collection-album-name">Life Is Like a Boat（生如行舟）</span><span class="collection-album-year">2004</span><div class="collection-album-actions"><a class="collection-album-link collection-album-link-douban" href="https://music.douban.com/subject/5385033/" target="_blank" rel="noopener">豆瓣</a><a class="collection-album-link collection-album-link-apple" href="https://music.apple.com/us/album/life-is-like-a-boat/1537229511?i=1537229523" target="_blank" rel="noopener">Apple Music</a></div></div></div>
<div class="collection-album-card"><div class="collection-album-cover-wrap"><img class="collection-album-cover" src="/blog-assets/collections/albums/personal/rie-fu-album.jpg" alt="Rie fu 封面" loading="lazy" /></div><div class="collection-album-body"><span class="collection-album-name">Rie fu</span><span class="collection-album-year">2005</span><div class="collection-album-actions"><a class="collection-album-link collection-album-link-douban" href="https://search.douban.com/music/subject_search?search_text=Rie%20fu%20Rie%20fu&amp;cat=1003" target="_blank" rel="noopener">豆瓣</a><a class="collection-album-link collection-album-link-apple" href="https://music.apple.com/us/album/rie-fu/1537229511" target="_blank" rel="noopener">Apple Music</a></div></div></div>
</div>
</section>

<section class="gear-category collection-category-albums">
<h5 class="collection-artist-heading">RADWIMPS</h5>

<div class="collection-album-grid">
<div class="collection-album-card"><div class="collection-album-cover-wrap"><img class="collection-album-cover" src="/blog-assets/collections/albums/personal/radwimps-weathering.jpg" alt="天气之子 封面" loading="lazy" /></div><div class="collection-album-body"><span class="collection-album-name">天气之子</span><span class="collection-album-year">2019</span><div class="collection-album-actions"><a class="collection-album-link collection-album-link-douban" href="https://search.douban.com/music/subject_search?search_text=RADWIMPS%20%E5%A4%A9%E6%B0%94%E4%B9%8B%E5%AD%90&amp;cat=1003" target="_blank" rel="noopener">豆瓣</a><a class="collection-album-link collection-album-link-apple" href="https://music.apple.com/us/album/weathering-with-you/1472726420" target="_blank" rel="noopener">Apple Music</a></div></div></div>
<div class="collection-album-card"><div class="collection-album-cover-wrap"><img class="collection-album-cover" src="/blog-assets/collections/albums/personal/radwimps-weathering-complete.jpg" alt="天气之子 Complete Version 封面" loading="lazy" /></div><div class="collection-album-body"><span class="collection-album-name">天气之子 Complete Version</span><span class="collection-album-year">2019</span><div class="collection-album-actions"><a class="collection-album-link collection-album-link-douban" href="https://music.douban.com/subject/34903437/" target="_blank" rel="noopener">豆瓣</a><a class="collection-album-link collection-album-link-apple" href="https://music.apple.com/us/album/weathering-with-you-complete-version-ep/1485833901" target="_blank" rel="noopener">Apple Music</a></div></div></div>
</div>
</section>

<section class="gear-category collection-category-albums">
<h5 class="collection-artist-heading"><span class="zh">ヨルシカ</span> Yorushika</h5>

<div class="collection-album-grid">
<div class="collection-album-card"><div class="collection-album-cover-wrap"><img class="collection-album-cover" src="/blog-assets/collections/albums/personal/yorushika-matasaburo.jpg" alt="又三郎 封面" loading="lazy" /></div><div class="collection-album-body"><span class="collection-album-name">又三郎</span><span class="collection-album-year">2021</span><div class="collection-album-actions"><a class="collection-album-link collection-album-link-douban" href="https://search.douban.com/music/subject_search?search_text=%E3%83%A8%E3%83%AB%E3%82%B7%E3%82%AB%20%E5%8F%88%E4%B8%89%E9%83%8E&amp;cat=1003" target="_blank" rel="noopener">豆瓣</a><a class="collection-album-link collection-album-link-apple" href="https://music.apple.com/jp/album/matasaburo-single/1568980595" target="_blank" rel="noopener">Apple Music</a></div></div></div>
</div>
</section>
</section>

<section class="collection-album-region" id="album-region-hktw">
<h3 class="collection-section-title">港台</h3>

<section class="gear-category collection-category-albums">
<h5 class="collection-artist-heading"><span class="zh">陈奕迅</span> Eason Chan</h5>

<div class="collection-album-grid">
<div class="collection-album-card"><div class="collection-album-cover-wrap"><img class="collection-album-cover" src="/blog-assets/collections/albums/personal/eason-u87.jpg" alt="U87 封面" loading="lazy" /></div><div class="collection-album-body"><span class="collection-album-name">U87</span><span class="collection-album-year">2005</span><div class="collection-album-actions"><a class="collection-album-link collection-album-link-douban" href="https://music.douban.com/subject/1394541/" target="_blank" rel="noopener">豆瓣</a><a class="collection-album-link collection-album-link-apple" href="https://music.apple.com/us/album/u-87/1443374875" target="_blank" rel="noopener">Apple Music</a></div></div></div>
<div class="collection-album-card"><div class="collection-album-cover-wrap"><img class="collection-album-cover" src="/blog-assets/collections/albums/personal/eason-admit-it.jpg" alt="认了吧 封面" loading="lazy" /></div><div class="collection-album-body"><span class="collection-album-name">认了吧</span><span class="collection-album-year">2007</span><div class="collection-album-actions"><a class="collection-album-link collection-album-link-douban" href="https://music.douban.com/subject/2052256/" target="_blank" rel="noopener">豆瓣</a><a class="collection-album-link collection-album-link-apple" href="https://music.apple.com/hk/album/%E8%AA%8D%E4%BA%86%E5%90%A7-hong-kong-version/1443816775" target="_blank" rel="noopener">Apple Music</a></div></div></div>
</div>
</section>

<section class="gear-category collection-category-albums">
<h5 class="collection-artist-heading"><span class="zh">陈绮贞</span> Cheer Chen</h5>

<div class="collection-album-grid">
<div class="collection-album-card"><div class="collection-album-cover-wrap"><img class="collection-album-cover" src="/blog-assets/collections/albums/personal/cheer-groupies.jpg" alt="吉他手 封面" loading="lazy" /></div><div class="collection-album-body"><span class="collection-album-name">吉他手</span><span class="collection-album-year">2002</span><div class="collection-album-actions"><a class="collection-album-link collection-album-link-douban" href="https://search.douban.com/music/subject_search?search_text=%E9%99%88%E7%BB%AE%E8%B4%9E%20%E5%90%89%E4%BB%96%E6%89%8B&amp;cat=1003" target="_blank" rel="noopener">豆瓣</a><a class="collection-album-link collection-album-link-apple" href="https://music.apple.com/us/album/%E5%90%89%E4%BB%96%E6%89%8B/152197399" target="_blank" rel="noopener">Apple Music</a></div></div></div>
<div class="collection-album-card"><div class="collection-album-cover-wrap"><img class="collection-album-cover" src="/blog-assets/collections/albums/personal/cheer-adventure.jpg" alt="华丽的冒险 封面" loading="lazy" /></div><div class="collection-album-body"><span class="collection-album-name">华丽的冒险</span><span class="collection-album-year">2005</span><div class="collection-album-actions"><a class="collection-album-link collection-album-link-douban" href="https://music.douban.com/subject/1427374/" target="_blank" rel="noopener">豆瓣</a><a class="collection-album-link collection-album-link-apple" href="https://music.apple.com/tw/album/%E8%8F%AF%E9%BA%97%E7%9A%84%E5%86%92%E9%9A%AA/818157917" target="_blank" rel="noopener">Apple Music</a></div></div></div>
</div>
</section>

<section class="gear-category collection-category-albums">
<h5 class="collection-artist-heading"><span class="zh">周柏豪</span> Pakho Chau</h5>

<div class="collection-album-grid">
<div class="collection-album-card"><div class="collection-album-cover-wrap"><img class="collection-album-cover" src="/blog-assets/collections/albums/personal/pakho-8.jpg" alt="8 封面" loading="lazy" /></div><div class="collection-album-body"><span class="collection-album-name">8</span><span class="collection-album-year">2013</span><div class="collection-album-actions"><a class="collection-album-link collection-album-link-douban" href="https://search.douban.com/music/subject_search?search_text=%E5%91%A8%E6%9F%8F%E8%B1%AA%208&amp;cat=1003" target="_blank" rel="noopener">豆瓣</a><a class="collection-album-link collection-album-link-apple" href="https://music.apple.com/us/album/8/690314403" target="_blank" rel="noopener">Apple Music</a></div></div></div>
<div class="collection-album-card"><div class="collection-album-cover-wrap"><img class="collection-album-cover" src="/blog-assets/collections/albums/personal/pakho-keep-going.jpg" alt="Keep Going 封面" loading="lazy" /></div><div class="collection-album-body"><span class="collection-album-name">Keep Going</span><span class="collection-album-year">2014</span><div class="collection-album-actions"><a class="collection-album-link collection-album-link-douban" href="https://search.douban.com/music/subject_search?search_text=%E5%91%A8%E6%9F%8F%E8%B1%AA%20Keep%20Going&amp;cat=1003" target="_blank" rel="noopener">豆瓣</a><a class="collection-album-link collection-album-link-apple" href="https://music.apple.com/us/album/keep-going/912613360" target="_blank" rel="noopener">Apple Music</a></div></div></div>
</div>
</section>
</section>

</section>

<section class="collection-tab-panel collection-tab-panel-vinyl" id="collection-vinyl">
<h3 class="collection-section-title">专辑</h3>
<div class="vinyl-grid">
<a class="vinyl-card" style="--cover:url('/blog-assets/collections/albums/personal/illenium-ascend.jpg')" href="https://music.apple.com/us/album/ascend/1468053314" target="_blank" rel="noopener"><span class="vinyl-figure"><span class="vinyl-disc"></span><img class="vinyl-sleeve" src="/blog-assets/collections/albums/personal/illenium-ascend.jpg" alt="Ascend 封套" loading="lazy" /></span><span class="vinyl-body"><span class="vinyl-name">Ascend</span><span class="vinyl-sub">ILLENIUM · 2019</span></span></a>
<a class="vinyl-card" style="--cover:url('/blog-assets/collections/albums/personal/jvke-feels.jpg')" href="https://music.apple.com/us/album/this-is-what-feels-like-vol-1-4/1640157064" target="_blank" rel="noopener"><span class="vinyl-figure"><span class="vinyl-disc"></span><img class="vinyl-sleeve" src="/blog-assets/collections/albums/personal/jvke-feels.jpg" alt="this is what ____ feels like (Vol. 1-4) 封套" loading="lazy" /></span><span class="vinyl-body"><span class="vinyl-name">this is what ____ feels like (Vol. 1-4)</span><span class="vinyl-sub">JVKE · 2022</span></span></a>
<a class="vinyl-card" style="--cover:url('/blog-assets/collections/albums/personal/bieber-purpose.jpg')" href="https://music.apple.com/us/album/purpose/1440825845" target="_blank" rel="noopener"><span class="vinyl-figure"><span class="vinyl-disc"></span><img class="vinyl-sleeve" src="/blog-assets/collections/albums/personal/bieber-purpose.jpg" alt="Purpose 封套" loading="lazy" /></span><span class="vinyl-body"><span class="vinyl-name">Purpose</span><span class="vinyl-sub">Justin Bieber · 2015</span></span></a>
<a class="vinyl-card" style="--cover:url('/blog-assets/collections/albums/personal/cheer-adventure.jpg')" href="https://music.apple.com/tw/album/%E8%8F%AF%E9%BA%97%E7%9A%84%E5%86%92%E9%9A%AA/818157917" target="_blank" rel="noopener"><span class="vinyl-figure"><span class="vinyl-disc"></span><img class="vinyl-sleeve" src="/blog-assets/collections/albums/personal/cheer-adventure.jpg" alt="华丽的冒险 封套" loading="lazy" /></span><span class="vinyl-body"><span class="vinyl-name">华丽的冒险</span><span class="vinyl-sub">陈绮贞 · 2005</span></span></a>
</div>

<h3 class="collection-section-title">原声 / OST</h3>
<div class="vinyl-grid">
<a class="vinyl-card" style="--cover:url('/blog-assets/collections/albums/personal/radwimps-weathering.jpg')" href="https://music.apple.com/us/album/weathering-with-you/1472726420" target="_blank" rel="noopener"><span class="vinyl-figure"><span class="vinyl-disc"></span><img class="vinyl-sleeve" src="/blog-assets/collections/albums/personal/radwimps-weathering.jpg" alt="天气之子 封套" loading="lazy" /></span><span class="vinyl-body"><span class="vinyl-name">天气之子</span><span class="vinyl-sub">RADWIMPS · 2019</span></span></a>
</div>
</section>
</section>
