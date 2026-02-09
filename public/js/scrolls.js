const Scrolllabels = ["Please Select","ZELGO MER","JUYED AWK YACC","NR 9","NOBARY ROBYAN","PRATYAVAYAH","DAIYEN FOOELS","LEP GEX VEN ZEA","PRIRUTSENIE","ELBIB YLOH","VERR YED HORRE","VENZAR BORGAVVE","THARR","YUM YUM","KERNOD WEL","ELAM EBOW","DUAM XNAHT","ANDOVA BEGARIN","KIRJE","VE FORBRYDERNE","HACKEM MUCHE","VELOX NEB","FOOBIE BLETCH","TEMOV","GARVEN DEH","READ ME"]
const DropdownIDS = ["Food","Identify","Light","Teleportation","Fire","EnchArmour","EnchWeapon","RemoveCurse","DestroyArmour","MagicMapping","Summon","ConjArrow","Charging","Blank","Mail"]
window.onload = function() {
    
    
    for (let s = 0; s < DropdownIDS.length; s++){
        var dropdown = this.document.getElementById(DropdownIDS.at(s))
        for (let step = 0; step < Scrolllabels.length; step++) {
            var option = this.document.createElement("option")
            option.text = Scrolllabels.at(step)
            option.value = Scrolllabels.at(step)
            dropdown.add(option)
        }
    }
}

