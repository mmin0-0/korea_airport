//include 파일 공통요소 불러오는 스크립트
$(document).ready(function() {
    $("#header").load("/typeB/html/include/header.html"); // include 헤더
    $("#footer").load("/typeB/html/include/footer.html"); // include 푸터
})