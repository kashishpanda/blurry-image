const bg = $(".bg");
const loadText = $(".loading-text");

var load = 0;

var imgLoad =30;

var interval = setInterval(blurring,30);

var imgInterval = setInterval(imgBluring,100);

function blurring(){
 load++;


 if(load==100){
   clearInterval(interval);
 }


 loadText.text(load+"%");
 loadText.fadeOut(5000,0);
 }

 function imgBluring(){
   imgLoad--;

   if(imgLoad==0){
     clearInterval(imgInterval);
   }
   bg.css("-webkit-filter", "blur("+imgLoad+"px)");

 }


/*const output = (input, input_start, input_end, output_start, output_end)=>{
  return output_start + ((output_end - output_start) / (input_end - input_start)) * (input - input_start)
}*/
