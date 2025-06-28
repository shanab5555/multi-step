var select = 1;
var icon = false;

    localStorage.setItem("datamonthly" , JSON.stringify(select));

document.querySelector("#arcade").addEventListener("click" , function(){
    document.querySelector("#arcade").style.border="solid hsl(245.45deg 33.62% 44.9%) 1px";
    document.querySelector("#advanced").style.border="solid hsl(252deg 6.85% 85.69%) 1px";
    document.querySelector("#pro").style.border="solid hsl(252deg 6.85% 85.69%) 1px";
    select = 1;
    localStorage.setItem("datamonthly" , JSON.stringify(select));
})

document.querySelector("#advanced").addEventListener("click" , function(){
    document.querySelector("#advanced").style.border="solid hsl(245.45deg 33.62% 44.9%) 1px";
    document.querySelector("#arcade").style.border="solid hsl(252deg 6.85% 85.69%) 1px";
    document.querySelector("#pro").style.border="solid hsl(252deg 6.85% 85.69%) 1px";
    select = 2;
    localStorage.setItem("datamonthly" , JSON.stringify(select));
    
})

document.querySelector("#pro").addEventListener("click" , function(){
    document.querySelector("#pro").style.border="solid hsl(245.45deg 33.62% 44.9%) 1px";
    document.querySelector("#advanced").style.border="solid hsl(252deg 6.85% 85.69%) 1px";
    document.querySelector("#arcade").style.border="solid hsl(252deg 6.85% 85.69%) 1px";
    select = 3;
    localStorage.setItem("datamonthly" , JSON.stringify(select));
})


document.querySelector("#icon").addEventListener("click" , function(){
    
    if(icon==true){
        
        document.querySelector("#icon_i").style.margin = "0% 0% 0% 0%" ;
        document.querySelector('#circle p:nth-child(1)').style.color="hsl(213.79deg 93.55% 18.24%)"
        document.querySelector('#circle p:nth-last-child(1)').style.color= "hsl(230deg 4.48% 73.73%)"
        document.querySelector("#arcade p:nth-last-child(1)").style.display = "none";
        document.querySelector("#pro p:nth-last-child(1)").style.display = "none";
        document.querySelector("#advanced p:nth-last-child(1)").style.display = "none";
        document.querySelector("#advanced p:nth-last-child(2)").innerHTML = "$9/mo";
        document.querySelector("#pro p:nth-last-child(2)").innerHTML = "$12/mo";
        document.querySelector("#arcade p:nth-last-child(2)").innerHTML = "$15/mo";
        icon=false;

    }else{

        document.querySelector("#icon_i").style.margin = "0% 0% -7% 140%" ;
        document.querySelector('#circle p:nth-last-child(1)').style.color="hsl(213.79deg 93.55% 18.24%)"
        document.querySelector('#circle p:nth-child(1)').style.color= "hsl(230deg 4.48% 73.73%)"
        document.querySelector("#arcade p:nth-last-child(1)").style.display = "block";
        document.querySelector("#pro p:nth-last-child(1)").style.display = "block";
        document.querySelector("#advanced p:nth-last-child(1)").style.display = "block";
        document.querySelector("#arcade p:nth-last-child(2)").innerHTML = "$90/yr";
        document.querySelector("#advanced p:nth-last-child(2)").innerHTML = "$120/yr";
        document.querySelector("#pro p:nth-last-child(2)").innerHTML = "$150/yr";
        icon=true;

    }
    


})

document.querySelector("#next").addEventListener("click" , function(){
    
    if(icon==false){
        
        window.location.href="../../Project Step3 - monthly/index3.html"
        
    }else{
        
        window.location.href="../../Project Step3 - yearly/index3.html"
        
    }
})
