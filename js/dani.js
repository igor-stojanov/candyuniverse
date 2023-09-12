function danasnjiDan(){
    var danas= new Date();
    var dan=danas.getDate();
    var mesec=danas.getMonth()+1;
    var godina=danas.getFullYear();
  
    document.write(dan+"."+mesec+"."+godina+".");
  }