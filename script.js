let corbaCesitleri=["mercimek ","15","ezogelin","13","tarhana","18"];
let anaYemekler=["urfa","45","iskender","50","lahmacun","20"];
let tatlılar=["künefe","25","sütlaç","10","kadayıf","25"];

let i;

let urunAciklama,urunSecenek;

let eklenecekler=[];
let fiyatlar=[];

let restaurantSepet=document.getElementById("restaurant"); 

let toplamTutar=0;

const kod="PROMO10";

for(i=0;i<document.getElementsByName("kategori").length;i++)
{
    document.getElementsByName("kategori")[i].addEventListener("change",urunleriGetir);
}   

function olustur(){
    urunAciklama=document.createElement("label");
    urunSecenek=document.createElement("input");
    document.getElementById("restaurantPanel").appendChild(urunAciklama);
    document.getElementById("restaurantPanel").appendChild(urunSecenek);
    urunSecenek.type="checkbox";
    urunSecenek.setAttribute("name","urunler");
    urunAciklama.setAttribute("for","urunler");
    urunAciklama.setAttribute("class","urunler");
}

function urunleriGetir(){

    const silinecekler = document.getElementById("restaurantPanel");
    while (silinecekler.hasChildNodes()) {
      silinecekler.removeChild(silinecekler.firstChild);
    }


    if(document.getElementById("kategoriCorba").checked)
    {
        for(i=0;i<corbaCesitleri.length;i=i+2)
        {
            olustur();
            urunSecenek.value=corbaCesitleri[i+1];
            urunAciklama.innerHTML=corbaCesitleri[i]; 
        }
    }
    else if(document.getElementById("kategoriAna").checked)
    {
        for(i=0;i<anaYemekler.length;i=i+2)
        {
        olustur();
        urunSecenek.value=anaYemekler[i+1];
        urunAciklama.innerHTML=anaYemekler[i];
        }
    }
    else if(document.getElementById("kategoriTatlı").checked)
    {
        for(i=0;i<tatlılar.length;i=i+2)
        {
        olustur();
        urunSecenek.value=tatlılar[i+1];
        urunAciklama.innerHTML=tatlılar[i];
        }
    }
}

function sepeteEkle(){
    
    const listeUrunlerFiyat=document.getElementsByName("urunler");
    const listeUrunlerAd=document.getElementsByClassName("urunler");

    
    let adet=document.getElementById("yemekAdet").value;

        eklenecekler=[];
        fiyatlar=[];

        for(i=0;i<listeUrunlerFiyat.length;i++){
            if(listeUrunlerFiyat[i].checked){
               
                toplamTutar+=(Number(listeUrunlerFiyat[i].value)*adet);
                eklenecekler.push(listeUrunlerAd[i].innerHTML);
                fiyatlar.push(listeUrunlerFiyat[i].value);
            }
        }

        for(i=0;i<adet;i++)
        {
            let sepeteEklenecekUrun;
        
            for(let j=0;j<eklenecekler.length;j++){
                sepeteEklenecekUrun=document.createElement("option");
                restaurantSepet.options.add(sepeteEklenecekUrun);
                sepeteEklenecekUrun.text=eklenecekler[j];
                sepeteEklenecekUrun.value=fiyatlar[j];
            }

            document.getElementById("sepetTutar").innerHTML=toplamTutar+" TL";
        }
 }
function sepettenCikar(){
    let seciliIndeks=restaurantSepet.selectedIndex;
    let silinecekUrununFiyati=restaurantSepet.options[seciliIndeks].value;
    restaurantSepet.options.remove(seciliIndeks);
   
    toplamTutar=toplamTutar-silinecekUrununFiyati;
    document.getElementById("sepetTutar").innerHTML=toplamTutar+" TL";
}


function sepetiBosalt(){
    document.querySelectorAll('#restaurant option').forEach(eleman => eleman.remove());
    toplamTutar=0;
    document.getElementById("sepetTutar").innerHTML=toplamTutar+" TL";

}

