/* =====================================================================
   BANCO DE BALNEÁRIO — conteúdo novo para o programa Na Ponta do Lápis
   ---------------------------------------------------------------------
   Cobre as lacunas das 8 unidades temáticas (turmas de 8º e 9º ano).
   23 perguntas novas + 3 cartas novas.

   COMO USAR
   1) Perguntas: cole os blocos dentro do array  const QUIZ = [ ... ]
      (index.html, linha ~868), antes do  ];  final.
   2) Cartas: cole os 3 itens dentro do array  const CARTAS = [ ... ]
      (index.html, linha ~842), antes do  ];  final.
   3) Este arquivo é só a fonte para copiar — não é carregado pelo jogo.

   Formato conferido contra o código atual:
     {p:'pergunta', ops:['a','b','c','d'], c:<índice 0-3 da correta>,
      exp:'explicação', bonus:<pontos>}
     {titulo:'', desc:'', emoji:'', tipo:'ganhar'|'pagar', valor:<n>}
   ===================================================================== */


/* ─────────────────────────────────────────────────────────────────────
   UNIDADE 1 — CIRCULAÇÃO DO DINHEIRO   (foco: formação de preços e câmbio)
   Lacuna coberta: câmbio (o jogo não tinha nada) + formação de preço.
   ───────────────────────────────────────────────────────────────────── */

  {p:'Um turista troca 100 dólares e recebe R$ 550,00. Qual é a taxa de câmbio do dia?',
   ops:['R$ 5,50 por dólar','R$ 55,00 por dólar','R$ 0,55 por dólar','R$ 100,00 por dólar'],c:0,
   exp:'Câmbio = 550 ÷ 100 = R$ 5,50. É quanto vale 1 dólar em reais naquele dia!',bonus:120},

  {p:'Com o dólar a R$ 5,00, quanto custa em reais um tênis importado de US$ 80?',
   ops:['R$ 300,00','R$ 400,00','R$ 450,00','R$ 85,00'],c:1,
   exp:'80 × 5 = R$ 400,00. Quando o dólar sobe, tudo que é importado fica mais caro!',bonus:110},

  {p:'Por que a diária dos hotéis de BC sobe tanto no verão?',
   ops:['A prefeitura obriga','Muita procura e poucas vagas disponíveis','Porque o dólar cai','Porque a internet fica mais cara'],c:1,
   exp:'Preço se forma pela oferta e demanda: muita gente querendo e pouca vaga, o preço sobe.',bonus:100},


/* ─────────────────────────────────────────────────────────────────────
   UNIDADE 2 — PLANEJAMENTO   (foco: orçamento e custo de oportunidade)
   Lacuna coberta: custo de oportunidade (orçamento já estava forte).
   ───────────────────────────────────────────────────────────────────── */

  {p:'O que é CUSTO DE OPORTUNIDADE?',
   ops:['O preço na etiqueta','O que você abre mão ao fazer uma escolha','Um tipo de imposto','O juro cobrado pelo banco'],c:1,
   exp:'É a melhor opção que você deixou de lado. Toda escolha custa outra coisa!',bonus:100},

  {p:'Você tem R$ 200,00 e escolhe comprar um fone em vez de guardar para a viagem de fim de ano. O que você perdeu ao escolher?',
   ops:['Nada, o dinheiro era seu','A viagem — esse é o custo de oportunidade','R$ 200,00 de imposto','O valor do fone'],c:1,
   exp:'Não dá para ter os dois. O que ficou para trás é o custo de oportunidade da sua escolha.',bonus:120},


/* ─────────────────────────────────────────────────────────────────────
   UNIDADE 3 — CONSUMO   (foco: publicidade e consumo consciente)
   Lacuna coberta: publicidade (o jogo só tinha conta de desconto).
   ───────────────────────────────────────────────────────────────────── */

  {p:'Um influenciador mostra um produto sem avisar que foi pago para isso. O que é isso?',
   ops:['Opinião sincera dele','Publicidade disfarçada — deveria estar sinalizada','Uma promoção do governo','Um sorteio'],c:1,
   exp:'Publicidade paga precisa ser identificada (#publi). Sem o aviso, você acha que é opinião — e não é.',bonus:120},

  {p:'"SÓ HOJE! ÚLTIMAS 3 UNIDADES!" — para que serve esse tipo de anúncio?',
   ops:['Informar o estoque de verdade','Criar pressa para você comprar sem pensar','Baixar o preço do produto','Reduzir o imposto da loja'],c:1,
   exp:'É gatilho de urgência: a pressa desliga a comparação de preços. Respire e pesquise antes.',bonus:110},

  {p:'Qual destas atitudes é CONSUMO CONSCIENTE?',
   ops:['Comprar por impulso na primeira loja','Comparar preços e perguntar "eu preciso mesmo disso?"','Parcelar tudo em 12x sem olhar','Comprar porque o amigo comprou'],c:1,
   exp:'Consumo consciente é decidir pela necessidade e pelo preço justo — não pela propaganda.',bonus:100},


