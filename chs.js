/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Beggar": "乞丐",
    "Buy Max": "购买最大",
    "Card Packs": "卡包",
    "Cards & Catapults Idle": "卡牌弹射器放置",
    "cards for": "卡牌花费",
    "Dirt Pack": "泥土包",
    "Game icons provided by": "游戏图标来源",
    "game-icons.net": "game-icons.net",
    "gold": "金子",
    "Gold": "金子",
    "Help": "帮助",
    "Next at": "下一个在",
    "Options": "选项",
    "Person": "人",
    "Prestige to get": "声望以获得",
    "Renown": "名声",
    "Stone Pack": "石头包",
    "under": "以下",
    "You need to enable JavaScript to run this app.": "您需要启用 JavaScript 才能运行此应用程序。",
    "Your Cards": "您的卡牌",
    "Undiscovered Common": "未发现的常见卡牌",
    "Undiscovered Rare": "未发现的稀有卡牌",
    "Undiscovered Ultra Rare": "未发现的超级稀有卡牌",
    "Food Drain": "食物消耗",
    "Mastery Bonus": "精通奖励",
    "Tier": "层级",
    "1 upgrade for": "1 次升级",
    "Auto-save every": "自动保存每",
    "Bronze Age Pack": "青铜时代包",
    "Complete Reset": "完成重置",
    "Copied to Clipboard": "已复制到剪贴板",
    "Import/Export": "导入/导出",
    "Load": "加载",
    "Manual controls": "手动控制",
    "Next save in": "下次保存于",
    "Packs": "包",
    "prestige points.": "声望点。",
    "Prestige Upgrades": "声望升级",
    "Return To Grid": "返回网格",
    "Save Data": "保存数据",
    "Saving and Loading Settings": "保存和加载设置",
    "seconds?": "秒？",
    "seconds.": "秒。",
    "Stone Age Pack": "石器时代包",
    "Upgrades": "升级",
    "upgrades left in pack": "升级剩余在包里面",
    "View Prestige Upgrades": "查看声望升级",
    "Berries": "浆果",
    "Building": "建筑",
    "Cooldown": "冷却",
    "Food": "食物",
    "Food capacity": "食物容量",
    "Generates Rat Snack cards nearby every 20 seconds.": "每 20 秒在附近生成鼠粮卡牌。",
    "Improves all nearby Person cards by 20%.": "将附近所有的人类卡牌提升 20%。",
    "Mushrooms": "蘑菇",
    "Produces 0.1 Gold/s for each Mushrooms or Forest or empty tile nearby, in all directions": "在各个方向为附近的每个蘑菇或森林或空地块产生 0.1 金/秒",
    "Produces 0.25 Gold/s for each Person nearby": "为附近的每个人产生 0.25 黄金/秒",
    "Rat Den": "鼠洞",
    "Rat Snack": "鼠粮",
    "(reserved)": "(保留)",
    "Forest": "森林",
    "Produces 1 Wood/s": "生产 1 木头/秒",
    "Resource": "资源",
    "Wood": "木头",
    "Automatically replaces food anywhere on the grid every 5 seconds for 1 Wood.": "每 5 秒自动替换网格上任意位置的食物，获得 1 个木材。",
    "Campfire": "营火",
    "Lumberjack": "伐木工",
    "You may notice that when food is completely used up it sometimes remains as faded out. In this state the card is just a placeholder for being automatically replaced. Some cards like the campfire will automatically place food cards into these tiles. Cards that generate cards adjacent to them such as Rat Den or Forager will not override these tiles but they can place cards here that match the reservation. A tile can only be reserved this way by manually placing cards.": "您可能会注意到，当食物完全用完时，它有时会保持淡出状态。 在这种状态下，卡片只是一个自动替换的占位符。 一些像篝火这样的卡片会自动将食物卡片放入这些瓷砖中。 生成与其相邻的卡片（例如 鼠洞 或 觅食者）的卡片不会覆盖这些图块，但它们可以在此处放置与预订匹配的卡片。 只能通过手动放置卡片来保留瓷砖。",
    "": "",
    "You'll find that most person cards (Beggars and Peasants) and some special cards will have a food drain stat. This is the rate at which they eat food and it's always listed as per second. Cards generally eat food that is adjacent to them (orthogonally) and will eat food from all those cards at an equal rate.": "你会发现大多数人卡（乞丐和农民）和一些特殊卡都会有食物流失统计。 这是他们吃食物的速度，它总是按每秒列出。 卡片通常会吃与其相邻的食物（正交），并且会以相同的速度吃掉所有这些卡片中的食物。",
    "Some cards mention \"improving\" other cards. This means to increase their production by that amount or to speed up their abilities by that amount. Production bonuses are applied multiplicatively. You can tell if a card is apply a bonus to another card by hovering over the bonus applying card. Cards that it's applying a bonus to will be highlighted green.": "有些卡片提到“改进”其他卡片。 这意味着将他们的产量增加该数量或将其能力提高该数量。 生产奖金是乘法应用的。 您可以通过将鼠标悬停在奖金申请卡上来判断一张卡是否正在向另一张卡申请奖金。 它应用奖金的卡将以绿色突出显示。",
    "Some cards will constantly produce cards for free. Generally they place these cards in adjacent tiles (orthogonally) but sometimes they send them straight to your inventory such as with the Pig Pen. If all adjacent tiles are occupied the produced card will go into the inventory.": "有些卡片会不断地免费制作卡片。 通常他们将这些卡片放在相邻的瓷砖中（正交），但有时他们会直接将它们发送到您的库存中，例如使用猪圈。 如果所有相邻的瓷砖都被占用，则生产的卡片将进入库存。",
    "in the form of a decimal number. Ex. If you remove a food card at half capacity it will be returned to your inventory as 0.5 of a card. When placing a food card you can place that fraction of a card and it will place it at the remaining capacity.": "以十进制数的形式。 例如 如果您取出一半容量的食物卡，它将作为 0.5 张卡退回到您的库存中。 放置食物卡时，您可以放置​​卡片的那一部分，它将以剩余容量放置。",
    "Each mastery level increases the bonus to all the card's abilities. This includes speeding up a card's cooldown, resource generation, food capacity and the bonuses it applies. It does not increase the amount of cards produced and does not reduce how much food a card consumes.": "每个精通等级都会增加卡牌所有能力的加成。 这包括加快卡片的冷却时间、资源生成、食物容量和它应用的奖金。 它不会增加卡片的产量，也不会减少卡片消耗的食物量。",
    ". If a card is already in that space it will": ".如果一张卡片已经在那个空间里，它会",
    "¼ the speed": "¼ 的速度",
    "A Beggar eats food at 0.2 units per second so in the first screenshot it will eat that food card at 0.2 units per second. In the second since it's surrounded by 4 food cards each will be drained at": "乞丐以每秒 0.2 个单位的速度吃食物，因此在第一个屏幕截图中，它会以每秒 0.2 个单位的速度吃掉那张食物卡牌。在第二个中，因为它被 4 张食物卡包围，每张食物卡将在",
    "and the existing card will": "现有的卡将",
    "Bonuses": "奖金",
    "Card Mastery": "卡牌掌握",
    "Card Production": "卡片制作",
    "Cards that Produce Cards": "产生卡片的卡片",
    "Controls": "控件",
    "Ex. In these screenshots we have a Beggar next to one food card and another Beggar surrounded by food cards.": "前任。在这些截图中，我们在一张食物卡旁边有一个乞丐，另一个被食物卡包围的乞丐。",
    "go back to your inventory": "返回您的库存",
    "Help tips": "帮助提示",
    "last 4 times as long.": "持续4小时。",
    "left clicking on the grid": "左键单击网格",
    "Mastery levels are permanent, they persist through prestiges.": "精通等级是永久的，它们通过声望持续存在。",
    "Once unlocked each card in the standard grid can be upgraded permanently by sacrificing cards. To access the card mastery modal click the mastery button to the left of the card while hovering it.": "一旦解锁标准网格中的每张卡，就可以通过牺牲卡来永久升级。要访问卡片掌握模式，请在将卡片悬停时单击卡片左侧的掌握按钮。",
    "or 0.05 units per second. This means that each food card will": "或每秒 0.05 个单位。这意味着每张食物卡都会",
    "Produces 0.2 Gold/s for each Forest nearby, in all directions and Improves all nearby Forest cards by 20%.": "为附近的每个森林在各个方向产生 0.2 金币/秒，并将附近的所有森林卡片提高 20%。",
    "replace it": "代替它",
    "Reserved Food Slots": "预留食物槽",
    "retain its remaining capacity": "保留其剩余容量",
    "right click it": "右键单击它",
    "To place a card select it by clicking on it then": "要放置卡片，请单击它，然后将其选中",
    "To remove a card from the grid you": "要从网格中删除一张卡片，您",
    "When removing a food card it will": "取出食物卡时，它会",
    "Bread": "面包",
    "Improves all nearby Person cards by 100%.": "将附近的所有人物卡提升 100%。",
    "Just food, that's it.": "只是食物，仅此而已。",
    "Lumbermill": "木材厂",
    "Meat Haunch": "肉腿",
    "Sells 0.5 Wood/s for 2 Gold/s for each adjacent forest, in all directions": "以 2 金子/秒 的价格在各个方向以 2 金子/秒 的价格出售 0.5 木头/秒",
    "Bard": "诗人",
    "Produces 2 Renown/s for each Person nearby, in all directions": "为附近的每个人在各个方向产生 2 名声/秒",
    "Forager": "觅食者",
    "Generates Meat Haunch cards  every 5 seconds while consuming food.": "食用食物时每 5 秒生成一次肉腿卡牌。",
    "Peasant": "农夫",
    "Pig Pen": "猪圈",
    "Produces 3 Gold/s except when near low tier cards. When not fed it's production is reduced to 1.": "产生 3 金币/秒，除非在低等级卡附近。 当不喂食时，它的产量减少到 1。",
    "Generates Mushrooms or Berries cards nearby when next to a forest every 10 seconds.": "每 10 秒在靠近森林时在附近生成蘑菇或浆果卡片。",
    "(disabled)": "(已禁用)",
    "Back to Grid and Reset": "返回网格和重置",
    "Prestige Packs": "声望包",
    "A prestige pack is similar to a regular card pack except that there is a finite number of cards in it. The cards have been shuffled so you will acquire them in a random order. You can also refund cards you find but it puts the card back in the pack and shuffles it again.": "声望包类似于普通卡包，只是其中的卡牌数量有限。 卡片已被洗牌，因此您将以随机顺序获得它们。 您也可以退还找到的卡，但它会将卡放回包中并再次洗牌。",
    "+1 Beggar on reset": "+1 乞丐重置",
    "+1 Rat Den on reset": "重置时 +1 鼠窝",
    "+2 Beggar on reset": "+2 乞丐重置",
    "CC BY 3.0": "抄送 3.0",
    "Get a Rat Den at the start of each game.": "在每场游戏开始时获得一个鼠洞。",
    "Get more Beggars at the start of each game.": "在每场游戏开始时获得更多的乞丐。",
    "Hobo Village": "流浪汉村",
    "Ratz!": "Ratz！",
    "Return for": "退还",
    "Returns the upgrade back to its pack and refunds some prestige points.": "将升级返回其包并退还一些声望点。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Produces (.+) Gold\/s for each Forest nearby, in all…ions and Improves all nearby Forest cards by 20\%.$/, '在所有离子中，为附近的每个森林产生 $1 金子\/秒，并提高附近所有森林卡牌的20\%。'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^Produces ([\d\.,]+) Gold\/s.$/, '产生 $1 金子\/秒。'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);