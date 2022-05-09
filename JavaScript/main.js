let registerBtn=document.getElementById("btn");
let checkBox=document.getElementById("terms");
// checkBox.checked=false;
function chkform(){

    let inputField=document.querySelectorAll(".input");
    if(checkBox.checked== true){
        let count=0;
         console.log(checkBox.checked);
        console.log("Checked");
         console.log(inputField[0].value);
         for(let i=0;i<inputField.length;i++){
           if( inputField[i].value!=""){
            //    registerBtn.disabled=false;
             count++;
             console.log(count);
            //    console.log(inputField[i].value);
           }
           else{
               console.log(count);
               count--;
            //    registerBtn.disabled=true;
           }
        // }
        if(count==5){
            registerBtn.disabled=false;
        }
        else{
                    registerBtn.disabled=true;
                }
}}
else{
registerBtn.disabled=true;



    // console.log(checkBox.value=true)
}

}
checkBox.addEventListener("click",chkform);