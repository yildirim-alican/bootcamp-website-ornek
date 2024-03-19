// Her film isminin kelime sayısını kontrol eden ve 3 kelimeden fazlaysa satır atlamasını sağlayan işlev
document.addEventListener("DOMContentLoaded", function() {
    var filmIsimleri = document.querySelectorAll('.item-info h3');
    filmIsimleri.forEach(function(isim) {
        var kelimeSayisi = isim.textContent.trim().split(/\s+/).length; // Boşluklara göre ayırarak kelime sayısını hesaplar
        if (kelimeSayisi > 3) {
            isim.classList.add('multiline'); // Metni birden çok satıra sığacak şekilde biçimlendirir
        }
    });
});

