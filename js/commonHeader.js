/**
 * 公共头部
 */
var parMenuItems = [
    {"herf":"https://zqHero.github.io/","menuTxt" :"首页"},
    {"herf":"https://zqHero.github.io/home/technology/","menuTxt" :"技术专栏"},
    {"herf":"https://zqHero.github.io/home/readRecord/","menuTxt" :"读书笔记"},
    {"herf":"https://zqHero.github.io/home/myThink/","menuTxt" :"思考感悟"},
    {"herf":"https://zqHero.github.io/home/lifeAndMe/","menuTxt" :"生活和我"},
    {"herf":"https://zqHero.github.io/home/downResources/","menuTxt" :"资源"},
    {"herf":"https://zqHero.github.io/home/subscribe/","menuTxt" :"订阅"}
];

var socialItems = [
    {"herf":"mailto:zhaoq_hero@163.com","title":"Email","class":"icon icon-email"},
    {"herf":"//github.com/zqHero","title":"GitHub","class":"icon icon-github"},
    {"herf":"//blog.csdn.net/u013233097","title":"CSDN","class":"icon icon-twitter"}
];

//创建一个  主菜单header    根据当前传进来的索引值   显示当前active的menu 菜单
var initMenu = function (activeIndex) {
    var str = '<img class="avatar" src="https://zqHero.github.io/img/avatar.jpg" alt="Avatar">';
        str += '<h1 class="title">zq_hero的博客</h1>';
        str += '<p class="subtitle">一名程序员的人生思考和感悟</p>';
        str += '<button class="menu-toggle" type="button"><span class="icon icon-menu"></span></button>';
        str += '<nav class="site-menu collapsed"><ul class="menu-list">';
        for(var i = 0;i<parMenuItems.length;i++){
            str += '<li class="menu-item' + (activeIndex === i?" is-active":"") +'">';
            str += '<a href="' + parMenuItems[i].herf + '">' + parMenuItems[i].menuTxt + '</a>';
            str += '</li>';
        }
        str += '</ul></nav>';
        //社交网站链接：
       str+= '<nav class="social-menu collapsed"><ul class="social-list">';
       for(var i = 0;i<socialItems.length;i++){
           str+='<li class="social-item">';
           str+='<a href="' + socialItems[i].herf + '" title="' + socialItems[i].title + '"><span class="' + socialItems[i].class + '"></span></a>';
           str+='</li>';
       }
       str+= '</ul></nav>';
       return str;
    };

//主菜单  header：
var mainHeader = document.getElementById("mainHeader");
if (mainHeader) {
    mainHeader.innerHTML = initMenu(parseInt(mainHeader.dataset["activeIndex"]));
}

var subHeader = document.getElementById("subPageHeader");
if (subHeader) {
    subHeader.innerHTML = initMenu(parseInt(subHeader.dataset["activeIndex"]));
}

