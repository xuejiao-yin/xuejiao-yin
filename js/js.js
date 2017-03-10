$(function(){
    var i=1;
        $(".look").click(function(){
            if(i==1){
               $(".com").slice(4,8).show();
                $(".cs").html("收起");
                //$(".look").html('<img>','url("../images/comment-uparrow.svg")');
                i=0;
            }else{
                $(".com").slice(4,8).hide();
                $(".cs").html("查看全部14条评论");
                //$(".look").html('<img>','url("../images/comment-downarrow.svg")');
                i=1;

            }
        });//查看收起评论
    $(".delete").click(function(){
         $(".main2").remove();
    });//点击删除元素

    $(".like").click(function(){
        var txt = $(".txt");
        var img = $(".like_img");
        var num=parseInt(txt.text());
        if(img.attr("src") == ("images/state-thumbs-up.svg")){
            $(this).html("<img src='../images/state-thumbs-up.svg' class='like_img' />");
            num -=1;
            txt.text(num)
        }else{
            num +=1;
            txt.text(num)
        }
    });

});
