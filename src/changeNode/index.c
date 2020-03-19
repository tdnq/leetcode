struct ListNode *swapPairs(struct ListNode * head){
    if(!head||!head->next){
        return head;
    }
    struct ListNode * new_head=head->next;
    head->next=swapPairs(new_head->next);
    new_head->next=head;
    return new_head;
}