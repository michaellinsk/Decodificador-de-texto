document.querySelector(".encrypt").addEventListener("click", ()=>{

   const encrypt = {'e':'enter','i': 'imes','a': 'ai','o': 'ober','u': 'ufat'};
   const regex = /(a|e|i|o|u)/g;

   let text = document.querySelector("textarea").value;
   let result =  decode(text,encrypt,regex);

   addClass(".card-container",".display-result");
   addText(result)
})

document.querySelector(".decrypt").addEventListener("click", ()=>{

   const decrypt = {enter: 'e',imes: 'i',ai: 'a',ober: 'o',ufat: 'u'};
   const regex = /(enter|imes|ai|ober|ufat)/g;

   let text = document.querySelector("textarea").value;
   let result = decode(text,decrypt,regex);
  
   addClass(".card-container",".display-result");
   addText(result)
})

document.querySelector(".copy > button").addEventListener("click", ()=>{
   addClass(".display-result",".card-container");
   copy()
})

function addClass(add,remove) {
   document.querySelector(add).classList.add("display");
   document.querySelector(remove).classList.remove("display");
}

function decode(text,fun,regex){
   let textoDescriptografado = text.replace(regex,(match) => fun[match]);
   return textoDescriptografado;
}

function addText(text){
   if(!text) return alert("Preencha os campos necessários")
     document.querySelector("textarea").value = ""
     document.querySelector(".display-result > p").innerHTML = text;
}

function copy() {
   let text = document.querySelector(".display-result > p").textContent 
   navigator.clipboard.writeText(text)
}