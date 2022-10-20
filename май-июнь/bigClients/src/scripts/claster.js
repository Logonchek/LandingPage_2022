const citi = {
    FCO: ['Балашиха', 'Белгород', 'Борисоглебск', 'Брянск', 'Видное', 'Владимир', 'Воронеж', 'Воскресенск', 'Дмитров', 'Долгопрудный', 'Домодедово', 'Дубна', 'Егорьевск', 'Елец', 'Железнодорожный', 'Жуковский', 'Зеленоград', 'Иваново', 'Калуга', 'Клин', 'Ковров', 'Коломна', 'Королев', 'Кострома', 'Красногорск', 'Курск', 'Липецк', 'Лиски', 'Лобня', 'Люберцы', 'Мичуринск', 'Москва', 'Муром', 'Мытищи', 'Наро-Фоминск', 'Нововоронеж', 'Новомосковск', 'Ногинск', 'Обнинск', 'Одинцово', 'Орел', 'Орехово-Зуево', 'Подольск', 'Пушкино', 'Раменское', 'Реутов', 'Россошь', 'Рыбинск', 'Рязань', 'Сергиев Посад', 'Серпухов', 'Смоленск', 'Солнечногорск', 'Старый Оскол', 'Ступино', 'Тамбов', 'Тверь', 'Тула', 'Фрязино', 'Химки', 'Чехов', 'Щелково', 'Электросталь', 'Ярославль'],

    Povolzie: ['Альметьевск', 'Арзамас', 'Воткинск', 'Выкса', ' Глазов', 'Дзержинск', 'Димитровград', 'Ижевск', 'Йошкар-Ола', 'Казань', 'Киров', 'Кстово', ' Набережные Челны', 'Нижнекамск', 'Нижний Новгород', 'Новокуйбышевск', 'Самара', 'Сарапул', 'Саров', 'Сызрань', ' Ульяновск', 'Чебоксары',],

    Crimea: ['Керчь', 'Крым', 'Севастополь', 'Симферополь', ' Ялта',],

    Krasnodar: ['Армавир', 'Астрахань', 'Волгоград', 'Волжский', 'Ейск', 'Ессентуки', 'Камышин', 'Кисловодск', 'Краснодар', 'Кропоткин', 'Майкоп', 'Махачкала', ' Минеральные', 'Воды', 'Невинномысск', 'Новороссийск', 'Пятигорск', 'Сочи', 'Ставрополь',],

    RostovOnDon: ['Азов', 'Астрахань', 'Батайск', 'Владикавказ', 'Волгоград', 'Волгодонск', 'Волжский', 'Грозный', 'Ейск', 'Ессентуки', 'Камышин', ' Кисловодск', 'Нальчик', 'Невинномысск', 'Новочеркасск', 'Ставрополь', 'Таганрог', ' Черкесск', 'Шахты', 'Элиста', 'Каменск-Шахтинский', 'Ростов-на-Дону', 'Минеральные Воды',],

    Vostok: ['Благовещенск', 'Владивосток', 'Комсомольск-на-Амуре', 'Находка', 'Петропавловск-Камчатский', 'Уссурийск', 'Хабаровск', 'Южно-Сахалинск', 'Якутск',],

    Tatarstan: ['Альметьевск', 'Йошкар-Ола', 'Казань', 'Набережные Челны', 'Нижнекамск',],

    Bashkortostan: ['Уфа', 'Нефтекамск', 'Октябрьский', 'Салават', 'Стерлитамак',],

    Yuzhnyy_Ural: ['Златоуст', 'Курган', 'Магнитогорск', 'Миасс', 'Озёрск', 'Тобольск', 'Челябинск'],

    Severo_Zapad: ['Апатиты', 'Архангельск  ', 'Великие Луки', 'Великий Новгород', 'Вологда', 'Всеволожск', 'Выборг', 'Гатчина', 'Калининград', 'Колпино', 'Котлас', ' Мурманск', 'Петрозаводск', 'Псков', 'Пушкин', 'Санкт-Петербург', 'Северодвинск', ' Сосновый Бор', 'Сыктывкар', 'Ухта', 'Череповец',],

    Sibir: ['Ангарск', 'Барнаул ', 'Бердск', 'Бийск', 'Братск', 'Иркутск', 'Кемерово', 'Ленинск-Кузнецкий', 'Междуреченск', ' Новокузнецк', 'Новосибирск', 'Омск', 'Прокопьевск', 'Рубцовск', 'Северск', 'Томск', 'Улан-Удэ',],

    Ermak: ['Ангарск', 'Ачинск', 'Бердск', 'Братск', 'Железногорск', 'Иркутск', 'Кызыл', 'Междуреченск', 'Нефтеюганск', 'Нижневартовск', 'Новосибирск', 'Новый Уренгой', 'Ноябрьск', 'Прокопьевск', 'Сургут', 'Улан-Удэ', 'Ханты - Мансийск', 'Чита', 'Якутск',],

    Uralo_Sibirskiy: ['Златоуст', 'Курган ', 'Магнитогорск', 'Миасс', 'Нефтекамск', 'Озёрск', 'Октябрьский', 'Омск', ' Салават', 'Стерлитамак', 'Тобольск ', 'Тюмень', 'Уфа', 'Челябинск',],

    UrFO: ['Березники', 'Березовский', 'Верхняя Пышма', 'Екатеринбург', 'Златоуст ', 'Каменск-Уральский', 'Красноуфимск', 'Нефтеюганск', 'Нижний Тагил', 'Новоуральск', 'Новый Уренгой', ' Ноябрьск', 'Озёрск', 'Первоуральск', 'Пермь', 'Сургут ', 'Тюмень', 'Челябинск ',],


    EKB: ['Берёзовский', 'Верхняя Пышма', 'Екатеринбург ', 'Каменск-Уральский', 'Красноуфимск ', 'Нефтеюганск', 'Нижний Тагил', 'Новоуральск', 'Новый Уренгой', 'Ноябрьск', 'Первоуральск', ' Сургут', 'Тобольск', 'Тюмень', 'Ханты-Мансийск',],

    priyralie: ['Березники', 'Воткинск', 'Глазов ', 'Ижевск', 'Красноуфимск ', 'Киров', 'Нефтекамск', 'Новотроицк', 'Октябрьский', 'Оренбург', 'Орск', 'Пермь', ' Салават', 'Сарапул', 'Стерлитамак', 'Уфа', 'Чайковский',],

    ural: ['Екатеринбург', 'Челябинск', 'Сургут ', 'Тюмень', 'Ханты- Мансийск ', 'Нижний тагил', 'Курган', 'Новый Уренгой', 'Магнитогорск', 'Берёзовский', 'Верхняя Пышма', ' Златоуст', 'Каменск - Уральский', 'Красноуфимск', 'Миасс', 'Нефтеюганск', 'Нижневартовск', 'Новоуральск', 'Ноябрьск', 'Озерск', 'Первоуральск', 'Тобольск'],

    ug_Krim: ['Азов', 'Армавир', 'Астрахань ', 'Батайск', 'Владикавказ ', 'Волгоград', 'Волгодонск', 'Волжский', 'Грозный', 'Ейск', 'Ессентуки', ' Каменск- Шахтинский', 'Камышин', 'Керчь', 'Кисловодск', 'Краснодар', 'Кропоткин', 'Майкоп', 'Махачкала', 'Минеральные Воды', 'Нальчик',
        'Невинномысск', 'Новороссийск', 'Новочеркасск', 'Крым', 'Пятигорск', 'Ростов - на - Дону', 'Севастополь', 'Симферополь', 'Сочи', 'Ставрополь', 'Таганрог', 'Черкесск', 'Шахты', 'Элиста', 'Ялта',],

    by: ['Брест', 'Витебск', 'Гомель ', 'Гродно', 'Минск ', 'Могилев',],


    ua: ['Винница', 'Днепропетровск', 'Донецк ', 'Житомир', 'Запорожье ', 'Ивано- Франковск', 'Киев', 'Кировоград', 'Кривой Рог', 'Луганск', 'Луцк', 'Львов', 'Николаев', 'Одесса', 'Полтава', 'Ровно', 'Сумы', 'Тернополь', 'Ужгород', 'Харьков', 'Херсон', 'Хмельницкий', 'Черкассы', 'Чернигов', 'Черновцы',],

    kz: ['Актау', 'Актобе', 'Алматы ', 'Нур- Султан(Астана)', 'Атырау ', 'Караганда', 'Костанай', 'Павлодар', 'Петропавловск', 'Уральск', 'Усть - Каменогорск', 'Шымкент',],



    regions: ['Сибиряк', 'Сибирь', 'Ермак ', 'Красноярск+', 'Южный Урал ', 'Урало-Сибирский', 'УРФО', 'Екатеринбург + ХМАО ЯНАО', 'Поволжье', 'Татарстан', 'Ростов +', 'Краснодар +', 'Татарстан', 'Крым-Макрорегион', 'Москва +', 'ЦФО', 'Северо-Запад', 'Дальний Восток'],

    krasnoyarsk: ['Абакан', 'Ангарск', 'Ачинск', 'Бердск', 'Братск', 'Железногорск,', 'Иркутск', 'Кемерово', 'Красноярск', 'Краснодар +', 'Ленинск-Кузнецкий', 'Междуреченск', 'Новокузнецк', 'Новосибирск', 'Прокопьевск', 'Северск', 'Томск', 'Улан-Удэ',],

    All: ['Абакан', 'Архангельск', 'Астрахань ', 'Барнаул', 'Белгород', 'Благовещенск', 'Брянск', 'Великий Новгород', 'Владивосток', 'Владимир', 'Волгоград', 'Вологда', 'Воронеж', 'Екатеринбург', 'Иваново', 'Ижевск', 'Казань', 'Калининград', 'Калуга', 'Кемерово', 'Киров', 'Кострома', 'Краснодар', 'Красноярск', 'Крым', 'Курган', 'Курск', 'Липецк', 'Магнитогорск', 'Миасс', 'Москва', 'Мурманск', 'Набережные Челны', 'Нижневартовск', 'Нижний Новгород', 'Новокузнецк', 'Новороссийск', 'Новосибирск', 'Омск', 'Орел', 'Пенза', 'Пермь', 'Пятигорск', 'Ростов-на-Дону', 'Рязань', 'Самара', 'Санкт-Петербург', 'Саратов', 'Смоленск', 'Сочи', 'Ставрополь', 'Сургут', 'Сыктывкар', 'Таганрог', 'Тамбов', 'Тольятти', 'Тула', 'Тюмень', 'Ульяновск', 'Уфа', 'Хабаровск', 'Чебоксары', 'Челябинск', 'Чита', 'Южно-Сахалинск', 'Якутск', 'Ярославль'],
}

