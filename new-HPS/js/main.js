//voice commands
if (annyang) {
    var commands = {
        "portal": clickF.portal//,
        //"scroll up": () => scrollDownUp(0),
        //"scroll down": () => scrollDownUp(1)
    }

    //Add commands to voice
    annyang.addCommands(commands);
    //annyang.start();
}
else {
    console.log("no ann");
}

//SCROLL UP OR DOWN
// var scrollElems = ["front-page", "portal-page"], currentElem = 0;
// function scrollDownUp(dir) {
//     try {
//         var elem = {};
//         if (dir) { elem = document.getElementById(scrollElems[currentElem + 1]); currentElem++; }
//         else { elem = document.getElementById(scrollElems[currentElem - 1]); currentElem--; }
//         elem.scrollIntoView({ 
//             behavior: 'smooth' 
//         });
//     }
//     catch(e) {
//         console.log(e);
//         console.log(currentElem);
//         if (currentElem >= scrollElems.length) currentElem = scrollElems.length - 1;
//         else currentElem = 0;
//     }
// }
