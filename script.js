/* =========================================================
   WEDDING GIFT
   LITA & WILLIAM
   ========================================================= */


/* =========================================================
   НАСТРОЙКИ
   ========================================================= */


/*
   Дата начала медового месяца.

   Формат:
   YYYY-MM-DD
*/

const honeymoonStartDate = "2026-07-01";


/*
   Количество основных карточек.
*/

const TOTAL_CARDS = 21;


/*
   =========================================================
   ОСНОВНАЯ КОЛОДА
   =========================================================

   Здесь вы с Джулс можете менять содержимое
   основных карточек.

   day      — номер дня
   title    — заголовок
   content  — текст задания
*/

const cardsContent = [

    {
        day: 1,
        title: "Галлеоны и быт",
        content: "У вас появился лишний миллион галлеонов.<br> Что вы первым делом сделаете с ним — вместе и отдельно?"
    },

    {
    day: 2,
        title: "Эмоции и близость",
    content: "Назови одну вещь, которую партнёр делает и, возможно, не замечает, насколько сильно она тебе важна."
},

{
    day: 3,
        title: "Кризисы и ссоры",
    content: "Что для тебя хуже: когда партнёр злится, когда замолкает или когда делает вид, что ничего не произошло?"
},

{
    day: 4,
        title: "Семья и окружение",
    content: "Ваш ребёнок однажды приходит домой и говорит, что не хочет идти в Хогвартс. Как вы отреагируете?"
},

{
    day: 5,
        title: "Мечты и будущее",
    content: "Какую мечту партнёра ты хотел(-а) бы помочь ему осуществить?"
},

{
    day: 6,
        title: "Что бы ты <br> сделал(-а)?",
    content: "Вы случайно узнали, что партнёр наложил на вас защитное заклинание, не предупредив. Для вас это забота или нарушение границ?"
},

{
    day: 7,
        title: "Прошлое и уязвимости",
    content: "Есть ли опыт из прошлого, который до сих пор влияет на то, как ты строишь отношения?"
},

{
    day: 8,
        title: "Галлеоны и быт",
    content: "Партнёр предлагает отказаться от семейной традиции, которая много значит для ваших родственников, но вам обоим больше не подходит. Стоит ли сохранять традиции ради семьи?"
},

{
    day: 9,
        title: "Эмоции и близость",
    content: "Если бы вам пришлось выбрать только одно воспоминание, которое вы сможете сохранить в омуте памяти навсегда, какое бы вы выбрали?"
},

{
    day: 10,
        title: "Кризисы и ссоры",
    content: "Что, по-вашему, отличает здоровый конфликт от отношений, которые действительно несовместимы?"
},

{
    day: 11,
        title: "Семья и окружение",
    content: "Что для тебя значит «быть семьёй» — только про вас двоих или про более широкий круг людей?"
},

{
    day: 12,
        title: "Мечты и будущее",
    content: "Если бы вы могли написать одну главу о вашей совместной жизни, которая ещё не случилась, о чём была бы эта глава?"
},

{
    day: 13,
        title: "Что бы ты <br> сделал(-а)?",
    content: "Вы можете навсегда избавиться от одного своего страха, но вместе с ним исчезнет и связанное с ним воспоминание. Вы бы согласились?"
},

{
    day: 14,
        title: "Эмоции и близость",
    content: "Лита, ты заботишься о целом факультете. А что помогает тебе вспомнить, что иногда заботиться нужно и о себе?"
},

{
    day: 15,
        title: "Кризисы и ссоры",
    content: "Есть ли у тебя правило, которое ты хотел(-а) бы установить для ваших ссор?"
},

{
    day: 16,
        title: "Семья и окружение",
    content: "Ваш ребёнок оказался совсем не на том факультете, который вы для него представляли. Что вы чувствуете и что скажете ему?"
},

{
    day: 17,
        title: "Прошлое и уязвимости",
    content: "Что тебе хотелось бы, чтобы партнёр понимал о твоих слабых местах?"
},

{
    day: 18,
        title: "Что бы ты <br> сделал(-а)?",
    content: "Партнёр просит вас помочь ему справиться с проблемой, в которой вы сами не разбираетесь. Что вы будете делать: искать решение, искать специалиста или просто быть рядом?"
},

{
    day: 19,
        title: "Мечты и будущее",
    content: "Если через десять лет ваша жизнь будет совсем не такой, как вы сейчас представляете, что вы всё равно хотели бы сохранить?"
},

{
    day: 20,
        title: "Кризисы и ссоры",
    content: "Какие страхи, привычки или представления о себе вы бы не хотели принести в ваши отношения из прошлой жизни?"
},

{
    day: 21,
        title: "Что бы ты <br> сделал(-а)?",
    content: "Вам предлагают исполнить одно совместное желание, но оно изменит жизнь только одного из вас. Как вы решите, кому достанется возможность?"
}

];



