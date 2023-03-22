document.getElementById("concatenate").onclick=function(){
    var a ="waleed";
    var b="Ahmad";
    var c=a+b;
    document.getElementById("Original").innerHTML=a+" "+b;
    document.getElementById("result").innerHTML=a+" "+b;
}
document.getElementById("clear1").onclick=function(){
    document.getElementById("Original").innerHTML=" ";
}
document.getElementById("clear2").onclick=function(){
    document.getElementById("result").innerHTML=" ";
}
document.getElementById("askname").onclick=function(){
    var a=prompt("your good name please");
    document.getElementById("Original").innerHTML=a;
    document.getElementById("result").innerHTML=a;
}
document.getElementById("ifelse").onclick=function(){
    var a =prompt("Enter your marks");
    if(a>=90){
        document.getElementById("Original").innerHTML=" Your entered Marks out of <b>100</b> are :" +" " + a;
        document.getElementById("result").innerHTML=" And your grade is A+ ";

    }
    else if(a>=80){
        document.getElementById("Original").innerHTML=" Your entered Marks out of  <b>100</b> are :"+ " " + a;
        document.getElementById("result").innerHTML=" And your grade is A ";
    }
    else if(a>=70){
        document.getElementById("Original").innerHTML=" Your entered Marks out of  <b>100</b> are :"+ " " + a;
        document.getElementById("result").innerHTML=" And your grade is B ";
    }
    else {
        document.getElementById("Original").innerHTML=" Your entered Marks out of  <b>100</b> are :"+ " " + a;
        document.getElementById("result").innerHTML="Sorry! Better luck Next time! ";
    }
}
document.getElementById("conditions").onclick=function(){
    var age= prompt("Please Enter Your Age");
    var weight= prompt("Please Enter Your weight");
    if(age==30 && weight==60){
        document.getElementById("result").innerHTML="you are smart and healthy";
        
            document.getElementById("Original").innerHTML="your entered age is :" +" " + age + " " + " and weight is :"+ " "+ weight;

    }
    if(age<=20 && weight>=60){
        document.getElementById("result").innerHTML="you need  diet ";
        document.getElementById("Original").innerHTML="your entered age is :" +" " + age + " " + " and weight is :"+ " "+ weight;

    }
    if(age>=30 && weight<=40){
        document.getElementById("result").innerHTML="you are too smart ! Eat more.";
        document.getElementById("Original").innerHTML="your entered age is :" +" " + age + " " + " and weight is :"+ " "+ weight;

    }
    else {
        document.getElementById("result").innerHTML="You are Obase Person";
        document.getElementById("Original").innerHTML="";
    }
}
document.getElementById("login").onclick=function(){
    var a = prompt(" Enter Your Name");
    var b = prompt(" Enter Email");
    document.getElementById("Original").innerHTML="your entered name is :"+ " "+ a + "   "+ " and Email is : "+ " "+b;
    document.getElementById("result").innerHTML=" You logged in successfully";
}
document.getElementById("comparison").onclick=function(){
    var a=prompt("Enter first number");
    var b=prompt("Enter second number");
    if(a>b){
        document.getElementById("result").innerHTML="First value is greater !";
        document.getElementById("Original").innerHTML="value of a is :"+ " "+ a + " value of b is : "+ " "+b;
    }
    else if(a<b){
        document.getElementById("result").innerHTML="Second value is greater !";
        document.getElementById("Original").innerHTML="value of a is :"+ " "+ a + " value of b is : "+ " "+b;
    }
    else if(a==b){
        document.getElementById("result").innerHTML="Both values are equal !";
        document.getElementById("Original").innerHTML="value of a is :"+ " "+ a + " value of b is : "+ " "+b;
    }
}
document.getElementById("nested").onclick=function(){
    var age=prompt("enter age");
    var weight;
    if(age>=20){
        weight=prompt("enter weight")
        if(weight>=50){
           // document.getElementById("result").innerHTML="you are healthy man";
            //document.getElementById("Original").innerHTML="your age is "+" "+age+"and weight is"+ " "+weight;

        }
        document.getElementById("result").innerHTML="you are healthy man";
      document.getElementById("Original").innerHTML="your age is "+" "+age +"and weight is"+ " "+weight;

    }
    else {
        document.getElementById("Original").innerHTML="your age is "+" "+age+"and weight is"+ " "+weight;
        document.getElementById("result").innerHTML="you are baby"
    }
    
    }
    document.getElementById("check").onclick=function(){
        document.getElementById("result").innerHTML="You Have Successfully Completed the Assignment";

    }



