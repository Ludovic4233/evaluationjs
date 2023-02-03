//fonctionnalités pour le menu

//On selectionne le bouton qui déroule le menu et la nav 
let btnMenu = document.getElementById('btnMenu');
let nav = document.querySelector('nav');
//on applique la fonction qui faire disparaitre ou apparaitre la nav au click du bouton
toggle(btnMenu, nav);

//on selectionne chaque menu et chaque liens correspondant à ces menus
let menus = [...document.querySelectorAll('.menu')];
let menuLinks = [...document.querySelectorAll('.menuLink')];

//on leurs applique la fonction toggle
for(let i=0; i<menus.length; i++){
    toggle(menuLinks[i], menus[i]);
}



//fonctionnalités menu 1

//on selectionne les liens du tableau et les images
let tabLinks = [...document.querySelectorAll('.tabLink')];
let tabImages = [...document.querySelectorAll('.image')];

//pour chaque liens on applique la fonction displayImage
for(let j=0; j<tabLinks.length; j++){
    displayImage(tabLinks[j], tabImages[j]);
}



//fonctionnalités menu 2

//on sélectionne le boutton permettant de remplir le tableau
let btnTable = document.getElementById('btnTable');
btnTable.addEventListener('click', function(){
    createRowTable();
})



//fonctionnalités menu 3

//on sélectionne le menu select
let selectMenu = document.querySelector('#selectMenu');

selectMenu.addEventListener('change', (event)=>{
    let paragraph = document.querySelector('#paragraph');
    console.log(selectMenu.selectedIndex);
    if(selectMenu.selectedIndex == 0){
        paragraph.style.color = "blue";
    }else if(selectMenu.selectedIndex == 1){
        paragraph.style.color = "red";
    }else if(selectMenu.selectedIndex == 2){
        paragraph.style.color = "green";
    }
})



//fonctionnalités menu 4

//onsélectionne les boutons up et down
let btnUp = document.getElementById('btnUp');
let btnDown = document.getElementById('btnDown');
//on sélectionne la liste
let Ul = document.getElementById('Ul');

//le bouton Up
btnUp.addEventListener('click', function(){
    // au click du bouton on sélectionne les li et on les supprimes
    let lis = [...document.querySelectorAll('#Ul li')];
    for(let i=0; i<lis.length;i++){
        lis[i].style.display ='none';
    }
    //on créer les nouveaux li placé dans l'ordre
    for(let k=0; k<4; k++){
        let li = document.createElement('li');
        li.innerText = "value "+(k+1);
        Ul.appendChild(li);
    }
    console.log(Ul);
})

//le bouton down
btnDown.addEventListener('click', function(){
    let lis = [...document.querySelectorAll('#Ul li')];
    for(let i=0; i<lis.length;i++){
        lis[i].style.display ='none';
    }

    for(let k=4; k>0; k--){
        let li = document.createElement('li');
        li.innerText = "value "+k;
        Ul.appendChild(li);
    }
})



//fonctionnalités menu 5


let optionTab = document.querySelectorAll('.option');
let tab = [];
for(let j=0; j<optionTab.length; j++){
    optionTab[j].addEventListener('click', function(){
        let div = document.getElementById('div');
        if(optionTab[j].checked){
            tab.push(optionTab[j].value);
        }else if(!optionTab[j].checked){
            tab.splice(j, 1);
        }
        div.innerHTML = tab;
        let selOption = document.createElement('option');
        let select = document.querySelector('#select');
        select.appendChild(selOption);
        selOption.innerHTML = tab[j];
    })
}

//gestion des boutons radio et de l'affichage de la div ou du menu select
let radioOpt = document.getElementById('radioOpt');
let radioDiv = document.querySelector("#radioDiv");
let divContainer = document.getElementById('divContainer');
let selectContainer = document.getElementById('selectContainer');
radioChoice(radioOpt, divContainer, selectContainer);
radioChoice(radioDiv, selectContainer, divContainer);




// fonctions

//fonction toggle
function toggle(btnLink, element){
    let flag = true;
    btnLink.addEventListener('click', function(){
        if(flag){
            element.style.visibility = 'hidden';
        }else{
            element.style.visibility = 'visible';
        }
        flag = !flag;
    })
}


//fonction qui fait apparaitre une image au survol d'un lien

function displayImage(link, elem){
    link.addEventListener('mouseover', function(){
        elem.style.visibility = 'visible';
    })

    link.addEventListener('mouseout', function(){
        elem.style.visibility = 'hidden';
    })
}


//fonction permet d'ajouter une ligne au tableau avec les valeurs entrées dans le champ input

function createRowTable(){
    //on sélectionne la valeur entrée ds chaque input
    let nom = document.getElementById('name').value;
    let firstname = document.getElementById('firstname').value;
    //on sélectionne la balise table à laquelle on ajoute un ligne au tableau
    let table = document.querySelector('#table');
    let row = document.createElement('tr');
    let cel1 = document.createElement('td');
    let cel2 = document.createElement('td');
    table.appendChild(row);
    row.appendChild(cel1);
    row.appendChild(cel2);
    cel1.innerHTML = nom;
    cel2.innerHTML = firstname;
}


//fonction qui gère les boutons radio du menu 5 ainsi que l'affichage de la div ou du select

function radioChoice(radioBtn, displayNone, displayBlock){
    radioBtn.addEventListener('click', function(){
        if(radioBtn.checked){
            displayNone.style.display = 'none';
            displayBlock.style.display = 'block';
        }
    })
}