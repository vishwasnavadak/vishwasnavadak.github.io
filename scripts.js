/* Skill Details Toggle */
$(document).ready(function() {
  $("#cur-year").html(new Date().getFullYear());
  $("#detail-switch").click(function() {
    $(".skill-content").toggle(300);
    $(this).text(
      $(this).text() === "Show Details" ? "Hide Details" : "Show Details"
    );
  });
});
