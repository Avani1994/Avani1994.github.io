
(function($){

        $(document).ready(function () {
            $('.progress-bar').each(function () {
                $(this).appear(function () {
                    var percent = $(this).attr('aria-valuenow');
                    $(this).animate({'width': percent + '%'});
                    $(this).find('.progress-value').countTo({from: 0, to: percent, speed: 900, refreshInterval: 30});
                });
            });

            $('.counter').each(function () {
                $(this).appear(function () {
                    var number = $(this).find('.counter-timer').attr('data-to');
                    $(this).find('.counter-timer').countTo({from: 0, to: number, speed: 1500, refreshInterval: 30});
                });
            });

        });


        var areasOfInterestOffsetTop = $('#areasOfInterest').offset().top;
        var skillsOffsetTop = $('#skills').offset().top;
        var researchWorkOffsetTop = $('#researchWork').offset().top;
        var selectedProjectsOffsetTop = $('#selectedProjects').offset().top;
        var publicationsOffsetTop = $('#publications').offset().top;

        $(document).on('scroll', function() {
            var scrollTop = $(document).scrollTop();
            var activeLi;

            if (scrollTop <= areasOfInterestOffsetTop ) {
                activeLi = $('.header-tabs>li:nth-child(1)');
            } else if (scrollTop >= skillsOffsetTop && scrollTop < researchWorkOffsetTop) {
                activeLi = $('.header-tabs>li:nth-child(2)');
            } else if (scrollTop >= researchWorkOffsetTop && scrollTop < selectedProjectsOffsetTop) {
                activeLi = $('.header-tabs>li:nth-child(3)');
            } else if (scrollTop >= selectedProjectsOffsetTop  && scrollTop < publicationsOffsetTop - 300) {
                activeLi = $('.header-tabs>li:nth-child(4)');
            } else if (scrollTop >= (publicationsOffsetTop - 300)){
                activeLi = $('.header-tabs>li:nth-child(5)');
            }

            activeLi.addClass('active');
            $('.header-tabs>li').not(activeLi).removeClass('active');
        });


})(jQuery);

