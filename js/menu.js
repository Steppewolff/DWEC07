const opcions = [
    {id: 1, text: "1. Estudis per familia", enllaç: "estudis.html"},
    {id: 2, text: "2. Alta estudis", enllaç: "alta.html"},
    {id: 3, text: "3. Modificar estudis", enllaç: "modificacio.html?cicle=IFC46"},
    {id: 4, text: "4. Esborrar estudis", enllaç: "esborrar.html?cicle=IFC46"}
];


function generaMenu(actual, prefixe="") {
    const barra = document.getElementById("barra");
    opcions.forEach(opcio =>{
        const li=document.createElement("li");

        const a=document.createElement("a");
        a.appendChild(document.createTextNode(opcio.text));
        li.appendChild(a);

        if(opcio.id===actual){
            li.classList.add("active");
            a.setAttribute("href","#");
        }else{
            a.setAttribute("href",prefixe+opcio.enllaç);
        }
        barra.appendChild(li);
    });
}

export default generaMenu;