import $ from 'jquery';
    $(function () {
        $('li:even').css('backgroundColor','skyblue');
        $('li:odd').css('backgroundColor',function () {
            var r = Math.floor(Math.random()*256);
            var g = Math.floor(Math.random()*256);
            var b = Math.floor(Math.random()*256);
            return "rgb("+r+","+g+","+b+")";
        });
    });