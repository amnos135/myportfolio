$(function () {

    var options = {

        'speed': 500,
        'initTop': 250,
        'alwaysTop': false,
        'default_x': '#wrap' 
    }

    $('#floatdiv').Floater(options);
    var btn = $('#floatdiv ul li');

    //페이지 위치
    $('#btn01').click(function () {
        $('html, body').animate({
            scrollTop: $('.introduce').offset().top
        }, 800);
        btn.removeClass('active');
      
    })
    $('#btn02').click(function () {
        $('html, body').animate({
            scrollTop: $('.skills').offset().top
        }, 800);
        btn.removeClass('active');
      
    })
    $('#btn03').click(function () {
        $('html, body').animate({
            scrollTop: $('.education').offset().top
        }, 800);
        btn.removeClass('active');
      
    })
    $('#btn04').click(function () {
        $('html, body').animate({
            scrollTop: $('.license').offset().top
        }, 800);
        btn.removeClass('active');
      
    })
    $('#btn05').click(function () {
        $('html, body').animate({
            scrollTop: $('#shopping').offset().top
        }, 800);
        btn.removeClass('active');
      
    })

    //스크롤이 이동시 메뉴와 버튼 활성화
    $(Window).scroll(function () {

        var sct = $(Window).scrollTop(); // 페이지 시작시 윈도우창에 스크롤의 위치를 sct(스크롤 탑)으로 
        $('#content > div').each(function () {
            var tg = $(this);
            var i = tg.index();
            if (tg.offset().top <= sct) {
                btn.removeClass('active');
                btn.eq(i).addClass('active');
            }

        })

    })

});