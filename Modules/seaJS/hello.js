/**
 * Created by JiangYi on 2018/3/29.
 */
define(function(require, exports, module) {
    var $ = require('jquery');

    $("#hello").html("11111");

    $(function(){
        $("#beautiful-sea").on('click',function(){
            alert(123);
        });
    })
});