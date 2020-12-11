var player;

$("#eq1").click(function(){
   $("#thumb1").hide();
   player = new YT.Player('ytplayer', {
      height: '90',
      width: '120',
      videoId: 'TdC-gpe_5ms'
    });
});