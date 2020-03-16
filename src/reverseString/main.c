void reverseString(char *str_rev, int sSize){
    int i=0;
    int j=sSize-1;
    char temp;
    while(i<j){
    	temp=str_rev[i];
    	str_rev[i]=str_rev[j];
    	str_rev[j]=temp;
        i++;
        j--;
    }
}