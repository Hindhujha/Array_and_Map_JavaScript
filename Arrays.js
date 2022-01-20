//ARRAYS
//find 2nd largest and 2nd smallest array

function Stores()
{

    for(let j=1;j<=10;j++)
    { 
        myArr=Math.floor(Math.random()*1000);
    arr[i]=myArr;
        console.log(arr[i]);
        i++;
    }
    for(i=1;i<=10;i++)
    {
     for(j=i+1;j<=10;j++)
     {
        if(arr[i]>arr[j])

        {
            max=arr[i];
            arr[i]=arr[j];
            arr[j]=max;
        
        }
    }

    }
    console.log("SECOND SMALLEST ELEMENT IS:",arr[2]);
    console.log("SECOND LARGEST ELEMENT IS:",arr[9]);

}
console.log("SECOND LARGEST AND SECOND SMALLEST ELEMENT IN ARRAY:")
let i=1,arr=[];
let myArr,max;
Stores()

