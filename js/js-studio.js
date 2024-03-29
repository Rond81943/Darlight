let btnLeft = document.getElementById('btnLeft');
let img1 = document.getElementById('room');
let btnRight = document.getElementById('btnRight');

// Character one
let charF = document.getElementById('charF');

// Character two
let charS = document.getElementById('charS');
let title = document.querySelector('.modal__title');
let dis = document.querySelector('.discription');
let opn = document.querySelector('.opinion');
let ago = document.querySelector('.ago');
let did = document.querySelector('.did');
let es = document.querySelector('.especialy');
let rol = document.querySelector('.role');


const listPosCharF = [
    {
        w: '15%',
        pad: '32%',
        posx: '30%',
        posy: '54%'
    },
    {
        w: '18%',
        pad: '21%',
        posx: '22%',
        posy: '55%'
    },
    {
        w: '23%',
        pad: '40%',
        posx: '15%',
        posy: '48%'
    },
    {
        w: '32%',
        pad: '50%',
        posx: '16%',
        posy: '46%'
    },
    {
        w: '41%',
        pad: '48%',
        posx: '14%',
        posy: '40%'
    },
    {
        w: '29%',
        pad: '42%',
        posx: '30%',
        posy: '40%'
    }
];

const listPosCharS = [
    {
        w: '28.1%',
        pad: '40%',
        posx: '20%',
        posy: '48%'
    },
    {
        w: '22%',
        pad: '45%',
        posx: '18%',
        posy: '45%'
    },
    {
        w: '40%',
        pad: '18%',
        posx: '20%',
        posy: '70%'
    },
    {
        w: '33%',
        pad: '58%',
        posx: '26%',
        posy: '41%'
    },
    {
        w: '33%',
        pad: '57%',
        posx: '15%',
        posy: '35%'
    },
    {
        w: '22%',
        pad: '52%',
        posx: '20%',
        posy: '32%'
    }
];

