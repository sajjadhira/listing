
$(document).ready(function(e){});$(document).ready(function(e){var a=300,t=1200,l=700,s=e(".cd-top");e(window).scroll(function(){e(this).scrollTop()>a?s.addClass("cd-is-visible"):s.removeClass("cd-is-visible cd-fade-out"),e(this).scrollTop()>t&&s.addClass("cd-fade-out")}),s.on("click",function(a){a.preventDefault(),e("body,html").animate({scrollTop:0},l)})})
$(document).on('click','.card-title',function(e){var base_url=$('#base_url').html();window.location.href=base_url})
$(document).on('click','.card-img-top',function(e){var base_url=$('#base_url').html();window.location.href=base_url})
