const testData = {
  initialData: {

  },
  questions: [
    {
      text: `Как вы относитесь к истории?`,
      options: [
        {
          text: `Хорошо отношусь. Интересуюсь, книжки читаю, фильмы исторические смотрю.`,
          data: {'ямб': 1, 'гекзаметр': 1}
        },
        {
          text: `Не просто люблю, а реконструирую. Кстати, ни у кого нет аутентичной монашеской рясы XVII века?`,
          data: {'силлабика': 1, 'тактовик': 1, 'пятисложник': 1}
        },
        {
          text: `Не историк, но консерватор. Не люблю новомодное.`,
          data: {'силлабо-тоника': 1}
        },
        {
          text: `История учит лишь тому, что история никого ничему не учит. Предпочитаю жить сегодняшним днём.`,
          data: {'новый': 1}
        }
      ]
    },
    {
      text: `Нравится учить других?`,
      options: [
        {
          text: `Да, из меня получился бы отличный учитель младших классов. Ну, или воспитатель в детском саду.`,
          data: {'хорей': 1}
        },
        {
          text: `Люблю, но стараюсь свои поучения облекать в форму иносказания.`,
          data: {'ямб': 1}
        },
        {
          text: `Стараюсь передать потомкам народную мудрость.`,
          data: {'раёк': 1}
        },
        {
          text: `Нет, спасибо, это не моё.`,
          data: {}
        },
        {
          text: `We don't need no education!`,
          data: {'верлибр': 1}
        }
      ]
    },
    {
      text: `А учителя в школе к вам как относились?`,
      options: [
        {
          text: `Отлично. Ставили всем в пример.`,
          data: {'силлабо-тоника': 1}
        },
        {
          text: `Не могли не признавать мой талант, но при этом относились настороженно.`,
          data: {'тоника': 1}
        },
        {
          text: `Часто находили у меня ошибки там, где их не было.`,
          data: {'дольник': 1, 'логаэд': 1}
        },
        {
          text: `Большую часть времени игнорировали моё существование.`,
          data: {'редкий': 1, 'верлибр': 1, 'силлабика': 1, 'тактовик': 1, 'раёк': 1}
        }
      ]
    },
    {
      text: `Любите Россию?`,
      options: [
        {
          text: `Не ведаю, что есть Россия, но за Русь лягу костьми.`,
          data: {'тактовик': 1, 'силлабика': 1}
        },
        {
          text: `Могуча и славна Российская Империя.`,
          data: {'ямб': 0.5, 'силлабо-тоника': 1}
        },
        {
          text: `Тоскую по сгинувшей русской деревне.`,
          data: {'хорей': 1, 'пятисложник': 1, 'раёк': 0.5}
        },
        {
          text: `Смотрите, завидуйте, я гражданин РСФСР!`,
          data: {'тоника': 1, 'тактовик': 1}
        },
        {
          text: `Как можно было допустить, чтобы такую страну загубили большевики?`,
          data: {'дольник': 1, 'логаэд': 1}
        },
        {
          text: `Национальные государства — пережиток прошлого.`,
          data: {'верлибр': 1}
        }
      ]
    },
    {
      text: `А из других стран какие вам более симпатичны?`,
      options: [
        {
          text: `Англия.`,
          data: {'силлабо-тоника': 1}
        },
        {
          text: `Франция.`,
          data: {'силлабика': 1}
        },
        {
          text: `Греция.`,
          data: {'гекзаметр': 1, 'антиспаст': 2, 'брахиколон': 0.5}
        },
        {
          text: `Я космополит по натуре.`,
          data: {'верлибр': 1}
        }
      ]
    },
    {
      text: `Бог любит троицу?`,
      options: [
        {
          text: `Безусловно. Кто сомневается, тот еретик и должен быть сожжён.`,
          data: {'дактиль': 2, 'амфибрахий': 2, 'анапест': 2}
        },
        {
          text: `Вообще да, но иногда нет.`,
          data: {'дольник': 1, 'тактовик': 1, 'логаэд': 1, 'гекзаметр': 1}
        },
        {
          text: `Важнее двойная природа Христа. Не зря старообрядцы крестятся двумя перстами.`,
          data: {'хорей': 1, 'ямб': 1}
        },
        {
          text: `Поддерживаю монофизитов: природа Христа едина.`,
          data: {'брахиколон': 2}
        },
        {
          text: `Важнее, что в имени Яхве четыре буквы, отчего его иногда зовут Тетраграмматон.`,
          data: {'антиспаст': 2}
        },
        {
          text: `(Молча почёсываю бороду пятернёй)`,
          data: {'пятисложник': 2}
        }
      ]
    },
    {
      text: `Десерт лучше съесть до обеда или после?`,
      options: [
        {
          text: `Жизнь коротка, начинайте с десерта.`,
          data: {'хорей': 1, 'дактиль': 2}
        },
        {
          text: `Сладкое лучше оставить на сладкое`,
          data: {'ямб': 1, 'анапест': 1}
        },
        {
          text: `Лучше где-нибудь посередине — например, между супом и салатом.`,
          data: {'амфибрахий': 2, 'антиспаст': 2, 'пятисложник': 1}
        },
        {
          text: `Главное — кушать десерт регулярно.`,
          data: {'тоника': 1, 'дольник': 1, 'тактовик': 1, 'логаэд': 1}
        },
        {
          text: `Зачем вообще что-то кроме десерта?`,
          data: {'брахиколон': 2}
        },
        {
          text: `Не люблю десерт.`,
          data: {'раёк': 1, 'силлабика': 1, 'верлибр': 1}
        }
      ]
    },
    {
      text: `Какой набор образов ближе? Отвечайте не задумываясь.`,
      options: [
        {
          text: `Бледный юноша и одинокая тропинка в лесу.`,
          data: {'дактиль': 1}
        },
        {
          text: `Лошадка, орёл, жираф — в общем, всякая живность.`,
          data: {'амфибрахий': 1}
        },
        {
          text: `Девушка, сладко спящая на заре. Хотя если понадобится — она сама вас разбудит.`,
          data: {'анапест': 1,}
        },
        {
          text: `Да как-то ничего не откликнулось`,
          data: {}
        }
      ]
    },
    {
      text: `А вот ещё набор образов. Тут что ближе?`,
      options: [
        {
          text: `Заветные свечи и девушка в церковном хоре.`,
          data: {'дольник': 1}
        },
        {
          text: `Берег, а на нём — мёртвая девочка в голубом платье. Ну, или старик с неводом.`,
          data: {'тактовик': 1}
        },
        {
          text: `Верный письменный стол, за ним — я и тот парень.`,
          data: {'логаэд': 1}
        },
        {
          text: `Что за бред вообще? Отказываюсь выбирать из этого.`,
          data: {}
        }
      ]
    },
    {
      text: `Любите песни?`,
      options: [
        {
          text: `Нам песня строить и жить помогает. Не представляю, как без них обходиться.`,
          data: {'логаэд': 1, 'пятисложник': 1}
        },
        {
          text: `Отношусь хорошо, но без фанатизма.`,
          data: {'силлабо-тоника': 1}
        },
        {
          text: `Песни люблю не очень, а вот рэп — другое дело.`,
          data: {'тоника': 1, 'тактовик': 1}
        },
        {
          text: `Медведь оттоптал оба уха, но вот кричалки в детском лагере мне были очень по душе.`,
          data: {'силлабика': 1}
        }
      ]
    },
  ],
  results: {
    'хорей': {
      header: `Вы — хорей`,
      text: `
<i>Не жалею, не зову, не плачу,<br>
Все пройдет, как с белых яблонь дым.<br>
Увяданья золотом охваченный,<br>
Я не буду больше молодым.</i><br>
<br>
Второй по распространённости силлабо-тонический размер, со времён Пушкина стойко ассоциирующийся с чем-то природным или народным.<br>
Впоследствие бодрый ритм хорея был приспособлен для детских стишков и считалочек.
`
    },
    'ямб': {
      header: `Вы - ямб`,
      text: `
<i>Я памятник себе воздвиг нерукотворный,<br>
К нему не зарастет народная тропа,<br>
Вознесся выше он главою непокорной<br>
Александрийского столпа.</i><br>
<br>
Главный стихотворный размер русской поэзии — до такой степени, что между Тредиаковским и Фетом другими размерами почти и не пользовались.<br>
Четырёх- и шестистопный ямб неизбежно ассоциируется с одами, поэмами и XIX веком. А вольный ямб — с баснями дедушки Крылова.
      `
    },
    'дактиль': {
      header: `Вы — дактиль`,
      text: `
<i>Юноша бледный со взором горящим,<br>
Ныне даю я тебе три завета:<br>
Первый прими: не живи настоящим,<br>
Только грядущее - область поэта.</i><br>
<br>
Трёхсложные размеры были освоены русской поэзией позднее двухсложных, и так и не приблизились к ним по популярности. У них схожая эмоциональная окраска и область применения.<br>
Среди трёхсложных размеров дактиль — с одной стороны, наиболее энергичный, благодаря ударному началу стопы. С другой стороны — самый меланхоличный, из-за нисходящей интонации.<br>
Какая тенденция возобладает — зависит от конкретного стихотворения.
      `
    },
    'амфибрахий': {
      header: `Вы — амфибрахий`,
      text: `
<i>Однажды, в студеную зимнюю пору,<br>
Я из лесу вышел; был сильный мороз.<br>
Гляжу, поднимается медленно в гору<br>
Лошадка, везущая хворосту воз.</i><br>
<br>
Трёхсложные размеры были освоены русской поэзией позднее двухсложных, и так и не приблизились к ним по популярности. У них схожая эмоциональная окраска и область применения.<br>
Среди трёхсложных размеров амфибрахий — самый спокойный, уравновешенный, повествовательный. Он почти всегда рассказывает о чём-то — о лермонтовских пальмах, о некрасовской лошадке, о гумилёвском жирафе…
      `
    },
    'анапест': {
      header: `Вы — анапест`,
      text: `
<i>Ты меня на рассвете разбудишь,<br>
проводить необутая выйдешь.<br>
Ты меня никогда не забудешь.<br>
Ты меня никогда не увидишь.</i><br>
<br>
Трёхсложные размеры были освоены русской поэзией позднее двухсложных, и так и не приблизились к ним по популярности. У них схожая эмоциональная окраска и область применения.<br>
Среди трёхсложных размеров анапест — самый лиричный. Будь то Фет, Бальмонт или даже Вознесенский — если в руках оказывается анапест, поэт делает из него нечто тонкое, иногда томное, а порой пронзительное.
      `
    },
    'дольник': {
      header: `Вы — дольник`,
      text: `
<i>Я зажгла заветные свечи<br>
И вдвоем с ко мне не пришедшим<br>
Сорок первый встречаю год,<br>
Но Господняя сила с нами,<br>
В хрустале утонуло пламя<br>
И вино, как отрава жжет…</i><br>
<br>
Теоретики-стиховеды так и не пришли к единому мнению, что такое дольник и стоит ли вообще использовать это понятие. Согласно Гаспарову, дольник — это размер, где метрические ударения разделены одним либо двумя безударными слогами.<br>
Иначе говоря, дольник можно рассматривать как трёхсложный размер, в котором некоторые безударные слоги пропущены.<br>
Находясь на границе силлабо-тоники и чистой тоники, дольник более разнообразен и эмоционален, чем первая, но более упорядочен и ритмичен, нежели вторая.
      `
    },
    'тактовик': {
      header: `Вы — тактовик`,
      text: `
<i>У берега зелёного на малой могиле<br>
В праздник Благовещенья пели псалом.<br>
Белые священники с улыбкой хоронили<br>
Маленькую девочку в платье голубом.</i><br>
<br>
Старомодный и одновременно новаторский размер, тактовик — это ещё более расшатанный дольник. Промежутки между метрическими ударениями могут быть от 1 до 3 безударных слогов.<br>
Тактовик использовался в русской народной поэзии, затем — в стилизациях под неё (вспомните пушкинских рыбака и рыбку). Новую жизнь и теоретическое обоснование он получил у советских конструктивистов.
      `
    },
    'тоника': {
      header: `Вы — чисто тонический стих`,
      text: `
<i>И не встать ни раком, ни так словам,<br>
как назад в осиновый строй дровам.<br>
И глазами по наволочке лицо<br>
растекается, как по сковороде яйцо.</i><br>
<br>
Размер, где количество безударных слогов вообще не имеет значения — важно только одинаковое количество ударений в строках, да и то не всегда.<br>
Впрочем, примеры, где безударные промежутки более 4-х слогов, вспомнить нелегко. Поэтому чаще всего акцентный стих укладывается в определение тактовика.
      `
    },
    'раёк': {
      header: `Вы — раёшный стих (раёк)`,
      text: `
<i>Мы давно уже не молодеем<br>
в полную противоположность нашим идеям.<br>
Если бы было наоборот,<br>
у нас бы не было морщин и бород</i><br>
<br>
«Рифмованная проза», размер, отличающийся от верлибра только наличием рифмы. Берёт начало в синтаксическом параллелизме древнегреческой риторике; в таком виде сохранился в пословицах («красна изба не углами, а пирогами»). Затем использовался в народной поэзии наряду с тактовиком. Позже — в стилизациях.
Со второй половины XX века начинаются попытки использовать раёк независимо от его народных корней. Как, например, в процитированном посвящении В.Уфлянда Л.Лосеву.
      `
    },
    'верлибр': {
      header: `Вы — верлибр`,
      text: `
<i>Теперь моя вагина — это норка<br>
для твоего коричневого зверька с большой красной головкой.<br>
куда он иногда проскальзывает, чтобы набраться сил. Это ямка<br>
для твоего нежного языка, для твоих тонких крепких пальцев, похожих<br>
на письменные принадлежности из прошлого века.</i><br>
<br>
Верлибр — это стихотворный размер, характеризующийся отсутствием размера. В XX веке верлибр стремительно распространился и стал доминирующим размером в большей части мира; это явление иногда сравнивают с чумой.<br>
Кто-то считает, что верлибр — наступившее будущее поэзии. Другие — что это её тупик. Выбирайте сторону сами.
      `
    },
    'силлабика': {
      header: `Вы — чисто силлабический стих`,
      text: `
<i>Уме недозрелый, плод недолгой науки!<br>
Покойся, не понуждай к перу мои руки:<br>
Не писав летящи дни века проводити<br>
Можно, и славу достать, хоть творцом не слыти.</i><br>
<br>
Принцип стихосложения, игнорирующий ударения и ориентирующийся только на количество слогов и на цезуру (обязательный словораздел). Если верить Гаспарову, силлабический восьмисложник — прародитель всей западной поэзии.<br>
Силлабика имела распространение в России, но так давно, что этого никто не помнит. А вот в Польше и во Франции силлабика была популярна, пока её не потеснил верлибр.
      `
    },
    'логаэд': {
      header: `Вы — логаэд`,
      text: `
<i>Мой письменный верный стол!<br>
Спасибо за то, что шел<br>
Со мною по всем путям.<br>
Меня охранял — как шрам.</i><br>
<br>
Размер, где чередование ударений нерегулярно внутри строки, однако повторяется из строки в строку. Достаточно редкое явление в чистой поэзии, но в текстах песен встречается намного чаще.<br>
Некоторые теоретики не признают термин «логаэд», говоря вместо этого что-то вроде «цезурное наращение» или «паузированный анапест». Но роза пахнет розой, хоть розой назови её, хоть нет.
      `
    },
    'гекзаметр': {
      header: `Вы — гекзаметр`,
      text: `
<i>Гнев, богиня, воспой Ахиллеса, Пелеева сына,<br>
Грозный, который ахеянам тысячи бедствий соделал:<br>
Многие души могучие славных героев низринул<br>
В мрачный Аид и самих распростер их в корысть плотоядным<br>
5 Птицам окрестным и псам (совершалася Зевсова воля),<br>
С оного дня, как, воздвигшие спор, воспылали враждою<br>
Пастырь народов Атрид и герой Ахиллес благородный.</i><br>
<br>
Эпический размер древнегреческой поэзии в русской адаптации. Технически — шестииктный дольник, но по историческим причинам имеет отдельное название и сферу применения.<br>
Неразрывно ассоциируется с Гомером, поэтому писать на нём можно лишь подражания или пародии на «Илиаду» с «Одиссеей». Ю.Верховский пытался писать гекзаметром про Великую Отечественную Войну. Звучало… странно.
      `
    },
    'брахиколон': {
      header: `Вы — брахиколон`,
      text: `
<i>Бей<br>
тех,<br>
чей<br>
смех!<br>
Вей,<br>
рей,<br>
сей<br>
снег!</i><br>
<br>
Силлабо-тонический размер, в котором каждый слог ударный. Встречается в отдельных отрывках и экспериментах. В общем, чисто мастерство показать.
      `
    },
    'пятисложник': {
      header: `Вы — пятисложник (иногда именуемый кольцовским)`,
      text: `
<i>Раззудись, плечо!<br>
Размахнись, рука!<br>
Зажужжи, коса,<br>
Как пчелиный рой!</i><br>
<br>
Силлабо-тонический размер с пятисложной стопой, где третий слог обязательно ударный и может присутствовать ещё одно ударение.<br>
Произошёл из народного силлабического 10-сложника (5 + 5). Окончательную строгость обрёл уже у профессиональных поэтов, которые использовали его в первую очередь для имитации народной песни.
      `
    },
    'антиспаст': {
      header: `Вы — антиспаст`,
      text: `
<i>Верста́ сле́ва, верста́ спра́ва,<br>
Верста́ в бро́ви, верста́ в ты́л.<br>
Тому́ пе́сня, тому́ сла́ва,<br>
Кто дорогу породил.</i><br>
<br>

Четырёхсложный силлабо-тонический размер, где второй и третий слог стопы — ударные. Встречается ещё реже, чем брахиколон.<br>
Если видите антиспаст — значит, автор выпендривается.
      `
    }
  },
  chooseResult: (answerData) => {
    const score = processCompoundScore(answerData, compound);
    console.log(score);
    return Object.entries(score).sort((a, b) => (b[1] || 0) - (a[1] || 0))[0][0];
  }
}

const compound = {
  'новый': {
    'гекзаметр': -1,
    'пятисложник': -0.8,
    'дольник': 0.2,
    'верлибр': 1
  },
  'силлабо-тоника': {
    'хорей': 1,
    'ямб': 1,
    'дактиль': 1,
    'амфибрахий': 1,
    'анапест': 1
  },
  'редкий': {
    'брахиколон': 1,
    'антиспаст': 1,
    'пятисложник': 0.8,
    'гекзаметр': 0.8,
    'логаэд': 0.6,
    'ямб': -0.2
  }
}

const processCompoundScore = (answerData, compound) => {
  for(const [compoundName, compoundEntries] of Object.entries(compound)){
    for(const [baseName, baseValue] of Object.entries(compoundEntries)){
      answerData[baseName] = (answerData[baseName] || 0) + baseValue * (answerData[compoundName] || 0);
    } 
    delete answerData[compoundName];
  }
  return answerData;
}