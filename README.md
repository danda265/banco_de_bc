# Banco de Balneário!

Jogo de tabuleiro de educação financeira (estilo "banco imobiliário") para a sala de aula, em Balneário Camboriú/SC: imóveis, aluguéis, cartas de Sorte ou Azar, decisões e quiz financeiro. Em salas online (Firebase Realtime Database) o professor cria a sala e os alunos entram com o código; também dá para jogar sozinho.

No ar em https://banco.educajogo.com.br/

## Demonstração e jogo completo

O mesmo endereço abre duas versões:

- **Demonstração**, para quem não tem código de turma: só a partida sozinha, de 1 volta no tabuleiro. Criar sala e entrar em sala aparecem com cadeado e uma tela de venda. A demonstração não carrega o Firebase (o SDK e a configuração ficam de fora) e não guarda nem envia nada.
- **Jogo completo**, para quem entrou com o código da turma (serviço `educajogo-acesso`): as salas online para a turma toda (anfitrião, vários jogadores e chat) e a partida de 3 voltas.

O que é do jogo completo fica no `index.html` entre as marcas `COMPLETO` (os scripts do Firebase, a configuração e a faixa "100% gratuito"). Quem monta o site (`publicar_jogo.py`, na pasta Projetos, fora deste repositório) tira esses trechos da demonstração, coloca a tela de venda, gera o completo em `_full/` e confere que nada pago ficou na demonstração. Abrindo o `index.html` direto no navegador você joga o completo, porque a tela de venda só entra na montagem do site.

## Arquivos

- `index.html`: o jogo inteiro (páginas, estilo e script).
- `_conteudo_na_ponta_do_lapis.js`: rascunho de perguntas e cartas novas para copiar para o `index.html` ("só a fonte para copiar"); não é carregado pelo jogo e não vai para o ar.

---
✨ Criado por Anderson Rodrigo Costa
