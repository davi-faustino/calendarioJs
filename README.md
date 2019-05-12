# calendarioJs
Adaptação de calendário PHP para JavaScript

calendarioJs é um calendário feito em javascript baseado em um calendário php.

# Como Usar
Para usar basta incluir o arquivo calendario.js na página desejada e adicionar as seguintes linha no html:
```
<div><h1 id="mes"></h2></div>
<table id="tabela_calend">
  // Aqui vai ser criado o calendário
</table>
```
Após incluir o trecho de código acima, basta adicionar o seguinte código antes do fechamento da tag <body>:
```
<script type="text/javascript">
  gerarCalendario()
</script>
```
Use o arquivo index.html para ver um exemplo.
