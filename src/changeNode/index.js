var swapPairs = function(head) {
    if(!head||!head.next) { console.log("end",head);return};
    console.log(head.val);
    swapPairs(head.next.next);
    console.log("af",head.val);
    [head.next,head.next.next]=[head.next.next,head.next];
    if(head.val==1){
        return head;}
   
};