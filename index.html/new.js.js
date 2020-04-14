function acesso(form) {
    /* Checa nome se senha - caso digite com letras maiúsculas, será
    convertido para letras minúsculas
    */

    form.nome.value = form.nome.value.toLowerCase()
    form.senha.value = form.senha.value.toLowerCase()

    if (form.nome.value == "Maria" && form.senha.value == "123" ||
        form.nome.value == "Evelin" && form.senha.value == "456" ||
        form.nome.value == "Wesley" && form.senha.value == "789" ||
        form.nome.value == "Jackson" && form.senha.value == "321")
      { location = "acesso.html" }

    else {
        form.nome.value = ""
        form.senha.value = ""
        alert("Dados Incorretos")
    }
}