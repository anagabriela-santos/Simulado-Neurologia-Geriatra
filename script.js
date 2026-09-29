/* =========================================================
   SIMULADO NEUROLOGIA + GERIATRIA
   70 QUESTÕES
========================================================= */


const questoes = [

    /* =====================================================
       NEUROLOGIA
    ===================================================== */

    {
        numero: 1,
        materia: "Neurologia",
        titulo: "Raciocínio neurológico",

        pergunta: `Um homem de 68 anos apresenta fraqueza súbita no braço e na perna direitos, iniciada há 50 minutos, associada a dificuldade para falar. O exame mostra hemiparesia direita predominando em face e braço. Ao organizar o raciocínio neurológico, qual sequência é mais adequada?`,

        alternativas: {
            A: "Diagnóstico etiológico → topográfico → sindrômico → tratamento.",
            B: "Exame complementar → diagnóstico nosológico → etiológico → história.",
            C: "Queixa/história → exame neurológico → diagnóstico sindrômico → topográfico → nosológico → etiológico.",
            D: "Diagnóstico topográfico → tratamento → diagnóstico sindrômico → etiológico.",
            E: "Diagnóstico etiológico imediato, sem necessidade de definir síndrome ou topografia."
        },

        correta: "C"
    },


    {
        numero: 2,
        materia: "Neurologia",
        titulo: "Tempo de evolução",

        pergunta: `Uma paciente apresenta um déficit neurológico que alcança intensidade máxima em poucos minutos. Outro paciente apresenta perda de força progressiva ao longo de três anos. Qual associação temporal é mais adequada?`,

        alternativas: {
            A: "Minutos sugerem principalmente doenças neurodegenerativas; anos sugerem meningite.",
            B: "Minutos favorecem causas vasculares ou epilépticas; meses/anos favorecem processos neurodegenerativos, neuropatias crônicas ou tumores lentos.",
            C: "Horas a dias excluem doenças infecciosas.",
            D: "Semanas a meses excluem neuropatias periféricas.",
            E: "A velocidade de instalação não contribui para o diagnóstico neurológico."
        },

        correta: "B"
    },


    {
        numero: 3,
        materia: "Neurologia",
        titulo: "Localização da fraqueza",

        pergunta: `Um paciente relata diplopia e ptose no final do dia. A fraqueza é predominantemente proximal, piora com esforço repetido e não há alteração da sensibilidade. Qual localização deve ser considerada?`,

        alternativas: {
            A: "Córtex motor unilateral.",
            B: "Medula torácica.",
            C: "Raiz lombar.",
            D: "Junção neuromuscular.",
            E: "Nervo periférico sensitivo."
        },

        correta: "D"
    },


    {
        numero: 4,
        materia: "Neurologia",
        titulo: "Padrão sensitivo",

        pergunta: `Uma paciente relata dormência simétrica nas mãos e nos pés, com sensação de queimação e redução distal da sensibilidade. O padrão evolui de maneira semelhante nos quatro membros. Qual localização é mais compatível?`,

        alternativas: {
            A: "Uma única raiz nervosa.",
            B: "Córtex parietal direito.",
            C: "Tronco encefálico.",
            D: "Polineuropatia periférica.",
            E: "Lesão medular com nível sensitivo."
        },

        correta: "D"
    },


    {
        numero: 5,
        materia: "Neurologia",
        titulo: "Tontura",

        pergunta: `Um paciente descreve sensação de que o ambiente está girando, acompanhada de náusea e nistagmo, com piora ao movimentar a cabeça. Qual classificação da queixa é mais adequada?`,

        alternativas: {
            A: "Pré-síncope.",
            B: "Desequilíbrio exclusivamente extrapiramidal.",
            C: "Vertigem, sugerindo participação do sistema vestibular.",
            D: "Ataxia sensitiva.",
            E: "Síncope."
        },

        correta: "C"
    },


    {
        numero: 6,
        materia: "Neurologia",
        titulo: "Crise epiléptica",

        pergunta: `Uma pessoa apresenta perda súbita da consciência, seguida por período de confusão. O acompanhante relata movimentos estereotipados e mordedura lateral da língua. Qual dado reforça especialmente a hipótese de crise epiléptica?`,

        alternativas: {
            A: "Incontinência urinária isolada.",
            B: "Palidez sem alteração de consciência.",
            C: "Tontura inespecífica por alguns segundos.",
            D: "Dor muscular prévia.",
            E: "Mordedura lateral da língua associada a período pós-ictal e descrição estereotipada."
        },

        correta: "E"
    },


    {
        numero: 7,
        materia: "Neurologia",
        titulo: "VINDICATE",

        pergunta: `Ao construir um diagnóstico diferencial neurológico amplo, o médico utiliza o mnemônico VINDICATE. Qual alternativa reúne adequadamente seus grandes grupos?`,

        alternativas: {
            A: "Apenas causas vasculares, infecciosas e tumorais.",
            B: "Vascular, infecciosa/inflamatória, neoplásica, degenerativa/deficiência, iatrogênica/intoxicação, congênita, autoimune, traumática e endócrino/metabólica.",
            C: "Somente causas genéticas e traumáticas.",
            D: "Vascular, dermatológica, gastrointestinal e psiquiátrica.",
            E: "Exclusivamente causas infecciosas e metabólicas."
        },

        correta: "B"
    },


    {
        numero: 8,
        materia: "Neurologia",
        titulo: "SNOOP",

        pergunta: `Uma mulher de 57 anos apresenta cefaleia nova, diferente das anteriores, de início abrupto e acompanhada de déficit neurológico focal. Qual conjunto contém sinais de alerta reconhecidos na avaliação de cefaleia?`,

        alternativas: {
            A: "Dor estável desde a adolescência, sem mudança de padrão.",
            B: "Dor leve exclusivamente após uso de telas.",
            C: "Cefaleia episódica típica sem sintomas associados.",
            D: "Idade >50 anos, início súbito, déficit neurológico e mudança importante do padrão.",
            E: "Cefaleia que desaparece espontaneamente após repouso."
        },

        correta: "D"
    },


    {
        numero: 9,
        materia: "Neurologia",
        titulo: "Síndrome piramidal",

        pergunta: `Um paciente apresenta aumento do tônus dependente da velocidade, hiperreflexia profunda, clônus e resposta plantar em extensão. Qual síndrome está representada?`,

        alternativas: {
            A: "Neurônio motor superior/piramidal.",
            B: "Neurônio motor inferior.",
            C: "Junção neuromuscular.",
            D: "Miopatia proximal.",
            E: "Síndrome exclusivamente cerebelar."
        },

        correta: "A"
    },


    {
        numero: 10,
        materia: "Neurologia",
        titulo: "Neurônio motor inferior",

        pergunta: `Um homem apresenta fraqueza distal, hipotonia, redução dos reflexos, atrofia acentuada e fasciculações no território acometido. Qual conjunto melhor caracteriza o quadro?`,

        alternativas: {
            A: "Síndrome cerebelar.",
            B: "Síndrome extrapiramidal.",
            C: "Síndrome do neurônio motor inferior.",
            D: "Síndrome vestibular.",
            E: "Síndrome cortical sensitiva."
        },

        correta: "C"
    },


    {
        numero: 11,
        materia: "Neurologia",
        titulo: "Junção neuromuscular x miopatia",

        pergunta: `Duas pessoas têm fraqueza proximal. A primeira tem diplopia e piora com uso repetido; a segunda tem dificuldade para levantar-se da cadeira e subir escadas, com fraqueza proximal simétrica e sem alteração sensitiva. Qual diferenciação é correta?`,

        alternativas: {
            A: "Ambas são obrigatoriamente neuropatias.",
            B: "A primeira sugere junção neuromuscular; a segunda, miopatia.",
            C: "A primeira sugere cerebelo; a segunda, córtex.",
            D: "A primeira sugere medula; a segunda, nervo periférico.",
            E: "Ambas indicam lesão do trato espinotalâmico."
        },

        correta: "B"
    },


    {
        numero: 12,
        materia: "Neurologia",
        titulo: "Decussação corticospinal",

        pergunta: `Uma lesão motora no hemisfério cerebral esquerdo provoca fraqueza no lado direito do corpo. Qual estrutura anatômica explica principalmente essa relação?`,

        alternativas: {
            A: "Quiasma óptico.",
            B: "Colunas dorsais.",
            C: "Decussação das pirâmides bulbares.",
            D: "Tálamo exclusivamente.",
            E: "Cerebelo."
        },

        correta: "C"
    },


    {
        numero: 13,
        materia: "Neurologia",
        titulo: "Força muscular MRC",

        pergunta: `Durante o exame, o paciente consegue realizar o movimento completo contra a gravidade, mas não consegue vencer a resistência do examinador. Qual grau MRC corresponde ao achado?`,

        alternativas: {
            A: "1/5.",
            B: "2/5.",
            C: "3/5.",
            D: "4/5.",
            E: "5/5."
        },

        correta: "C"
    },


    {
        numero: 14,
        materia: "Neurologia",
        titulo: "Mingazzini e Barré",

        pergunta: `Um paciente com discreta hemiparesia mantém os braços estendidos e ocorre pronação e queda lenta de um deles. Durante a manobra para membros inferiores, uma perna também cai progressivamente. Qual é o objetivo dessas manobras?`,

        alternativas: {
            A: "Avaliar exclusivamente a sensibilidade térmica.",
            B: "Detectar paresias discretas que podem não aparecer em movimentos isolados.",
            C: "Confirmar vertigem periférica.",
            D: "Medir a função cognitiva.",
            E: "Diagnosticar neuropatia auditiva."
        },

        correta: "B"
    },


    {
        numero: 15,
        materia: "Neurologia",
        titulo: "Espasticidade x rigidez",

        pergunta: `Durante a mobilização passiva, um paciente apresenta resistência que aumenta conforme a velocidade do movimento, enquanto outro apresenta resistência mais contínua, podendo lembrar roda denteada. Qual associação é correta?`,

        alternativas: {
            A: "Espasticidade = piramidal; rigidez = extrapiramidal.",
            B: "Espasticidade = cerebelar; rigidez = muscular.",
            C: "Espasticidade = neuromuscular; rigidez = sensitiva.",
            D: "Ambas são exclusivamente piramidais.",
            E: "Ambas são exclusivamente musculares."
        },

        correta: "A"
    },


    {
        numero: 16,
        materia: "Neurologia",
        titulo: "Reflexos profundos",

        pergunta: `Qual associação entre reflexo profundo e raízes é a mais adequada?`,

        alternativas: {
            A: "Bicipital — S1-S2.",
            B: "Tricipital — L3-L4.",
            C: "Patelar — L3-L4.",
            D: "Aquileu — C5-C6.",
            E: "Braquiorradial — S1-S2."
        },

        correta: "C"
    },


    {
        numero: 17,
        materia: "Neurologia",
        titulo: "Babinski e clônus",

        pergunta: `Um adulto apresenta extensão do hálux ao estímulo plantar e oscilações repetidas do pé após dorsiflexão sustentada. Qual interpretação é mais adequada?`,

        alternativas: {
            A: "Sinais de disfunção corticospinal.",
            B: "Achados normais em qualquer adulto.",
            C: "Sinais específicos de miopatia.",
            D: "Sinais exclusivos de neuropatia sensitiva.",
            E: "Achados exclusivamente vestibulares."
        },

        correta: "A"
    },


    {
        numero: 18,
        materia: "Neurologia",
        titulo: "Coordenação cerebelar",

        pergunta: `No teste dedo-nariz, o paciente ultrapassa e erra o alvo. Também tem dificuldade em movimentos alternados rápidos. Quais termos descrevem melhor esses achados?`,

        alternativas: {
            A: "Apraxia e afasia.",
            B: "Dismetria e disdiadococinesia.",
            C: "Hemianopsia e agnosia.",
            D: "Hiporreflexia e fasciculação.",
            E: "Bradicinesia e rigidez."
        },

        correta: "B"
    },


    {
        numero: 19,
        materia: "Neurologia",
        titulo: "Romberg",

        pergunta: `Um paciente permanece relativamente estável de olhos abertos, mas apresenta grande piora do equilíbrio ao fechar os olhos. Qual interpretação é mais adequada?`,

        alternativas: {
            A: "Ataxia cerebelar pura.",
            B: "Síndrome extrapiramidal.",
            C: "Ataxia sensitiva por déficit proprioceptivo.",
            D: "Junção neuromuscular.",
            E: "Lesão isolada do córtex visual."
        },

        correta: "C"
    },


    {
        numero: 20,
        materia: "Neurologia",
        titulo: "Marcha cerebelar",

        pergunta: `Uma pessoa apresenta base alargada, passos irregulares, dismetria, nistagmo e instabilidade mesmo com os olhos abertos. Qual marcha é mais compatível?`,

        alternativas: {
            A: "Parkinsoniana.",
            B: "Escarvante.",
            C: "Espástica.",
            D: "Cerebelar.",
            E: "Frontal/apráxica."
        },

        correta: "D"
    },


    {
        numero: 21,
        materia: "Neurologia",
        titulo: "Via da dor e temperatura",

        pergunta: `Um paciente apresenta perda de dor e temperatura decorrente de uma lesão medular. Qual trato conduz predominantemente essas modalidades?`,

        alternativas: {
            A: "Colunas dorsais.",
            B: "Trato espinotalâmico.",
            C: "Trato corticoespinal.",
            D: "Fascículo longitudinal medial.",
            E: "Trato vestibuloespinal."
        },

        correta: "B"
    },


    {
        numero: 22,
        materia: "Neurologia",
        titulo: "Colunas dorsais",

        pergunta: `A perda de vibração e propriocepção consciente em membros inferiores aponta principalmente para lesão de qual via?`,

        alternativas: {
            A: "Trato espinotalâmico.",
            B: "Trato corticoespinal.",
            C: "Colunas dorsais–lemnisco medial.",
            D: "Trato rubroespinal.",
            E: "Nervo facial."
        },

        correta: "C"
    },


    {
        numero: 23,
        materia: "Neurologia",
        titulo: "Brown-Séquard",

        pergunta: `Após uma hemissecção medular direita, o paciente apresenta perda de força e de vibração/propriocepção à direita e perda de dor/temperatura à esquerda. Qual síndrome está descrita?`,

        alternativas: {
            A: "Brown-Séquard.",
            B: "Guillain-Barré.",
            C: "Parkinson.",
            D: "Túnel do carpo.",
            E: "Síndrome cerebelar."
        },

        correta: "A"
    },


    {
        numero: 24,
        materia: "Neurologia",
        titulo: "Siringomielia",

        pergunta: `Um paciente apresenta perda bilateral de dor e temperatura nos membros superiores, com relativa preservação da vibração e propriocepção, em distribuição semelhante a uma capa. Qual localização deve ser lembrada?`,

        alternativas: {
            A: "Córtex occipital.",
            B: "Cerebelo.",
            C: "Lesão central da medula, como siringomielia.",
            D: "Nervo radial isolado.",
            E: "Córtex frontal."
        },

        correta: "C"
    },


    {
        numero: 25,
        materia: "Neurologia",
        titulo: "Sensibilidade cortical",

        pergunta: `Um paciente possui sensibilidade primária preservada. O examinador coloca uma chave em sua mão e pede que ele identifique o objeto sem olhar. Qual função cortical está sendo avaliada?`,

        alternativas: {
            A: "Dor.",
            B: "Estereognosia.",
            C: "Reflexo patelar.",
            D: "Sensibilidade térmica.",
            E: "Tônus muscular."
        },

        correta: "B"
    },


    {
        numero: 26,
        materia: "Neurologia",
        titulo: "Consciência",

        pergunta: `Um paciente está acordado, porém desatento, desorientado e com prejuízo de memória e linguagem. Qual conceito diferencia melhor nível e conteúdo da consciência?`,

        alternativas: {
            A: "Nível e conteúdo são sinônimos.",
            B: "Nível refere-se à vigília; conteúdo envolve funções cognitivas, orientação, memória e interação.",
            C: "Conteúdo depende apenas do cerebelo.",
            D: "Nível depende apenas dos nervos cranianos.",
            E: "O conteúdo da consciência é independente do córtex."
        },

        correta: "B"
    },


    {
        numero: 27,
        materia: "Neurologia",
        titulo: "Delirium x demência",

        pergunta: `Uma idosa internada desenvolve, em dois dias, desatenção, desorientação e alteração flutuante da consciência, piorando à noite. Qual hipótese é mais provável?`,

        alternativas: {
            A: "Demência degenerativa típica.",
            B: "Delirium.",
            C: "Miopatia.",
            D: "Neuropatia.",
            E: "Afasia isolada."
        },

        correta: "B"
    },


    {
        numero: 28,
        materia: "Neurologia",
        titulo: "Glasgow",

        pergunta: `Após trauma, o paciente abre os olhos ao chamado, responde com frases confusas e obedece a comandos. Qual pontuação da Escala de Glasgow corresponde?`,

        alternativas: {
            A: "9.",
            B: "11.",
            C: "12.",
            D: "13.",
            E: "15."
        },

        correta: "D"
    },


    {
        numero: 29,
        materia: "Neurologia",
        titulo: "Decorticação x descerebração",

        pergunta: `Durante a avaliação de um paciente em coma, observa-se flexão dos membros superiores com extensão dos inferiores. Como essa postura é denominada?`,

        alternativas: {
            A: "Descerebração.",
            B: "Decorticação.",
            C: "Postura cerebelar.",
            D: "Postura vestibular.",
            E: "Postura miopática."
        },

        correta: "B"
    },


    {
        numero: 30,
        materia: "Neurologia",
        titulo: "Hérnia uncal",

        pergunta: `Um paciente em coma apresenta uma pupila unilateral fixa e dilatada e hemiparesia contralateral. Qual síndrome deve ser considerada?`,

        alternativas: {
            A: "Hérnia uncal com comprometimento do III nervo.",
            B: "Neuropatia periférica.",
            C: "Delirium hipoativo.",
            D: "Síndrome vestibular periférica.",
            E: "Miopatia."
        },

        correta: "A"
    },


    {
        numero: 31,
        materia: "Neurologia",
        titulo: "Reflexo corneano",

        pergunta: `Ao tocar a córnea, o examinador observa a resposta de fechamento palpebral. Quais nervos participam predominantemente desse reflexo?`,

        alternativas: {
            A: "II e III.",
            B: "V1 e VII.",
            C: "VIII e VI.",
            D: "IX e X.",
            E: "XI e XII."
        },

        correta: "B"
    },


    {
        numero: 32,
        materia: "Neurologia",
        titulo: "III, IV e VI",

        pergunta: `Um paciente apresenta ptose, midríase e olho desviado para baixo e para fora. Qual nervo craniano é mais provavelmente responsável pelo conjunto?`,

        alternativas: {
            A: "II.",
            B: "III.",
            C: "IV.",
            D: "V.",
            E: "VI."
        },

        correta: "B"
    },


    {
        numero: 33,
        materia: "Neurologia",
        titulo: "Nervo facial",

        pergunta: `Após uma lesão facial periférica, o paciente apresenta fraqueza de toda a hemiface, incluindo dificuldade para enrugar a testa. Como diferenciar esse padrão de uma lesão facial central?`,

        alternativas: {
            A: "Lesão periférica preserva toda a testa.",
            B: "Lesão central paralisa obrigatoriamente toda a hemiface.",
            C: "Lesão periférica compromete toda a hemiface; lesão central tende a poupar relativamente a testa.",
            D: "Os padrões são sempre idênticos.",
            E: "O VII nervo não participa da expressão facial."
        },

        correta: "C"
    },


    {
        numero: 34,
        materia: "Neurologia",
        titulo: "IX, X e XII",

        pergunta: `Um paciente apresenta disfonia, disfagia e alteração do movimento do palato, com desvio da úvula para o lado oposto à lesão. Em outro teste, a língua desvia para o lado da lesão. Quais nervos estão envolvidos?`,

        alternativas: {
            A: "IX/X e XII.",
            B: "II/III.",
            C: "IV/VI.",
            D: "V1/V2.",
            E: "VIII/XI."
        },

        correta: "A"
    },


    {
        numero: 35,
        materia: "Neurologia",
        titulo: "Seio cavernoso e tronco",

        pergunta: `Um paciente apresenta déficit simultâneo dos nervos III, IV, V1, V2 e VI. Qual princípio de localização deve orientar a investigação?`,

        alternativas: {
            A: "Vários nervos cranianos sempre significam miopatia.",
            B: "O conjunto pode localizar lesão no seio cavernoso; no tronco também podem existir síndromes cruzadas com nervo craniano ipsilateral e déficit corporal contralateral.",
            C: "Apenas o II nervo passa por estruturas intracranianas profundas.",
            D: "Múltiplos nervos excluem uma localização anatômica comum.",
            E: "Lesões de tronco nunca comprometem nervos cranianos."
        },

        correta: "B"
    },


    /* =====================================================
       GERIATRIA
    ===================================================== */


    {
        numero: 36,
        materia: "Geriatria",
        titulo: "Geriatria e gerontologia",

        pergunta: `Sobre os conceitos fundamentais do envelhecimento, qual alternativa está correta?`,

        alternativas: {
            A: "Geriatria estuda apenas aspectos sociais.",
            B: "Gerontologia é sinônimo de farmacologia geriátrica.",
            C: "Senilidade é sempre fisiológica.",
            D: "Geriatria é a área médica dedicada à saúde da pessoa idosa; gerontologia estuda o envelhecimento em dimensões biológicas, psicológicas e sociais.",
            E: "Senescência significa necessariamente doença."
        },

        correta: "D"
    },


    {
        numero: 37,
        materia: "Geriatria",
        titulo: "Avaliação Geriátrica Ampla",

        pergunta: `Uma equipe avalia uma idosa com quedas, perda de peso, esquecimento, dificuldade para banho, baixa visão e pouco suporte familiar. Qual abordagem corresponde melhor à Avaliação Geriátrica Ampla?`,

        alternativas: {
            A: "Avaliar somente a doença principal.",
            B: "Avaliar apenas exames laboratoriais.",
            C: "Fazer avaliação multidimensional médica, funcional, cognitiva, emocional, nutricional, sensorial e social e elaborar um plano de cuidado.",
            D: "Aplicar somente Katz.",
            E: "Prescrever antes de investigar funcionalidade."
        },

        correta: "C"
    },


    {
        numero: 38,
        materia: "Geriatria",
        titulo: "Autonomia x independência",

        pergunta: `Um idoso consegue decidir onde deseja morar e organizar suas escolhas, mas necessita de ajuda física para se vestir. Como interpretar?`,

        alternativas: {
            A: "Ausência de autonomia.",
            B: "Autonomia preservada com independência física reduzida.",
            C: "Dependência cognitiva obrigatória.",
            D: "Os termos são sinônimos.",
            E: "A necessidade de ajuda física prova incapacidade de decidir."
        },

        correta: "B"
    },


    {
        numero: 39,
        materia: "Geriatria",
        titulo: "Katz",

        pergunta: `Uma paciente realiza banho, vestir-se, higiene, transferência, continência e alimentação sem ajuda. Qual interpretação é mais adequada?`,

        alternativas: {
            A: "Dependência completa.",
            B: "Dependência moderada.",
            C: "Independência nas atividades básicas avaliadas.",
            D: "Demência obrigatória.",
            E: "Dependência instrumental."
        },

        correta: "C"
    },


    {
        numero: 40,
        materia: "Geriatria",
        titulo: "Barthel",

        pergunta: `Um idoso necessita de ajuda em parte das atividades básicas e apresenta dificuldade de mobilidade. Qual é a finalidade principal do índice de Barthel?`,

        alternativas: {
            A: "Avaliar depressão.",
            B: "Avaliar atividades básicas de vida diária e mobilidade.",
            C: "Diagnosticar Alzheimer sozinho.",
            D: "Avaliar suporte familiar.",
            E: "Medir apenas nutrição."
        },

        correta: "B"
    },


    {
        numero: 41,
        materia: "Geriatria",
        titulo: "Lawton-Brody",

        pergunta: `Uma idosa ainda se alimenta e toma banho sozinha, mas não consegue administrar dinheiro, fazer compras ou organizar refeições. Qual escala é especialmente adequada?`,

        alternativas: {
            A: "Katz.",
            B: "Tinetti.",
            C: "Lawton-Brody.",
            D: "Yesavage.",
            E: "MNA."
        },

        correta: "C"
    },


    {
        numero: 42,
        materia: "Geriatria",
        titulo: "MoCA",

        pergunta: `Um idoso apresenta queixas de atenção, funções executivas, memória e habilidades visuoespaciais. Qual instrumento é particularmente útil para uma avaliação cognitiva mais ampla de alterações leves?`,

        alternativas: {
            A: "Barthel.",
            B: "MoCA.",
            C: "Katz.",
            D: "TUG.",
            E: "APGAR familiar."
        },

        correta: "B"
    },


    {
        numero: 43,
        materia: "Geriatria",
        titulo: "GDS-15",

        pergunta: `Uma idosa apresenta sintomas compatíveis com depressão e obtém 8 pontos na Escala de Depressão Geriátrica de 15 itens. Segundo os pontos de corte do material, como classificar?`,

        alternativas: {
            A: "Normal.",
            B: "Leve.",
            C: "Grave.",
            D: "Diagnóstico definitivo de demência.",
            E: "Resultado sem significado."
        },

        correta: "B"
    },


    {
        numero: 44,
        materia: "Geriatria",
        titulo: "APGAR familiar",

        pergunta: `Um idoso relata que recebe ajuda da família, consegue conversar sobre problemas, sente-se aceito e recebe demonstrações de afeto. Qual instrumento avalia esse funcionamento familiar?`,

        alternativas: {
            A: "APGAR familiar.",
            B: "Tinetti.",
            C: "MNA.",
            D: "Pfeffer.",
            E: "ICIQ-UI SF."
        },

        correta: "A"
    },


    {
        numero: 45,
        materia: "Geriatria",
        titulo: "MNA — triagem",

        pergunta: `Na etapa inicial da Mini Avaliação Nutricional, uma pessoa idosa obtém 13 pontos. Segundo o material, qual interpretação é adequada?`,

        alternativas: {
            A: "Resultado normal e encerramento da etapa de rastreio.",
            B: "Desnutrição grave.",
            C: "Alto risco de queda.",
            D: "Dependência completa.",
            E: "Necessidade obrigatória de cirurgia."
        },

        correta: "A"
    },


    {
        numero: 46,
        materia: "Geriatria",
        titulo: "MNA completa",

        pergunta: `Na MNA completa, um paciente obtém 16 pontos. Como o resultado deve ser interpretado conforme os pontos de corte do material?`,

        alternativas: {
            A: "Normal.",
            B: "Risco nutricional inexistente.",
            C: "Sobrepeso.",
            D: "Desnutrição.",
            E: "Resultado normal acima de 80 anos."
        },

        correta: "D"
    },


    {
        numero: 47,
        materia: "Geriatria",
        titulo: "IMC no idoso",

        pergunta: `Considerando os pontos de corte apresentados no material, qual faixa de IMC é considerada adequada para a pessoa idosa?`,

        alternativas: {
            A: "≤18,5.",
            B: ">22 e <27.",
            C: "≥30.",
            D: ">27 e <30 exclusivamente.",
            E: "Qualquer valor acima de 18,5."
        },

        correta: "B"
    },


    {
        numero: 48,
        materia: "Geriatria",
        titulo: "Velocidade de marcha",

        pergunta: `Um idoso realiza o teste de caminhada de 4 metros com velocidade inferior a 0,8 m/s. Por que esse resultado é relevante?`,

        alternativas: {
            A: "Diagnostica sozinho Alzheimer.",
            B: "Avalia exclusivamente audição.",
            C: "É irrelevante sem dor.",
            D: "Pode funcionar como marcador de risco de quedas, fraturas, hospitalização e mortalidade.",
            E: "Substitui todas as escalas."
        },

        correta: "D"
    },


    {
        numero: 49,
        materia: "Geriatria",
        titulo: "TUG",

        pergunta: `Uma paciente realiza o Timed Up and Go em 32 segundos, levantando-se da cadeira, caminhando 3 metros, retornando e sentando-se. Conforme os pontos de corte do material, como classificar?`,

        alternativas: {
            A: "Baixo risco.",
            B: "Risco intermediário.",
            C: "Alto risco.",
            D: "Ausência de risco.",
            E: "O teste não avalia risco."
        },

        correta: "C"
    },


    {
        numero: 50,
        materia: "Geriatria",
        titulo: "Tinetti",

        pergunta: `Um idoso obtém 17 pontos no teste de Tinetti, que soma equilíbrio e marcha. Qual interpretação corresponde ao material?`,

        alternativas: {
            A: "Pontuação máxima.",
            B: "Risco mínimo.",
            C: "Valor abaixo de 19, associado a risco muito aumentado de queda.",
            D: "Diagnóstico de demência.",
            E: "Diagnóstico de incontinência."
        },

        correta: "C"
    },


    {
        numero: 51,
        materia: "Geriatria",
        titulo: "Whisper test",

        pergunta: `Para triagem auditiva, o examinador fica aproximadamente 33 cm atrás e fora do campo visual do paciente e utiliza voz sussurrada. Qual teste está sendo realizado?`,

        alternativas: {
            A: "Snellen.",
            B: "Whisper test.",
            C: "Romberg.",
            D: "Tinetti.",
            E: "MNA."
        },

        correta: "B"
    },


    {
        numero: 52,
        materia: "Geriatria",
        titulo: "5 Is",

        pergunta: `Um idoso apresenta polifarmácia, quedas, dificuldade de locomoção, incontinência e comprometimento cognitivo. Qual conjunto corresponde aos cinco Is clássicos?`,

        alternativas: {
            A: "Infecção, insônia, isquemia, inflamação e insuficiência renal.",
            B: "Iatrogenia, imobilidade, instabilidade, incontinência e insuficiência cognitiva.",
            C: "Imunidade, infecção, independência, ingestão e idade.",
            D: "Icterícia, insuficiência, incontinência, hipertensão e isquemia.",
            E: "Insônia, infecção, incapacidade, inflamação e isquemia."
        },

        correta: "B"
    },


    {
        numero: 53,
        materia: "Geriatria",
        titulo: "Iatrogenia",

        pergunta: `Um idoso passa a apresentar tontura, sonolência e queda funcional após várias prescrições novas. Qual estratégia reduz o risco de iatrogenia medicamentosa?`,

        alternativas: {
            A: "Prescrever vários medicamentos simultaneamente.",
            B: "Evitar revisão de medicamentos.",
            C: "Preferir medidas não farmacológicas quando cabíveis, iniciar baixo, titular e simplificar o esquema.",
            D: "Manter todo medicamento indefinidamente.",
            E: "Evitar perguntar sobre medicamentos de uso domiciliar."
        },

        correta: "C"
    },


    {
        numero: 54,
        materia: "Geriatria",
        titulo: "Imobilidade",

        pergunta: `Um paciente permanece acamado, não consegue mudar espontaneamente de posição e desenvolve contraturas e lesões cutâneas. Qual consequência pode decorrer da imobilidade prolongada?`,

        alternativas: {
            A: "Redução do risco de trombose.",
            B: "Proteção contra sarcopenia.",
            C: "Melhora da densidade óssea.",
            D: "Sarcopenia, hipotensão postural, constipação, infecções, trombose e lesões por pressão.",
            E: "Redução do risco de pneumonia."
        },

        correta: "D"
    },


    {
        numero: 55,
        materia: "Geriatria",
        titulo: "Quedas — ambiente",

        pergunta: `Na casa de uma idosa há tapetes soltos, iluminação insuficiente, piso escorregadio e escada sem corrimão. Qual interpretação é correta?`,

        alternativas: {
            A: "São fatores ambientais modificáveis associados a quedas.",
            B: "Somente a idade explica quedas.",
            C: "Esses fatores não influenciam equilíbrio.",
            D: "Apenas medicamentos importam.",
            E: "Quedas não podem ser prevenidas por mudanças ambientais."
        },

        correta: "A"
    },


    {
        numero: 56,
        materia: "Geriatria",
        titulo: "Incontinência de estresse",

        pergunta: `Uma idosa perde urina ao tossir, espirrar e levantar peso, sem urgência como sintoma predominante. Qual tipo de incontinência é mais compatível?`,

        alternativas: {
            A: "Urgência.",
            B: "Overflow.",
            C: "Estresse.",
            D: "Mista obrigatoriamente.",
            E: "Transbordamento por obstrução."
        },

        correta: "C"
    },


    {
        numero: 57,
        materia: "Geriatria",
        titulo: "Apresentação atípica",

        pergunta: `Uma pessoa idosa apresenta pneumonia sem febre importante. Em outro momento, um infarto manifesta-se principalmente com mal-estar, náuseas e queda funcional. Qual conceito explica esses casos?`,

        alternativas: {
            A: "Doenças graves sempre causam febre e dor no idoso.",
            B: "A ausência de febre exclui pneumonia.",
            C: "Idosos podem apresentar manifestações atípicas, exigindo atenção a sinais funcionais e inespecíficos.",
            D: "Apresentação atípica ocorre somente em doenças neurológicas.",
            E: "Apenas pessoas institucionalizadas apresentam quadros atípicos."
        },

        correta: "C"
    },


    {
        numero: 58,
        materia: "Geriatria",
        titulo: "Cascata da incapacidade",

        pergunta: `Qual sequência representa uma possível cascata de perda funcional descrita no material?`,

        alternativas: {
            A: "Sedentarismo → melhora muscular → estabilidade → menor risco de queda.",
            B: "Sedentarismo → obesidade → osteoartrose → instabilidade → queda → fratura de fêmur → complicações.",
            C: "Queda → aumento automático da mobilidade → recuperação.",
            D: "Osteoartrose → melhora da marcha.",
            E: "Fratura → aumento imediato da reserva funcional."
        },

        correta: "B"
    },


    {
        numero: 59,
        materia: "Geriatria",
        titulo: "Alzheimer — características",

        pergunta: `Um paciente apresenta deterioração progressiva da memória recente, orientação, linguagem e atividades de vida diária, sem alteração primária da consciência. Qual diagnóstico e achados são mais compatíveis?`,

        alternativas: {
            A: "Doença de Alzheimer, associada a perda neuronal, placas beta-amiloide e emaranhados de Tau.",
            B: "Delirium isolado.",
            C: "Neuropatia periférica.",
            D: "Síndrome vestibular.",
            E: "Demência vascular obrigatória."
        },

        correta: "A"
    },


    {
        numero: 60,
        materia: "Geriatria",
        titulo: "5 Ms",

        pergunta: `Em uma consulta, o médico avalia cognição e humor, medicamentos, mobilidade e quedas, múltiplas doenças e os objetivos pessoais do paciente. Qual modelo está sendo utilizado?`,

        alternativas: {
            A: "SNOOP.",
            B: "VINDICATE.",
            C: "5 Ms da geriatria.",
            D: "Glasgow.",
            E: "APGAR familiar."
        },

        correta: "C"
    },


    {
        numero: 61,
        materia: "Geriatria",
        titulo: "Lewy",

        pergunta: `Uma pessoa apresenta flutuações cognitivas marcantes ao longo do mesmo dia, alucinações visuais recorrentes e parkinsonismo relativamente simétrico, com tremor de repouso menos proeminente. Qual hipótese é mais compatível?`,

        alternativas: {
            A: "Demência com corpos de Lewy.",
            B: "Alzheimer típico.",
            C: "Demência frontotemporal.",
            D: "Depressão isolada.",
            E: "Hidrocefalia de pressão normal."
        },

        correta: "A"
    },


    {
        numero: 62,
        materia: "Geriatria",
        titulo: "Frontotemporal",

        pergunta: `Um paciente relativamente jovem apresenta desinibição, apatia, perseveração, mudança de personalidade e comportamento social inadequado, com memória relativamente menos comprometida no início. Qual diagnóstico deve ser considerado?`,

        alternativas: {
            A: "Alzheimer típico.",
            B: "Demência com corpos de Lewy.",
            C: "Demência frontotemporal.",
            D: "Delirium.",
            E: "Hidrocefalia de pressão normal."
        },

        correta: "C"
    },


    {
        numero: 63,
        materia: "Geriatria",
        titulo: "Vascular e Hachinski",

        pergunta: `Um idoso apresenta declínio cognitivo em degraus, sinais neurológicos focais, alteração precoce da marcha e múltiplos fatores de risco vascular. Qual associação é mais adequada?`,

        alternativas: {
            A: "Alzheimer e MNA.",
            B: "Demência vascular e escala de Hachinski.",
            C: "Lewy e TUG.",
            D: "Frontotemporal e Katz.",
            E: "Delirium e APGAR."
        },

        correta: "B"
    },


    {
        numero: 64,
        materia: "Geriatria",
        titulo: "Hidrocefalia de pressão normal",

        pergunta: `Um idoso apresenta alteração de marcha, déficit cognitivo e incontinência urinária. A investigação sugere hidrocefalia de pressão normal. Qual procedimento pode ser utilizado na avaliação descrita no material?`,

        alternativas: {
            A: "Punção lombar com retirada de aproximadamente 30–50 mL de líquor e avaliação da resposta clínica.",
            B: "Biópsia cerebral obrigatória.",
            C: "Teste de Snellen como confirmação.",
            D: "Tinetti como tratamento definitivo.",
            E: "Exame auditivo como confirmação."
        },

        correta: "A"
    },


    {
        numero: 65,
        materia: "Geriatria",
        titulo: "Parkinson",

        pergunta: `Um paciente apresenta tremor de repouso assimétrico, rigidez, bradicinesia, redução do balanço dos braços e marcha com passos curtos. Qual mecanismo está mais relacionado à doença de Parkinson?`,

        alternativas: {
            A: "Degeneração dopaminérgica da substância negra.",
            B: "Lesão exclusiva do trato espinotalâmico.",
            C: "Perda de acetilcolina no hipocampo como mecanismo único.",
            D: "Lesão do nervo facial.",
            E: "Destruição do nervo vestibular."
        },

        correta: "A"
    },


    {
        numero: 66,
        materia: "Geriatria",
        titulo: "Delirium — CAM",

        pergunta: `Um idoso desenvolve alteração aguda e flutuante da atenção, pensamento desorganizado e alteração do nível de consciência. Na aplicação do CAM, qual combinação de critérios é necessária para diagnóstico?`,

        alternativas: {
            A: "Apenas pensamento desorganizado.",
            B: "Apenas alteração de consciência.",
            C: "Critério 1 + critério 2 + critério 3 ou 4.",
            D: "Apenas alucinação visual.",
            E: "Apenas inversão do sono."
        },

        correta: "C"
    },


    {
        numero: 67,
        materia: "Geriatria",
        titulo: "Delirium — causas e conduta",

        pergunta: `Um paciente idoso hospitalizado desenvolve delirium. A equipe revisa medicamentos, hidratação, infecção, dor, constipação, ambiente, visão e audição. Qual é o princípio central do tratamento?`,

        alternativas: {
            A: "Tratar a causa precipitante e corrigir fatores modificáveis, além de medidas ambientais e suporte.",
            B: "Manter todos os medicamentos sem revisão.",
            C: "Usar contenção física como medida padrão.",
            D: "Considerar o quadro irreversível.",
            E: "Tratar apenas a agitação, sem investigar causa."
        },

        correta: "A"
    },


    {
        numero: 68,
        materia: "Geriatria",
        titulo: "Delirium — PINCHME",

        pergunta: `Na investigação sistemática de delirium, a equipe utiliza o mnemônico PINCHME. Qual conjunto corresponde aos seus elementos?`,

        alternativas: {
            A: "Pain, Infection, Constipation, Hydration, Medication, Environment.",
            B: "Parkinson, Infection, Nutrition, Cardiac, Hypertension, Exercise.",
            C: "Pain, Inflammation, Neuropathy, Cognition, Hearing, Exercise.",
            D: "Pressure, Insulin, Nutrition, Cardiac, Hypertension, Medication.",
            E: "Pain, Infection, Neuropathy, Calcium, Hypotension, Environment."
        },

        correta: "A"
    },


    {
        numero: 69,
        materia: "Geriatria",
        titulo: "Depressão geriátrica",

        pergunta: `Uma idosa apresenta perda de interesse, fadiga, alterações do sono, lentificação e queixas cognitivas. Os sintomas persistem por semanas e prejudicam o funcionamento. Qual abordagem é mais adequada?`,

        alternativas: {
            A: "Considerar automaticamente demência.",
            B: "Avaliar depressão, incluindo sintomas de humor, anedonia, neurovegetativos e cognitivos e seus critérios de duração/impacto.",
            C: "Considerar sempre delirium.",
            D: "Descartar depressão porque há queixa cognitiva.",
            E: "Considerar envelhecimento fisiológico."
        },

        correta: "B"
    },


    {
        numero: 70,
        materia: "Geriatria",
        titulo: "Depressão x demência",

        pergunta: `Uma paciente passa a reclamar intensamente de memória após início relativamente rápido de sintomas depressivos, responde frequentemente “não sei” e demonstra preocupação com seus esquecimentos. Qual conceito pode ajudar no diferencial?`,

        alternativas: {
            A: "Depressão pode produzir comprometimento cognitivo aparente, enquanto demência tende a ser insidiosa e progressiva.",
            B: "Toda queixa de memória é Alzheimer.",
            C: "Demência sempre começa abruptamente.",
            D: "Depressão exclui alterações cognitivas.",
            E: "Delirium e depressão são sinônimos."
        },

        correta: "A"
    }

];


