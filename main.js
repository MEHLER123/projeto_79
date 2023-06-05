var imagens=["benji.JPG","benji1.JPG","benji2.JPG","benji3.JPG","benji5.JPG","benji6.jpeg","spike.JPG","spike1.JPG","spike2.JPG","spike3.JPG","buster.JPG","buster1.JPG","buster2.JPG"];

var nomes=["benji.JPG(Benji)","benji1.JPG(Benji)","benji2.JPG(Benji)","benji3.JPG(Benji)","benji5.JPG(Benji)","benji6.jpeg(Benji)","spike.JPG","spike1.JPG(Spike)","spike2.JPG(Spike)","spike3.JPG(Spike)","buster.JPG(Buster)","buster1.JPG(Buster)","buster2.JPG(Buster)"];

var i=0;
function update(){
    i++;
    var numero=13;
    if(i>numero){
        i=0;
     }
     var update_img= imagens[i];
     var update_name= nomes[i];
    document.getElementById("memorias").src=update_img;
    document.getElementById("pets").innerHTML=update_name;
 }