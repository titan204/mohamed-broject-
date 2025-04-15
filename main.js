
let main_imge = document.getElementsByClassName("main-images")[0];
console.log(main_imge);
function fadeIn() {
    main_imge.style.cssText = `
    transition: margin-top 3s ease;
    margin-top: 329px;
`;
}

onload=fadeIn();

