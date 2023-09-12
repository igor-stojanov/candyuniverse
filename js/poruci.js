function validacijaForme() {
    var x = document.forms["forma"]["Ime"].value;
    if (x == "") {
      return false;
    }
    x = document.forms["forma"]["Prezime"].value;
    if (x == "") {
      return false;
    }
    x = document.forms["forma"]["Adresa"].value;
    if (x == "") {
      return false;
    }
    x = document.forms["forma"]["Telefon"].value;
    if (x == "") {
      return false;
    }
    x = document.forms["forma"]["Kolicina"].value;
    if (x == "") {
      return false;
    }
    return true;
  } 
  function funkcija() {
    if (!validacijaForme()){
      alert("Sva polja moraju biti ispunjena");
      return;
    }
    /*alert("Uspesno izvršena kupovina");*/
    window.open("potvrda.html");
  }
  

  function validacijaForme2() {
    var x = document.forms["forma2"]["ime"].value;
    if (x == "") {
      return false;
    }
    x = document.forms["forma2"]["email"].value;
    if (x == "" || !x.includes('@')) {
      return false;
    }
       x = document.forms["forma2"]["poruka"].value;
    if (x == "") {
      return false;
    }
    return true;
  } 
  function funkcijaKontakt() {
    if (!validacijaForme2()){
      alert("Sva polja moraju biti ispunjena pravilno!");
      
    }
    else{
      alert("Uspešno ste poslali poruku!");
      return;
    }
   
  }

  
