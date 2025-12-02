function DropDown(TagId,ArrowDownID,ArrowUpID)
{
    const Tag = document.getElementById(TagId);
    const IHamburgerIcon = document.getElementById("HamburgerIcon");
    const IHamburgerIconx = document.getElementById("HamburgerIconx");
    const ArrowDown = document.getElementById(ArrowDownID)
    const ArrowUp = document.getElementById(ArrowUpID)
  
    switch(TagId)
    {
        case "phone_drop_down_menu":
            if (Tag.style.display === "block") 
            {
                if (Tag) Tag.style.display = "none";

                if(IHamburgerIcon)      IHamburgerIcon.style.display = "block";
                if(IHamburgerIconx)     IHamburgerIconx.style.display = "none";       
            } 
            else 
            {
                if (Tag) Tag.style.display = "block";

                 if(IHamburgerIcon)     IHamburgerIcon.style.display = "none";
                 if(IHamburgerIconx)    IHamburgerIconx.style.display = "block"; 
            }
        break;

        case "pddc1":
            if (Tag.style.display === "block") {
                if (Tag)    Tag.style.display = "none";
                if(ArrowDown)   ArrowDown.style.display = "block";
                if(ArrowUp)     ArrowUp.style.display = "none";
            } 
            else 
            {
                if (Tag) Tag.style.display = "block";
                if(ArrowDown)   ArrowDown.style.display = "none";
                if(ArrowUp)     ArrowUp.style.display = "block";
            }
        break;

        case "pddc2":
            if (Tag.style.display === "block") {
                if (Tag) Tag.style.display = "none";
                if(ArrowDown)   ArrowDown.style.display = "block";
                if(ArrowUp)     ArrowUp.style.display = "none";
            } 
            else 
            {
                if (Tag) Tag.style.display = "block";
                if(ArrowDown)   ArrowDown.style.display = "none";
                if(ArrowUp)     ArrowUp.style.display = "block";
            }
        break;

         case "pddc3":
            if (Tag.style.display === "block") {
                if (Tag) Tag.style.display = "none";
                if(ArrowDown)   ArrowDown.style.display = "block";
                if(ArrowUp)     ArrowUp.style.display = "none";
            } 
            else 
            {
                if (Tag) Tag.style.display = "block";
                if(ArrowDown)   ArrowDown.style.display = "none";
                if(ArrowUp)     ArrowUp.style.display = "block";
            }
        break;

        default:
            console.log("Nem jo tag-et adtal meg!")    
        }
}
function ModeSwitching()
{
    const SunIcon = document.getElementById("IconSun");
    const MoonIcon = document.getElementById("IconMoon");
    const DarkModeLink = document.getElementById("DarkMode");
    if(MoonIcon.style.display === "block")
    {
        MoonIcon.style.display = "none";
        SunIcon.style.display = "block"
        DarkModeLink.disabled = false;
    } 
    else
    {
        MoonIcon.style.display = "block";
        SunIcon.style.display = "none";
        DarkModeLink.disabled = true;
    }
}




window.addEventListener('resize', function() {
    if (window.innerWidth > 1200) {
        const menu = document.getElementById("phone_drop_down_menu");
        const bars = document.getElementById("HamburgerIcon");
        const x = document.getElementById("HamburgerIconx");
        menu.style.display = 'none';
        bars.style.display = "block";
        x.style.display = "none";
    }
});