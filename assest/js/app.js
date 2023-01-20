const mobMenuIcon = document.querySelectorAll("svg")[0]
const mobMenuIcon2 = document.querySelectorAll("svg")[1]

//Mobile menu move icon
let num = 0
$("#navMobilBtn").click(function () {
    num++
    $("#mobile-menu").toggle("slow", function () {

        if (num == 1) {
            $(mobMenuIcon).hide()
            $(mobMenuIcon2).show()

        }
        if (num == 2) {
            $(mobMenuIcon).show(1)
            $(mobMenuIcon2).hide()
            num = 0
        }

    });

})
