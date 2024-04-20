import{a as p}from"./result_hash-CFfFGu58.js";import{_ as m,r as _,o as l,c as r,g as f,w as v,T as w,a as e,h as b,v as y,t as u,n as d,p as g,i as S}from"./index-SQxJEC7n.js";const k=[{index:1,question:"回過神後，你發現自己置身於一個古老的村莊，村莊中央有一個大火堆，周圍圍繞著各種原始的工具和裝備。兩個村民走過來，一個手持木杖，一個背著一個麻袋。他們邀請你加入他們的談話。你的選擇是：",options_A:{text:"馬上加入，跟當地人聊天才能知道這裡是哪裡",type:{position:0,value:1}},options_B:{text:"我再到處晃晃，觀察附近環境好了",type:{position:0,value:0}}},{index:2,question:"當你還沒熟悉完村莊，電話又響了，你穿越到了一個未來的科技世界，城市裡光彩奪目的高樓大廈林立，人們穿梭在各種高科技裝置之間。一位科學家邀請你參觀他的實驗室，向你展示了一個令人驚嘆的發明，你覺得很有趣的地方可能是？",options_A:{text:"這個科技產品非常縝密、精細，好想知道他是怎麼被設計的！",type:{position:1,value:1}},options_B:{text:"這個發明未來可以應用的地方很廣，好想帶回家用！",type:{position:1,value:0}}},{index:3,question:"參觀完實驗室後，你被帶到一個古老的神廟中，神秘的氛圍籠罩著你，你感受到周圍的文化和宗教的氣息。一位長者向你提出了一個重要的決定，你在不久的將來需要做出選擇，你會怎麼選呢？",options_A:{text:"依照邏輯和客觀事實",type:{position:2,value:0}},options_B:{text:"依照自己的價值觀和他人感受",type:{position:2,value:1}}},{index:4,question:"長老聽完你的想法後，決定把你當作祭祀品，送到了外星球當祭司，這裡的環境與地球截然不同，你必須快速適應周圍的一切。一個外星生物和你展開了溝通，希望你以地球人的觀點，幫他們解決問題，這個挑戰會根據你面對任務的應對方式而改變，你覺得自己更傾向於？",options_A:{text:"有計劃和組織",type:{position:3,value:1}},options_B:{text:"靈活和隨性",type:{position:3,value:0}}},{index:5,question:"外星生物給你的挑戰是要思考如何在他們星球推廣藝術，你決定要怎麼幫他們執行這個任務呢？",options_A:{text:"開始提供很多地球上的藝術內容，行動力超強的開始組織，所有藝文活動都是從實作形成的！",type:{position:1,value:0}},options_B:{text:"先請他們調查這個星球的藝文發展史，開始閱讀，了解他們的星球狀況",type:{position:1,value:1}}},{index:6,question:"你開始可以接觸外星團隊，跟他們一起認識他們的工作，你發現你更喜歡做什麼工作？",options_A:{text:"外星人直接給你五個外星部員，讓你帶領他們做你想做的事。",type:{position:2,value:0}},options_B:{text:"在部門中提供地球人的思考邏輯，發揮創意，告訴他們遇到問題可以怎麼做。",type:{position:2,value:1}}},{index:7,question:"你跟這個星球的人相處良好，經過共事一段時間後，你好像融入在他們之中了，但外星主管始終沒跟你說你要怎麼回地球，你心裡會怎麼想？",options_A:{text:"我應該要找時間跟他們談談我未來會怎麼被處置了",type:{position:3,value:1}},options_B:{text:"沒事啦隨遇而安，他們這麼喜歡我，我會好好的！",type:{position:3,value:0}}}],T={openingTitle:"有天你突然發現自己身處一個神祕的房間，房間很空曠，只有在一個美式鄉村木桌和放在上面的電話，忽然桌上電話響起，你走進一看，發現來電顯示上寫著：「穿越時空」。你要接起來嗎？",hintTitle:"請根據每個問題選擇最符合您的選項，並勾選該選項前的方括號。",closingTitle:"完成測驗後，你發現自己已經回到了那個空曠的房間，手中的電話不再響起，一切都像夢境一樣奇幻。"},h={topic:k,title:T},B="/assets/點擊穿越時空-xIZXvuna.png",A="/assets/screen-WdlMl_H7.png",j={data(){return{showTestPage:!1,animateRefresh:!0,option1Selected:!1,option2Selected:!1,startTime:-1,topic:{index:0,question:"",options_A:{text:"",type:{position:-1,value:-1}},options_B:{text:"",type:{position:-1,value:-1}}},answers:[]}},methods:{initTestPage(){this.topic=h.topic[this.topic.index],this.showTestPage=!0,this.startTime=Date.now()},nextQuestion(){this.option1Selected?this.answers.push({usedTime:Date.now()-this.startTime,type:this.topic.options_A.type}):this.option2Selected&&this.answers.push({usedTime:Date.now()-this.startTime,type:this.topic.options_B.type}),this.option1Selected=!1,this.option2Selected=!1,this.startTime=Date.now(),this.animateRefresh=!1,setTimeout(()=>{this.topic.index<h.topic.length?this.topic=h.topic[this.topic.index]:this.caculateResult(),setTimeout(()=>{this.animateRefresh=!0},300)},300)},caculateResult(){for(var i=[[],[],[],[]],t=0;t<this.answers.length;t++)i[this.answers[t].type.position].push({value:this.answers[t].type.value,usedTime:this.answers[t].usedTime});for(var o=[-1,-1,-1,-1],t=0;t<4;t++)i[t].length===1||i[t][0].value===i[t][1].value||i[t][0].usedTime<i[t][1].usedTime?o[t]=i[t][0].value:o[t]=i[t][1].value;let x=o[0].toString()+o[1].toString()+o[2].toString()+o[3].toString();for(var s="undefined",t=0;t<p.result.length;t++)if(p.result[t].type===x){s=p.result[t].hash;break}_.push({path:"/result",hash:"#"+s})}}},c=i=>(g("data-v-b513ae61"),i=i(),S(),i),q={class:"explore"},C={key:0,class:"enterPage"},P={class:"bg-gradient-to-br from-white to-[#F6F800] h-screen flex flex-col items-center justify-center"},D=c(()=>e("div",{class:"flex justify-center items-center mb-5"},[e("div",{class:"flex justify-center items-center"},[e("p",{class:"text-black text-xl max-w-[70%] text-left"}," 有天你突然發現自己身處一個神祕的房間，房間很空曠，只有在一個褐色美式鄉村木桌和放在上面的電話，忽然桌上電話響起，你走進一看，發現來電顯示上寫著：「穿越時空」。你要接起來嗎？ ")])],-1)),R={class:"flex justify-center items-center"},F={key:1,class:"testPage"},I={class:"bg-gradient-to-br from-white to-[#F6F800] h-screen flex flex-col items-center justify-center"},N={class:"flex justify-center items-center"},Q={class:"relative bg-black w-[80vw] h-auto rounded-3xl flex items-center justify-center"},V=c(()=>e("p",{class:"absolute top-0 mt-1 text-white text-xl max-w-[250px] text-center"},"NTU Art Fest",-1)),E={class:"relative bg-[#C7D8C9] w-[70vw] h-auto min-h-[12rem] rounded-3xl overflow-hidden m-8 flex items-center"},H=c(()=>e("img",{src:A,class:"absolute w-full h-full transform scale-150 opacity-20"},null,-1)),z={class:"relative left-[5%] right-[5%] top-[5%] bottom-[5%] text-black text-l max-w-[90%] text-left mt-2 mb-2"},M=c(()=>e("div",{class:"flex justify-start items-left w-full pl-[10vw] pt-4 ml-2"},[e("div",{class:"bg-black w-[40px] h-[17px] rounded-[5px] mr-2 relative triangle-up"}),e("div",{class:"bg-black w-[40px] h-[17px] rounded-[5px] relative triangle-right"})],-1)),U={class:"pt-4"},W={class:"max-w-[90%] text-left mt-2 mb-2"},X={class:"pt-3"},Z={class:"max-w-[90%] text-left mt-2 mb-2"},G={class:"pt-4"},J=["disabled"],K={key:0},L={key:1};function O(i,t,o,x,s,a){return l(),r("div",q,[f(w,{name:"fade",mode:"in-out",appear:""},{default:v(()=>[s.showTestPage?b((l(),r("div",F,[e("div",I,[e("div",N,[e("div",Q,[V,e("div",E,[H,e("p",z,u(s.topic.question),1)])])]),M,e("div",U,[e("div",null,[e("div",{class:d([{"bg-black text-white border-black":s.option1Selected,"bg-white text-black border-black":!s.option1Selected},"w-[70vw] h-auto min-h-[3rem] rounded-3xl flex items-center justify-center cursor-pointer border-2 transition-colors ease-in-out duration-500"]),onClick:t[1]||(t[1]=n=>{s.option1Selected=!0,s.option2Selected=!1})},[e("p",W," A. "+u(s.topic.options_A.text),1)],2)]),e("div",X,[e("div",{class:d([{"bg-black text-white border-black":s.option2Selected,"bg-white text-black border-black":!s.option2Selected},"w-[70vw] h-auto min-h-[3rem] rounded-3xl flex items-center justify-center cursor-pointer border-2 transition-colors ease-in-out duration-500"]),onClick:t[2]||(t[2]=n=>{s.option2Selected=!0,s.option1Selected=!1})},[e("p",Z," B. "+u(s.topic.options_B.text),1)],2)])]),e("div",G,[e("button",{disabled:!s.option1Selected&&!s.option2Selected,onClick:t[3]||(t[3]=(...n)=>a.nextQuestion&&a.nextQuestion(...n)),class:d([{"opacity-50":!s.option1Selected&&!s.option2Selected},"w-[30vw] h-auto min-h-[2rem] rounded-3xl flex items-center justify-center cursor-pointer border-2 border-black bg-white text-black mt-4"])},[s.topic.index>=7?(l(),r("span",K,"尋找你的電話")):(l(),r("span",L,"下一題"))],10,J)])])],512)),[[y,s.animateRefresh]]):(l(),r("div",C,[e("div",P,[D,e("div",R,[e("img",{onClick:t[0]||(t[0]=(...n)=>a.initTestPage&&a.initTestPage(...n)),src:B,class:"w-8/12 mx-5 my-3"})])])]))]),_:1})])}const tt=m(j,[["render",O],["__scopeId","data-v-b513ae61"]]);export{tt as default};
