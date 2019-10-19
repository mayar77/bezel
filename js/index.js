
$(document).ready(function(){
                  
                  $(".loading").fadeOut(1500,function(){
                     
                      $("body").css("overflow","auto")
    
    
}); 
                  })

var textLink="mission";
 console.log(textLink);
var tab2=document.getElementById("tab2");
var missionlink=document.getElementsByClassName("link1");
var temp;
for( var i=0; i<missionlink.length;i++)
    {
       
        missionlink[i].addEventListener("click",function(e){
            
             textLink=e.target.innerHTML;
            texts=e.target;
            
            if (textLink === "Mission")
            {
                  $("#tab2").css("display","none"); 
                   $("#tab3").css("display","none"); 
                  $("#tab1").css("display","block"); 
                
            
                
                
                
                
            }
            else if (textLink === "Customers")
            {
                $("#tab1").fadeOut(100);
                   $("#tab3").css("display","none"); 
                $(".link1").siblings().addClass("bord-item1");
                  $("#tab2").fadeIn(500); 
                
               
            }
            else if (textLink === "Ideas")
              {
                $("#tab1").fadeOut(100);
                    $("#tab2").fadeOut(100);
            
                  $("#tab3").fadeIn(500); 
               
            }
        })
    }

 var missionlink2=document.getElementsByClassName("link2");
for( var i=0; i<missionlink2.length;i++)
    {
       
        missionlink2[i].addEventListener("click",function(e){
            
             textLink2=e.target.innerHTML;
            
            
            if (textLink2 === "All")
            {
                  
                  $(".img1").css("display","block"); 
                 $(".img2").css("display","block"); 
                 $(".img3").css("display","block"); 
                 $(".img4").css("display","block"); 
                 $(".img5").css("display","block"); 
                 $(".img6").css("display","block"); 
            
                
                
                
                
            }
            else if (textLink2 === "Branding")
            {
                
                //$("img").fadeOut(200).remove(".img2,.img4,.img6");
                $(".img1").fadeOut(500);
                  $(".img2").fadeOut(500);
                  $(".img4").fadeOut(500);
                
                   $(".img3").fadeIn(500);
                  $(".img5").fadeIn(500);
                  $(".img6").fadeIn(500);
                
               
            }
            else if (textLink2 === "Product Design")
              {
                  
                   $(".img3").fadeIn(200);
                  $(".img5").fadeIn(200);
                  $(".img1").fadeIn(200);
                 $(".img2").fadeOut(200);
                  $(".img4").fadeOut(200);
                  $(".img6").fadeOut(200);
            }
             else if (textLink2 === "Packaging")
            {
                
              // $("div").remove(".img1,.img3");
              // $("img").addclass(".img2,.img4,.img5,.img6");
                
               
                  $(".img3").hide(1000);
                  $(".img1").hide(1000);
            }
            else if (textLink2 === "UI/UX")
              {
                    
                  $(".img3").hide(500);
                  $(".img1").hide(500);
                  $(".img4").fadeOut(200);
                  $(".img6").fadeOut(200);
                   $(".img2").show(200);
                  $(".img5").show(200);
                  
               
            }
        })
    }
//svg jquery bta3t tkmla


   
    
         var $svg = $('svg').drawsvg();
            $svg.drawsvg('animate');
        
  
  


//animate number 

$('#lines1').animateNumber({ number: 125 });
$('#lines2').animateNumber({ number: 45 });
$('#lines3').animateNumber({ number: 970 });
$('#lines4').animateNumber({ number: 190 });

//jquery nav
$("nav a").click(function(){
    
    let hrefNav =$(this).attr("href");
    let navN =$(hrefNav).offset().top;
      $("html,body").animate({scrollTop:navN-100} , 1000);
    
    
})

checkTest();
$(window).scroll(function(){
    
    if($(window).width() >=1224 )
       {
  var aboutNav=$("#about").offset().top;
 var winLink=$(window).scrollTop();
    
    if (winLink > aboutNav-300)
        {
            
            $(".nav-home").css("backgroundColor","white");
              $("nav a").css("color","rgba(0,0,0,0.8)");
              $("navbar-toggler-icon").css("color","black");
            $("#imgLogo").attr("src","images/logo-dark.png");
        }  
      else
          {
                $(".nav-home").css("backgroundColor","transparent");
             $("nav a").css("color","rgba(255,255,255,1)"); 
               $("navbar-toggler-icon").css("color","white");
               $("#imgLogo").attr("src","images/logo-light.png"); //tbdel sora bdl sora 
          }
    
}
    
    
    
})
function checkTest(){
    
    
     if($(window).width() <= 990)
        {
             $(".nav-home").css("backgroundColor","white");
              $("nav a").css("color","rgba(0,0,0,0.8)");
              $("navbar-toggler").css("color","black");
            $("#imgLogo").attr("src","images/logo-dark.png");
            
        }
    
}

   

 new WOW().init(); //plugin wow

$(document).ready(function(){
      $('.single-item').slick({
     
          dots: true,
          arrow:true,
  infinite: false,
 
      });
    });
  
   $(document).ready(function(){
      $('.single-item1').slick({
     
          dots: true,
          arrow:true,
  infinite: false,
 
      });
    }); 

