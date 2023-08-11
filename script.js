const typed=new Typed('.multiple-text',{strings: ['Hi','Bonjour','مرحبًا'],
    typeSpeed:150,
    backSpeed:150,
    backDelay:1000,
    loop:true
    }   );

var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-content");
function opentab(tabname)
{
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}