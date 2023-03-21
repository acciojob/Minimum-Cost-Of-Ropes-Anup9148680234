function calculateMinCost() {
  //your code here
   var firstinput=document.querySelector("input").value;
      var arr=firstinput.split(",");

      arr.sort();

    var cost=0;
    while(arr.length>1)
    {
        var result=Number(arr[0])+Number(arr[1]);
        arr.splice(0,2);
        arr.push(result);
        cost+=result;

        arr.sort();
    }
    let result1 = document.getElementById("result");	
    result1.textContent=cost
    
  
  
}  
