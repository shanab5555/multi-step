var online = true;
var online2 = false;
var online3 = false;
var select1 = 1;
var select2 = 0;
var select3 = 0;

document.querySelector("#checkbox1").addEventListener("click" , function(){
if(online==false){

            this.style.background="hsl(230deg 75% 98.43%)";
            this.style.border=" solid 1px hsl(245, 60%, 69%) ";
            document.querySelector("#online_service").checked=true;
            online=true;
            select1 = 1;
            localStorage.setItem("online1" ,JSON.stringify(select1))
            
        }else{
            
            this.style.background="transparent";
            this.style.border="solid 1px hsl(240deg 8.33% 95.29%)";
            document.querySelector("#online_service").checked=false;
            online=false;
            select1 = 0;
            localStorage.setItem("online1" ,JSON.stringify(select1))
        }})

document.querySelector("#checkbox2").addEventListener("click" , function(){
if(online2==false){

            this.style.background="hsl(230deg 75% 98.43%)";
            this.style.border=" solid 1px hsl(245, 60%, 69%) ";
            document.querySelector("#storage").checked=true;
            online2=true;
            select2=1;
            localStorage.setItem("online2" ,JSON.stringify(select2));
        }else{
            
            this.style.background="transparent";
            this.style.border="solid 1px hsl(240deg 8.33% 95.29%)";
            document.querySelector("#storage").checked=false;
            online2=false;
            select2=0;
            localStorage.setItem("online2" ,JSON.stringify(select2));
        }})

document.querySelector("#checkbox3").addEventListener("click" , function(){
if(online3==false){

            this.style.background="hsl(230deg 75% 98.43%)";
            this.style.border="solid 1px hsl(245, 60%, 69%)";
            document.querySelector("#Profile").checked=true;
            online3=true;   
            select3=1;
            localStorage.setItem("online3" ,JSON.stringify(select3))
        }else{
            
            this.style.background="transparent";
            this.style.border="solid 1px hsl(240deg 8.33% 95.29%)";
            document.querySelector("#Profile").checked=false;
            online3=false;
            select3=0;
            localStorage.setItem("online3" ,JSON.stringify(select3))
            }})

            localStorage.setItem("online1" ,JSON.stringify(select1))
            localStorage.setItem("online2" ,JSON.stringify(select2))
            localStorage.setItem("online3" ,JSON.stringify(select3))


document.querySelector("#next").addEventListener("click" , function(event){

    event.preventDefault();
    if(online == false && online2 == false && online3 == false ){
        document.querySelector("h6").style.display="block";
        return false;
    }else{

        document.querySelector("h6").style.display="none";
        window.location.href="../../Project Step4 - monthly/index4.html"

    }
})
