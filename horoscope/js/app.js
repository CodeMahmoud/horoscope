function horoscope(){
   var birthmonth = document.getElementById('month').value;
    var birthday = document.getElementById('day').value;
  var result = " you need to enter a valpic date.";

  if (birthmonth == 1&& birthday >=20 || birthmonth == 2&& birthday <=18){
    result = ("Aquarius");
    document.getElementById('pic').innerHTML="<img src='https://cdn1.iconfinder.com/data/icons/zodiac-and-astrology-signs/78/9-512.png'wpicth=20%>";

  }
  if (birthmonth == 2&& birthday >=19 || birthmonth == 3&& birthday <=20){
    result = ("Pisces");
    document.getElementById('pic').innerHTML="<img src='https://cdn1.iconfinder.com/data/icons/zodiac-and-astrology-signs/78/10-512.png'wpicth=20%>";

  }
  if (birthmonth == 3&& birthday >=21 || birthmonth == 4&& birthday <=19){
    result = ("Aries");
    document.getElementById('pic').innerHTML="<img src='https://cdn1.iconfinder.com/data/icons/zodiac-and-astrology-signs/78/1-512.png'wpicth=20%>";

  }
  if (birthmonth == 4&& birthday >=20 || birthmonth == 5&& birthday <=20){
    result = ("Taurus");
    document.getElementById('pic').innerHTML="<img src='https://cdn1.iconfinder.com/data/icons/zodiac-and-astrology-signs/78/2-512.png'wpicth=20%>";

  }
  if (birthmonth == 5&& birthday >=21 || birthmonth == 6&& birthday <=20){
    result = ("Gemini");
    document.getElementById('pic').innerHTML="<img src='https://cdn1.iconfinder.com/data/icons/zodiac-and-astrology-signs/78/11-512.png'wpicth=20%>";

  }
  if (birthmonth == 6&& birthday >=21 || birthmonth == 7&& birthday <=22){
    result = ("Cancer");
    document.getElementById('pic').innerHTML="<img src='https://cdn1.iconfinder.com/data/icons/zodiac-and-astrology-signs/78/8-512.png'wpicth=20%>";

  }
  if (birthmonth == 7&& birthday >=23 || birthmonth == 8&& birthday <=22){
    result = ("Leo");
    document.getElementById('pic').innerHTML="<img src='https://cdn1.iconfinder.com/data/icons/zodiac-and-astrology-signs/78/3-512.png'wpicth=20%>";

  }
  if (birthmonth == 8&& birthday >=23 || birthmonth == 9&& birthday <=22){
    result = ("Virgo");
    document.getElementById('pic').innerHTML="<img src='https://cdn1.iconfinder.com/data/icons/zodiac-and-astrology-signs/78/12-512.png'wpicth=20%>";

  }
  if (birthmonth == 9&& birthday >=23 || birthmonth == 2&& birthday <=22){
    result = ("Libra");
    document.getElementById('pic').innerHTML="<img src='https://cdn1.iconfinder.com/data/icons/zodiac-and-astrology-signs/78/5-512.png'wpicth=20%>";

  }
  if (birthmonth == 10&& birthday >=23 || birthmonth == 11&& birthday <=21){
    result = ("Scorpio");
    document.getElementById('pic').innerHTML="<img src='https://cdn1.iconfinder.com/data/icons/zodiac-and-astrology-signs/78/7-512.png'wpicth=20%>";

  }
  if (birthmonth == 11&& birthday >=22 || birthmonth == 12&& birthday <=21){
    result = ("Sagittarius");
    document.getElementById('pic').innerHTML="<img src='https://cdn1.iconfinder.com/data/icons/zodiac-and-astrology-signs/78/6-512.png'wpicth=20%>";

  }
  if (birthmonth == 12&& birthday >=22 || birthmonth == 1&& birthday <=19){
    result = ("Capricorn");
    document.getElementById('pic').innerHTML="<img src='https://cdn1.iconfinder.com/data/icons/zodiac-and-astrology-signs/78/4-512.png'wpicth=20%>";

  }else if (birthmonth>12||birthday>31){
       alert("Please enter an accurate date ! ");
    }
 document.getElementById("output").innerHTML= result;


}
