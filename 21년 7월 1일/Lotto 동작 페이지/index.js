window.onload = function () 
{
    var lotto_number = [0, 0, 0, 0, 0, 0];
    var lotto_number_bonus = 0;
    var my_number = [3, 8, 13, 20, 27, 36];

    var input_1 = document.getElementById("dream_1")
    var input_2 = document.getElementById("dream_2")
    var input_3 = document.getElementById("dream_3")
    var input_4 = document.getElementById("dream_4")
    var input_5 = document.getElementById("dream_5")
    var input_6 = document.getElementById("dream_6")
    var btn = document.getElementById("go")
    var result = document.getElementById("result")

    btn.onclick = btnClick;
    
    function btnClick()
    {
        my_number[0] = input_1.value;
        my_number[1] = input_2.value;
        my_number[2] = input_3.value;
        my_number[3] = input_4.value;
        my_number[4] = input_5.value;
        my_number[5] = input_6.value;
        run ();
    }
    
    
    
    
    
    
    function run()
    {
        lotto_number[0] = Math.floor(Math.random() * 45 + 1); // 로또 첫번째 추첨
        
        // firstSlellect : // 로또 두번째 추첨
        // while(true)
        // {
            //     var temp = Math.floor(Math.random()*45 +1);
            //     for (var i=0; i<lotto_nuber.length; i++)
            //     {
                //         if(temp==lotto_nuber[i])
                //         {
                    //             continue firstSlellect;
                    //         }
                    //     }
                    //     temp = lotto_nuber[1];
                    //     break ;
                    // }
                    
                    secondSellect: //로또 두번째 추첨
                    while (true) {
                        var temp = Math.floor(Math.random() * 45 + 1);
                        for (var i = 0; i < lotto_number.length; i++) {
                            if (temp == lotto_number[i]) {
                                continue secondSellect;
                            }
                        }
                        lotto_number[1] = temp;
                        break;
                    }
                    
                    thirdSellect: //로또 세번째 추첨
                    while (true) {
                        var temp = Math.floor(Math.random() * 45 + 1);
                        for (var i = 0; i < lotto_number.length; i++) {
                            if (temp == lotto_number[i]) {
                                continue thirdSellect;
                            }
                        }
                        lotto_number[2] = temp;
                        break;
                    }
                    
                    fourthSellect: //로또 네번째 추첨
        while (true) {
            var temp = Math.floor(Math.random() * 45 + 1);
            for (var i = 0; i < lotto_number.length; i++) {
                if (temp == lotto_number[i]) {
                    continue fourthSellect;
                }
            }
            lotto_number[3] = temp;
            break;
        }
        
        fifthSellect: //로또 다섯번째 추첨
        while (true) {
            var temp = Math.floor(Math.random() * 45 + 1);
            for (var i = 0; i < lotto_number.length; i++) {
                if (temp == lotto_number[i]) {
                    continue fifthSellect;
                }
            }
            lotto_number[4] = temp;
            break;
        }
        
        sixthSellect: //로또 여섯번째 추첨
        while (true) {
            var temp = Math.floor(Math.random() * 45 + 1);
            for (var i = 0; i < lotto_number.length; i++) {
                if (temp == lotto_number[i]) {
                    continue sixthSellect;
                }
            }
            lotto_number[5] = temp;
            break;
        }
        bonusSellect: //로또 보너스 추첨
        while (true) {
            var temp = Math.floor(Math.random() * 45 + 1);
            for (var i = 0; i < lotto_number.length; i++) {
                if (temp == lotto_number[i]) {
                    continue bonusSellect;
                }
            }
            lotto_number_bonus = temp;
            break;
        }
        var  random_number = "";
        for (var i = 0; i < lotto_number.length; i++) {
            random_number = random_number + ' "' + lotto_number[i] + '" ';
        }
        
        // debugger;
        //당첨 확인
        var lucky_ment
        var lucky = 0
        var my_number_scan = 0;
        var my_number_scan_rader = [0, 0, 0, 0, 0, 0]
        var input_box = [input_1, input_2, input_3, input_4, input_5, input_6]

        for (my_number_scan = 0 ;my_number_scan < 6; my_number_scan++)
        {
            for (i=0; i<lotto_number.length; i++)
            if ( my_number[my_number_scan]==lotto_number[i])
            {
                lucky = lucky + 1
                my_number_scan_rader[my_number_scan] = 1
            }
            
        }
        if (lucky == 5)
        {   
            for (i=0; i<my_number.length; i++)
            {
                if ( my_number[i]==lotto_number_bonus)
                {
                    lucky = lucky + 2
                }
            }
        }
        switch (lucky)
        {
            case 6 :
            lucky_ment = "1등 당첨 입니다."
            break;
            
            case 7 :
            lucky_ment = "2등 당첨 입니다."
            break;
            
            case 5 :
            lucky_ment = "3등 당첨 입니다."
            break;
            
            case 4 :
            lucky_ment = "4등 당첨 입니다."
            break;
            
            case 3 :
            lucky_ment = "5등 당첨 입니다."
            break;
            
            default :
            lucky_ment = "낙첨입니다."
            break;

        }


        result.innerHTML = "행운의 숫자는" + random_number + "<br>" + "결과는" + lucky_ment
        for ( var i = 0; i<my_number_scan_rader.length; i++)
        {
            if (my_number_scan_rader[i]==1)
            {
                input_box[i].style.color="red"
            }
        }
    }
}