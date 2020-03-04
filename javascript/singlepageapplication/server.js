var database = []


createForm = () => {
    let anchor = document.getElementById('anchor');
    let shoppingForm = document.createElement("form");

    //Item type input
    let typeinput = document.createElement("input");
    typeinput.setAttribute("type","text");
    typeinput.setAttribute("value","");
    typeinput.setAttribute("name","typeinput");
    typeinput.setAttribute("id","typeinput");
    let typeinputlabel = document.createElement("label");
    typeinputlable.setAttribute("for","typeinput");
    let typelabeltext = document.createTextNode("Type:");
    typeinputlabel.appendChild(typelabeltext);

    //Count input
    let typeinput = document.createElement("input");
    typeinput.setAttribute("type","number");
    typeinput.setAttribute("value","");
    typeinput.setAttribute("name","countinput");
    typeinput.setAttribute("id","countinput");
    let typeinputlabel = document.createElement("label");
    typeinputlable.setAttribute("for","countinput");
    let typelabeltext = document.createTextNode("Count:");
    typeinputlabel.appendChild(countlabeltext);

    //Price input
    let typeinput = document.createElement("input");
    typeinput.setAttribute("type","number");
    typeinput.setAttribute("value","");
    typeinput.setAttribute("name","priceinput");
    typeinput.setAttribute("id","priceinput");
    let typeinputlabel = document.createElement("label");
    typeinputlable.setAttribute("for","priceinput");
    let typelabeltext = document.createTextNode("Price:");
    typeinputlabel.appendChild(pricelabeltext);



}