/* =========================================================
   ESTADO DO SIMULADO
========================================================= */

let questaoAtual = 0;

let pontos = 0;

let respostas = Array(
    questoes.length
).fill(null);

let simuladoIniciado = false;

let timerAtivo = false;

let segundos = 3600;

let intervalo = null;


/* =========================================================
   ELEMENTOS
========================================================= */

const $ = (id) =>
    document.getElementById(id);


/* =========================================================
   TROCAR TELA
========================================================= */

function mostrarTela(id) {

    document
        .querySelectorAll(".screen")
        .forEach(tela => {

            tela.classList.remove("active");

        });


    $(id).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   INICIAR
========================================================= */

function iniciarSimulado() {

    simuladoIniciado = true;

    questaoAtual = 0;

    pontos = 0;

    respostas = Array(
        questoes.length
    ).fill(null);


    timerAtivo =
        $("timerToggle").checked;


    if (timerAtivo) {

        segundos = 3600;

        iniciarTimer();

        $("timer").style.display = "flex";

    } else {

        pararTimer();

        $("timer").style.display = "none";

    }


    $("pontuacao").textContent = "0";


    mostrarTela("simulado");

    mostrarQuestao();
}


/* =========================================================
   MOSTRAR QUESTÃO
========================================================= */

function mostrarQuestao() {

    const q =
        questoes[questaoAtual];


    const numero =
        String(q.numero).padStart(2, "0");


    $("numeroQuestao").textContent =
        `${numero} / 70`;


    $("questionNumberCircle").textContent =
        numero;


    $("tituloQuestao").textContent =
        q.titulo;


    $("pergunta").textContent =
        q.pergunta;


    $("categoryText").textContent =
        q.materia;


    const categoria =
        document.querySelector(
            ".question-category"
        );


    categoria.textContent =
        q.materia.toUpperCase();


    $("progressText").textContent =
        `${q.numero} de 70`;


    const progresso =
        ((questaoAtual + 1) / questoes.length) * 100;


    $("progressBar").style.width =
        `${progresso}%`;


    const alternativas =
        $("alternativas");


    alternativas.innerHTML = "";


    Object.entries(q.alternativas)
        .forEach(([letra, texto]) => {

            const button =
                document.createElement("button");


            button.className =
                "alternative";


            button.type =
                "button";


            button.dataset.letra =
                letra;


            button.innerHTML = `

                <span class="alternative-letter">
                    ${letra}
                </span>

                <span>
                    ${texto}
                </span>

            `;


            button.addEventListener(
                "click",
                () => selecionarAlternativa(letra)
            );


            alternativas.appendChild(button);

        });


    $("feedback").className =
        "feedback";


    $("feedback").textContent =
        "";


    restaurarResposta();


    $("btnVoltar").disabled =
        questaoAtual === 0;


    $("btnAvancar").textContent =
        questaoAtual === questoes.length - 1
            ? "Finalizar"
            : "Avançar →";


    atualizarContadorRespondidas();
}


/* =========================================================
   SELECIONAR ALTERNATIVA
========================================================= */

function selecionarAlternativa(letra) {

    const q =
        questoes[questaoAtual];


    /*
        Impede que a mesma questão
        seja pontuada duas vezes.
    */

    if (respostas[questaoAtual] !== null) {

        return;

    }


    respostas[questaoAtual] =
        letra;


    const botoes =
        document.querySelectorAll(
            ".alternative"
        );


    botoes.forEach(botao => {

        botao.disabled = true;


        const botaoLetra =
            botao.dataset.letra;


        if (botaoLetra === q.correta) {

            botao.classList.add("correct");

        }


        if (
            botaoLetra === letra &&
            letra !== q.correta
        ) {

            botao.classList.add("wrong");

        }

    });


    const feedback =
        $("feedback");


    feedback.classList.add("show");


    if (letra === q.correta) {

        pontos++;


        $("pontuacao").textContent =
            pontos;


        feedback.classList.add("correct");


        feedback.textContent =
            "✓ Resposta correta! Você ganhou 1 ponto.";

    } else {

        feedback.classList.add("wrong");


        feedback.textContent =
            `✕ Resposta incorreta. A alternativa correta é ${q.correta}.`;

    }


    atualizarContadorRespondidas();
}


/* =========================================================
   RESTAURAR RESPOSTA
========================================================= */

function restaurarResposta() {

    const resposta =
        respostas[questaoAtual];


    if (resposta === null) {

        return;

    }


    const q =
        questoes[questaoAtual];


    const botoes =
        document.querySelectorAll(
            ".alternative"
        );


    botoes.forEach(botao => {

        botao.disabled = true;


        const letra =
            botao.dataset.letra;


        if (letra === q.correta) {

            botao.classList.add("correct");

        }


        if (
            letra === resposta &&
            resposta !== q.correta
        ) {

            botao.classList.add("wrong");

        }

    });


    const feedback =
        $("feedback");


    feedback.classList.add("show");


    if (resposta === q.correta) {

        feedback.classList.add("correct");

        feedback.textContent =
            "✓ Você respondeu corretamente esta questão.";

    } else {

        feedback.classList.add("wrong");

        feedback.textContent =
            `✕ Você marcou ${resposta}. A correta é ${q.correta}.`;

    }
}


/* =========================================================
   RESPONDIDAS
========================================================= */

function atualizarContadorRespondidas() {

    const total =
        respostas.filter(
            resposta => resposta !== null
        ).length;


    $("answeredCounter").textContent =
        total;
}


/* =========================================================
   AVANÇAR
========================================================= */

function avancar() {

    if (
        questaoAtual <
        questoes.length - 1
    ) {

        questaoAtual++;

        mostrarQuestao();

        return;
    }


    finalizar();
}


/* =========================================================
   VOLTAR
========================================================= */

function voltar() {

    if (questaoAtual > 0) {

        questaoAtual--;

        mostrarQuestao();

    }
}


/* =========================================================
   TIMER
========================================================= */

function iniciarTimer() {

    pararTimer();


    intervalo =
        setInterval(() => {

            segundos--;


            atualizarTimer();


            if (segundos <= 0) {

                pararTimer();

                alert(
                    "O tempo acabou! O simulado será finalizado."
                );

                finalizar();

            }

        }, 1000);


    atualizarTimer();
}


/* =========================================================
   PARAR TIMER
========================================================= */

function pararTimer() {

    if (intervalo !== null) {

        clearInterval(intervalo);

        intervalo = null;

    }
}


/* =========================================================
   ATUALIZAR TIMER
========================================================= */

function atualizarTimer() {

    const minutos =
        Math.floor(segundos / 60);


    const segundosRestantes =
        segundos % 60;


    $("timerText").textContent =
        `${String(minutos).padStart(2, "0")}:${String(segundosRestantes).padStart(2, "0")}`;


    if (segundos <= 300) {

        $("timer").style.color =
            "#e89a91";

    } else {

        $("timer").style.color =
            "";
    }
}


/* =========================================================
   FINALIZAR
========================================================= */

function finalizar() {

    pararTimer();


    const respondidas =
        respostas.filter(
            resposta => resposta !== null
        ).length;


    const acertos =
        respostas.reduce(
            (total, resposta, index) => {

                if (
                    resposta ===
                    questoes[index].correta
                ) {

                    return total + 1;

                }

                return total;

            },
            0
        );


    const erros =
        questoes.length - acertos;


    const percentual =
        Math.round(
            (acertos / questoes.length) * 100
        );


    $("resultadoPontuacao").textContent =
        `${acertos} / ${questoes.length}`;


    $("resultadoAcertos").textContent =
        acertos;


    $("resultadoErros").textContent =
        erros;


    $("resultadoPercentual").textContent =
        `${percentual}%`;


    gerarRevisao();


    mostrarTela("resultado");
}


/* =========================================================
   REVISÃO
========================================================= */

function gerarRevisao() {

    const container =
        $("revisao");


    container.innerHTML = "";


    questoes.forEach(
        (q, index) => {

            const item =
                document.createElement("div");


            const resposta =
                respostas[index];


            const acertou =
                resposta === q.correta;


            item.className =
                `review-item ${
                    acertou
                        ? "correct"
                        : "wrong"
                }`;


            if (resposta === null) {

                item.textContent =
                    `${q.numero} • Não respondida`;

            } else {

                item.textContent =
                    `${q.numero} • ${
                        acertou
                            ? "✓ Acertou"
                            : `✕ ${resposta} → ${q.correta}`
                    }`;

            }


            container.appendChild(item);

        }
    );
}


/* =========================================================
   REINICIAR
========================================================= */

function reiniciar() {

    pararTimer();


    questaoAtual = 0;

    pontos = 0;

    respostas =
        Array(questoes.length)
            .fill(null);


    segundos = 3600;


    $("pontuacao").textContent =
        "0";


    mostrarTela("inicio");
}


/* =========================================================
   EVENTOS
========================================================= */

$("btnIniciar")
    .addEventListener(
        "click",
        iniciarSimulado
    );


$("btnAvancar")
    .addEventListener(
        "click",
        avancar
    );


$("btnVoltar")
    .addEventListener(
        "click",
        voltar
    );


$("btnReiniciar")
    .addEventListener(
        "click",
        reiniciar
    );


/* =========================================================
   TECLADO
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            !simuladoIniciado ||
            !$("simulado").classList.contains("active")
        ) {

            return;

        }


        if (event.key === "ArrowRight") {

            avancar();

        }


        if (event.key === "ArrowLeft") {

            voltar();

        }


        const tecla =
            event.key.toUpperCase();


        if (
            ["A", "B", "C", "D", "E"]
                .includes(tecla)
        ) {

            const jaRespondeu =
                respostas[questaoAtual] !== null;


            if (!jaRespondeu) {

                selecionarAlternativa(tecla);

            }

        }

    }
);