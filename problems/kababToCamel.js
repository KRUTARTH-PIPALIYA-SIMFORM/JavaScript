// "header-nav-left" => "headerNavLeft"
// "-aside-abc-def" => "asideAbcDef"



function toCapitalise(str = "") {
    str = str.trim();
    str = str.split('');
    str[0] = str[0].toUpperCase();
    return str.join('');
}

function kToC(str = "") {
    str = str.trim();
    if (str[0] == '-')
        str = str.slice(1);
    return str.split('-').map((subString, index) => {
        if (index == 0)
            return subString;
        return toCapitalise(subString);
    }).join('');
}

console.log(kToC("-aside-abc-def"));

