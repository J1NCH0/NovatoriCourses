const subjects = [{
    name: 'მარკაპი - HTML/CSS',
    hasVideos: true,
    videos: [
        {
            name: 'როგორ წავიკითხოთ და ვწეროთ HTML',
            url: 'https://www.youtube.com/watch?v=yLt8XkY8Ar8'
        },
        {
            name: 'დოკუმენტის ანატომია',
            url: 'youtube.com/'
        },
        {
            name: 'Ტექსტური ინფორმაცია HTML-ში',
            url: 'youtube.com/'
        },
        {
            name: 'Ლინკები, URL-ები და Path-ები',
            url: 'youtube.com/'
        },
        {
            name: 'Embed: ფოტოები, აუდიო-ვიდეო, Iframe',
            url: 'youtube.com/'
        },
        {
            name: 'Ცხრილები (Table)',
            url: 'youtube.com/'
        },
        {
            name: 'ფორმები',
            url: 'youtube.com/'
        },
        {
            name: 'Სემანტიკური ტეგები და HTML-ის ვალიდაცია',
            url: 'youtube.com/'
        },
        {
            name: 'Როგორ წავიკითხოთ და ვწეროთ CSS',
            url: 'youtube.com/'
        },
        {
            name: 'Cascade, specificity, inheritance',
            url: 'youtube.com/'
        },
        {
            name: 'Სელექტორები, ფსევდო კლასები და ელემენტები, კომბინატორები',
            url: 'youtube.com/'
        },
        {
            name: 'Box მოდელი',
            url: 'youtube.com/'
        },
        {
            name: 'Background',
            url: 'youtube.com/'
        },
        {
            name: 'Განზომილებები, ზომები და სხვა მნიშვნელობები',
            url: 'youtube.com/'
        },
        {
            name: 'CSS კოდის ორგანიზება',
            url: 'youtube.com/'
        },
        {
            name: 'Ფონტები, სიები და ლინკები',
            url: 'youtube.com/'
        },
        {
            name: 'Normal flow, position, float',
            url: 'youtube.com/'
        },
        {
            name: 'Flexbox',
            url: 'youtube.com/'
        },
        {
            name: 'რესპონსიული დიზაინი, Media query',
            url: 'youtube.com/'
        },
        {
            name: 'Ანიმაციები',
            url: 'youtube.com/'
        },

    ],
},
    {
        name: 'პროგრამირება - Javascript',
        hasVideos: true,
        videos: [
            {
                name: 'Შესავალი პროგრამირებაში',
                url: 'youtube.com/'
            },
            {
                name: 'ცვლადები, მათემატიკური ოპერეატორები',
                url: 'youtube.com/'
            },
            {
                name: 'ლოგიკური და შედარებითი ოპერატორები',
                url: 'youtube.com/'
            },
            {
                name: 'Expressions & Operator precedence',
                url: 'youtube.com/'
            },
            {
                name: 'Conditional statements',
                url: 'youtube.com/'
            },
            {
                name: 'Შესავალი იტერაციებში',
                url: 'youtube.com/'
            },
            {
                name: 'Მასივები',
                url: 'youtube.com/'
            },
            {
                name: 'Მასივის იტერაცია',
                url: 'youtube.com/'
            },
            {
                name: 'ობიექტი',
                url: 'youtube.com/'
            },
            {
                name: 'Შესავალი Typescript-ში',
                url: 'youtube.com/'
            },
            {
                name: 'ფუნქცია',
                url: 'youtube.com/'
            },
            {
                name: 'ფარგლები (Scope), Hoisting',
                url: 'youtube.com/'
            },
            {
                name: 'DOM და Window API',
                url: 'youtube.com/'
            },
            {
                name: 'ობიექტზე ორიენტირებული პროგრამირება (OOP)',
                url: 'youtube.com/'
            },
            {
                name: 'Javascript-ში ჩაშენებული ობიექტები',
                url: 'youtube.com/'
            },
            {
                name: 'პროტოტიპი',
                url: 'youtube.com/'
            },
            {
                name: 'კონტექსტი',
                url: 'youtube.com/'
            },
            {
                name: 'Advanced Typescript',
                url: 'youtube.com/'
            },
            {
                name: 'Მონაცემთა ტიპები და სტრუქტურები',
                url: 'youtube.com/'
            },
            {
                name: 'Rest of Typescript',
                url: 'youtube.com/'
            },
            {
                name: 'ასინქრონული პროგრამირება, Promise-ის გამოყენება, HTTP',
                url: 'youtube.com/'
            },
            {
                name: 'Promise-ის შექმნა, ასინქრონული ფუნქცია',
                url: 'youtube.com/'
            },
            {
                name: 'მოდულები',
                url: 'youtube.com/'
            },
            {
                name: 'ინფორმაციის შენახვის მექანიზმები',
                url: 'youtube.com/'
            },
        ]
    },
    {
        name: 'AWS სერვისები',
        hasVideos: false,
        videos: [
            {
                name: 'AWS-ის მიმოხილვა, IAM',
                url: 'youtube.com/'
            },
            {
                name: 'AWS Amplify',
                url: 'youtube.com/'
            },
        ]
    },
    {
        name: 'Linux',
        hasVideos: false,
        videos: [
            {
                name: 'Შესავალი Shell-ში, დირექტორიები',
                url: 'youtube.com/'
            },
            {
                name: 'Ხშირად გამოყენებადი ბრძანებები',
                url: 'youtube.com/'
            },
        ]
    },
    {
        name: 'Networking',
        hasVideos: false,
        videos: [
            {
                name: 'DNS',
                url: 'youtube.com'
            }
        ]
    },
    {
        name: 'ალგორითმები',
        hasVideos: true,
        videos: [
            {
                name: 'შესავალი ალგორითმებში',
                url: 'youtube.com/'
            },
            {
                name: 'Big O',
                url: 'youtube.com/'
            },
            {
                name: 'პრობლემის ანალიზი',
                url: 'youtube.com/'
            },
            {
                name: 'პრობლემის გადაჭრის pattern-ები',
                url: 'youtube.com/'
            },
            {
                name: 'ძიება',
                url: 'youtube.com/'
            },
            {
                name: 'სორტირება',
                url: 'youtube.com/'
            },
            {
                name: 'რეკურსია',
                url: 'youtube.com/'
            },
            {
                name: 'მონაცემთა სტრუქტურების მიმოხილვა',
                url: 'youtube.com/'
            },
        ]
    },
    {
        name: 'React / Redux / Ant',
        hasVideos: false,
        videos: [
            {
                name: 'შესავალი React-ში',
                url: 'youtube.com/'
            },
            {
                name: 'Კომპონენტი, State',
                url: 'youtube.com/'
            },
            {
                name: 'JSX',
                url: 'youtube.com/'
            },
            {
                name: 'Render patterns, Input binding',
                url: 'youtube.com/'
            },
            {
                name: 'კომპონენტის lifecycle, Effects',
                url: 'youtube.com/'
            },
            {
                name: 'Სხვა გამოსადეგი hook-ები',
                url: 'youtube.com/'
            },
            {
                name: 'Ant Design',
                url: 'youtube.com/'
            },
            {
                name: 'Component patterns',
                url: 'youtube.com/'
            },
            {
                name: 'Routing',
                url: 'youtube.com/'
            },
            {
                name: 'ფორმის მართვა',
                url: 'youtube.com/'
            },
            {
                name: 'Redux',
                url: 'youtube.com/'
            },
            {
                name: 'Project patterns',
                url: 'youtube.com/'
            },
        ]
    },
    {
        name: 'ხელსაწყოები',
        hasVideos: false,
        videos: [
            {
                name: 'HTML-ის და CSS-ის კონტროლი Chrome-ში',
            },
            {
                name: 'Javascript-ის ხელსაწყოები Chrome-ში',
            },
            {
                name: 'HTTP-ის ხელსაწყოები Chrome-ში',
            },
            {
                name: 'NPM-ის მიმოხილვა, axios & moment',
            },
            {
                name: 'Შესავალი GIT-ში',
            },
            {
                name: 'Branches',
            },
            {
                name: 'Merge',
            },
            {
                name: 'GitHub, Remote repositories',
            },
            {
                name: '.gitignore, უკუსვლის მექანიზმები',
            },
            {
                name: 'Version control-ის კონვენციები',
            },
        ]
    }
];
let menuActive = 0;
const menu = [
    {
        icon: 'images/React.svg',
        name: 'FRONTEND დეველოპერი',
        description: 'ყველა კურსის პირველი შეხვედრა უფასოდ არის განთავსებული ვებ-გვერდზე. ეს შეხვედრები საშუალებას მოგცემთ გაიგოთ მეტი პროგრამირების, ' +
            'UI/UX დიზაინის და WordPress-ის შესახებ. თუ არ ხარ დარწმუნებული რომელი პროფესია აირჩიო, ეს შეხვედრები დაგეხმარება გადაწყვეტილების მიღებაში.'
    },
    {
        icon: 'images/backend.svg',
        name: 'BACKEND დეველოპერი',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s ' +
            'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type s' +
            'pecimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially ' +
            'unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ' +
            'recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        icon: 'images/fullstack.svg',
        name: 'FULL STACK დეველოპერი',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s ' +
            'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type s' +
            'pecimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially ' +
            'unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ' +
            'recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        icon: 'images/mobiledeveloper.svg',
        name: 'MOBILE დეველოპერი',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s ' +
            'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type s' +
            'pecimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially ' +
            'unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ' +
            'recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        icon: 'images/gamedeveloper.svg',
        name: 'GAME დეველოპერი',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s ' +
            'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type s' +
            'pecimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially ' +
            'unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ' +
            'recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        icon: 'images/ai.svg',
        name: 'AI/ML დეველოპერი',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s ' +
            'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type s' +
            'pecimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially ' +
            'unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ' +
            'recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        icon: 'images/blockchain.svg',
        name: 'BLOCKCHAIN დეველოპერი',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s ' +
            'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type s' +
            'pecimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially ' +
            'unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ' +
            'recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        icon: 'images/devops.svg',
        name: 'DEVOPS ინჟინერი',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s ' +
            'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type s' +
            'pecimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially ' +
            'unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ' +
            'recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        icon: 'images/automation.svg',
        name: 'AUTOMATION დეველოპერი',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s ' +
            'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type s' +
            'pecimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially ' +
            'unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ' +
            'recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
]


const proffesion = document.querySelector('.proffesion');

const video_item = (title, index, video) => `
    <div class="syllabus__info-item">
            <div class="syllabus__info-item--title">
                ${video.url ? `<img src="images/playcircle.svg" alt="playcircle"/>` : ''}
                ${video.url ? `<a href="${video.url}">${title}</a>` : `<span>${title}</span>`}
            </div>
            <div class="syllabus__info--number">
                <span>${index}</span>
            </div>
    </div>
`;

const learn_header = document.querySelector(".learn__header")

const videoList = (subject) => `
<div class="syllabus__info-wrapper">
    <div class="syllabus__info">
    ${subject.videos.map((video, index) => video_item(video.name, index + 1, video)).join('')}
</div>       
</div>
`

const description = (desc) => `
<h2>შენ ისწავლი</h2>
<h5>${desc}</h5>
`

const changeDescription = () => {
    learn_header.innerHTML = description(menu[menuActive].description)
}

const syllabus_item = (html, subject, active = false) => `<div class="syllabus__item ${active ? 'syllabus__item--active' : ''}">${html}</div>${videoList(subject)}`;
const syllabus_video = (videoCount) => `
    <div class="syllabus__video">
    <img src="images/playvideo.svg" alt="playVideo"/>
    <h5 class="video">${videoCount} შეხვედრა</h5>
    </div>
`
const syllabus_item_title = (title, videoCount, videoTag) => `
<div class='syllabus__item--title'>
<h6>${title}</h6>
${videoTag ? syllabus_video(videoCount) : `<h5>${videoCount} შეხვედრა</h5>`}
</div>
<img src="images/arrowdown.svg" alt="chevronDown"/>`
;

const section = document.querySelector('.syllabus__list')
const coll = document.getElementsByClassName("syllabus__item");
const proffesion_list = document.querySelector('.proffesion__list');
const proffesion_item_secondary = document.querySelector('.proffesion__item--secondary');
const loadProfessions = () => {
    proffesion_list.innerHTML = menu.map((menu, idx) => title(menu.icon, menu.name, idx)).join('');
    changeDescription();
}


const changeProfession = (idx) => {
    menuActive = idx;
    proffesion_item_secondary.innerHTML = `
    <div class="proffesion__item--secondary">
      <img src="images/React.svg" alt="React.Js Official Logo"/>
      <h4>${menu[idx].name}</h4>
    </div>
  `;
    loadProfessions();
}

section.innerHTML = subjects.map((subject) => syllabus_item(syllabus_item_title(subject.name, subject.videos.length, subject.hasVideos), subject)).join('');


const title = (icon, title, idx) => `
 <div onclick="changeProfession(${idx})" class="proffesion__item-wrapper ${menuActive == idx ? 'proffesion__item-wrapper--active' : ''}">
                <div class="proffesion__item">
                    <img src="${menuActive == idx ? icon.replace('.', 'active.') : icon}" alt="React.Js Official Logo"/>
                    <h4>${title}</h4>
                </div>
 </div>
`

const proffesion_item = (icon, title, idx) => `
 <div onclick="changeProfession(${idx})" class="proffesion__item-wrapper ${menuActive == idx ? 'proffesion__item-wrapper--active' : ''}">
                <div class="proffesion__item">
                    <img src="${menuActive == idx ? icon.replace('.', 'active.') : icon}" alt="React.Js Official Logo"/>
                    <h4>${title}</h4>
                </div>
 </div>
`

// proffesion.insertAdjacentHTML('beforeend', menu.map((proffesion) => proffesion_item(proffesion.icon, proffesion.name)).join(''));
console.log(proffesion.title)
loadProfessions();

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("syllabus__item--active");
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}