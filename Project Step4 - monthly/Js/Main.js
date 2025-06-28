var result;
var salary_data;
var salary_1;
var salary_2;
var salary_3;

const data = 
JSON.parse(localStorage.getItem("datamonthly"));

const online1 = 
localStorage.getItem("online1");
const online2 = 
localStorage.getItem("online2");
const online3 = 
localStorage.getItem("online3");

var total_monthly={ 

    arcande:[ "Arcande (Monthly)" , "$9/mo" , 9 ],
     
     advanced:["Advanced (Monthly)","$12/mo",12],
    
     pro:["Pro (Monthly)","$15/mo",15]
    
}

function total_data(){
    if(data==1){

        result = total_monthly.arcande;
        salary_data= total_monthly.arcande[2]
        }else if(data==2){

        result = total_monthly.advanced;
        salary_data= total_monthly.advanced[2]
        }else {

        result = total_monthly.pro;
        salary_data= total_monthly.pro[2]
        }
}

total_data();
document.querySelector("h2").innerHTML=result[0];
document.querySelector("#total_one p").innerHTML=result[1];



// _--------------------------------------

var total_page = {
    checkbox1 : ["Online service" , "+$1/mo" , 1]
        ,
    checkbox2 : ["Larger storage" , "+$2/mo" , 2]
        ,
    checkbox3 :["Customizable Profile" , "+$2/mo" ,2]
        }

        if(online1 == 1){
            document.querySelector("#service").style.display="flex";
            document.querySelector("#service h1").innerHTML = total_page.checkbox1[0];
            document.querySelector("#service p").innerHTML = total_page.checkbox1[1];
            salary_1= total_page.checkbox1[2];
        }else{

            document.querySelector("#service").style.display="none";
            salary_1= 0 ;
        } 
        
        if(online2 == 1){
            document.querySelector("#storage").style.display="flex";
            document.querySelector("#storage h1").innerHTML = total_page.checkbox2[0];
            document.querySelector("#storage p").innerHTML = total_page.checkbox2[1];
            salary_2=total_page.checkbox2[2];
        }else{

            document.querySelector("#storage").style.display="none";
            salary_2=0;
        }

        if(online3 == 1){
            
            document.querySelector("#Profile").style.display="flex";
            document.querySelector("#Profile h1").innerHTML = total_page.checkbox3[0];
            document.querySelector("#Profile p").innerHTML = total_page.checkbox3[1];
            salary_3=total_page.checkbox3[2];
            
        }else{

            document.querySelector("#Profile").style.display="none";
            salary_3=0;
        }

// -------------------------------
var salary;
salary = salary_1+salary_2+salary_3+salary_data;


document.querySelector("#total p").innerHTML="+$"+salary+"/mo";
