// ---------------------------------郭------------------------------------
var gF1b = document.querySelector('#g-f1b');
var gF1c = document.querySelector('.g-f1c');
var gF1b1 = document.querySelector('.g-f1b1');
var gF1b2 = document.querySelector('.g-f1b2');
var gIpt = document.querySelector('.g-ipt');
var gSeach = document.querySelector('.g-seach');
var gReset = document.querySelector('.g-reset');
document.onclick = function (ev){
    var e = ev || window.event;
    if((e.target == gF1b1 || e.target == gF1b2)&&(gF1c.getAttribute('val') == '1')){
        gF1c.style.display = 'block';
        gF1c.setAttribute('val','2');
        
    }else{
        gF1c.style.display = 'none';
        gF1c.setAttribute('val','1');
    }
}

gF1c.onclick = function(ev){
    var e = ev || window.event;
    var a = e.target.innerText;
    gF1b1.innerText = (a);
    g_none();
        var arr1 = [];
        var arr2 = [];
        var arr3 = [];
        for(var i = 0; i < gObj.length; i++){
            if(a == gObj[i].state){
                if( gObj[i].serial == '电信' ){
                    arr1.push(gObj[i])
                }else if( gObj[i].serial == '网通' ){
                    arr2.push(gObj[i])
                }else if( gObj[i].serial == '其他' ){
                    arr3.push(gObj[i])
                }
            }
        }
        console.log(arr1);
        console.log(arr2);
        console.log(arr3);
        for(var i = 0; i < arr1.length; i++){
            g_reg[i].innerText = arr1[i].name;
            g_bar[i].innerText = arr1[i].state;
        }
        for(var i = 0; i < arr2.length; i++){
            g_reg[i+19].innerText = arr2[i].name;
            g_bar[i+19].innerText = arr2[i].state;
        }
        for(var i = 0; i < arr3.length; i++){
            g_reg[i+26].innerText = arr3[i].name;
            g_bar[i+26].innerText = arr3[i].state;
        };
    
};

gSeach.onclick = function(){
    var txt = gIpt.value;
    g_none();
    for(var i = 0; i < gObj.length; i++){
        if( gObj[i].name == txt ){
            if( gObj[i].serial == '电信' ){
                g_reg[0].innerText = gObj[i].name;
                g_bar[0].innerText = gObj[i].state;
            }else if( gObj[i].serial == '网通' ){
                g_reg[19].innerText = gObj[i].name;
                g_bar[19].innerText = gObj[i].state;
            }else if( gObj[i].serial == '其他' ){
                g_reg[26].innerText = gObj[i].name;
                g_bar[26].innerText = gObj[i].state;
            };
        };
    };
    
};
gReset.onclick = function(){
    gIpt.value = '';
    gF1b1.innerText = '';
    g_none();
    // g_block();
    setDate(gObj);

}












// ---------------------------------陈------------------------------------









// --------------------------------吴-----------------------------------