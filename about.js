/* 
    About section
    Prabhanshu Bhowal 
*/

const btns = document.querySelectorAll('.show');
let pre=btns[1];
btns.forEach(b => {    
    if(b.innerHTML=="+") compress(b); 

    b.addEventListener('click', function() {
        if(b.innerHTML=="x"){
            b.innerHTML="+";
            compress(b);
        }  
        else {
            pre.innerHTML="+";
            compress(pre);
            pre=b;
            expand(b);             
        }                  
    });
});
function compress(b) {
    sibling=b.nextElementSibling;
    sibling.style.height="0";
    sibling.style.overflow="hidden";
}
function expand(b) {
    b.innerHTML="x";
    sibling=b.nextElementSibling;
    sibling.style.height="auto";  
}
