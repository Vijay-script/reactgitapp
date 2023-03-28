let input=document.getElementById("input")
let button=document.getElementById("button")
 let ans=document.getElementById("ans")

let arr=[];
window.onload=()=>
{
 arr= JSON.parse (localStorage.getItem("item")) || []
//  console.log(arr)
 arr.forEach(todo=>add(todo))


}


button.addEventListener("click",()=>
{
    arr.push(input.value)
    localStorage.setItem("item",JSON.stringify(arr))
    add(input.value)
    input.value=''
})

function add(todo){
    let para= document.createElement("p")
    para.innerHTML=todo
    ans.appendChild(para)
    // sessionStorage.clear("key",JSON.stringify(arr))

    para.addEventListener("click",()=>
    {
     para.style.textDecoration = 'line-through';
     remove(todo)
    })
    para.addEventListener("dblclick",()=>
    {
        ans.removeChild(para)
        remove(todo)
    })
   function remove(todo){
   let index= arr.indexOf(todo)
   if(index>-1)
       arr.splice(index,1)
       localStorage.setItem("item",JSON.stringify(arr))

   }
  
}
