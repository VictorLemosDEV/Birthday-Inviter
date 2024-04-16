

document.addEventListener("DOMContentLoaded",ConfigureTextArea,false)

let textarea;

let optionSelected = -1;

function ConfigureTextArea() {


    let confirmationButton = document.getElementById("accept")

let refuseButton = document.getElementById("refuse")

let textareadiv = document.getElementById("text-area-container")
textarea = document.getElementById("input")

let submitButton = document.getElementById("submit")

confirmationButton.addEventListener("click", () => {
   
    optionSelected = 0

    textareadiv.classList.remove("hide")
    textareadiv.classList.add("show")
})

refuseButton.addEventListener("click", () => {
   
    optionSelected = 1;

    textareadiv.classList.remove("hide")
    textareadiv.classList.add("show")
})

submitButton.addEventListener("click", () => {
   

    if (textarea.value == "") {

        

    } else {
        textarea.value = ""

        textareadiv.classList.remove("show")
        textareadiv.classList.add("hide")

    if (optionSelected == 0) {
        confirmouPresenca()
    } else if (optionSelected == 1) {
        negouPresença()
    }
    }
})

}



function confirmouPresenca() {
    var hook = new XMLHttpRequest();

    hook.open('POST', 'https://discord.com/api/webhooks/1229101128080425021/Vqtv_Td_Bo_lR87BTZmQZc7rHtsTTaLWLZCS66DqbLpnNVyl7VMCSN-sNG3gNnlglg4K');

    hook.setRequestHeader('Content-type', 'application/json');

    var content = {
      username: 'Mestre do Pix',
      avatar_url: 'https://cdn.discordapp.com/attachments/979336205063827476/1229198495630626898/perfil_bot.png?ex=662ecf4e&is=661c5a4e&hm=13a8ac9ece59f0d5dd02884de0f7468b6cc1d001ce66bd7e82827e00af80f18c&',
      content: `${textarea.value} confirmou presença!`
    }

    hook.send(JSON.stringify(content));
  }

  
function negouPresença() {
    var hook = new XMLHttpRequest();

    hook.open('POST', 'https://discord.com/api/webhooks/1229101128080425021/Vqtv_Td_Bo_lR87BTZmQZc7rHtsTTaLWLZCS66DqbLpnNVyl7VMCSN-sNG3gNnlglg4K');

    hook.setRequestHeader('Content-type', 'application/json');

    var content = {
      username: 'Mestre do Pix',
      avatar_url: 'https://cdn.discordapp.com/attachments/979336205063827476/1229198495630626898/perfil_bot.png?ex=662ecf4e&is=661c5a4e&hm=13a8ac9ece59f0d5dd02884de0f7468b6cc1d001ce66bd7e82827e00af80f18c&',
      content: `${textarea.value} negou presença! É um baita de um arrombado(a) né?`
    }

    hook.send(JSON.stringify(content));
  }

