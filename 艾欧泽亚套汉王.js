var storyContent = ﻿{"inkVersion":20,"root":[[{"#":"AUDIOLOOP: Vitality.mp3"},"^All光","\n","^乙女向","\n","^非常胡闹！","\n","^大量玩梗注意！","\n","^点击开始默认同意以上条件并答应不和博主较真哦！","\n",["ev",{"^->":"0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-0","flg":2},{"s":["^开始",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"0.11.s"},[{"#n":"$r2"}],"\n",{"->":"Start"},{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"Start":[["^你某一天梦到艾欧泽亚还有很多帅哥美女等着与你相遇。","\n","^为了将他们收入后宫，成为光之战士又算得了什么！","\n","^万饿之源：嗨，听说你要开始征服所有人了，多远大的志向！","\n","^万饿之源：别误会，我是想帮帮你。","\n","^万饿之源：在你开始之前，让你尝点甜头。","\n",["ev",{"^->":"Start.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^尝尝甜头！",{"->":"$r","var":true},null]}],["ev",{"^->":"Start.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^尝尝大口甜头！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Start.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"\n",{"->":"Haurchefant"},{"#f":5}],"c-1":["ev",{"^->":"Start.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],"\n",{"->":"Haurchefant"},{"#f":5}]}],{"#f":1}],"Haurchefant":[["^万饿之源：很好，收下这个吧！","\n","^奥尔什方 - 蓝色独角兽：挚友！没想到能在这里见到你！","\n","^奥尔什方 - 蓝色独角兽：我？我很好，没什么不舒服，你看，肚子上没有伤口。","\n","^奥尔什方 - 蓝色独角兽：倒是你，最近怎么样，现在在进行什么精彩的冒险？","\n",["ev",{"^->":"Haurchefant.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^我在征服后宫！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Haurchefant.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":"Haurchefant1"},{"#f":5}]}],{"#f":1}],"Haurchefant1":[["^奥尔什方 - 蓝色独角兽：后宫？我不是已经在里面了吗？","\n","^奥尔什方 - 蓝色独角兽：居然不是吗...","\n","^奥尔什方 - 蓝色独角兽：啊不，我没有难过，现在来正式邀请我吧！","\n",["ev",{"^->":"Haurchefant1.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^请你加入我的后宫吧！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Haurchefant1.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"HaurchefantEnd"},{"#f":5}]}],{"#f":1}],"HaurchefantEnd":[["^奥尔什方 - 蓝色独角兽：好的！","\n","^奥尔什方加入了后宫，你的身边多了一道热情的视线。","\n",["ev",{"^->":"HaurchefantEnd.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^下一位是谁呢？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"HaurchefantEnd.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"Estinien"},{"#f":5}]}],{"#f":1}],"Estinien":[["^埃斯蒂尼安 - 伊修加德战狼：哟，搭档，找我什么事？","\n","^埃斯蒂尼安 - 伊修加德战狼：后宫？那是什么？","\n","^埃斯蒂尼安 - 伊修加德战狼：嗯...我更喜欢单独行动。","\n",["ev",{"^->":"Estinien.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^你应该和我在一起，我一秒三个坠星冲。",{"->":"$r","var":true},null]}],["ev",{"^->":"Estinien.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^加入我的后宫吧，我这儿有好多烤鱿鱼。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Estinien.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"EstinienBad"},{"#f":5}],"c-1":["ev",{"^->":"Estinien.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n",{"->":"EstinienGood"},{"#f":5}]}],{"#f":1}],"EstinienBad":[["^埃斯蒂尼安 - 伊修加德战狼：是吗？那我倒要见识一下。","\n","^你被埃斯蒂尼安的八个分身捅成了筛子。","\n",["ev",{"^->":"EstinienBad.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^从赐福开始",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"EstinienBad.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"Estinien"},{"#f":5}]}],{"#f":1}],"EstinienGood":[["^埃斯蒂尼安 - 伊修加德战狼：咳嗯，可以，现在就拿出来吧。","\n","^埃斯蒂尼安加入了你的后宫，你的烤鱿鱼库存大幅削减。","\n",["ev",{"^->":"EstinienGood.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Who's Next?",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"EstinienGood.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"Aymeric"},{"#f":5}]}],{"#f":1}],"Aymeric":[["^艾默里克 - 无穷藏狐的治国日常：英雄阁下，好久不见，来喝杯茶吧。","\n","^艾默里克 - 无穷藏狐的治国日常：嗯？找我有事？","\n","^艾默里克 - 无穷藏狐的治国日常：后宫，您原来有这个计划啊。","\n","^艾默里克 - 无穷藏狐的治国日常：我猜应该已经有很多人愿意跟随您了吧？","\n",["ev",{"^->":"Aymeric.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^你也是我心的一部分。",{"->":"$r","var":true},null]}],["ev",{"^->":"Aymeric.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^可是我需要你，我愿意为你做任何事！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Aymeric.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":"AymericgGood"},{"#f":5}],"c-1":["ev",{"^->":"Aymeric.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"\n",{"->":"AymericBad"},{"#f":5}]}],{"#f":1}],"AymericBad":[["^艾默里克 - 无穷藏狐的治国日常：真的吗？","\n","^艾默里克 - 无穷藏狐的治国日常：我确实有些事需要麻烦您。","\n","^你被艾默里克安排去天穹街996，后宫计划中道崩殂。","\n",["ev",{"^->":"AymericBad.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^从赐福开始",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"AymericBad.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"Aymeric"},{"#f":5}]}],{"#f":1}],"AymericgGood":[["^艾默里克 - 无穷藏狐的治国日常：能占有您的一部分我很开心，当然，我更想要全部。","\n","^艾默里克加入了你的后宫，你身边的气氛变得很微妙。","\n",["ev",{"^->":"AymericgGood.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^下一位！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"AymericgGood.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"Twins"},{"#f":5}]}],{"#f":1}],"Twins":[["^阿莉塞 - 可爱的红色：她来了，阿尔菲诺，别看书了！","\n","^阿尔菲诺 - 可爱的蓝色：好久不见，找我们有什么事吗？","\n","^阿莉塞 - 可爱的红色：没有事也可以找我们啊！","\n","^阿莉塞 - 可爱的红色：后宫？！你...你喜欢这种东西？！","\n","^阿尔菲诺 - 可爱的蓝色：别激动，阿莉赛，她只是想和我们在一起吧。","\n","^阿莉塞 - 可爱的红色：这样...倒不是不行。","\n",["ev",{"^->":"Twins.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^加入我的后宫吧，里面的人说话都超有趣的！",{"->":"$r","var":true},null]}],["ev",{"^->":"Twins.0.13.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^加入我的后宫吧，我保证会永远和你们在一起的！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Twins.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],"\n",{"->":"TwinsBad"},{"#f":5}],"c-1":["ev",{"^->":"Twins.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.13.s"},[{"#n":"$r2"}],"\n",{"->":"TwinsGood"},{"#f":5}]}],{"#f":1}],"TwinsBad":[["^阿尔菲诺&阿莉塞 - 双倍的可爱：什么嘛，原来我们不是最重要的啊。","\n","^你因为得罪了富尔什诺，在萨雷安社会性死亡了。","\n",["ev",{"^->":"TwinsBad.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^从赐福开始",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"TwinsBad.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"Twins"},{"#f":5}]}],{"#f":1}],"TwinsGood":[["^阿莉塞 - 可爱的红色：好吧，你要对我好哦！","\n","^阿尔菲诺 - 可爱的蓝色：谢谢你邀请我。","\n","^阿莉赛和阿尔菲诺加入了你的后宫，你身边变得很热闹。","\n",["ev",{"^->":"TwinsGood.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^继续加油！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"TwinsGood.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"Thancred"},{"#f":5}]}],{"#f":1}],"Thancred":[["^桑克瑞德 - 仍有超凡魅力：别着急，小心点不要摔倒了。","\n","^桑克瑞德 - 仍有超凡魅力：你急匆匆地干什么呢？","\n","^桑克瑞德 - 仍有超凡魅力：找我？后宫？","\n","^桑克瑞德 - 仍有超凡魅力：啊...没想到会从你口中听到这个词汇。","\n","^桑克瑞德 - 仍有超凡魅力：不不，我以前也不能说是...好吧，在我还不够成熟的时候，是和这个词汇有\"些许\"关联。","\n","^桑克瑞德 - 仍有超凡魅力：好了好了别笑了，这不是重点。","\n","^桑克瑞德 - 仍有超凡魅力：重点是你为什么忽然要找我组建后宫？","\n",["ev",{"^->":"Thancred.0.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^如果没有你的话，我是不完整的. You complete me!",{"->":"$r","var":true},null]}],["ev",{"^->":"Thancred.0.15.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^因为想和所有喜欢的人在一起，你也是我的翅膀啊！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Thancred.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],"\n",{"->":"ThancredGood"},{"#f":5}],"c-1":["ev",{"^->":"Thancred.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.15.s"},[{"#n":"$r2"}],"\n",{"->":"ThancredBad"},{"#f":5}]}],{"#f":1}],"ThancredBad":[["^桑克瑞德 - 仍有超凡魅力：爱是充满独占欲的，你这样是会吃苦头的。","\n","^你在桑克瑞德的谆谆教诲下放弃了组建后宫的念头，为了不伤害任何人，你决定孤独终老。","\n",["ev",{"^->":"ThancredBad.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^从赐福开始",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"ThancredBad.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"Thancred"},{"#f":5}]}],{"#f":1}],"ThancredGood":[["^桑克瑞德 - 仍有超凡魅力：真是的...你从哪学来的这种话...","\n","^桑克瑞德 - 仍有超凡魅力：知道了，我会陪在你身边的。","\n","^桑克瑞德加入了你的后宫，你得到了无比悉心的照料。","\n",["ev",{"^->":"ThancredGood.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^还没结束",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"ThancredGood.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"Urianger"},{"#f":5}]}],{"#f":1}],"Urianger":[["^于里昂热 - 如何高情商说话：落叶捎来消息，星星唱起歌谣...啊，你怎么来了？","\n","^于里昂热 - 如何高情商说话：后宫？你说的是一个男性或女性与一众对其抱有爱情的人聚在一起的东西吗？","\n","^于里昂热 - 如何高情商说话：唔...我并不了解，所以谈不上喜恶。","\n","^于里昂热 - 如何高情商说话：只是，我不明白缘由，你是觉得寂寞了吗？","\n",["ev",{"^->":"Urianger.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^是啊，一个人非常寂寞，为了丰富生活，我想和你一起“做”有很多“有趣”的事。",{"->":"$r","var":true},null]}],["ev",{"^->":"Urianger.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^就像夜空中的月亮周围总有很多星星一样，我想让你成为我的星星！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Urianger.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":"UriangerBad"},{"#f":5}],"c-1":["ev",{"^->":"Urianger.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"\n",{"->":"UriangerGood"},{"#f":5}]}],{"#f":1}],"UriangerBad":[["^于里昂热 - 如何高情商说话：知道了，对此我倒是有不少想法，请稍等我一下，请相信，等待会是值得的。","\n","^你沐浴更衣喷香水，等待了很久之后和于里昂热打了一夜的九宫幻卡。","\n",["ev",{"^->":"UriangerBad.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^从赐福开始",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"UriangerBad.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"Urianger"},{"#f":5}]}],{"#f":1}],"UriangerGood":[["^于里昂热 - 如何高情商说话：太好了。","\n","^于里昂热 - 如何高情商说话：那么，我这颗星星会永远为你燃烧。","\n","^于里昂热加入了你的后宫，你的生活充满了诗意。","\n",["ev",{"^->":"UriangerGood.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^下一个目的地",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"UriangerGood.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"Graha"},{"#f":5}]}],{"#f":1}],"Graha":[["^古·拉哈·提亚 - 一猫两吃：你来了！","\n","^古·拉哈·提亚 - 一猫两吃：哈哈，被你发现了，没想到经历百年的历练，还是会藏不住兴奋呢。","\n","^古·拉哈·提亚 - 一猫两吃：尾巴在甩来甩去？啊！真糟糕，不过现在藏起来也有点晚了吧。","\n","^古·拉哈·提亚 - 一猫两吃：怎么了，有新的冒险需要我参加了吗？","\n","^古·拉哈·提亚 - 一猫两吃：不是吗...哈哈，的确有点失落...","\n","^古·拉哈·提亚 - 一猫两吃：嗯？你说比冒险更好玩的东西...是什么啊？","\n",["ev",{"^->":"Graha.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^加入我的后宫，成为我大爱的一部分吧！",{"->":"$r","var":true},null]}],["ev",{"^->":"Graha.0.13.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^与你在一起是比冒险更快乐的事，你不觉得吗？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Graha.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],"\n",{"->":"GrahaBad"},{"#f":5}],"c-1":["ev",{"^->":"Graha.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.13.s"},[{"#n":"$r2"}],"\n",{"->":"GrahaGood"},{"#f":5}]}],{"#f":1}],"GrahaBad":[["^古·拉哈·提亚 - 一猫两吃：可是我不想和任何人...分享...","\n","^古·拉哈·提亚 - 一猫两吃：没什么！我只是想说，这些天有那个...呃，对，课题，我必须抓紧时间完成，你可以帮帮我吗？","\n","^你被古·拉哈·提亚留在了萨雷安和他一起完成研究项目，发际线后退了一大截。","\n",["ev",{"^->":"GrahaBad.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^从赐福开始",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"GrahaBad.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"Graha"},{"#f":5}]}],{"#f":1}],"GrahaGood":[["^古·拉哈·提亚 - 一猫两吃：当然！我也觉得与你在一起可以说是...一定是最快乐的事。","\n","^古·拉哈·提亚 - 一猫两吃：所以这一次可一定要带上我啊！","\n","^古·拉哈·提亚加入了你的后宫，你同时拥有了一个充满活力的和另一个成熟稳健的爱人，赚翻了。","\n",["ev",{"^->":"GrahaGood.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^换换口味",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"GrahaGood.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"Yshtola"},{"#f":5}]}],{"#f":1}],"Yshtola":[["^雅·修特拉 - 这次不是妈妈：哼哼，我就知道是你来了。","\n","^雅·修特拉 - 这次不是妈妈：接下来，请给我一个打扰魔女看书的充分理由。","\n","^雅·修特拉 - 这次不是妈妈：后宫，呵呵呵...啊，你没有在开玩笑。","\n","^雅·修特拉 - 这次不是妈妈：我可不会帮你哦，顺便，请告诉我是谁给你灌输了这样的想法？","\n","^雅·修特拉 - 这次不是妈妈：不愿说吗...‘这不是来找我的理由？’，哦？什么？要我加入后宫？","\n",["ev",{"^->":"Yshtola.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^噢——伟大的魔女，没有你在我身边，我好冷！",{"->":"$r","var":true},null]}],["ev",{"^->":"Yshtola.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^即使失去了视力，但我相信你眼中世界一定更加闪耀吧，我想要被那双眼睛注视。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Yshtola.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"\n",{"->":"YshtolaBad"},{"#f":5}],"c-1":["ev",{"^->":"Yshtola.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],"\n",{"->":"YshtolaGood"},{"#f":5}]}],{"#f":1}],"YshtolaBad":[["^雅·修特拉 - 这次不是妈妈：是吗。","\n","^雅·修特拉 - 这次不是妈妈：这个问题解决起来想必非常轻松","\n","^雅·修特拉对你使用了血盟炽炎，你因为严重烧伤住进了ICU。","\n",["ev",{"^->":"YshtolaBad.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^从赐福开始",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"YshtolaBad.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"Yshtola"},{"#f":5}]}],{"#f":1}],"YshtolaGood":[["^雅·修特拉 - 这次不是妈妈：你想知道你是什么样子吗？","\n","^雅·修特拉 - 这次不是妈妈：呵呵，你就像我童年时在玛托雅的洞口看到的那轮月亮。","\n","^雅·修特拉加入了你的后宫，从现在开始，你得注意自己的言行了！","\n",["ev",{"^->":"YshtolaGood.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^是时候前往其他大陆了！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"YshtolaGood.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"Hien"},{"#f":5}]}],{"#f":1}],"Hien":[["^利刃飞燕 - 握在手中：英雄阁下，真是好久不见！终于想起来找我了吗！","\n","^利刃飞燕 - 握在手中：一起喝一杯..嗯？是有事相求？你拜托我的事，我怎么会拒绝啊，但讲无妨！","\n","^利刃飞燕 - 握在手中：后宫啊...的确，古时候的帝王几乎每个人都...虽然你不是皇帝或者君主，但以你的功绩和能力来说，拥有很多爱慕者再正常不过了。","\n","^利刃飞燕 - 握在手中：难道说你希望我也...不，我什么都没说。","\n","^利刃飞燕 - 握在手中：还是谈正事吧，你希望我帮你什么忙呢？","\n",["ev",{"^->":"Hien.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^我不止希望战争时你能成为我的剑，我更希望和平时你能与我一起开怀痛饮。",{"->":"$r","var":true},null]}],["ev",{"^->":"Hien.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^让我体会体会古代君王的快乐吧！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Hien.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"\n",{"->":"HienGood"},{"#f":5}],"c-1":["ev",{"^->":"Hien.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],"\n",{"->":"HienBad"},{"#f":5}]}],{"#f":1}],"HienBad":[["^利刃飞燕 - 握在手中：身为君主获得所谓“快乐”的同时，更重要的是肩膀上的责任。","\n","^飞燕说完带着你巡视多玛全境，人民的交口称赞让你自愧不如，你决定留下来好好修习帝王之术。","\n",["ev",{"^->":"HienBad.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^从赐福开始",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"HienBad.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"Hien"},{"#f":5}]}],{"#f":1}],"HienGood":[["^利刃飞燕 - 握在手中：说实话，我没有想到你会这么说。","\n","^利刃飞燕 - 握在手中：不不，我没有觉得困扰。","\n","^利刃飞燕 - 握在手中：决定了，这是我与你的约定，在世界毁灭之前，一同开怀畅饮吧！","\n","^飞燕加入了你的后宫，你有了一个随时可以依靠的臂膀。","\n",["ev",{"^->":"HienGood.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^继续享受异国风情",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"HienGood.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":"Magnai"},{"#f":5}]}],{"#f":1}],"Magnai":[["^玛格奈 - 月神狩猎者：你有随时可以觐见太阳神之子的殊荣，为此骄傲吧。","\n","^玛格奈 - 月神狩猎者：所以你有什么事，最好是重要的事，别让我后悔给你这个特权。","\n","^玛格奈 - 月神狩猎者：后宫？哼，不知廉耻，你不懂基本的道德吗？","\n","^玛格奈 - 月神狩猎者：不是我想的那样？那是什么东西？","\n","^玛格奈 - 月神狩猎者：只是大家聚在一起...听起来很普通，给我一个加入的理由。","\n",["ev",{"^->":"Magnai.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^是时候向世界播撒太阳神的光辉了！",{"->":"$r","var":true},null]}],["ev",{"^->":"Magnai.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^你一直追寻的月神，说不定正在你面前哦。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Magnai.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"\n",{"->":"MagnaiBad"},{"#f":5}],"c-1":["ev",{"^->":"Magnai.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],"\n",{"->":"MagnaiGood"},{"#f":5}]}],{"#f":1}],"MagnaiBad":[["^玛格奈 - 月神狩猎者：哼，虽然不想承认，但你说的不无道理。","\n","^玛格奈 - 月神狩猎者：好了，出发吧！","\n","^玛格奈邀请你后宫中的每个人进行草原1v1，你的后宫乱成了一团。","\n",["ev",{"^->":"MagnaiBad.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^从赐福开始",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"MagnaiBad.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"Magnai"},{"#f":5}]}],{"#f":1}],"MagnaiGood":[["^玛格奈 - 月神狩猎者：我怎么没看到？","\n","^玛格奈 - 月神狩猎者：你...什么？！","\n","^玛格奈 - 月神狩猎者：不，我...我并不厌恶你...你非常有趣，我给予你这一点肯定。","\n","^玛格奈 - 月神狩猎者：总之，我同意了。","\n","^玛格奈 - 月神狩猎者：不许问其他问题了！","\n","^玛格奈加入了你的后宫，艳阳高照，你的后宫生活变得像坐过山车。","\n",["ev",{"^->":"MagnaiGood.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^一路向北",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"MagnaiGood.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],"\n",{"->":"Jullus"},{"#f":5}]}],{"#f":1}],"Jullus":[["^尤卢斯 - 蓝色番犬：你怎么来了？","\n","^尤卢斯 - 蓝色番犬：快点进来，穿得这么少，你不觉得冷吗？","\n","^尤卢斯 - 蓝色番犬：我不是在关心你，真是的。","\n","^尤卢斯 - 蓝色番犬：我？最近的任务告一段落了，但我还不能休息，还有其他事要做。","\n","^尤卢斯 - 蓝色番犬：所以，你找我有什么事？","\n","^尤卢斯 - 蓝色番犬：加入后宫...你们艾欧泽亚人还保留着如此落后的习俗吗！","\n",["ev",{"^->":"Jullus.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^我需要你，如果你可以陪着我的话，作为交换，我会为你做任何事！",{"->":"$r","var":true},null]}],["ev",{"^->":"Jullus.0.13.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^非也！完全重新演绎！这是你从未体会过的全新版本！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Jullus.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],"\n",{"->":"JullusGood"},{"#f":5}],"c-1":["ev",{"^->":"Jullus.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.13.s"},[{"#n":"$r2"}],"\n",{"->":"JullusBad"},{"#f":5}]}],{"#f":1}],"JullusBad":[["^尤卢斯 - 蓝色番犬：你在说什么胡话！果然艾欧泽亚人还是缺乏精神教育...","\n","^尤卢斯 - 蓝色番犬：站就在这里不要走动，我去去就来。","\n","^尤卢斯为你准备了加雷马精神与道德建设教科书，你被要求在后宫的所有人面前进行检讨。","\n",["ev",{"^->":"JullusBad.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^从赐福开始",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"JullusBad.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"Jullus"},{"#f":5}]}],{"#f":1}],"JullusGood":[["^尤卢斯 - 蓝色番犬：任何事...","\n","^尤卢斯 - 蓝色番犬：你这是什么眼神啊，我没有脸红，不要胡说！","\n","^尤卢斯 - 蓝色番犬：知道了知道了，我答应你就是了，但是之后，记得来第一军团找我，说好了哦。","\n","^尤卢斯加入了你的后宫，你的作息和工作被安排得井井有条。","\n",["ev",{"^->":"JullusGood.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^闭上眼做个梦吧",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"JullusGood.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":"Emet"},{"#f":5}]}],{"#f":1}],"Emet":[["^爱梅特赛尔克 - 回首又见他：别靠这么近，有话直说。","\n","^爱梅特赛尔克 - 回首又见他：怎么了，刚才不是还很兴奋吗，怎么让你直说就这么扭捏？不要犹犹豫豫的，我没有那么多时间。","\n","^爱梅特赛尔克 - 回首又见他：后什么？","\n","^爱梅特赛尔克 - 回首又见他：什么宫？","\n","^爱梅特赛尔克 - 回首又见他：哈...我说两点...","\n","^爱梅特赛尔克 - 回首又见他：一.你们真的是野蛮人吗？","\n","^爱梅特赛尔克 - 回首又见他：二.你对自己有几斤几两完全没有概念是吗？","\n","^爱梅特赛尔克 - 回首又见他：不要一副很委屈的样子，你知道我没有说错。","\n",["ev",{"^->":"Emet.0.16.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^可我也想有一个能与你在一起的梦。",{"->":"$r","var":true},null]}],["ev",{"^->":"Emet.0.17.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^即使要说服你十次百次我也会继续的，原话奉还，你知道我没有说错。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Emet.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.16.s"},[{"#n":"$r2"}],"\n",{"->":"EmetBad"},{"#f":5}],"c-1":["ev",{"^->":"Emet.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.17.s"},[{"#n":"$r2"}],"\n",{"->":"EmetGood"},{"#f":5}]}],{"#f":1}],"EmetBad":[["^爱梅特赛尔克 - 回首又见他：有些事被称为梦是有原因的。","\n","^爱梅特赛尔克 - 回首又见他：闭上眼接着睡吧，下次做个靠谱一点的梦。","\n","^你再次陷入了沉睡，醒来之后将后宫这回事忘得一干二净了。","\n",["ev",{"^->":"EmetBad.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^从赐福开始",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"EmetBad.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"Emet"},{"#f":5}]}],{"#f":1}],"EmetGood":[["^爱梅特赛尔克 - 回首又见他：我知道了。","\n","^爱梅特赛尔克 - 回首又见他：别误会，与其被你骚扰十次百次，还是加入更容易一点。","\n","^爱梅特赛尔克 - 回首又见他：但我提前说明，不要指望我做什么奇怪的事。","\n","^爱梅特赛尔克加入了你的后宫，你每天都有五六个小时在走神。","\n",["ev",{"^->":"EmetGood.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^醒来吧！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"EmetGood.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":"Zenos"},{"#f":5}]}],{"#f":1}],"Zenos":[["^芝诺斯·耶·加尔乌斯 - 金色传说：我的挚友，告诉我，这一次你带着什么惊喜？","\n","^芝诺斯·耶·加尔乌斯 - 金色传说：是我没见过的？哦？我准备好了，出招吧。","\n","^芝诺斯·耶·加尔乌斯 - 金色传说：不是吗？","\n","^芝诺斯·耶·加尔乌斯 - 金色传说：我没有扫兴，我们还有无限的机会来打磨彼此的锋刃。","\n","^芝诺斯·耶·加尔乌斯 - 金色传说：一封邀请函？","\n","^芝诺斯·耶·加尔乌斯 - 金色传说：后宫...你是什么时候喜欢上了这种东西？","\n",["ev",{"^->":"Zenos.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^因为这份邀请是特殊的，更像是一种誓言？",{"->":"$r","var":true},null]}],["ev",{"^->":"Zenos.0.13.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^加入我的后宫吧，我保证每天都和你切磋！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Zenos.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],"\n",{"->":"ZenosGood"},{"#f":5}],"c-1":["ev",{"^->":"Zenos.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.13.s"},[{"#n":"$r2"}],"\n",{"->":"ZenosBad"},{"#f":5}]}],{"#f":1}],"ZenosBad":[["^芝诺斯·耶·加尔乌斯 - 金色传说：切磋不需要这样繁琐的程序。","\n","^芝诺斯·耶·加尔乌斯 - 金色传说：拔剑吧，只要你想，我永远都是你的对手。","\n","^你和芝诺斯大战了三天三夜，被榨干了力气，招架不住庞大的后宫，你的计划就此结束。","\n",["ev",{"^->":"ZenosBad.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^从赐福开始",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"ZenosBad.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"Zenos"},{"#f":5}]}],{"#f":1}],"ZenosGood":[["^芝诺斯·耶·加尔乌斯 - 金色传说：既然是你给予的，我接受。","\n","^芝诺斯·耶·加尔乌斯 - 金色传说：来吧，我很期待这一次你会将我带到哪里去。","\n","^芝诺斯加入了你的后宫，你的生活变得华丽又野蛮。","\n",["ev",{"^->":"ZenosGood.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^再往北走。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"ZenosGood.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"Varis"},{"#f":5}]}],{"#f":1}],"Varis":[["^瓦厉斯·佐斯·加尔乌斯 - 爷慈子孝：我肯定你独自闯进这里的勇气，但你的勇气会夺去你的性命。","\n","^瓦厉斯·佐斯·加尔乌斯 - 爷慈子孝：哦？你有个提议？","\n","^瓦厉斯·佐斯·加尔乌斯 - 爷慈子孝：不，我不会收起剑，要么就这样说，要么就闭上嘴吧。","\n","^瓦厉斯·佐斯·加尔乌斯 - 爷慈子孝：加入你的后宫？这折损尊严的事对我来说有什么利益？","\n",["ev",{"^->":"Varis.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^你的爷爷和儿子都在，加尔乌斯一家温馨团聚，多么美好的画面！",{"->":"$r","var":true},null]}],["ev",{"^->":"Varis.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^我拥有你的同时，你也拥有我，这不是很公平吗？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Varis.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":"VarisChoice1"},{"#f":5}],"c-1":["ev",{"^->":"Varis.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"\n",{"->":"VarisGood"},{"#f":5}]}],{"#f":1}],"VarisGood":[["^瓦厉斯·佐斯·加尔乌斯 - 爷慈子孝：我不否认，但我想你清楚，这可不是某种结盟。","\n","^瓦厉斯加入了你的后宫，你完成了攻略祖孙三代的壮举。","\n",["ev",{"^->":"VarisGood.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^该回到过去了！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"VarisGood.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"Themis"},{"#f":5}]}],{"#f":1}],"VarisChoice1":[["^瓦厉斯·佐斯·加尔乌斯 - 爷慈子孝：我不追究你是如何做到的，你的运气很不错，光之战士，我正好找他们有事。","\n","^瓦厉斯加入了你的后宫，随后和爱梅特赛尔克搞得水火不容，你被迫进行了有他没我有我没他的地狱选择。","\n",["ev",{"^->":"VarisChoice1.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^选择爱梅特赛尔克",{"->":"$r","var":true},null]}],["ev",{"^->":"VarisChoice1.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^选择瓦厉斯",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"VarisChoice1.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"ChoiceEmet"},{"#f":5}],"c-1":["ev",{"^->":"VarisChoice1.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":"ChoiceVaris"},{"#f":5}]}],{"#f":1}],"ChoiceVaris":[["^爱梅特赛尔克 - 回首又见他：随你吧。","\n","^爱梅特赛尔克离开了你的后宫，你从此再也没有做过梦。","\n",["ev",{"^->":"ChoiceVaris.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^该回到过去了！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"ChoiceVaris.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"Themis"},{"#f":5}]}],{"#f":1}],"ChoiceEmet":[["^瓦厉斯·佐斯·加尔乌斯 - 爷慈子孝：这果然是个错误的决定，无论是对你，还是对我。","\n","^瓦厉斯离开了后宫，你听说这些天加雷马的士兵都不太好过。","\n",["ev",{"^->":"ChoiceEmet.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^该回到过去了！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"ChoiceEmet.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"Themis"},{"#f":5}]}],{"#f":1}],"Themis":[["^特弥斯 - Say My Name：我的天星，没想到这一次，你还是从天而降，倒是没有辜负我给你的这个名字。","\n","^特弥斯 - Say My Name：很抱歉，万魔殿的事还没有更多进展。","\n","^特弥斯 - Say My Name：不是因为这个，是专门来找我的？","\n","^特弥斯 - Say My Name：有什么我可以帮助你的地方吗？我不能保证一定会按照你的想法行事，即使如此也要拜托我吗？","\n","^特弥斯 - Say My Name：后宫？...恕我直言，这不是个好主意。","\n",["ev",{"^->":"Themis.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":"ChoiceEmet"},{"CNT?":"VarisGood"},"||","/ev",{"*":".^.^.c-0","flg":3},{"s":["^可是爱梅特赛尔克和他的孙子快打起来了，气氛非常紧张！",{"->":"$r","var":true},null]}],["ev",{"^->":"Themis.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^就当作是一种经验的积累，这可是一出前无古人后无来者的修罗场啊！",{"->":"$r","var":true},null]}],["ev",{"^->":"Themis.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^你有什么更好的主意吗？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Themis.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"\n",{"->":"ThemisReq"},{"#f":5}],"c-1":["ev",{"^->":"Themis.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],"\n",{"->":"ThemisGood"},{"#f":5}],"c-2":["ev",{"^->":"Themis.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],"\n",{"->":"ThemisBad"},{"#f":5}]}],{"#f":1}],"ThemisBad":[["^特弥斯 - Say My Name：要解决这些矛盾的话，最简单的方法就是遵循你的内心，你希望选择谁呢？","\n","^在特弥斯的循循善诱下，你决定断情绝爱，做一个不惹尘埃的世外高人。","\n",["ev",{"^->":"ThemisBad.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^从赐福开始",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"ThemisBad.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"Themis"},{"#f":5}]}],{"#f":1}],"ThemisGood":[["^特弥斯 - Say My Name：我赞成你的想法，但将他们当作练习的对象，真的可以吗？","\n","^特弥斯 - Say My Name：他们并不介意？呵呵，这还真是有趣。","\n","^特弥斯加入了你的后宫，你的生活和平了很多。","\n",["ev",{"^->":"ThemisGood.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^继续向前走",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"ThemisGood.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"Hades"},{"#f":5}]}],{"#f":1}],"ThemisReq":[["^特弥斯 - Say My Name：听起来你很需要一个调停者...","\n","^特弥斯 - Say My Name：我答应你了，可是你也要答应我，要好好和每个人相处。","\n","^特弥斯 - Say My Name：因为对每个人来说，你都是独一无二的，这一点我非常有自信。","\n","^特弥斯 - Say My Name：毕竟对我来说，你也...","\n","^特弥斯加入了你的后宫，你的生活和平了许多。","\n",["ev",{"^->":"ThemisReq.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^继续向前走",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"ThemisReq.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"\n",{"->":"Hades"},{"#f":5}]}],{"#f":1}],"Hades":[["^哈迪斯 - 这样下去会有皱眉纹：你还没离开啊？","\n","^哈迪斯 - 这样下去会有皱眉纹：存在竟然还算稳定，我劝你还是快回到你的世界去，我没法保证你在这里待太久还能保持现状。","\n","^哈迪斯 - 这样下去会有皱眉纹：找我有事？我很累，你自己解决不了吗？","\n","^哈迪斯 - 这样下去会有皱眉纹：唉...说吧。","\n","^哈迪斯 - 这样下去会有皱眉纹：加入你的后宫，你在开玩笑吗？","\n","^哈迪斯 - 这样下去会有皱眉纹：不是普通的后宫？好了，打住，我不想知道详细内容。","\n","^哈迪斯 - 这样下去会有皱眉纹：别这样看我，没有用的。","\n",["ev",{"^->":"Hades.0.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":"ChoiceEmet"},{"CNT?":"VarisGood"},"||","/ev",{"*":".^.^.c-0","flg":3},{"s":["^我爱着未来的你，也爱着过去的你，那么当下的你，真的不和我走吗？",{"->":"$r","var":true},null]}],["ev",{"^->":"Hades.0.15.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^研究人类的爱与恨对未来的发展是很有帮助的！",{"->":"$r","var":true},null]}],["ev",{"^->":"Hades.0.16.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^哈迪斯，拜托你了，这对我真的很重要！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Hades.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],"\n",{"->":"HadesReq"},{"#f":5}],"c-1":["ev",{"^->":"Hades.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.15.s"},[{"#n":"$r2"}],"\n",{"->":"HadesBad"},{"#f":5}],"c-2":["ev",{"^->":"Hades.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.16.s"},[{"#n":"$r2"}],"\n",{"->":"HadesGood"},{"#f":5}]}],{"#f":1}],"HadesBad":[["^哈迪斯 - 这样下去会有皱眉纹：那就向我证明吧。","\n","^你被迫在厄尔庇斯写了一个星期的研究报告，完全没有时间谈恋爱了。","\n",["ev",{"^->":"HadesBad.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^从赐福开始",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"HadesBad.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"Hades"},{"#f":5}]}],{"#f":1}],"HadesGood":[["^哈迪斯 - 这样下去会有皱眉纹：只是一天的话...勉强答应你吧。","\n","^哈迪斯 - 这样下去会有皱眉纹：仅此一天，不要得寸进尺。","\n","^哈迪斯加入了你的后宫，你没有太多变化，他的表情倒是轻松了不少，","\n",["ev",{"^->":"HadesGood.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^是时候回去了。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"HadesGood.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"theend"},{"#f":5}]}],{"#f":1}],"HadesReq":[["^哈迪斯 - 这样下去会有皱眉纹：带路吧...","\n","^哈迪斯 - 这样下去会有皱眉纹：真没办法，无论什么时候都躲不掉你这家伙。","\n","^哈迪斯加入了你的后宫，你幸运地成为了他的麻烦。","\n",["ev",{"^->":"HadesReq.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":"ThemisReq"},{"CNT?":"VarisGood"},"&&","/ev",{"*":".^.^.c-0","flg":3},{"s":["^好像不远处还有一个人。",{"->":"$r","var":true},null]}],["ev",{"^->":"HadesReq.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^是时候回去了。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"HadesReq.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"Hythlodaeus"},{"#f":5}],"c-1":["ev",{"^->":"HadesReq.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n",{"->":"theend"},{"#f":5}]}],{"#f":1}],"Hythlodaeus":[["^希斯拉德 - 用鳃呼吸：我没想到还会在这里见到你，你可真是令人意外。","\n","^希斯拉德 - 用鳃呼吸：哎呀哎呀，坐下来慢慢说。","\n","^希斯拉德 - 用鳃呼吸：后宫？哈哈哈哈，我没有在嘲笑你，只是觉得很有意思。","\n","^希斯拉德 - 用鳃呼吸：你和她真的是一模一样，只要是有趣的事就要去尝试一下。","\n","^希斯拉德 - 用鳃呼吸：你希望我也加入？嗯——该怎么办呢？","\n",["ev",{"^->":"Hythlodaeus.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^哈迪斯也在哦！",{"->":"$r","var":true},null]}],["ev",{"^->":"Hythlodaeus.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^我没有什么可以用来吸引你的条件。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Hythlodaeus.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"\n",{"->":"HythlodaeusBad"},{"#f":5}],"c-1":["ev",{"^->":"Hythlodaeus.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],"\n",{"->":"HythlodaeusGood"},{"#f":5}]}],{"#f":1}],"HythlodaeusBad":[["^希斯拉德 - 用鳃呼吸：是吗，只有我或者他也不够吗？","\n","^希斯拉德 - 用鳃呼吸：虽然我不想放弃，但更不想用这种方式竞争呢。","\n","^希斯拉德拒绝了你的提议，你只好独自离开。","\n",["ev",{"^->":"HythlodaeusBad.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^从赐福开始",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"HythlodaeusBad.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"Hythlodaeus"},{"#f":5}]}],{"#f":1}],"HythlodaeusGood":[["^希斯拉德 - 用鳃呼吸：只是单纯地想要得到我啊，真贪心啊。","\n","^希斯拉德 - 用鳃呼吸：如果是你的话，说不定能实现这样野心...","\n","^希斯拉德加入了你的后宫，你得到了所有你想得到的人。","\n",["ev",{"^->":"HythlodaeusGood.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^是时候回去了",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"HythlodaeusGood.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"goodending"},{"#f":5}]}],{"#f":1}],"goodending":["^你回到了开始的地方，唯一不同的是，你被爱包裹着。","\n","^桑克瑞德为你下厨，于里昂热小声吟诗，雅·修特拉正在喝茶，飞燕在教双胞胎和古·拉哈·提亚如何玩多玛方城战。","\n","^奥尔什方，玛格奈，与埃斯蒂尼安在院子里切磋伸手，尤卢斯跟着学了两招，芝诺斯握着刀站在旁边，时不时看你一眼。","\n","^哈迪斯和爱梅特赛尔克彻夜长谈了一番，你听特弥斯说，他们只是起初有点尴尬，并没有什么矛盾，剩下的交给他就好。你很庆幸有一个调停者爱着你。","\n","^希斯拉德和所有人都很聊得来，甚至包括瓦厉斯和芝诺斯，他记下了这些人的故事，似乎有写小说的计划。","\n","^你不再招募后宫，你已经拥有了满当当的幸福，这是属于你的Happily Ever After","\n","end",{"#f":1}],"theend":["^你回到了开始的地方，唯一不同的是，你的身边多了许多身影。","\n","^桑克瑞德为你下厨，于里昂热小声吟诗，雅·修特拉正在喝茶，飞燕在教双胞胎和古·拉哈·提亚如何玩多玛方城战。","\n","^奥尔什方，玛格奈，与埃斯蒂尼安在院子里切磋伸手，尤卢斯跟着学了两招，芝诺斯握着刀站在旁边，时不时看你一眼。","\n","^艾默里克找了本书，意外地和瓦厉斯聊起了书中的内容。","\n","^爱梅特赛尔克和哈迪斯躲着对方，但总归是会碰面的，这时候就轮到特弥斯出场了。","\n","^你感叹生活可真幸福啊，就在这时...","\n","^万饿之源：怎么样，你满足了吗，你做完了所有的事吗？","\n","^万饿之源：真的吗，你确定？","\n","end",{"#f":1}],"#f":1}],"listDefs":{}};