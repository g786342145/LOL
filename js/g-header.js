// ---------------------------------郭------------------------------------

    var g_dx = document.querySelector('.g-dx');
    var g_wt = document.querySelector('.g-wt');
    var g_qt = document.querySelector('.g-qt');
    var g_tcm = document.querySelector('.g-tcm');
    var g_cnt = document.querySelector('.g-cnt');
    var g_oth = document.querySelector('.g-oth');
    var g_none1 = document.querySelector('.g-none1');
    var g_none2 = document.querySelector('.g-none2');
    var g_none3 = document.querySelector('.g-none3');
    var g_refresh = document.querySelector('.g-refresh');
    var g_tcmt = document.querySelector('.g-tcmt');
    var g_cntt = document.querySelector('.g-cntt');
    var g_otht = document.querySelector('.g-otht');
    var g_reg = document.querySelectorAll('.g-reg');
    var g_bar = document.querySelectorAll('.g-bar');
    var g_trs = document.querySelectorAll('tr');

    function g_getDate(){
        var gMain = document.querySelector('.g-main');
        
        if(window.XMLHttpRequest){
            var xhr = new XMLHttpRequest();
        }else{
            var xhr = new ActiveXObject('Microsoft.XMLHTTP');
        };
        xhr.open('get','./../g-date.json');
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        xhr.send();
        // console.log(wt);

        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    var g_json1 = xhr.responseText
                    var obj = JSON.parse(g_json1);
                    window.gObj = obj;
                    setDate(obj);
                }else{
                    alert(xhr.statys);
                }
            };
        };
    }
    g_getDate()

    function setDate(obj){
        for(var i = 0; i < g_reg.length; i++){
            g_reg[i].innerText = obj[i].name;
            g_bar[i].innerText = obj[i].state;
        };
        setCol()
        
    }








    function g_none(){
        for(var i = 0; i < g_reg.length; i++){
            g_reg[i].innerText = '';
            g_bar[i].innerText = '';
        }
        
    }
    g_refresh.onclick = function (){
        g_none();
        setDate(gObj);
    }

    function setCol(){
        for(var i = 0;i < g_bar.length; i++){
            g_bar[i].className = 'g-bar';
            if(g_bar[i].innerText == '正常'){
                g_bar[i].className += ' g-col1'
            }
            if(g_bar[i].innerText == '满载'){
                g_bar[i].className += ' g-col2'
            }
            if(g_bar[i].innerText == '拥挤'){
                g_bar[i].className += ' g-col3'
            }
            if(g_bar[i].innerText == '维护'){
                g_bar[i].className += ' g-col4'
            }
        }
    }













// ---------------------------------陈------------------------------------









// ---------------------------------吴------------------------------------