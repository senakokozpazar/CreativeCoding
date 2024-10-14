function setup() {
  createCanvas(800, 800); // kanvasin büyüklügü
  noLoop(); // kod tekrar tekrar calismasin 
  noFill(); // ust uste gelen sekiller birbirini ortmesin
  colorMode(HSB); // renk paleti
}

function draw() {
  background(255); // kanvasin rengi
  
  let numShapes = 8; // kenar basina dörtgen sayisi
  let size = 40; // her dörtgenin buyuklugu
  let numLayers = 12; // her dörtgenin kaç katman üst üste geleceği
  let verticalSpacing = 100; // Üst ve alt grup arasındaki boşluk
  let horizontalSpacing = 100; // Sağdaki ve soldaki grup arasındaki boşluk
  
  // Warhol Tarzı Renkler (Her gruba farklı bir palet)
  let colorsSolUst = [color(200, 100, 100), color(340, 100, 80), color(60, 100, 100), color(120, 80, 90)]; // Mavi, pembe, sarı, yeşil
  let colorsSagUst = [color(30, 100, 100), color(280, 100, 80), color(100, 100, 80), color(220, 100, 70)]; // Turuncu, mor, açık yeşil, koyu mavi
  let colorsSolAlt = [color(320, 80, 90), color(260, 100, 70), color(50, 100, 90), color(0, 100, 100)]; // Açık pembe, koyu mor, sarı, kırmızı
  let colorsSagAlt = [color(60, 100, 100), color(30, 100, 100), color(140, 100, 60), color(200, 100, 90)]; // Parlak sarı, turuncu, koyu yeşil, açık mavi
  
  // İlk şekil grubu (sol üst)
  drawShapeGroup(40, 40, numShapes, numLayers, colorsSolUst);
  
  // İkinci şekil grubu (sağ üst)
  drawShapeGroup(40 + numShapes * size + horizontalSpacing, 40, numShapes, numLayers, colorsSagUst);
  
  // Üçüncü şekil grubu (sol alt)
  drawShapeGroup(40, 40 + numShapes * size + verticalSpacing, numShapes, numLayers, colorsSolAlt);
  
  // Dördüncü şekil grubu (sağ alt)
  drawShapeGroup(40 + numShapes * size + horizontalSpacing, 40 + numShapes * size + verticalSpacing, numShapes, numLayers, colorsSagAlt);
}

function drawShapeGroup(offsetX, offsetY, numShapes, numLayers, colorPalette) {
  let s = 0; // kacinci katmandayiz   
  
  for (let y = 0; y < numShapes; y++) {
    for (let x = 0; x < numShapes; x++) {
      for (let i = 0; i < numLayers; i++) { // Katman ekleme döngüsü
        push(); // her dörtgen icin asagidaki koordinatlari baslat
        translate(offsetX + x * 40, offsetY + y * 40); // dörtgeni kaydir
        stroke(colorPalette[s % colorPalette.length]); // dörtgenin rengi - her katmanda ayni
        quad(
          random(-10, 10), random(-10, 10), 
          random(15, 45), random(-5, 5), 
          random(15, 45), random(15, 45), 
          random(-5, 5), random(15, 45)
        );
        pop(); // dörtgen koordinatlarini tekrar sifirla
      }
      s++; // Bir sonraki dörtgenin rengini almak için indexi arttır
    }
  }
}