/* =========================================================
   КОЛОДА "ОСТЫТЬ"
   =========================================================

   Эти карточки не зависят от даты.

   Они доступны всегда.

   При нажатии на стопку одна из них
   выбирается случайным образом.
*/

const coolDownCards = [

    {
        title: "Чашка благодарности",
        content:
            "Заварите друг другу чай. Каждый должен назвать одну вещь, за которую благодарен другому сегодня."
    },

    {
        title: "Потанцуем?",
        content:
            "Включите музыку.<br>Пригласите партнёра на танец прямо там, где вы находитесь.<br>Танцевать обязательно. Уметь — нет."
    },

    {
        title: "Первый раз",
        content:
        "Представьте, что вы только что познакомились.<br>У вас есть одна минута, чтобы произвести впечатление друг на друга."
    },

    {
        title: "Монетка",
        content:
        "Каждый загадывает любое безобидное желание.<br>Затем подбросьте монетку.<br>Орёл — исполняется желание первого.<br>Решка — второго."
    },

    {
        title: "Делу время, а потехехехе",
        content:
        "В течение следующей минуты запрещено говорить серьёзно.<br>Кто первый сорвётся — проиграл."
    },

    {
        title: "Я — звезда",
        content:
        "Устроим фотосессию мечты. Я фотограф, ты модель. (Нейросети в помощь)"
    }

    ];




/* =========================================================
   ДАТЫ
   ========================================================= */


/*
   Превращаем YYYY-MM-DD
   в локальную дату пользователя.
*/

function parseDate(dateString) {

    const [year, month, day] =
        dateString
            .split("-")
            .map(Number);

    return new Date(
        year,
        month - 1,
        day
    );
}


/*
   Получаем сегодняшнюю дату
   без времени.
*/

function getToday() {

    const now = new Date();

    return new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
    );
}


/*
   Получаем дату открытия
   конкретной карточки.
*/

function getUnlockDate(dayNumber) {

    const start =
        parseDate(honeymoonStartDate);

    const unlockDate =
        new Date(start);

    unlockDate.setDate(
        start.getDate()
        + (dayNumber - 1)
    );

    return unlockDate;
}


/*
   Проверяем,
   доступна ли карточка сегодня.
*/

function isCardUnlocked(dayNumber) {

    const today =
        getToday();

    const unlockDate =
        getUnlockDate(dayNumber);

    return today >= unlockDate;
}


/*
   Форматирование даты.
*/

function formatDate(date) {

    return date.toLocaleDateString(
        "en-US",
        {
            month: "long",
            day: "numeric"
        }
    );
}


/* =========================================================
   LOCAL STORAGE
   ========================================================= */


/*
   Ключ, под которым храним открытые карточки.
*/

const OPENED_CARDS_KEY =
    "lita-william-opened-cards";


/*
   Получить список уже открытых карточек.
*/

function getOpenedCards() {

    try {

        const saved =
            localStorage.getItem(
                OPENED_CARDS_KEY
            );

        if (!saved) {
            return [];
        }

        return JSON.parse(saved);

    } catch (error) {

        return [];
    }
}


/*
   Сохранить карточку как открытую.
*/

