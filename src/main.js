let html = document.querySelector('#html')
let style = document.querySelector('#style')
let string = `
/*大家好，我叫Cris Zhang!
下面我将演示一个八卦图来展示我的前端功底*/
#div1{
    border:1px solid grey;
    width:300px;
    height:300px;
    background-color:red;
}
/*接下来我要将正方形变成圆形，加阴影
并且将其分成黑白两半*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
    background: linear-gradient(
        90deg, 
        rgba(0,0,0,1) 0%,
        rgba(0,0,0,1) 50%, 
        rgba(255,255,255,1) 50%, 
        rgba(255,255,255,1) 100%
    );
}
/*下面是加两个小球,hahahahhahahahahahahhahahahahhahahahhahahahhahahahahhahahahahahahhahahahahhahahahhahahahhahahahahhahahahahahahhahahahahhahahahhahahahha*/
#div1::before{
    width:150px;
    height:150px;
    border-radius:50%;
    background:#000000;
    left:50%;
    top:0;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:150px;
    height:150px;
    border-radius:50%;
    background:#ffffff;
    left:50%;
    bottom:0;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`
string2 = ""
let n = 0
// html.innerHTML = string.substring(0, n)
let step = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            string2 += '<br>'
        } else if (string[n] === ' ') {
            string2 += "&nbsp;"
        } else {
            string2 += string[n]
        }
        // html.innerHTML = string.substring(0, n);
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 9999)
        html.scrollTo(0, 9999)
        n = n + 1;
        if (n < string.length) {
            step()
        }
    }, 50)
}
step();