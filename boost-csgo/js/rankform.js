$(document).ready(function() {
    
    var price = 0; //стоимость
    var val1 = 1; //номер звания до
    var val2 = 1; //номер звания после
    var lobby = false;
    var skins = false;

    
    function getPrice() {
        if( val1 > val2 ) {
            $(".priceblock").find("input[type='text']").val( "0" );
            return false;
        } else {
                    if (val1 == 1 & val2 == 1) { price = 0; }
                    if (val1 == 1 & val2 == 2) { price = 45; }
                    if (val1 == 1 & val2 == 3) { price = 90; }
                    if (val1 == 1 & val2 == 4) { price = 135; }
                    if (val1 == 1 & val2 == 5) { price = 180; }
                    if (val1 == 1 & val2 == 6) { price = 225; }
                    if (val1 == 1 & val2 == 7) { price = 300; }
                    if (val1 == 1 & val2 == 8) { price = 375; }
                    if (val1 == 1 & val2 == 9) { price = 450; }
                    if (val1 == 1 & val2 == 10) { price = 525; }
                    if (val1 == 1 & val2 == 11) { price = 675; }
                    if (val1 == 1 & val2 == 12) { price = 825; }
                    if (val1 == 1 & val2 == 13) { price = 975; }
                    if (val1 == 1 & val2 == 14) { price = 1275; }
                    if (val1 == 1 & val2 == 15) { price = 1775; }
                    if (val1 == 1 & val2 == 16) { price = 2475; }
                    if (val1 == 1 & val2 == 17) { price = 3375; }
                    if (val1 == 1 & val2 == 18) { price = 4675; }
                    
                    //Серебро - II
                    if (val1 == 2 & val2 == 2) { price = 0; }
                    if (val1 == 2 & val2 == 3) { price = 45; }
                    if (val1 == 2 & val2 == 4) { price = 90; }
                    if (val1 == 2 & val2 == 5) { price = 135; }
                    if (val1 == 2 & val2 == 6) { price = 180; }
                    if (val1 == 2 & val2 == 7) { price = 255; }
                    if (val1 == 2 & val2 == 8) { price = 330; }
                    if (val1 == 2 & val2 == 9) { price = 405; }
                    if (val1 == 2 & val2 == 10) { price = 480; }
                    if (val1 == 2 & val2 == 11) { price = 630; }
                    if (val1 == 2 & val2 == 12) { price = 780; }
                    if (val1 == 2 & val2 == 13) { price = 930; }
                    if (val1 == 2 & val2 == 14) { price = 1230; }
                    if (val1 == 2 & val2 == 15) { price = 1730; }
                    if (val1 == 2 & val2 == 16) { price = 2430; }
                    if (val1 == 2 & val2 == 17) { price = 3330; }
                    if (val1 == 2 & val2 == 18) { price = 4630; }
                                        
                    //Серебро - III
                    if (val1 == 3 & val2 == 3) { price = 0; }
                    if (val1 == 3 & val2 == 4) { price = 45; }
                    if (val1 == 3 & val2 == 5) { price = 90; }
                    if (val1 == 3 & val2 == 6) { price = 135; }
                    if (val1 == 3 & val2 == 7) { price = 210; }
                    if (val1 == 3 & val2 == 8) { price = 285; }
                    if (val1 == 3 & val2 == 9) { price = 360; }
                    if (val1 == 3 & val2 == 10) { price = 435; }
                    if (val1 == 3 & val2 == 11) { price = 585; }
                    if (val1 == 3 & val2 == 12) { price = 735; }
                    if (val1 == 3 & val2 == 13) { price = 885; }
                    if (val1 == 3 & val2 == 14) { price = 1185; }
                    if (val1 == 3 & val2 == 15) { price = 1685; }
                    if (val1 == 3 & val2 == 16) { price = 2385; }
                    if (val1 == 3 & val2 == 17) { price = 3285; }
                    if (val1 == 3 & val2 == 18) { price = 4585; }
                    
                    //Серебро - IV
                    if (val1 == 4 & val2 == 4) { price = 0; }
                    if (val1 == 4 & val2 == 5) { price = 45; }
                    if (val1 == 4 & val2 == 6) { price = 90; }
                    if (val1 == 4 & val2 == 7) { price = 165; }
                    if (val1 == 4 & val2 == 8) { price = 240; }
                    if (val1 == 4 & val2 == 9) { price = 315; }
                    if (val1 == 4 & val2 == 10) { price = 390; }
                    if (val1 == 4 & val2 == 11) { price = 540; }
                    if (val1 == 4 & val2 == 12) { price = 690; }
                    if (val1 == 4 & val2 == 13) { price = 840; }
                    if (val1 == 4 & val2 == 14) { price = 1140; }
                    if (val1 == 4 & val2 == 15) { price = 1640; }
                    if (val1 == 4 & val2 == 16) { price = 2340; }
                    if (val1 == 4 & val2 == 17) { price = 3240; }
                    if (val1 == 4 & val2 == 18) { price = 4540; }
                                        
                    //Серебро - Элита
                    if (val1 == 5 & val2 == 5) { price = 0; }
                    if (val1 == 5 & val2 == 6) { price = 45; }
                    if (val1 == 5 & val2 == 7) { price = 120; }
                    if (val1 == 5 & val2 == 8) { price = 195; }
                    if (val1 == 5 & val2 == 9) { price = 270; }
                    if (val1 == 5 & val2 == 10) { price = 345; }
                    if (val1 == 5 & val2 == 11) { price = 495; }
                    if (val1 == 5 & val2 == 12) { price = 645; }
                    if (val1 == 5 & val2 == 13) { price = 795; }
                    if (val1 == 5 & val2 == 14) { price = 1095; }
                    if (val1 == 5 & val2 == 15) { price = 1595; }
                    if (val1 == 5 & val2 == 16) { price = 2295; }
                    if (val1 == 5 & val2 == 17) { price = 3195; }
                    if (val1 == 5 & val2 == 18) { price = 4495; }
                    
                    //Серебро - Великий магистр
                    if (val1 == 6 & val2 == 6) { price = 0; }
                    if (val1 == 6 & val2 == 7) { price = 75; }
                    if (val1 == 6 & val2 == 8) { price = 150; }
                    if (val1 == 6 & val2 == 9) { price = 225; }
                    if (val1 == 6 & val2 == 10) { price = 300; }
                    if (val1 == 6 & val2 == 11) { price = 450; }
                    if (val1 == 6 & val2 == 12) { price = 600; }
                    if (val1 == 6 & val2 == 13) { price = 750; }
                    if (val1 == 6 & val2 == 14) { price = 1050; }
                    if (val1 == 6 & val2 == 15) { price = 1550; }
                    if (val1 == 6 & val2 == 16) { price = 2250; }
                    if (val1 == 6 & val2 == 17) { price = 3150; }
                    if (val1 == 6 & val2 == 18) { price = 4450; }
                    
                    //Золотая звезда - I
                    if (val1 == 7 & val2 == 7) { price = 0; }
                    if (val1 == 7 & val2 == 8) { price = 75; }
                    if (val1 == 7 & val2 == 9) { price = 150; }
                    if (val1 == 7 & val2 == 10) { price = 225; }
                    if (val1 == 7 & val2 == 11) { price = 375; }
                    if (val1 == 7 & val2 == 12) { price = 525; }
                    if (val1 == 7 & val2 == 13) { price = 675; }
                    if (val1 == 7 & val2 == 14) { price = 975; }
                    if (val1 == 7 & val2 == 15) { price = 1475; }
                    if (val1 == 7 & val2 == 16) { price = 2175; }
                    if (val1 == 7 & val2 == 17) { price = 3075; }
                    if (val1 == 7 & val2 == 18) { price = 4375; }
                    
                    //Золотая звезда - II
                    if (val1 == 8 & val2 == 8) { price = 0; }
                    if (val1 == 8 & val2 == 9) { price = 75; }
                    if (val1 == 8 & val2 == 10) { price = 150; }
                    if (val1 == 8 & val2 == 11) { price = 300; }
                    if (val1 == 8 & val2 == 12) { price = 450; }
                    if (val1 == 8 & val2 == 13) { price = 600; }
                    if (val1 == 8 & val2 == 14) { price = 900; }
                    if (val1 == 8 & val2 == 15) { price = 1400; }
                    if (val1 == 8 & val2 == 16) { price = 2100; }
                    if (val1 == 8 & val2 == 17) { price = 3000; }
                    if (val1 == 8 & val2 == 18) { price = 4300; }
                    
                    //Золотая звезда - III
                    if (val1 == 9 & val2 == 9) { price = 0; }
                    if (val1 == 9 & val2 == 10) { price = 75; }
                    if (val1 == 9 & val2 == 11) { price = 225; }
                    if (val1 == 9 & val2 == 12) { price = 375; }
                    if (val1 == 9 & val2 == 13) { price = 525; }
                    if (val1 == 9 & val2 == 14) { price = 825; }
                    if (val1 == 9 & val2 == 15) { price = 1325; }
                    if (val1 == 9 & val2 == 16) { price = 2025; }
                    if (val1 == 9 & val2 == 17) { price = 2925; }
                    if (val1 == 9 & val2 == 18) { price = 4225; }
                    
                    //Золотая звезда - Магистр
                    if (val1 == 10 & val2 == 10) { price = 0; }
                    if (val1 == 10 & val2 == 11) { price = 150; }
                    if (val1 == 10 & val2 == 12) { price = 300; }
                    if (val1 == 10 & val2 == 13) { price = 450; }
                    if (val1 == 10 & val2 == 14) { price = 750; }
                    if (val1 == 10 & val2 == 15) { price = 1250; }
                    if (val1 == 10 & val2 == 16) { price = 1950; }
                    if (val1 == 10 & val2 == 17) { price = 2850; }
                    if (val1 == 10 & val2 == 18) { price = 4150; }
                    
                    //Магистр хранитель - I
                    if (val1 == 11 & val2 == 11) { price = 0; }
                    if (val1 == 11 & val2 == 12) { price = 150; }
                    if (val1 == 11 & val2 == 13) { price = 300; }
                    if (val1 == 11 & val2 == 14) { price = 600; }
                    if (val1 == 11 & val2 == 15) { price = 1100; }
                    if (val1 == 11 & val2 == 16) { price = 1800; }
                    if (val1 == 11 & val2 == 17) { price = 2700; }
                    if (val1 == 11 & val2 == 18) { price = 4000; }
                    
                    //Магистр хранитель - II
                    if (val1 == 12 & val2 == 12) { price = 0; }
                    if (val1 == 12 & val2 == 13) { price = 150; }
                    if (val1 == 12 & val2 == 14) { price = 450; }
                    if (val1 == 12 & val2 == 15) { price = 950; }
                    if (val1 == 12 & val2 == 16) { price = 1650; }
                    if (val1 == 12 & val2 == 17) { price = 2550; }
                    if (val1 == 12 & val2 == 18) { price = 3850; }
                    
                    //Магистр хранитель - Элита
                    if (val1 == 13 & val2 == 13) { price = 0; }
                    if (val1 == 13 & val2 == 14) { price = 300; }
                    if (val1 == 13 & val2 == 15) { price = 800; }
                    if (val1 == 13 & val2 == 16) { price = 1500; }
                    if (val1 == 13 & val2 == 17) { price = 2400; }
                    if (val1 == 13 & val2 == 18) { price = 3700; }
                    
                    //Заслуженный магистр хранитель
                    if (val1 == 14 & val2 == 14) { price = 0; }
                    if (val1 == 14 & val2 == 15) { price = 500; }
                    if (val1 == 14 & val2 == 16) { price = 1200; }
                    if (val1 == 14 & val2 == 17) { price = 2100; }
                    if (val1 == 14 & val2 == 18) { price = 3400; }
                    
                    //Легендарный беркут
                    if (val1 == 15 & val2 == 15) { price = 0; }
                    if (val1 == 15 & val2 == 16) { price = 700; }
                    if (val1 == 15 & val2 == 17) { price = 1600; }
                    if (val1 == 15 & val2 == 18) { price = 2900; }
                    
                    //Легендарный беркут - магистр
                    if (val1 == 16 & val2 == 16) { price = 0; }
                    if (val1 == 16 & val2 == 17) { price = 900; }
                    if (val1 == 16 & val2 == 18) { price = 2200; }
                    
                    //Великий магистр высшего ранга
                    if (val1 == 17 & val2 == 17) { price = 0; }
                    if (val1 == 17 & val2 == 18) { price = 1300; };
        }
        
        if( lobby == true ) {
            price = price * 1.4;
        }
        if( skins == true ) {
            price = price * 1.3;
        }
        
        $(".priceblock").find("input[type='text']").val( Math.floor(price) );
        
    }
    
    $("#rank1").change(function() {
        $("#img1").stop().fadeOut( 200, function() {
            $(this).delay(100).attr( "src", $("#rank1 option:selected").data("path") );
        }).fadeIn(200);
        val1 = parseInt( $(this).val() );
        getPrice();
    })
    
    $("#rank2").change(function() {
        $("#img2").stop().fadeOut( 200, function() {
            $(this).delay(100).attr( "src", $("#rank2 option:selected").data("path") );
        }).fadeIn(200);
        val2 = parseInt( $(this).val() );
        getPrice();
    })
    
    $("#lobby").click(function() {
        lobby = $(this).prop("checked");
        getPrice();
    })
    
    $("#skins").click(function() {
        skins = $(this).prop("checked");
        getPrice();
    })
    
})