let listRoom = ['../img/studio/rooms/holl.png','../img/studio/rooms/livingroom.png','../img/studio/rooms/biblioteka.png','../img/studio/rooms/ofice.png','../img/studio/rooms/kitchen.png','../img/studio/rooms/bedroom.png'];
let listCharF = [
    {
        img: '../img/studio/charactersRooms/hollChel1.png',
        w: '15%',
        pad: '32%',
        posx: '30%',
        posy: '50%',

        tit: 'Тору Дарлайт',
        dis: 'Тору - невысокая девушка с русыми волосами, которые обычно завязывает в шишечки. Её зелёные глаза имеют неестественно белые зрачки.',
        opn: 'Она чрезвычайно хитрая и находчивая. Её мотивацией служит, вероятно, память о её отце. Она ценит деньги, власть и своих друзей (предположительно).',
        ago: 'Тору выросла в крестьянской семье. Когда у её брата проявились волшебные способности, они с отцом сбежали в лес, и там она выросла, ограбляя торговые точки в городах. Самостоятельно научилась варить различные зелья и яды. После того, как её поймал Арт, она была помилована, узнав, почему она воровала. Впоследствии ей устроили должность горничной в Темной крепости.',
        did: 'Глаз (также известный как Арт) - её близкий друг. Деку она презирает, а к остальным персонажам она относится вроде бы нейтрально, но иногда выказывает своё высокомерие.',
        es: 'Тору бессмертна и, с помощью ведьменской магии, способна создать практически любое зелье. Она также немного умеет колдовать с использованием артефактов. Настоящая внешность скрыта с помощью волшебной заколки, которую она никогда не снимает.',
        rol: 'Её роль практически минимальна. Она следит за событиями и тайно помогает персонажам двигаться по сюжету.'
    },
    { 
        img: '../img/studio/charactersRooms/livingroomChel1.png',
        w: '18%',
        pad: '21%',
        posx: '22%',
        posy: '53%',
        
        tit: 'Агний',
        dis: 'Агний имеет темные волосы с белыми кончиками, а его глаза имеют яркий малиновый цвет.',
        opn: 'Агний - это человек, у которого есть как положительные, так и отрицательные черты. Он часто бывает агрессивным и нервным, но иногда его можно увидеть веселым и игривым. Агний очень ценит свою семью и друзей.',
        ago: 'Долгое время Агний получал образование дома и был единственным ребенком в своей любящей семье. В 18 лет его отправили учиться в университет, где он познакомился с Марком. После таинственных событий, связанных с лабораторией, его похитили, но позже его нашел Фари.',
        did: 'Марк - его верный друг, с которым они пережили многое. Также он дружит с Тору. Отношения с отцом - Деку у Агния остались нейтральными.',
        es: 'Одной из его уникальных способностей является возможность превращаться в нечто и питаться кровью. В процессе превращения у него появляются хвост-стрелочка и небольшие рожки, типичные для его невероятной расы.',
        rol: 'Оказывается, что он является наследником престола. Кроме того, он спас Марка из лаборатории, что запускает цепь событий, повлиявших на жизнь Марка, Фари и Арта.'
    },
    {
        img: '../img/studio/charactersRooms/bibliotekaChel1.png',
        w: '23%',
        pad: '40%',
        posx: '15%',
        posy: '48%',

        tit: 'Арт Сотет',
        dis: '1) Длинные черные волосы, которые плавно переходят в зеленоватый оттенок. Зелёные глаза. Выглядит примерно на 26 лет. <br> 2) Длинные зеленоватые волосы, зелёные глаза. <br> 3) Длинные белые волосы с зеленоватой прядью на чёлке. Жёлтые янтарные глаза. <br> <b>Отличительные черты: </b> На всех обликах присутствуют крылья (на втором они кожаные), рога (на втором их нет), хвост.',
        opn: 'Все три облика различаются. Первый более серьезный и задумчивый, второй - весёлый и активный, третий - просто спокойный. Все ± рассудительны. Если вы проявите к ним дружелюбие, они будут относиться к вам хорошо. Их действия мотивированы советами и последними словами покойной матери. Они ценят безопасность, чай, мир и уплату налогов.',
        ago: 'Согласно обычаям своей расы, Арт был изгнан в человеческую деревню и вырос у приемных родителей. После достижения совершеннолетия он отправился в путешествие, которое длилось до момента первой смерти, когда он был заключён в амулет магом. Был приобретен новым хозяином и познакомился с парнем по имени Сяо. Узнав, что его разыскивают, решил улучшить свои навыки и достичь звания Повелителя Тьмы. Смог успешно отменить поиски дракона и, внедрив несколько изменений, спокойно управлял. Пережил несколько атак Тьмы, что повлияло на его рассудок. Умер, но сумел сбежать и заставил бога Тьмы воскресить себя. После участия в войне спокойно вернулся на трон, получив благословение от Высшего бога.',
        did: 'Он относится к Деку как к коллеге, поскольку они оба правители и соседи. Для него Сяо – лучший друг, за которого он готов пойти на многое. Все его облики дружелюбны. Тору - его подруга. К остальным относится нейтрально.',
        es: 'Арт способен контролировать и душу, и разум, встроиться в мозг и пробыть там долгое время. Он может создавать тёмные камни и разнообразное оружие из них. Отлично владеет двуручным мечом. Способен воскрешать себя, изменяя облик. Также способен воскрешать других.',
        rol: 'Арт - ключевой персонаж, от которого начинается вся идея Дарлайт. Он стал единственным в истории Повелителем Тьмы, который заключил союз со Светлым Огненным королевством, предотвратив ряд войн. Сохранил жизнь друга и вернул его родителей к жизни, а также восстановил светлый дворец и Огненное королевство. Положил конец бессмысленному геноциду в Темном государстве. Без его участия возможно было бы поражение в войне в эпоху Трех Великих.'
    },
    {
        img: '../img/studio/charactersRooms/officeChel1.png',
        w: '32%',
        pad: '50%',
        posx: '16%',
        posy: '36%',

        tit: 'Кристофер',
        dis: 'Кристофер имеет сине-фиолетовые волосы с белой прядью на челке. Из-за непослушной пряди он завязывает короткую косичку спереди. У него фиолетовые глаза с острым зрачком, а также выдающиеся клыки.',
        opn: 'Он выглядит наглым и высокомерным, но на самом деле скрывает свою слабость и ранимость. Его мотивацией служит желание получить высокий статус и уважение.',
        ago: 'Из-за своих магических способностей к Кристоферу плохо относились в семье и обществе. Он сбежал в лес, где был найден и воспитан Высшим богом. Под влиянием роста его магии он причинил серьезные разрушения империи. Спустя некоторое время завязал дружеские отношения с императором. Позднее, по неизвестным обстоятельствам, он стал правителем той части империи, которую когда-то разрушил.',
        did: 'Он уважает Деку, но Марк вызывает у него страх. К остальным он относится скорее нейтрально, хотя часто проявляет свою высокомерность.',
        es: 'Он является одним из самых сильных магов в Дарлайт. Ему под силу многое.',
        rol: 'Его действия серьезно подорвали экономику империи, но на части, которой он управляет, он сумел восстановить её.'
    },
    {
        img: '../img/studio/charactersRooms/kitchenChel1.png',
        w: '41%',
        pad: '48%',
        posx: '14%',
        posy: '30%',

        tit: 'Сяо',
        dis: 'Сяо обладает светлыми волосами, которые переливаются золотистым оттенком, рога с острыми концами, крылья и хвост с шипами. Его глаза имеют темно-оранжевый цвет, и несмотря на свою внешность, он выглядит примерно на 23 года.',
        opn: 'Сяо ведет себя похоже на чихуахуа: иногда агрессивен, но также способен быть спокойным. Любит пить чай с лимоном и очень ценит своих друзей, королевство и родителей.',
        ago: 'Сяо — дракон огня и света. В восемь лет он стал свидетелем геноцида. После этого ужасного события, вернувшись домой через портал, он обнаружил трупы своих родителей, а большинство других драконов уже были мертвы. Арт, проклиная его, пытался уничтожить Сяо, и Сяо вынужден был скрываться в лесах и других мирах в течение пяти лет, пока не удалось оторваться от них. На тот момент он едва умел летать, и однажды оказался в ловушке, прижатый к краю обрыва. Едва смог взлететь, отбросившись вниз, так как не было никакого другого пути. Вскоре после этого он встретил своего друга Дэку.',
        did: 'Сяо относится к Дэку как к своему брату, а к Глазу – как к другу, который всегда рядом. К другим персонажам он относится нейтрально.',
        es: 'Под влиянием сильных эмоций Сяо меняет свой цвет, что делает его уникальным и легко различимым.',
        rol: 'Сяо является последним выжившим драконом в мире, который в итоге подружился с Артом и помог восстановить утраченное царство, заняв заслуженное место на престоле. Вместе с Артом они заключили мирный договор, обеспечивающий благополучие и гармонию в их мире.'
    },
    {
        img: '../img/studio/charactersRooms/bedroomChel1.png',
        w: '29%',
        pad: '42%',
        posx: '30%',
        posy: '40%',

        tit: 'Ян',
        dis: 'Ян имеет чёрные волосы с фиолетовым оттенком и белую прядь на левом ушке. Он предпочитает носить немного открытую одежду, и у него красные глаза. Задние волосы собраны в хвостик. Ян выглядит примерно на 18 лет.',
        opn: 'Ян очень любопытный, добрый и заботливый, но иногда бывает немного трусом. Он обожает ягоды и очень заботится о своём младшем брате. Он также ценит своего друга Фар-Фара и остальных друзей, и всегда стремится к тому, чтобы его брат был успешным.',
        ago: 'У Яна есть младший брат по имени Крис, который является котом. Они потеряли своих родителей очень давно, когда Яну было 10 лет, а его брату – всего лишь пару месяцев. Они потеряли отца, которого случайно пристрелили, и маму, которая умерла при родах брата Яна. Ян и его брат отличаются друг от друга из-за того, что являются разными видами животных: Ян – пумой, а его брат – котом. После потери родителей Ян старался воспитывать своего брата как мог.',
        did: 'Ян относится к Фару как к другу, а к остальным – нейтрально.',
        es: 'Ян обладает возможностью превращаться в пуму, что делает его особенным и уникальным.',
        rol: 'Ян является охотником, который случайно познакомился с ангелом. Так как был запрет на общение с ангелами из-за их прошлых деяний, в том числе из-за смерти родителей Яна, он рисковал своей жизнью. Тем не менее, он и ангел стали лучшими друзьями, несмотря на все препятствия, включая возможное казнь Яна, от которой его спас Фар-Фар.'
    }
];
let listCharS = [
    {
        img: '../img/studio/charactersRooms/hollChel2.png',
        w: '28.1%',
        pad: '40%',
        posx: '20%',
        posy: '42%',

        tit: 'Арт Сотет',
        dis: '1) Длинные черные волосы, которые плавно переходят в зеленоватый оттенок. Зелёные глаза. Выглядит примерно на 26 лет. <br> 2) Длинные зеленоватые волосы, зелёные глаза. <br> 3) Длинные белые волосы с зеленоватой прядью на чёлке. Жёлтые янтарные глаза. <br> <b>Отличительные черты: </b> На всех обликах присутствуют крылья (на втором они кожаные), рога (на втором их нет), хвост.',
        opn: 'Все три облика различаются. Первый более серьезный и задумчивый, второй - весёлый и активный, третий - просто спокойный. Все ± рассудительны. Если вы проявите к ним дружелюбие, они будут относиться к вам хорошо. Их действия мотивированы советами и последними словами покойной матери. Они ценят безопасность, чай, мир и уплату налогов.',
        ago: 'Согласно обычаям своей расы, Арт был изгнан в человеческую деревню и вырос у приемных родителей. После достижения совершеннолетия он отправился в путешествие, которое длилось до момента первой смерти, когда он был заключён в амулет магом. Был приобретен новым хозяином и познакомился с парнем по имени Сяо. Узнав, что его разыскивают, решил улучшить свои навыки и достичь звания Повелителя Тьмы. Смог успешно отменить поиски дракона и, внедрив несколько изменений, спокойно управлял. Пережил несколько атак Тьмы, что повлияло на его рассудок. Умер, но сумел сбежать и заставил бога Тьмы воскресить себя. После участия в войне спокойно вернулся на трон, получив благословение от Высшего бога.',
        did: 'Он относится к Деку как к коллеге, поскольку они оба правители и соседи. Для него Сяо – лучший друг, за которого он готов пойти на многое. Все его облики дружелюбны. Тору - его подруга. К остальным относится нейтрально.',
        es: 'Арт способен контролировать и душу, и разум, встроиться в мозг и пробыть там долгое время. Он может создавать тёмные камни и разнообразное оружие из них. Отлично владеет двуручным мечом. Способен воскрешать себя, изменяя облик. Также способен воскрешать других.',
        rol: 'Арт - ключевой персонаж, от которого начинается вся идея Дарлайт. Он стал единственным в истории Повелителем Тьмы, который заключил союз со Светлым Огненным королевством, предотвратив ряд войн. Сохранил жизнь друга и вернул его родителей к жизни, а также восстановил светлый дворец и Огненное королевство. Положил конец бессмысленному геноциду в Темном государстве. Без его участия возможно было бы поражение в войне в эпоху Трех Великих.'
    },
    {
        img: '../img/studio/charactersRooms/livingroomChel2.png',
        w: '22%',
        pad: '45%',
        posx: '18%',
        posy: '35%',

        tit: 'Фари Давл',
        dis: 'Фари - блондин с желтыми янтарными глазами и бледной кожей. У него есть большие белые крылья и едва заметное светящееся сияние над головой. В полном ангельском обличии его глаза становятся коричнево-черными.',
        opn: 'Он спокоен и смел, найдя вдохновение в своей религиозной вере в богиню Света. Фари ценит своих друзей, верность, преданность и мир во всем мире.',
        ago: 'Фари лишен родителей, так как он является творением богини. Когда-то он был непокорным и многократно нарушал порядок в Светлой стране, что привело к его изгнанию в Дарлайт в качестве наказания. Там он переосмыслил себя, отбыв некоторое время в тюрьме.',
        did: 'Ян - его близкий друг, а Марк - его товарищ, хотя часто осуждает его за его поступки. Он относится с уважением к правителям, особенно к Повелителю Тьмы за его помощь на войне. К Тору он испытывает призрение, а к остальным относится нейтрально.',
        es: 'Он обладает светлой магией, являющейся одной из сильнейших сил в Дарлайт. При разрешении богини он может вернуть людей из иного мира.',
        rol: 'Фари инициировал войну в эпоху "Трех Великих" с благими намерениями. Он вернул бывших правителей к власти, приведя их из иного мира для восстановления баланса между государствами.'
    },
    {
        img: '../img/studio/charactersRooms/bibliotekaChel2.png',
        w: '40%',
        pad: '18%',
        posx: '20%',
        posy: '70%',

        tit: 'Ким',
        dis: 'Ким имеет ярко-красные волосы, черные глаза с золотыми зрачками. Над ушами у него маленькие крылья, а также хвост и большие огненные крылья.',
        opn: 'Его характер похож на Арта, но он немного увереннее и нахальнее. Мотивации у него нет - он просто не может умереть, так как является очень редким существом. Он очень ценит Сяо, ведь буквально зависит от него для своего существования.',
        ago: 'У него отсутствует какое-либо прошлое. Он просто упал с неба в окно Светлого дворца к Сяо и начал жить у него.',
        did: 'Сяо - самый дорогой человек для Кима, а Глаз - его друг. К остальным он относится нейтрально.',
        es: 'Ким способен в порыве гнева взорваться (в прямом смысле этого слова). Он может создавать различные предметы из твердой магмы и обладает умением колдовать лавой и огнём.',
        rol: 'Он почти не участвует в сюжете - его главная цель - не дать Сяо умереть от работы.'
    },
    {
        img: '../img/studio/charactersRooms/officeChel2.png',
        w: '33%',
        pad: '58%',
        posx: '26%',
        posy: '28%',

        tit: 'Дэку',
        dis: 'Дэку - парень с черными волосами и глазами пепельного цвета, у которых зрачки напоминают молнию. Он также имеет чёрное пятно на правой стороне глаза и рога, похожие на бараньи. Несмотря на свой внешний вид, он всегда выглядит как тридцатилетний.',
        opn: 'Дэку обладает спокойным и дружелюбным нравом. Он всегда готов помочь и никогда не оставит в беде. Помимо этого, он может выступить в роли психолога в трудные моменты. Он очень ценит своих друзей и родных. Его движущей силой служит память о его ушедшей сестре. Дэку увлекается фехтованием и обожает печеньки, которые покупает Сяо.',
        ago: 'Его сестру убили в лесу, когда они гуляли, Дэку не смог спасти её и это травмировало его настолько, что винил себя в ее смерти. Этот опыт сделал его более бдительным. Его добрый и отзывчивый характер сформировался именно из-за его преданности семье и памяти о сестре.',
        did: 'Для Дэку его друг Сяо словно брат, ведь они провели всё детство вместе. Он относится ко всем нейтрально, а к Кристоферу и Глазу – как к коллегам.',
        es: 'Его рожки были созданы его сестрой, желавшей попрактиковать магию, и теперь они двигаются, как уши котика. Его внешность застыла на уровне тридцатилетнего возраста и сохранится неизменной на протяжении всей его жизни. Он редко улыбается нормально, его улыбка больше похожа на оскал. Он спит всегда в холодном месте и не испытывает дискомфорта от холода.',
        rol: 'Дэку играет важную роль, остановив и выведя Кристофера из магического шока, он предотвратил при этом кучу разрушений.'
    },
    {
        img: '../img/studio/charactersRooms/kithenChel2.png',
        w: '33%',
        pad: '57%',
        posx: '15%',
        posy: '25%',

        tit: 'Марк Кито‌вский',
        dis: 'Марк - мускулистый парень с черными кудрявыми волосами, которые часто выправляет. Его глаза разные (один голубой, другой фиолетовый). На голове у него фиолетовые рога, а за спиной длинный хвост с фиолетово-синей кисточкой на конце.',
        opn: 'Он всегда жизнерадостный и полон позитива, но лучше не вздумайте его сердить. Его поступки мотивированы собственными ценностями, и он очень ценит дружбу, уважение и творчество.',
        ago: 'Марк получил образование архитектора и в это время встретил Агния. Он является беглым лабораторным экспериментом, чьи голосовые связки заменили на электронные, а из-за веществ он мутировал. Марк основал дизайнерскую компанию, участвовал в войне и является единственным ангелом с черными крыльями. После захвата первого государства он пропал без вести, но он был найден Фари в ином мире. В настоящее время Марк работает учителем химии и физики.',
        did: 'Агний - его близкий друг, Фари - товарищ, а по отношению к Деку испытывает страх, но также и уважение. К правителям относится с уважением, а к остальным персонажам - нейтрально.',
        es: 'Марк фактически не покланяется ни Свету, ни Тьме. Он способен изменять свою внешность и тело, благодаря электронным связкам может выводить электрические приборы из строя. Из чернил он способен создать практически все, что угодно, причем само чернило блокирует практически любую магию. Он абсолютно не видит в темноте.',
        rol: 'Марк представлял сторону защиты во время войны в эпоху "Трех Великих". Он был единственным, кто знал все секреты внутри лаборатории, ставшей причиной начала войны. Он также является спасителем множества экспериментов из лаборатории.'
    },
    {
        img: '../img/studio/charactersRooms/bedroomChel2.png',
        w: '22%',
        pad: '52%',
        posx: '20%',
        posy: '29%',

        tit: 'Рон Тейлор',
        dis: 'Рон - блондин невысокого роста, выглядит примерно на 22 года. У него немного пухлое тело, на правой руке татуировка в виде грубых и острых линий.',
        opn: 'Он спокоен, немного склонный к агрессии, не так много вещей восхищает его, и он старается сохранять спокойствие. Ему нравится готовить и слушать музыку. Рон ценит все, что у него есть.',
        ago: 'У Рона было обычное детство, но были моменты, когда его унижали из-за его веса и внешности, а также из-за его мамы. Из событий можно отметить то, что отец Рона взял его с собой на работу в лабораторию по производству лекарств, когда ему было 9 лет. Когда его оставили в комнате, он случайно зашёл в кабинет с пробирками, и произошёл взрыв. С тех пор отец больше не брал Рона на работу.',
        did: 'Вихо - его друг, которому он готов помочь, если что-то случится. К Юри он испытывает чувства, так как влюблен в неë уже 3 года. К остальным он относится нейтрально.',
        es: 'Отсутствуют.',
        rol: 'Рон работает официантом в китайском кафе и является простым жителем города.'
    }
];
let count = 0;

