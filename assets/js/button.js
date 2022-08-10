function exibirMensagem()
        {
            alert('Email Enviado com sucesso!');
        }
 
         
        var btn = document.getElementById("btn");
 
        btn.addEventListener("click", exibirMensagem);
