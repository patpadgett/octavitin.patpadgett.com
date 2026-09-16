'use strict';
const ring=document.getElementById('ring');
const leave=document.getElementById('leave');
const encounter=document.getElementById('encounter');
const waiting=document.getElementById('waiting-art');
const hello=document.getElementById('hello-art');
const status=document.getElementById('bell-status');
function setVisit(open){
 waiting.hidden=open;hello.hidden=!open;leave.hidden=!open;
 ring.setAttribute('aria-expanded',String(open));ring.disabled=open;
 encounter.classList.toggle('is-open',open);
 status.textContent=open?'Ting. Hello, Octavitin. You can ask him to leave whenever you like.':'He’s gone. He’ll only come back if you ring and ask.';
 document.getElementById('encounter-caption').textContent=open?'A new friend. Only by invitation.':'Your bed. Your invitation.';
 (open?leave:ring).focus({preventScroll:true});
}
ring.addEventListener('click',()=>setVisit(true));leave.addEventListener('click',()=>setVisit(false));