/* ─────────────────────────────────────────────────────────────────────
   UNIDADE 4 — POUPANÇA E INVESTIMENTO   (foco: investimentos e aposentadoria)
   Lacuna coberta: aposentadoria e previdência (não havia nenhuma menção).
   ───────────────────────────────────────────────────────────────────── */

  {p:'Para que serve o INSS descontado do salário do trabalhador?',
   ops:['Pagar a escola pública','Garantir aposentadoria e auxílios ao trabalhador','Comprar carros para o governo','Financiar os bancos'],c:1,
   exp:'INSS é a Previdência Social: garante aposentadoria, auxílio-doença e outros direitos.',bonus:110},

  {p:'Por que começar a poupar cedo faz tanta diferença na aposentadoria?',
   ops:['Porque o banco dá desconto para jovem','Porque o dinheiro rende juros por muito mais tempo','Porque jovem paga menos imposto','Não faz diferença nenhuma'],c:1,
   exp:'Juros sobre juros: quanto mais tempo rendendo, maior a bola de neve — desta vez a seu favor!',bonus:120},


/* ─────────────────────────────────────────────────────────────────────
   UNIDADE 5 — CRÉDITO E ENDIVIDAMENTO   (foco: juros e contratos)
   Lacuna coberta: contratos (juros já estavam bem cobertos).
   ───────────────────────────────────────────────────────────────────── */

  {p:'Antes de assinar um contrato de financiamento, o que é essencial olhar?',
   ops:['Só o valor da parcela','A taxa de juros e o valor TOTAL a pagar no fim','A cor do papel','O nome do gerente'],c:1,
   exp:'Parcela pequena pode esconder juros altos. Olhe sempre quanto você vai pagar no total!',bonus:120},

  {p:'O que costuma estar nas "letras miúdas" de um contrato?',
   ops:['Enfeite do documento','Multas, taxas e seguros embutidos que passam despercebidos','Erro de impressão','A assinatura do vendedor'],c:1,
   exp:'É ali que moram as surpresas. Leia antes de assinar — depois vale o que está escrito.',bonus:110},


/* ─────────────────────────────────────────────────────────────────────
   UNIDADE 6 — RENDA E EMPREENDEDORISMO   (foco: trabalho e MEI)
   Lacuna coberta: MEI e formalização (o jogo só tinha venda informal).
   ───────────────────────────────────────────────────────────────────── */

  {p:'Você vende brigadeiros e quer emitir nota fiscal legalmente. O que precisa abrir?',
   ops:['Uma conta poupança','Um MEI (Microempreendedor Individual)','Um cartão de crédito','Uma sociedade anônima'],c:1,
   exp:'MEI é o jeito mais simples de formalizar: CNPJ próprio, nota fiscal e contribuição mensal baixa.',bonus:120},

  {p:'Qual é uma vantagem de ser MEI em vez de vender na informalidade?',
   ops:['Nunca pagar nada','Ter CNPJ, emitir nota e contar tempo para a aposentadoria','Ficar isento de todo imposto para sempre','Poder vender sem ter cliente'],c:1,
   exp:'MEI dá CNPJ, acesso a crédito melhor e conta como contribuição ao INSS.',bonus:120},

  {p:'Qual a diferença entre trabalho com carteira assinada e trabalho informal?',
   ops:['Nenhuma diferença','Carteira assinada garante férias, 13º, FGTS e INSS','O informal paga mais imposto','Com carteira ninguém pode ser demitido'],c:1,
   exp:'Carteira assinada vem com uma rede de proteção. Na informalidade, essa rede não existe.',bonus:110},


