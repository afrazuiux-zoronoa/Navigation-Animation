let highlight = document.querySelector(".highlight");
let main = document.querySelector("main");
let items = document.querySelectorAll("p");

const icons = {
    home: ["./Icons/home-line.png", "./Icons/home-fill.png"],
    category: ["./Icons/category-line.png", "./Icons/category-fill.png"],
    cart: ["./Icons/cart-line.png", "./Icons/cart-fill.png"],
    save: ["./Icons/Save-line.png", "./Icons/Save-fill.png"],
    profile: ["./Icons/Profile-line.png", "./Icons/Profile-fill.png"]
};


document.body.addEventListener("mouseover", function (e) {
    let targetInfo = e.target.getBoundingClientRect();

    if (e.target.matches("p")) {
        items.forEach(p => {
            let cls = p.classList[0];
            p.querySelector("img").src = icons[cls][0];
        });

        // set selected icon
        let cls = e.target.classList[0];
        e.target.querySelector("img").src = icons[cls][1];
    }

    if (e.target.matches("p") || e.target.matches("main")) {
        highlight.style.width = targetInfo.width + "px";
        highlight.style.height = targetInfo.height + "px";
        highlight.style.left = targetInfo.x + "px";
        highlight.style.top = targetInfo.y + "px";
        highlight.style.borderRadius = "10px";


        if (e.target.matches("main")) {
            highlight.style.borderRadius = "0";
            items.forEach(p => {
                let cls = p.classList[0];
                p.querySelector("img").src = icons[cls][0];
            });

            document.querySelector("#home").src = icons.home[1];
        }
    }
})