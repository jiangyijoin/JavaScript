/**
 * Created by Administrator on 2018/3/30.
 */

require.config({
    paths:{
        "jquery": "jquery.min"
    },

    //shim参数用来加载非amd规范的插件，类库
    shim:{

    }

})
//define可以定义return返回，require不需要定义return
// 所以第一次mainJs都可以用，但是本地modules得用define
requirejs(['jquery','add'],function ($,add){
    console.log($);
    $('body').css('background-color','red')
    setTimeout(function (){
        //document.write会重新打开文档流，然后清除原先的dom。浏览器就显示write里面的东西。
        document.write(add.add(3,5));
        //如果文档流没关闭再执行docment.write，会一直在后面追加
        document.close();
    },4000)
})

// require(['jquery','add'],function ($,add){
//     console.log($);
//     $('body').css('background-color','red')
//     setTimeout(function (){
//         //document.write会重新打开文档流，然后清除原先的dom。浏览器就显示write里面的东西。
//         document.write(add.add(3,5));
//         document.close();
//     },4000)
// })

// define(['jquery','add'],function ($,add){
//     console.log($);
//     $('body').css('background-color','red')
//     setTimeout(function (){
//         //document.write会重新打开文档流，然后清除原先的dom。浏览器就显示write里面的东西。
//         document.write(add.add(3,5));
//         document.close();
//     },4000)
// })

