// "This is a very long string which needs to be truncated after 20 characters."
// Ans: "This is a very long ..."


function truncate(str = "", ML = 10) {
    if (str.length > ML)
        return str.slice(0, ML) + '...';
    return str;
}

console.log(truncate("loremfhasihtfipsjhgiowjrigjrfkigtjkirofjgtkijrsfdgkihfgjuh juhrjguhjrufhgjhrfghjfhgjhfjghjfhgjhfjhgjh", 20));
