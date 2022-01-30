
let rand = function(x,y){
  return Math.floor(Math.random() * (x - y + 1) + y)
}

  
mapa = class{
  
  constructor(){
    this.pop = false;
   //this.mostrar();
  }
  
  mostrar(){
    
    if(this.pop){
     this.pop= true;
      $("#googleMap").slideToggle();
      
   //   $("*").css({'font-family':'"Noto", Sans-Serif'});
      
  }else{
     this.pop = true;
    // $("*").css({'font-family':'"Noto", Sans-Serif'});
   }
    
    
  }
  
}

  

const miniMapa = new mapa();
$(function(){
   miniMapa.mostrar();
});

  
$(function(){
  
  $("#filtroPesquisa").slideToggle();
  //$("#filtroPesquisa").css("opacity:100%");
  
 $("#btnFiltro").click(function(){
   $("#filtroPesquisa").slideToggle().css({opacity:"100%"});
   
 })
  
  
 $("#rangeDist").change(function() {
   
    distancia = $("#rangeDist").val();
   
   $("#txtDist").html(distancia+"km");
});
  
  
  
  
  
  
  // \/ \/ \/ Teste criação de Cards \/ \/ \/
  
  
  nomes = ["Camisa Masculina Slim", "Camisa Masculina Malha Peruana", "Camisa Masculina Top", "Promoção Camiseta Masculina", "Camiseta Slim Masculina 2022", "Camisa Original","Camisa Slim Original", "Camiseta Malha Peruana Lycra Promoção"];
  
  imagens = [
  ["https://static.zattini.com.br/produtos/camisa-polo-ultimato-estampada-manga-curta-masculina/08/06Z-0013-008/06Z-0013-008_zoom1.jpg?ts=1604594231&ims=544x" , "https://static.zattini.com.br/produtos/camisa-polo-ultimato-estampada-manga-curta-masculina/14/06Z-0013-014/06Z-0013-014_zoom1.jpg?ts=1604595291&ims=544x", "https://static.zattini.com.br/produtos/camisa-polo-ultimato-estampada-manga-curta-masculina/88/06Z-0013-188/06Z-0013-188_zoom1.jpg?ts=1604588978&ims=544x"],
  ["https://cea.vtexassets.com/arquivos/ids/22071597-800-auto?v=637421057259000000&width=800&height=auto&aspect=true" , "https://cea.vtexassets.com/arquivos/ids/52208151-800-auto?v=637757991489300000&width=800&height=auto&aspect=true" , "https://cea.vtexassets.com/arquivos/ids/52216555-800-auto?v=637758739326570000&width=800&height=auto&aspect=true", "https://cea.vtexassets.com/arquivos/ids/52192605-800-auto?v=637757139401230000&width=800&height=auto&aspect=true", "https://cea.vtexassets.com/arquivos/ids/15361964-800-auto?v=637324425517430000&width=800&height=auto&aspect=true" , "https://cea.vtexassets.com/arquivos/ids/50903589-800-auto?v=637705340551230000&width=800&height=auto&aspect=true", "https://cea.vtexassets.com/arquivos/ids/50781683-800-auto?v=637691499256730000&width=800&height=auto&aspect=true" , "https://cea.vtexassets.com/arquivos/ids/15986650-800-auto?v=637389173289600000&width=800&height=auto&aspect=true"],
  ["https://ph-cdn3.ecosweb.com.br/imagens01/foto/moda-masculina/camiseta-manga-curta/camiseta-preta-e-marrom-com-cava-raglan_304648_600_1.jpg", "https://ph-cdn3.ecosweb.com.br/imagens01/foto/moda-masculina/camiseta-manga-curta/camiseta-at-roger-marinho_307888_1000_1.jpg" , "https://ph-cdn3.ecosweb.com.br/imagens01/foto/moda-masculina/camiseta-manga-curta/camiseta-verde-e-marinho-ccom-degrade_278567_600_1.jpg" , "https://ph-cdn3.ecosweb.com.br/imagens01/foto/moda-masculina/camiseta-manga-curta/camiseta-com-manga-curta-vermelha_223213_600_1.jpg"],
  ["https://img.lojasrenner.com.br/item/548932946/zoom/1.jpg","https://img.lojasrenner.com.br/item/548933332/zoom/1.jpg"],
  ["https://yhbeulwvfr.map.azionedge.net/img/2021/09/produto/1231/1/large/01-camiseta-masculina-estonada-bluhen-miami.png" , "https://static.zattini.com.br/produtos/camiseta-industrie-estampada-masculina/10/AD6-0040-010/AD6-0040-010_zoom1.jpg?ts=1566215468&ims=544x", "https://static.zattini.com.br/produtos/camiseta-industrie-estampada-masculina/06/AD6-0040-006/AD6-0040-006_zoom1.jpg?ts=1565978861&ims=544x", "https://static.zattini.com.br/produtos/camiseta-industrie-estampada-masculina/14/AD6-0040-014/AD6-0040-014_zoom1.jpg?ts=1565975637&ims=544x"]
  ];
  
  enderecos = ["Rua Maria Marcolina, 312B, Brás - SP", "Rua Oriente, 512A, Brás - SP", "Rua Barão de Ladário, 1234, Brás - SP", "Rua Xavantes, 3212, Brás - SP", "Rua Celso Garcia, 1422, Brás - SP", "Rua Henrique Dias, Brás - SP", "Shopping Vautier, 434, Brás - SP", "Rua Tiers,  5343, Brás - SP", "Rua Vautier, 6898, Brás - SP", "Rua Alexandrino Pedroso, 888, Brás - SP", "Rua Domingos, 4543, Brás - SP", "Rua Elisa Witacker, 453, Brás - SP"];
  
  
  
  cardRand = () => {
    cardTest={
      nome: nomes[rand(0,nomes.length)],
      valor:rand(20,100),
      centavos:rand(10,99),
      off:rand(10,20),
      ads:rand(0,10),
      lat:rand(120000,900000),
      lon:rand(120000,900000),
      intervaloSlide:rand(3000,10000),
      endereco: enderecos[rand(0,enderecos.length)],
      imagens: imagens[rand(0,imagens.length)]
    }
    
    return card.gerarHTML(cardTest);
  }
  
  
 // $("#cardListColuna1").html(cardRand());
  //$("#cardListColuna2").html(cardRand());
  
  for(i=0;i<20;i++){
    $("#cardListColuna1").append(cardRand());
    $("#cardListColuna2").append(cardRand());
  }
  
  // /\ /\ /\  Teste criação de Cards /\ /\ /\
  
  
  
  
  
})