  const form = document.getElementById('form-login');
  const usuario = document.getElementById('usuario');
  const senha = document.getElementById('senha');
  const erro = document.getElementById('erro');
  const botaoOlho = document.getElementById('alternar-senha');
  const risco = document.getElementById('risco');

  // Mostrar / ocultar senha
  botaoOlho.addEventListener('click', () => {
    const visivel = senha.type === 'text';
    senha.type = visivel ? 'password' : 'text';
    risco.style.display = visivel ? '' : 'none';
    botaoOlho.setAttribute('aria-pressed', String(!visivel));
    botaoOlho.setAttribute('aria-label', visivel ? 'Mostrar senha' : 'Ocultar senha');
  });

  // Lembrar-me (guarda só o usuário)
  try {
    const salvo = localStorage.getItem('itaqui_usuario');
    if (salvo) { usuario.value = salvo; document.getElementById('lembrar').checked = true; }
  } catch (e) {}

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    if (!usuario.value.trim() || !senha.value) {
      erro.classList.add('visivel');
      (usuario.value.trim() ? senha : usuario).focus();
      return;
    }
    erro.classList.remove('visivel');
    try {
      if (document.getElementById('lembrar').checked) localStorage.setItem('itaqui_usuario', usuario.value.trim());
      else localStorage.removeItem('itaqui_usuario');
    } catch (e) {}

    // TODO: troque pelo envio real ao seu back-end, por exemplo:
    // fetch('/api/login', { method:'POST', headers:{'Content-Type':'application/json'},
    //   body: JSON.stringify({ usuario: usuario.value, senha: senha.value }) })
    alert('Login enviado (exemplo). Conecte ao seu servidor.');
  });
