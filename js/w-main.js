// ---------------------------------郭------------------------------------









// ---------------------------------陈------------------------------------









// ---------------------------------吴------------------------------------

var lis = document.querySelectorAll('.w-tab-left li');
var divs = document.querySelectorAll('.w-tab-right')[0].children;
var prevIndex = 0;//上次选中的元素下标
console.log(divs)
for (let i = 0; i < lis.length; i++){// 给所有的h3添加点击事件
    lis[i].abc = i;//给对象动态添加属性abc值为对应的下标
    lis[i].onclick = function (e){
        console.log(i)
        console.log(this.abc)
        lis[prevIndex].className = '';
        divs[prevIndex].className = 'hidde';
        this.className = 'active';
        divs[this.abc].className = 'show';
        prevIndex = this.abc;// 更新上次选中元素的下标
    }
   
}
