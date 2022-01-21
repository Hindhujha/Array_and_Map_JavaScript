//stored repeated digits like 11,22,33......99
const prompt=require("prompt-sync")();

function repeat()
{
 while(i<=100)
 {
     if((i%11)==0)
    {
        arr[i]=i;
    console.log(arr[i]);
    }
    i++;
 }
}


let arr=[],i=11;

repeat()