let Vostok = document.querySelector('.Vostok')
let krasnoyarsk = document.querySelector('.krasnoyarsk')
let regions = document.querySelector('.regions')
let FCO = document.querySelector('.FCO')
let Povolzie = document.querySelector('.Povolzie')
let priyralie = document.querySelector('.priyralie')
let ural = document.querySelector('.ural')
let ug_Krim = document.querySelector('.ug_Krim')
let by = document.querySelector('.by')
let ua = document.querySelector('.ua')
let kz = document.querySelector('.kz')
let all = document.querySelector('.all')

let Crimea = document.querySelector('.Crimea')
let Krasnodar = document.querySelector('.Krasnodar')
let RostovOnDon = document.querySelector('.RostovOnDon')

let Tatarstan = document.querySelector('.Tatarstan')
let Yuzhnyy_Ural = document.querySelector('.Yuzhnyy_Ural')
let Severo_Zapad = document.querySelector('.Severo_Zapad')
let Sibir = document.querySelector('.Sibir')
let Uralo_Sibirskiy = document.querySelector('.Uralo_Sibirskiy')
let UrFO = document.querySelector('.UrFO')
let EKB = document.querySelector('.EKB')
let Ermak = document.querySelector('.Ermak')
let All = document.querySelector('.All')
let Bashkortostan = document.querySelector('.Bashkortostan')



