let card = {};
card.gerarHTML = (c) => {
  nome = c.nome
  valor = c.valor
  lat = c.lat
  lon = c.lon
  img = c.imagens
  
  tempoDist = rand(0,10);
  metrosDist = tempoDist * 17;
  
  
  if(c.intervaloSlide){
    intervalo = c.intervaloSlide;
  }else{
    intervalo = 0;
  }
  
  
  cardStart =   '<div class="card card-dual shadow-1">' ;
  
  for (var i = 0; i < img.length; i++) {
    
    if(i==0){
      slides=' <div id="carouselExampleSlidesOnly" class="carousel slide card-slide" data-ride="carousel" data-interval="'+intervalo+'"> <div class="carousel-inner card-dual-img "><div class="carousel-item active"><img class="d-block w-100 card-dual-img img-fluid " src="'+img[i]+'" alt="slide '+(i+1)+'"></div>';
    }//se for a primeira imagem da fila
    else{
      slides+='<div class="carousel-item"><img class="d-block w-100 card-dual-img img-fluid" src="'+img[i]+'" alt="slide '+(i+1)+'"></div>'
    }//end if
  }//for


   //   slideStart='<div id="carouselExampleSlidesOnly" class="carousel slide card-slide" data-ride="carousel" data-interval="30000">'
  
  slideEnd = '</div></div>'
  
  
     cardInfo= '<div class="card-info"><h6 class="card-item-nome font-noto">'+c.nome+'</h6><div class="-preco"><string class="card-item-preco ifs icon-tag">R$'+c.valor+'<string class="card-item-preco-centavos">,'+c.centavos+'</string></string ><string class="percent-off"><string class="percent-off-detalhe">'+c.off+'%</string>Off</string></div>'
     
     
     
       cardFooter =  '</div><div class="card-endereco font-noto shadow-bot-3">'+c.endereco+'</div><div class="card-dual-location position-centered font-noto"><div class="card-dual-location-txt position-centered btn-tema-minutos-inv shadow-bot-1"> <span class="ifs icon-performance"></span>'+tempoDist+'min</div><div class="card-dual-location-txt position-centered btn-tema-go-inv shadow-bot-1"> <span class="ifs icon-location"></span>'+metrosDist+'mts </div>'
       
       if(c.ads>5){
       cardFooter+='<div class="card-dual-location-txt position-centered btn-tema-ads-inv shadow-bot-1"> <span class="ifs icon-megaphone"></span>ads </div>'
       }
       
       cardFooter+= '</div>'
        
        cardEnd = "</div>"
        
    finalCard= cardStart+slides+slideEnd+cardInfo+cardFooter+cardEnd;
  
  return finalCard;
}

