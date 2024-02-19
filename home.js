$(document).ready(function(){


    
    var originalColor = $('.item-infor').css('background-color');
    $('.rank-list__items li').each(function() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var randomColor = 'rgba(' + r + ',' + g + ',' + b + ',0.5)';
        $(this).data('color', randomColor);
    });
    $('.rank-list__items li').hover(function(){
        var color = $(this).data('color');
        $(this).css('background-color', color);
    }, function(){
        $(this).css('background-color', originalColor);
    });

    function test_home() {
        // Thay 'YOUR_CHANNEL_ID' bằng ID kênh Dailymotion của bạn
        var url = 'https://api.dailymotion.com/user/bachtieuthuan/playlists?fields=id,name,videos_total&limit=100';
        
        fetch(url)
            .then(response => response.json())
            .then(async data => {
                var playlists = data.list;
                for (var i = 0; i < playlists.length; i++) {
                    var playlist = playlists[i];
                    // Lấy video đầu tiên từ danh sách phát
                    var response = await fetch('https://api.dailymotion.com/playlist/' + playlist.id + '/videos?fields=id,thumbnail_url&limit=1');
                    var data = await response.json();
                    var video = data.list[0];
        
                    var li = document.createElement('li');
                    var a = document.createElement('a');
                    a.href = 'https://bachtieuthuanxemphim.blogspot.com/?index=xem-phim&phim=' + playlist.id;
                    var img = document.createElement('img');
                    img.src = video.thumbnail_url;
                    var div_item_infor = document.createElement('div');
                    div_item_infor.className = 'item-infor';
                    var h3 = document.createElement('h3');
                    h3.innerText = playlist.name; // Sửa ở đây
                    var p = document.createElement('p');
                    p.className = 'tt';
                    p.innerText = playlist.description; // Và ở đây
        
                    div_item_infor.appendChild(h3);
                    div_item_infor.appendChild(p);
                    a.appendChild(img);
                    a.appendChild(div_item_infor);
                    li.appendChild(a)
                    var danh_sach_phim = document.getElementById('rank-list__items');
                    danh_sach_phim.appendChild(li)
                }
            })
            .catch(error => console.error('Error:', error));
        
            }
    test_home()

})