function myFunction(x) {
    if (x.matches) {
        charF.style.width = `${listPosCharF[count].w}`;
        charF.style.paddingBottom = `${listPosCharF[count].pad}`;
        charF.style.left = `${listPosCharF[count].posx}`;
        charF.style.top = `${listPosCharF[count].posy}`;

        charS.style.width = `${listPosCharS[count].w}`;
        charS.style.paddingBottom = `${listPosCharS[count].pad}`;
        charS.style.right = `${listPosCharS[count].posx}`;
        charS.style.top = `${listPosCharS[count].posy}`;
    }
}
  
const x = window.matchMedia("(max-width: 500px)")
myFunction(x)
x.addListener(myFunction)



const charackterF = () => {
    charF.style.backgroundImage = `url(${listCharF[count].img})`;
    charF.style.width = `${listCharF[count].w}`;
    charF.style.paddingBottom = `${listCharF[count].pad}`;
    charF.style.left = `${listCharF[count].posx}`;
    charF.style.top = `${listCharF[count].posy}`;
};
const charackterS = () => {
    charS.style.backgroundImage = `url(${listCharS[count].img})`;
    charS.style.width = `${listCharS[count].w}`;
    charS.style.paddingBottom = `${listCharS[count].pad}`;
    charS.style.right = `${listCharS[count].posx}`;
    charS.style.top = `${listCharS[count].posy}`;
};

