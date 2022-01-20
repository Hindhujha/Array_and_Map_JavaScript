const prompt=require("prompt-sync")();
function array()
{
for(let i=1;i*i<=N;i++)
{  
    if(N%i==0)
    {
        arr[i]=i;
    console.log(arr[i]);
    }
}

}
let N=prompt("Enter a number to find their factors: ");
let arr=[],temp;
array();