function saveOpenedCard(dayNumber) {

    const openedCards =
        getOpenedCards();

    if (!openedCards.includes(dayNumber)) {

        openedCards.push(dayNumber);

        localStorage.setItem(
            OPENED_CARDS_KEY,
            JSON.stringify(openedCards)
        );
    }
}


/* =========================================================
   СОЗДАНИЕ ОСНОВНЫХ КАРТОЧЕК
   ========================================================= */

function createCards() {

    const container =
        document.getElementById(
            "cardsContainer"
        );


    /*
       Если мы на index.html,
       контейнера нет.
    */

    if (!container) {
        return;
    }


    let unlockedCount = 0;


    cardsContent.forEach(cardData => {

        const unlocked =
            isCardUnlocked(
                cardData.day
            );


        if (unlocked) {
            unlockedCount++;
        }


        /*
           -------------------------
           CARD
           -------------------------
        */

        const card =
            document.createElement(
                "div"
            );

        card.className =
            "card";


        if (!unlocked) {

            card.classList.add(
                "locked"
            );
        }


        /*
           -------------------------
           FRONT
           -------------------------
        */

        const front =
            document.createElement(
                "div"
            );

        front.className =
            "card-front";


        front.innerHTML = `

            <div class="day-label">
                День ${cardData.day}
            </div>


            ${
            unlocked

                ?

                `
                    <div class="lock">
                        ♡
                    </div>
                `

                :

                `
                    <div class="lock">
                        🔒
                    </div>

                    <div class="unlock-date">
                        Opens ${formatDate(
                    getUnlockDate(
                        cardData.day
                    )
                )}
                    </div>
                `
        }

        `;


        /*
           -------------------------
           BACK
           -------------------------
        */

        const back =
            document.createElement(
                "div"
            );

        back.className =
            "card-back";


        back.innerHTML = `

            <div class="back-day">
                День ${cardData.day}
            </div>

            <div>

                <div class="card-title">
                    ${cardData.title}
                </div>

                <div class="card-content">
                    ${cardData.content}
                </div>

            </div>

            <div class="card-symbol">
                ♡
            </div>

        `;


        /*
           -------------------------
           INNER
           -------------------------
        */

        const inner =
            document.createElement(
                "div"
            );

        inner.className =
            "card-inner";


        inner.appendChild(front);
        inner.appendChild(back);


        card.appendChild(inner);


        /*
           -------------------------
           CLICK
           -------------------------
        */

        if (unlocked) {

            card.addEventListener(
                "click",
                () => {

                    card.classList.toggle(
                        "opened"
                    );


                    /*
                       Сохраняем факт,
                       что карточка была открыта.
                    */

                    saveOpenedCard(
                        cardData.day
                    );

                }
            );
        }


        /*
           -------------------------
           ADD TO GRID
           -------------------------
        */

        container.appendChild(card);

    });


    /*
       Обновляем прогресс.
    */

    updateProgress(
        unlockedCount
    );
}


/* =========================================================
   ПРОГРЕСС
   ========================================================= */

function updateProgress(
    unlockedCount
) {

    const countElement =
        document.getElementById(
            "openedCount"
        );

    const progressElement =
        document.getElementById(
            "progressFill"
        );


    if (countElement) {

        countElement.textContent =
            unlockedCount;
    }


    if (progressElement) {

        const progress =
            (
                unlockedCount
                /
                TOTAL_CARDS
            ) * 100;

        progressElement.style.width =
            `${progress}%`;
    }
}


/* =========================================================
   КОЛОДА "ОСТЫТЬ"
   ========================================================= */


/*
   Получаем случайную карточку.

   Дополнительно стараемся не показывать
   два раза подряд одну и ту же карту.
*/

let lastCoolDownIndex = -1;


function getRandomCoolDownCard() {

    if (
        coolDownCards.length === 0
    ) {
        return null;
    }


    if (
        coolDownCards.length === 1
    ) {
        return coolDownCards[0];
    }


    let randomIndex;


    do {

        randomIndex =
            Math.floor(
                Math.random()
                *
                coolDownCards.length
            );

    } while (
        randomIndex ===
        lastCoolDownIndex
        );


    lastCoolDownIndex =
        randomIndex;


    return coolDownCards[
        randomIndex
        ];
}