charF.addEventListener('click', () => {
    title.innerHTML = '';
    title.innerHTML = listCharF[count].tit;
    did.innerHTML = '';
    dis.innerHTML = listCharF[count].dis;
    opn.innerHTML = '';
    opn.innerHTML = listCharF[count].opn;
    ago.innerHTML = '';
    ago.innerHTML = listCharF[count].ago;
    did.innerHTML = '';
    did.innerHTML = listCharF[count].did;
    es.innerHTML = '';
    es.innerHTML = listCharF[count].es;
    rol.innerHTML = '';
    rol.innerHTML = listCharF[count].rol;
});
charS.addEventListener('click', () => {
    title.innerHTML = '';
    title.innerHTML = listCharS[count].tit;
    dis.innerHTML = '';
    dis.innerHTML = listCharS[count].dis;
    opn.innerHTML = '';
    opn.innerHTML = listCharS[count].opn;
    ago.innerHTML = '';
    ago.innerHTML = listCharS[count].ago;
    did.innerHTML = '';
    did.innerHTML = listCharS[count].did;
    es.innerHTML = '';
    es.innerHTML = listCharS[count].es;
    rol.innerHTML = '';
    rol.innerHTML = listCharS[count].rol;
});

btnRight.addEventListener('click', function() {
    if (count+1 == listRoom.length) {
        count = 0;
        img1.style.backgroundImage = `url(${listRoom[count]})`;
        charackterF();
        charackterS();
        myFunction(x)
    } else {
        count = count + 1;
        img1.style.backgroundImage = `url(${listRoom[count]})`;
        charackterF();
        charackterS();
        myFunction(x)
    }
});

