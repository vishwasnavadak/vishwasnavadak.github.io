/* Skill Details Toggle */
$(document).ready(function(){
    $("#detail-switch").click(function(){
      $(".skill-content").toggle(300);
      $(this).text($(this).text() === 'Show Me Details' ? 'Hide All Details!' : 'Show Me Details');
    });
  });