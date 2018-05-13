window.onload = function(){
  var breakSpan = document.getElementById('break');
  var mediaQuery = window.matchMedia('(max-width: 508px)');
  var breakLine = document.getElementById("br");
  var header = document.getElementById("header");
  var overHeader = document.getElementById("overHeader");
  var introduction = document.getElementById("introduction");
  var plusIcon = document.getElementById("plusIcon");
  var containerApps = document.getElementById("containerApps");
  var containerComputer = document.getElementById("containerComputer");
  var containerVideo = document.getElementById("containerVideo");
  var footer = document.getElementById("footer");
  var plusIconTwo = document.getElementById("plusIconTwo");
  var blogNewsContainer = document.getElementById("blogNewsContainer");
  var readMoreBtn1 = document.getElementById("readMoreBtn1");
  var blog1 = document.getElementById("blog1");
  var readMoreBtn2 = document.getElementById("readMoreBtn2");
  var blog2 = document.getElementById("blog2");
  var startWebAgency = document.getElementById("startWebAgency");
  var descriptionOdin = document.getElementById("descriptionOdin");






  window.onscroll = function(){
    if(document.documentElement.scrollTop !== 0 || document.body.scrollTop !== 0){
      overHeader.classList.add('down-animation');
    } else {
      overHeader.classList.remove('down-animation');
    }
};



/* acesta este un sistem de functii care adauga si sterge clasele lui plusIcon, respectiv
plusIconTwo, pentru a arata ca si cand cercul s-ar duce la footer*/

  function downArrow() {

//s-a adaugat un timeout deoarece scrollIntoView nu functioneaza daca elementul nu a
//aparut deja in document
  setTimeout(function(){containerApps.scrollIntoView({
      behavior: 'smooth'
    })
  },10);

//acestea readuc elementele la starea initiala(DACA NU SUNT DEJA)
    containerApps.classList.add("special-flex-apps");
    containerComputer.style.display = 'grid';
    containerVideo.style.display = 'flex';
    blogNewsContainer.style.display = 'block';
    startWebAgency.style.display = 'flex';
    descriptionOdin.style.display = 'grid';
    footer.style.display = 'grid';


    plusIcon.classList.add("down-arrow");
    /*ii adauga clasa de "down-arrow":
      .down-arrow {
        bottom: -100%;
        opacity: 0;
    }
    care face ca elementul sa se duca in JOS*/
    if(plusIcon.classList.contains("down-arrow")) //verifica daca are clasa de "down-arrow" si aplica respectivele modificari
    {
      /*ii STERGE clasa lui up-arrow al elementului plusIconTwo(IN CAZ CA O ARE DEJA), daca este apasat a doua oara plusIcon:
        .up-arrow {
        bottom: 800px;
        opacity: 0;

      } pentru a-si pierde opacitatea*/
       plusIconTwo.classList.remove("up-arrow");
       /*ii STERGE clasa lui reset-arrow al elementului plusIcon, care reseteaza plusIcon la pozitia initiala(IN CAZ CA O ARE DEJA):
          .reset-arrow {
         bottom: 0;
         opacity: 1;
       }*/
       plusIcon.classList.remove("reset-arrow");
       /*face ca plusIconTwo sa apara la footer, pentru a se putea executa, in cele din urma, functia downArrowTwo,
       ce va fi executata de plusIconTwo respectiv
       .show-footer-arrow {
          opacity: 1;
       }*/
       plusIconTwo.classList.add("show-footer-arrow");
    }
  }

  function downArrowTwo() {
     introduction.scrollIntoView({
       behavior: 'smooth'
     });

      setTimeout(function(){containerApps.classList.remove("special-flex-apps");}, 500);
      setTimeout(function(){containerComputer.style.display = 'none';}, 500);
      setTimeout(function(){containerVideo.style.display = 'none';}, 500);
      setTimeout(function(){blogNewsContainer.style.display = 'none';}, 500);
      setTimeout(function(){startWebAgency.style.display = 'none';}, 500);
      setTimeout(function(){descriptionOdin.style.display = 'none';}, 500);
      setTimeout(function(){footer.style.display = 'none';}, 500);



    /*ii adauga clasa de "up-arrow":
     .up-arrow {
      bottom: 800px;
    care face ca elementul sa se duca in SUS si, avand deja declarat in CSS ca opacity: 0;, nu mai este nevoie sa fie
    declarat in aceasta clasa opacity: 0;, pentru a-si pierde opacitatea, deoarece, clasa "show-footer-arrow" este clasa care ii
    ofera opacitatea de 1:
    .show-footer-arrow {
       opacity: 1;
    }
  */
    plusIconTwo.classList.add("up-arrow");
    if(plusIconTwo.classList.contains("up-arrow"))//verifica daca are clasa de "up-arrow" si aplica respectivele modificari
    {
      /*ii STERGE lui plusIcon clasa de "down-arrow", deoarece, trebuie ca plusIcon sa isi recapete opacitatea pentru a putea
      executa functia de dinainte, downArrow:
      .down-arrow {
        bottom: -100%;
        opacity: 0;
    }*/
      plusIcon.classList.remove("down-arrow");
      /*ii STERGE lui plusIconTwo clasa de "show-footer-arrow" pentru ca acesta sa isi piarda opacitatea
      in timp ce se duce in SUS, pentru a nu aparea in mijlocul ecranului, sau intr-o pozitie aleatorie:
      .show-footer-arrow {
         opacity: 1;
      }*/
      plusIconTwo.classList.remove("show-footer-arrow");
      /*ii ADAUGA lui plusIcon clasa de "reset-arrow" pentru a-i reseta pozitia si opacitatea, ca acesta sa
      poata sa execute functia downArrow:
      .reset-arrow {
     bottom: 0;
     opacity: 1;*/
      plusIcon.classList.add("reset-arrow");
    }

  }


  plusIcon.onclick = downArrow;
  plusIconTwo.onclick = downArrowTwo;


  //aceasta functie face o animatie de dropdown la .blog

  function dropDownBlog1(){
    blog1.classList.toggle("dropdown");
    if(readMoreBtn1.innerHTML === ("Read More")){
      readMoreBtn1.innerHTML = ("Show Less");
    } else {
      readMoreBtn1.innerHTML = ("Read More");
    }
  };


  readMoreBtn1.onclick = dropDownBlog1;
  readMoreBtn2.onclick = dropDownBlog2;

  function dropDownBlog2(){
    blog2.classList.toggle("dropdown");
    if(readMoreBtn2.innerHTML === ("Read More")){
      readMoreBtn2.innerHTML = ("Show Less");
    } else {
      readMoreBtn2.innerHTML = ("Read More");
    }
  }





//aceasta functie activeaza elementul "br" antepus lui "Agency" cand lungimea ecranului atinge 508px

function breakInsert(){
  if(mediaQuery.matches){
    breakLine.style.display = 'block';
  } else  {
    breakLine.style.display = 'none';
  }
}

mediaQuery.addListener(breakInsert);
breakInsert();
}
