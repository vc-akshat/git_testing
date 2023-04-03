function thumb(i){
    var pic
        if(i == 0){
            pic = "thumbs_up.jpg"
        }
        else{
            pic="thumbs_down.jpg"
        }
        document.getElementById("image").src=pic;
    }