/*
   Открываем модальное окно
   с выбранной карточкой.
*/

function openCoolDownCard() {

    const overlay =
        document.getElementById(
            "cooldownOverlay"
        );

    const title =
        document.getElementById(
            "cooldownModalTitle"
        );

    const content =
        document.getElementById(
            "cooldownModalContent"
        );

    const deck =
        document.getElementById(
            "cooldownDeck"
        );


    if (
        !overlay
        ||
        !title
        ||
        !content
        ||
        !deck
    ) {
        return;
    }


    const card =
        getRandomCoolDownCard();


    if (!card) {
        return;
    }


    /*
       Запускаем анимацию стопки.
    */

    deck.classList.remove(
        "drawing"
    );


    /*
       Небольшой reflow позволяет
       повторно запустить animation.
    */

    void deck.offsetWidth;


    deck.classList.add(
        "drawing"
    );


    /*
       Небольшая задержка,
       чтобы сначала было видно,
       как карта вытягивается.
    */

    setTimeout(() => {

        title.innerHTML =
            card.title;

        content.innerHTML =
            card.content;


        overlay.classList.add(
            "visible"
        );

        overlay.setAttribute(
            "aria-hidden",
            "false"
        );

    }, 350);
}


/*
   Закрываем карточку.
*/

function closeCoolDownCard() {

    const overlay =
        document.getElementById(
            "cooldownOverlay"
        );


    if (!overlay) {
        return;
    }


    overlay.classList.remove(
        "visible"
    );

    overlay.setAttribute(
        "aria-hidden",
        "true"
    );
}


/* =========================================================
   КОРОБОЧКА НА ГЛАВНОЙ
   ========================================================= */

function openGift() {

    /*
       Небольшая задержка
       делает переход приятнее.
    */

    document.body.style.transition =
        "opacity .5s ease";

    document.body.style.opacity =
        "0";


    setTimeout(() => {

        window.location.href =
            "cards.html";

    }, 500);
}

/* =========================================================
   INSTRUCTION PANEL
   ========================================================= */

function initInstruction() {

    const toggle =
        document.getElementById("instructionToggle");

    const content =
        document.getElementById("instructionContent");


    if (!toggle || !content) {
        return;
    }


    toggle.addEventListener(
        "click",
        () => {

            const isOpen =
                toggle.classList.contains("open");


            /* ---------- Toggle classes ---------- */

            toggle.classList.toggle(
                "open",
                !isOpen
            );

            content.classList.toggle(
                "open",
                !isOpen
            );


            /* ---------- Accessibility ---------- */

            toggle.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );

            content.setAttribute(
                "aria-hidden",
                String(isOpen)
            );

        }
    );

}

/* =========================================================
   ЗАПУСК
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /*
           Создаём основные карточки.
        */

        createCards();
        initInstruction();

        /*
           -------------------------
           COOL DOWN DECK
           -------------------------
        */

        const cooldownDeck =
            document.getElementById(
                "cooldownDeck"
            );

        if (cooldownDeck) {

            cooldownDeck.addEventListener(
                "click",
                openCoolDownCard
            );
        }


        /*
           -------------------------
           CLOSE BUTTON
           -------------------------
        */

        const cooldownClose =
            document.getElementById(
                "cooldownClose"
            );

        if (cooldownClose) {

            cooldownClose.addEventListener(
                "click",
                closeCoolDownCard
            );
        }


        /*
           -------------------------
           CLICK OUTSIDE MODAL
           -------------------------
        */

        const cooldownOverlay =
            document.getElementById(
                "cooldownOverlay"
            );

        if (cooldownOverlay) {

            cooldownOverlay.addEventListener(
                "click",
                event => {

                    if (
                        event.target ===
                        cooldownOverlay
                    ) {

                        closeCoolDownCard();
                    }

                }
            );
        }


        /*
           -------------------------
           ESCAPE
           -------------------------
        */

        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Escape"
                ) {

                    closeCoolDownCard();
                }

            }
        );

    }
);