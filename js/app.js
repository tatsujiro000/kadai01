$('select').change(function() {
    if($(this).val() != '') {
        window.location.href = $(this).val();
    }
});
const questionTtl = '宝石店の盗難の謎'; 
const questionTxt = `ある宝石店に覆面をかぶり、ショットガンを携えた1人の男が押し入り、ダイヤモンドを盗んだとの通報が警察にあった。
警察の捜査によって、現場からそう遠くはない、"ある植物"が生えた区画から盗難品が発見された。
さらに、容疑者は2人で、G・ V・ヒギンズとエドウィン・マクベインというところまで特定した。
だが、取り調べをすることもなく、このうち犯人はヒギンズであることがわかった。
それは"ある植物"のおかげである。さてある植物とは？`;

const answers = [
    'バオバブ',
    'サボテン',
    'グリーンネックレス',
];

const correct = 'サボテン';

$('.question-ttl').text(questionTtl);
$('.question-txt').text(questionTxt);

$('.answer').each(function(i) {
    $(this).text(answers[i]);
    return;
});

///answerクリックされたとき、それぞれのモーダルを表示
$('.answer').on('click', function() {
    if($(this).text() === correct) {
        console.log('正解');
        $('#correct').addClass('is-active');
    }　else{
        console.log('不正解');
        $('#incorrect').addClass('is-active');
    }
});

///親の親を取得→クラスを消去してモーダルのクローズ
$('.delete, .back').on('click', function() {
    $(this).parents().removeClass('is-active');
});

//タイマー処理
$(function() {
    const seconds = 1;
    let limitTime =( seconds * 10 );
    let time = limitTime;
    let interval = '';
    let sec = '';

    calc();

    //STARTボタン押したらstartTimerを1秒ごとに実行
    $('.start').on('click', function() {
        $('.start').prop('disabled', true);
        interval = setInterval(startTimer, 1000);
    });

    //タイマーがゼロになった時の処理
    function startTimer() {
        time --;//減っていく
        if(time === 0) {
            $('.timer').text('TIME UP!!!!!').css('color','red');
            $('.answer').prop('disabled', true);
            clearInterval(interval);
        } else {
            calc();
        }
    }

    function calc() {
        sec = time % 60;
        sec = ('00' + sec).slice(-2);
        $('.timer').html('残り時間：' + sec + 'sec');
    }
    $('.subcopy__timelimit').text(sec);
 
});

//start押されたら
$('.content-01').hide();
$('.start').on('click', function() {
    $('.content-01').fadeIn().addClass('flightRightTop');
});
