(()=>{"use strict";const e=[{id:1,title:"Increasing Prosperity With Positive Thinking",urlToImage:"./src/img/strategies/1.jpg",tags:["Art","Design"],content:"Your About Us page is vital. It’s often the first stop in any user’s journey through a website or blog. It also shouldn’t be their last, because first impressions count online just as much as they do in the real world. If your visitors aren’t impressed, you can expect them to leave without reading your awesome content or completing a conversion action (e.g., signing up for your newsletter, making a purchase).",date:"01.01.2020"},{id:2,title:"Motivation Is The First Step To Success",urlToImage:"./src/img/strategies/2.jpg",tags:["Culture"],content:"Your About Us page is vital. It’s often the first stop in any user’s journey through a website or blog. It also shouldn’t be their last, because first impressions count online just as much as they do in the real world. If your visitors aren’t impressed, you can expect them to leave without reading your awesome content or completing a conversion action (e.g., signing up for your newsletter, making a purchase).",date:"01.01.2020"},{id:3,title:"Success Steps For Your Personal Or Business Life",urlToImage:"./src/img/strategies/3.jpg",tags:["Art","Design","Culture"],content:"Your About Us page is vital. It’s often the first stop in any user’s journey through a website or blog. It also shouldn’t be their last, because first impressions count online just as much as they do in the real world. If your visitors aren’t impressed, you can expect them to leave without reading your awesome content or completing a conversion action (e.g., signing up for your newsletter, making a purchase).",date:"01.01.2020"},{id:4,title:"Success Steps For Your Personal Or Business Life Plus Funny Image on the Back",urlToImage:"./src/img/strategies/4.jpg",tags:["Art","Design","Culture"],content:"Your About Us page is vital. It’s often the first stop in any user’s journey through a website or blog. It also shouldn’t be their last, because first impressions count online just as much as they do in the real world. If your visitors aren’t impressed, you can expect them to leave without reading your awesome content or completing a conversion action (e.g., signing up for your newsletter, making a purchase).",date:"01.01.2020"},{id:5,title:"Increasing Prosperity With Positive Thinking",urlToImage:"./src/img/strategies/5.jpg",tags:["Design"],content:"Your About Us page is vital. It’s often the first stop in any user’s journey through a website or blog. It also shouldn’t be their last, because first impressions count online just as much as they do in the real world. If your visitors aren’t impressed, you can expect them to leave without reading your awesome content or completing a conversion action (e.g., signing up for your newsletter, making a purchase).",date:"01.01.2020"}];window.onload=function(){e&&n(),t()};const t=()=>{document.querySelector(".strategies__tags").addEventListener("click",(e=>{if(e.target.classList.contains("tag")){let t=e.target;s(),o(t),"All"===t.innerText?r():i(t.innerText)}}))},s=()=>{document.querySelectorAll(".strategies__tags .tag").forEach((e=>{e.classList.remove("tag--selected"),e.classList.add("tag--bordered")}))},o=e=>{e.classList.add("tag--selected"),e.classList.remove("tag--bordered")},r=()=>{document.querySelectorAll(".strategy-wrapper .strategy").forEach((e=>{e.classList.remove("strategy--hidden")}))},i=e=>{document.querySelectorAll(".strategy-wrapper .strategy").forEach((t=>{t.classList.add("strategy--hidden"),t.querySelectorAll(".tag").forEach((s=>{s.innerText===e&&t.classList.remove("strategy--hidden")}))}))},n=()=>{}})();