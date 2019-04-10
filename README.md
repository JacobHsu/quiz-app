# quiz-app


 Fetch Questions from Local JSON File  
 Fetch API Questions from [Open Trivia API](https://opentdb.com/api_config.php)  


[CSS 偽元素](https://www.oxxostudio.tw/articles/201706/pseudo-element-1.html)

偽元素使用兩個冒號「::」開頭 (`::before`、`::after`、`::first-line`、`::first-letter`和`::selection`)
而偽類使用一個冒號「:」開頭 ( 像是 `:hover`、`:target`... )。

# Note

using rem in css [僅相對於 root 層級的文字大小(網頁中的 html)](https://www.hexschool.com/2016/01/02/2016-08-08-em-vs-rem/)

the reason this is 62.5 present the default font size is most browsers is 16 pixels.  
10/16 = 0.625  font-size:62.5% is 10px  we reference with rims will be based on that 10pixels

`translateY(-0.1rem)` we're basically gonna move this thing up just a bit.


[Using_data_attributes](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Using_data_attributes) 
> `data-number`  HTMLCollection  dataset  
[Array.from()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/from) 
[Using Fetch](https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API/Using_Fetch)  
chrome-devtools [Preserve log](https://developers.google.com/web/tools/chrome-devtools/console/?hl=zh-tw) 保留歷史記錄  > fetch用

localStorage save mostRecentScore  

You need to understand is that local storage only uses key value pairs with the value being s string.  
So anything that you store in there is gonna be a string.   

circle `border-radius: 50%;`  

# Extensions

[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - Visual Studio Marketplace 右鍵 Open with Live Server  
[Emmet Documentation](https://docs.emmet.io/)  
> `<div id="home" class="flex-center flex-column">` `#home.flex-center.flex-column` tab   
> `input:text` tab == `<input type="text" name="" id="">`

## Trivia API

[opentdb](https://opentdb.com/) Free to use, user-contributed trivia question database.  
The Open Trivia Database provides a completely free JSON API for use in programming projects. Use of this API does not require a API Key, just generate the URL below use it in your own application to retrieve trivia questions.

https://opentdb.com/api_config.php  

Select Category: `General knowledge`  
Select Difficulty: `Easy`  
Select Type: `Multiple Choice`  
Select Encoding: `Default Encoding`  

https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple

### References

https://www.learnbuildteach.com/  
https://github.com/jamesqquick/Build-A-Quiz-App-With-HTML-CSS-and-JavaScript  
https://yamol.tw/   
[flexbox-basics](https://cythilya.github.io/2017/04/04/flexbox-basics/)  
> `flex-direction: column` 主軸為直向。  `space-between`   每個小方塊擁有相同的間隔，但與父容器之間沒有間隔。
[How TO - CSS Loader](https://www.w3schools.com/howto/howto_css_loader.asp)   
[CSS @keyframes Rule](https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp)     