onCity(citi.Vostok, Vostok)
onCity(citi.Povolzie, Povolzie)
onCity(citi.Crimea, Crimea)
onCity(citi.priyralie, priyralie)
onCity(citi.RostovOnDon, RostovOnDon)
onCity(citi.FCO, FCO)
onCity(citi.Tatarstan, Tatarstan)
onCity(citi.ug_Krim, ug_Krim)
onCity(citi.Severo_Zapad, Severo_Zapad)
onCity(citi.Sibir, Sibir)
onCity(citi.ural, ural)
onCity(citi.All, All)
onCity(citi.Uralo_Sibirskiy, Uralo_Sibirskiy)
onCity(citi.UrFO, UrFO)
onCity(citi.EKB, EKB)
onCity(citi.Ermak, Ermak)
onCity(citi.krasnoyarsk, krasnoyarsk)
onCity(citi.Bashkortostan, Bashkortostan)



function onCity (name, div) {
    if (div) {
        for (let index = 0; index < name.length; index++) {
            let city = name[index]
            city = document.createElement('p');
            city.innerHTML = name[index]
            div.appendChild(city);
        }
        if (name.length > 8 && name.length < 24) {

            div.classList.add('two')
        }
        if (name.length > 25) {

            div.classList.add('for')
        }
    }
}








