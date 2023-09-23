/* <script src="https://cdn.jsdelivr.net/gh/NewbieWeb123/test@main/test.js"></script> */


$(document).ready(function() {
    function thuyetminh() {
          $('.list').empty();
        $.ajax({
            url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQQPF7Lc5xqwvrrCetUiAsJMyxjaRDRr07hFr7mAXNTPh9w47imB2lGmuXtd8NtzxnlVVr0Lay7NhSM/pubhtml?gid=0&single=true',
            type: 'get',
            success: function(data) {
                var htmlData = $(data);
                var headers = [];
                var data = [];
                
                htmlData.find('.waffle tbody tr:first-child td').each(function() {
                    headers.push($(this).text());
                });


                htmlData.find('.waffle tbody tr:not(:first-child)').each(function() {
                    var row = {};

                    $(this).find('td').each(function(i) {
                        var header = headers[i];
                        var cell = $(this).text();

                        row[header] = cell;
                    });

                    data.push(row);
                });

                // Tạo các phần tử 'tap' và thêm chúng vào '.list'
                for (var i = 0; i < data.length; i++) {
                    $('.list').append('<div class="tap">Tập ' + (i + 1) + '</div>');
                }

                $('.tap').click(function() {
                  $('.content b').text('Tập '+($(this).index() + 1));
                    $('.tap').removeClass('active');
                    $(this).addClass('active');

                    var index = $(this).index();
                    var dataItem = data[index];

                    var htmlContent = dataItem.video;

                    $('#video-phim').html(htmlContent);
                });

                  $('.tap').first().click();
            }
        });
    }

      $('#thuyetminh').click(function(){
        thuyetminh();
    });

      function vietsub() {
          $('.list').empty();
        $.ajax({
            url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQQPF7Lc5xqwvrrCetUiAsJMyxjaRDRr07hFr7mAXNTPh9w47imB2lGmuXtd8NtzxnlVVr0Lay7NhSM/pubhtml?gid=1224436660&single=true',
            type: 'get',
            success: function(data) {
                var htmlData = $(data);
                var headers = [];
                var data = [];


                htmlData.find('.waffle tbody tr:first-child td').each(function() {
                    headers.push($(this).text());
                });


                htmlData.find('.waffle tbody tr:not(:first-child)').each(function() {
                    var row = {};

                    $(this).find('td').each(function(i) {
                        var header = headers[i];
                        var cell = $(this).text();

                        row[header] = cell;
                    });

                    data.push(row);
                });


                for (var i = 0; i < data.length; i++) {
                    $('.list').append('<div class="tap">Tập ' + (i + 1) + '</div>');
                }

                $('.tap').click(function() {
                  $('.content b').text('Tập '+($(this).index() + 1));
                    $('.tap').removeClass('active');
                    $(this).addClass('active');

                    var index = $(this).index();
                    var dataItem = data[index];

                    var htmlContent = dataItem.video;

                    $('#video-phim').html(htmlContent);
                });

                  $('.tap').first().click();
            }
        });
    }
      $('#vietsub').click(function(){
            vietsub();
        });

      $(document).on('click','.tap',function() {
        if($(this).index()==0) {
           $('.skip-opening').off('click');
        } else {
          $('.skip-opening').off('click').click(function(){
              var iframe = $('#video-phim iframe');
              var url = iframe.attr('src');

              if (url.indexOf('&startTime=80') == -1){
                  url += '&startTime=80';
                  iframe.attr('src', url);
              }

          });
        }
      });


    /* test */

    // Tạo một đối tượng player mới
var player = DM.player(document.getElementById('player'), {
    video: 'xjxpjm', // ID của video bạn muốn lấy thời gian
    width: '100%',
    height: '100%'
});

// Tạo một đối tượng audio mới
var audio = new Audio('audio.mp3'); // URL của file âm thanh

// Khi player đã sẵn sàng, kiểm tra sự thay đổi của thanh thời gian
player.addEventListener('apiready', function(e) {
    player.addEventListener('timeupdate', function(e) {
        if (player.paused) {
            // Nếu video tạm dừng, tạm dừng âm thanh
            audio.pause();
        } else {
            // Nếu video đang chạy, phát âm thanh
            audio.play();
        }
    });
});


    /*test */

});
