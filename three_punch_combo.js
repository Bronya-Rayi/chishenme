        $i = 0;
        $('#start').click(function(){
            $i++;
            if($i >=6 ){
                $('#start').hide();
                $('#stop').show();
            }
        })
        $('#stop').click(function(){
            alert('这么作？这顿别吃了！')
            $(this).hide();
        })