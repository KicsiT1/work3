// ATTENTION: THIS FUNCTION PERFORMS TWO TASKS.
/*
    /===================== 1 =====================/
    The function's purpose is to open the phone 
    menu when the screen width is small and the 
    phone hamburger menu is displayed.
    /=============================================/

    /===================== 2 =====================/
    When the user opens the phone menu, some 
    menu items (submenus) within it can also be opened. 
    This function also performs this task.
    /=============================================/

*/
// How the function works.
/*
    1.TagId         <-- This parameter tells the function what you want to display.
    2.ArrowDownID AND ArrowUpID     <-- These two values ​​must be specified so that 
                                        when the user clicks on a menu item, 
                                        the icon on the left side of the menu 
                                        item changes.
*/
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
            console.log("DropDown function switch: Don't forget that the function also contains a switch.")    
        }
}

// The function changes the theme of the page.
//      1.It does this by manipulating a meta tag that 
//      contains the CSS file for the theme.
//      2.This function also modifies (replaces) the icons.
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

// Some elements are set to default when the page width is resized.
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