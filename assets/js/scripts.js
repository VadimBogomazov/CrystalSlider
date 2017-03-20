window.addEventListener('DOMContentLoaded', function () {
  const crystalSlider = new CrystalSlider({
    adaptiveHeight: true,
    keyboard: true,
    pagination: true,
    titles: true,
    beforeChange: function(activeSlide, totalSlides) {
        console.log('Before change slider, ', `active slide – ${activeSlide}, `, `total slides – ${totalSlides}`);
    },
    afterChange: function(activeSlide, totalSlides) {
        console.log('After change slider, ', `active slide – ${activeSlide}, `, `total slides – ${totalSlides}`);
    },
    onReady: function(activeSlide, totalSlides) {
        console.log('Slider is ready, ', `active slide – ${activeSlide}, `, `total slides – ${totalSlides}`);
    }
  });
});
