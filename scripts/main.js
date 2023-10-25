function mascaraCpf(campoCpf) {
  var cpf = campoCpf.value;
  if (cpf.length == 3) {
    cpf = cpf + ".";
    document.forms[0].cpf.value = cpf;
    return true;
  }
  if (cpf.length == 7) {
    cpf = cpf + ".";
    document.forms[0].cpf.value = cpf;
    return true;
  }
  if (cpf.length == 11) {
    cpf = cpf + "-";
    document.forms[0].cpf.value = cpf;
    return true;
  }
}

function mascaraCelular(campoCelular) {
  var celular = campoCelular.value;
  if (celular.length == 0) {
    celular = celular + "(";
    document.forms[0].celular.value = celular;
    return true;
  }
  if (celular.length == 3) {
    celular = celular + ") ";
    document.forms[0].celular.value = celular;
    return true;
  }
  if (celular.length == 10) {
    celular = celular + "-";
    document.forms[0].celular.value = celular;
    return true;
  }
}
function mascaraTelefone(campoTelefone) {
  var telefone = campoTelefone.value;
  if (telefone.length == 0) {
    telefone = telefone + "(";
    document.forms[0].telefone.value = telefone;
    return true;
  }

  if (telefone.length == 3) {
    telefone = telefone + ") ";
    document.forms[0].telefone.value = telefone;
    return true;
  }
  if (telefone.length == 9) {
    telefone = telefone + "-";
    document.forms[0].telefone.value = telefone;
    return true;
  }
}
function limpar() {
  if (
    confirm(
      "Atenção! você deseja mesmo  apagar todos os dados desse formulárioi? se você deletar todos os dados não será mais possível recuperá-los "
    )
  ) {
    document.getElementById("nome").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("rg").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("rua").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("complemento").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("celular").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("nascimento").value = "";
    document.getElementById("cep").value = "";
  }
}

function mascaraCep(campoCep) {
  var cep = campoCep.value;
  if (cep.length == 5) {
    cep = cep + "-";
    document.forms[0].cep.value = cep;
    return true;
  }
}
