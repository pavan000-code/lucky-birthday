const privacyNotice=document.querySelector("#remove");
const privacyDiv=document.querySelector(".main-privacy");

const userName=document.querySelector("#name");
const date=document.querySelector("#dob");
const ln=document.querySelector("#luckynumber");

const goodluck=document.querySelector(".lucky-div");
const goodluckMsg=document.querySelector("#main-msg-luck");
const badluck=document.querySelector(".unlucky-div");
const badluckMsg=document.querySelector("#main-msg-unluck");
const badluckImg=document.querySelector("#image-unluck");

const submitIco=document.querySelector("#btn-submit");
const form=document.querySelector("#main-form");
const resetIco=document.querySelector("#btn-reset")


privacyNotice.addEventListener("click",()=>{
    privacyDiv.style.display="none";
})

const luckyBirthdayHandler=(event)=>{
    event.preventDefault();
    let nameValue=userName.value;
    let dobValue=date.value;
    let luckyNum=ln.value;
    luckyBdayChecker(nameValue,dobValue,luckyNum)
}

const luckyBdayChecker=(nameValue,dobValue,luckyNum)=>{
    let dobArr=dobValue.split("-");
    let dobJoin=dobArr.join("");
    console.log(dobJoin);
    let sum=0;
    for(let i=0;i<dobJoin.length;i++){
        sum+=Number(dobJoin[i]);
    }
    if(luckyNum>0){
        if(sum%luckyNum===0){
            goodluck.style.display="block";
            goodluckMsg.innerText=`Yippee ${nameValue} ${luckyNum} is lucky with your birthdate.`
            badluck.style.display="none";
        }else{
            goodluck.style.display="none";
            badluckMsg.innerText=`Sorry ${nameValue} your birthday isn't lucky with ${luckyNum}.`
            badluck.style.display="block";
            badluckImg.style.display="block";
        }
    }else{
        goodluck.style.display="none";
        badluckMsg.innerText=`Sorry ${nameValue} please enter lucky number whose value is greater than 0.`
        badluck.style.display="block";
        badluckImg.style.display="none";
    }
}
form.addEventListener("submit",(e)=>luckyBirthdayHandler(e));
resetIco.addEventListener("click",()=>{
    privacyDiv.style.display="block";
    userName.value="";
    date.value="";
    ln.value="";
    goodluck.style.display="none";
    goodluckMsg.innerText=``;
    badluckMsg.innerText=``
    badluck.style.display="none";
    
})