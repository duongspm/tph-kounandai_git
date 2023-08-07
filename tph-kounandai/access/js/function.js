$(document).ready(function () {
    $(document).on('submit', 'form#route', function () {
        var start = $('input[name=start]').val();
        var goal = $('input[name=goal]').val();
        var e_start = encodeURIComponent(start);
        var e_goal = encodeURIComponent(goal);
        var gmapURL = 'http://maps.google.com/maps?saddr=' + e_start + '%e9%a7%85%2c%e6%97%a5%e6%9c%ac&daddr=' + e_goal + '%e9%a7%85&dirflg=r';

        if (goal == "") {
            alert('駅名を入力して下さい');
        } else {
            window.open(gmapURL, '_blank');
        }

        return false;
    });
});
