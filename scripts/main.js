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

function mascaraCep(campoCep) {
  var cep = campoCep.value;
  if (cep.length == 5) {
    cep = cep + "-";
    document.forms[0].cep.value = cep;
    return true;
  }
}