/* ─────────────────────────────────────────────────────────────────────
   UNIDADE 7 — RISCO E PROTEÇÃO   (foco: golpes digitais e seguros)
   Lacuna coberta: era a unidade mais vazia do jogo — zero golpe, zero seguro.
   ───────────────────────────────────────────────────────────────────── */

  {p:'Chega um PIX "enviado por engano" e a pessoa pede que você devolva na hora. O que fazer?',
   ops:['Devolver rápido na chave que ela mandou','Não devolver por fora: conferir no app e falar com o banco','Gastar o dinheiro','Bloquear e esquecer o assunto'],c:1,
   exp:'Golpe clássico: o PIX original é estornado depois e você perde as duas quantias. Resolva sempre pelo banco.',bonus:130},

  {p:'Um SMS avisa que seu cartão foi bloqueado e manda clicar num link. O que é isso?',
   ops:['Aviso oficial do banco','Phishing: golpe para roubar sua senha','Uma promoção','Uma cobrança de imposto'],c:1,
   exp:'Phishing é isca. Banco não pede senha por link — entre pelo aplicativo oficial, digitando você mesmo.',bonus:130},

  {p:'Alguém oferece um "investimento que rende 20% ao mês, garantido". Qual a atitude certa?',
   ops:['Investir tudo rápido antes que acabe','Desconfiar: rendimento alto e garantido não existe','Pegar empréstimo para investir mais','Chamar os amigos para entrar junto'],c:1,
   exp:'Se parece bom demais, é golpe (pirâmide). Investimento de verdade não promete lucro alto e fixo.',bonus:130},

  {p:'Para que serve um SEGURO?',
   ops:['Aumentar seu salário','Transferir o risco de um prejuízo grande para a seguradora','Pagar menos imposto','Render juros todo mês'],c:1,
   exp:'Você paga um valor pequeno e regular para não levar um prejuízo enorme de uma vez só.',bonus:110},

  {p:'Qual senha protege melhor o seu aplicativo do banco?',
   ops:['Sua data de nascimento','Uma senha longa e única, com verificação em duas etapas','123456','O nome do seu time'],c:1,
   exp:'Senha longa e exclusiva + verificação em duas etapas. Nunca repita a senha do banco em outro site!',bonus:120},


/* ─────────────────────────────────────────────────────────────────────
   UNIDADE 8 — CENÁRIO FINANCEIRO E CIDADANIA
   (foco: impostos e direitos do consumidor)
   Lacuna coberta: direitos do consumidor (impostos já eram o ponto forte).
   ───────────────────────────────────────────────────────────────────── */

  {p:'Você comprou um fone pela internet e se arrependeu. Em quanto tempo pode desistir da compra?',
   ops:['Não pode desistir','7 dias corridos, pelo direito de arrependimento','30 dias','1 ano'],c:1,
   exp:'Compra feita fora da loja física (internet ou telefone) dá 7 dias para desistir e receber o dinheiro de volta.',bonus:120},

  {p:'O produto veio com defeito e a loja se recusa a resolver. Onde reclamar?',
   ops:['Em lugar nenhum','No Procon ou no consumidor.gov.br','Só nas redes sociais','Na secretaria da escola'],c:1,
   exp:'O Código de Defesa do Consumidor te protege. Procon e consumidor.gov.br são canais oficiais e gratuitos.',bonus:120},

  {p:'Para que serve pedir a NOTA FISCAL da sua compra?',
   ops:['Só para enfeitar a carteira','Comprovar a compra, garantir a troca e registrar o imposto pago','Para ganhar desconto sempre','Não serve para nada'],c:1,
   exp:'É sua prova de compra para a garantia — e é por ela que o imposto chega às escolas e hospitais de BC!',bonus:110},


/* =====================================================================
   CARTAS NOVAS — colar dentro de  const CARTAS = [ ... ]
   Reforçam a unidade 7 (Risco e proteção), que é evento inesperado —
   combina melhor com a mecânica de carta do que com o quiz.
   ===================================================================== */

  {titulo:'Golpe do PIX!',       desc:'Você devolveu um PIX "enviado por engano" e caiu no golpe.',  emoji:'📲',tipo:'pagar', valor:140},
  {titulo:'Você Desconfiou!',    desc:'Não clicou no link falso do banco e protegeu sua conta.',     emoji:'🛡️',tipo:'ganhar',valor:100},
  {titulo:'Seguro Acionado!',    desc:'Sua moto foi furtada, mas o seguro cobriu o prejuízo.',       emoji:'🔐',tipo:'ganhar',valor:120},