btnLeft.addEventListener('click', function() {
    if (count == 0) {
        count = listRoom.length - 1;
        img1.style.backgroundImage = `url(${listRoom[count]})`;
        charackterF();
        charackterS();
        myFunction(x)
    } else {
        count = count - 1;
        img1.style.backgroundImage = `url(${listRoom[count]})`;
        charackterF();
        charackterS();
        myFunction(x)
    }
});



const modalController = ({modal, btnOpen, btnClose, time = 300}) => {
    const buttonElems = document.querySelectorAll(btnOpen);
    const modalElem = document.querySelector(modal);
  
    modalElem.style.cssText = `
      display: flex;
      visibility: hidden;
      opacity: 0;
      transition: opacity ${time}ms ease-in-out;
    `;
  
    const closeModal = event => {
      const target = event.target;
  
      if (
        target === modalElem ||
        (btnClose && target.closest(btnClose)) ||
        event.code === 'Escape'
        ) {
        
        modalElem.style.opacity = 0;
  
        setTimeout(() => {
          modalElem.style.visibility = 'hidden';
        }, time);
  
        window.removeEventListener('keydown', closeModal);
      }
    }
  
    const openModal = () => {
      modalElem.style.visibility = 'visible';
      modalElem.style.opacity = 1;
      window.addEventListener('keydown', closeModal)
    };
  
    buttonElems.forEach(btn => {
      btn.addEventListener('click', openModal);
    });
  
    modalElem.addEventListener('click', closeModal);
  };
  
modalController({
    modal: '.modal1',
    btnOpen: '.first',
    btnClose: '.modal__close',
});
modalController({
    modal: '.modal1',
    btnOpen: '.second',
    btnClose: '.modal__close',
});
  
