
$(function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 18000,
    values: [ 300, 18000 ],
    slide: function( event, ui ) {
      $( "#amount" ).val(  + ui.values[ 0 ] );
      $( "#amount-1" ).val( + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( + $( "#slider-range" ).slider( "values", 0 ) );
    $( "#amount-1" ).val(  + $( "#slider-range" ).slider( "values", 1 ) );
}());



$('ul.tabs__caption').on('click', 'li:not(.active)', function(e) {
  e.preventDefault();
  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('section.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

// owl carousel

$(function () {
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots: false,
    navText: ['<img src="img/svg/left.svg">','<img src="img/svg/right.svg">'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1200:{
          items:3
        },
        1440:{
            items:4
        }
    }
});
});



// menu nav toggle

$("#nav_toggle").on("click", function(event) {
  event.preventDefault();

  $(this).toggleClass("active");
  $("#nav").toggleClass("active");
});

// load date

$(function() {
  $.getJSON('ajax/Home.json', function(data){
    var items = [];
   
    $.each(data, function(key, val){
      console.log(key,val)
    
       items.push(
      
      
      `
      <div class="companies__content tabs__content active">
      <div class="companies">
                        <div class="companies__left-side">
                            <div class="company-logo">
                                <img class="logo-img" src="${val.logo}" alt="IuteCredit">
                            </div>
                            <div class="company__info">
                                <div class="company__info-item">
                                    <img src="img/tel-icon.png" alt="Telephone">
                                    <a href="tel:+373 22 801 500" class="company__info-link">
                                        +373 22 801 500
                                    </a>
                                </div>
                                <div class="company__info-item">
                                    <img src="img/union-icon.png" alt="Mail">
                                    <a href="#" class="company__info-link">
                                        info@iutecredit.md
                                    </a>
                                </div>
                                <div class="company__info-item">
                                    <img src="img/map-icon.png" alt="Map">
                                    <a href="#" class="company__info-link">
                                        Str. Vasile Lupu 21/15
                                    </a>
                                </div> 
                            </div>
                        </div>
                        <div class="companies__right-side">
                            <div class="companies__info">
                                <div class="sorting__companies-items">
                                    <p class="sorting__companies-items-text">
                                        Ставка<br>
                                        <span class="sorting__companies-items-text-bottom"><strong>${val.rate}</strong> в день</span>
                                    </p>
                                    <p class="sorting__companies-items-text">
                                        Сумма<br>
                                        <span class="sorting__companies-items-text-bottom"><strong>${val.amount_min} - ${val.amount_max} </strong> лей</span>
                                    </p>
                                    <p class="sorting__companies-items-text">
                                        Срок<br>
                                        <span class="sorting__companies-items-text-bottom">от <strong>${val.period_min}</strong> до <strong>${val.period_max}</strong> дней</span>
                                    </p>
                                    <p class="sorting__companies-items-text">
                                        Возраст<br>
                                        <span class="sorting__companies-items-text-bottom">от <strong>${val.age_min}</strong> лет</span>
                                    </p>
                                </div>
                                <div class="sorting__companies-info-bottom">
                                    <div>
                                        <h4 class="sorting__companies-info-bottom-title">
                                            ${val.name}
                                        </h4>
                                        <p class="sorting__companies-info-bottom-text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
                                        </p>
                                    </div>
                                    <div>
                                        <div class="sorting__companies-info-bottom-button">
                                            <a href="#" class="button-link btn-main">
                                                Aplică
                                            </a>
                                            <a href="#" class="button-detail">
                                                Detalii
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>      
                        </div>  
                    </div> 
                  </div>
      
      `);
    });

       $('.companies-content-wrapper').html(items.join(''))
   
    // $('<ul/>', {
    //   'class': 'my-new-list',
    //   html: items.join('')
    // }).appendTo('body');
  });
}());







