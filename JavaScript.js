function DropDown(TagId,ArrowId)
{
    var Tag = document.getElementById(TagId);
    var img = document.getElementById("HamburgerImg");
    var Arrow=document.getElementById(ArrowId)
    if (Tag.style.display === "block") {
        if (Tag) Tag.style.display = "none";
        if (img) img.src = "icons/Hamburger menu.png";
        if (Arrow) Arrow.src="icons/chevron-down, arrow-down.png";
    } 
    else 
    {
        if (Tag) Tag.style.display = "block";
        if (img )img.src = "icons/Hamburgerx.png";
        if (Arrow) Arrow.src="icons/chevron-up, arrow-up.png";
    }
}

window.addEventListener('resize', function() {
    if (window.innerWidth > 1200) {
        document.querySelector('.phone_drop_down_menu').style.display = 'none';
        document.getElementById("HamburgerImg").src="icons/Hamburger menu.png";
    }
});