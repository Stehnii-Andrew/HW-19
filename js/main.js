const listButton = document.querySelector('.all-list-btn');
const filteredListButton = document.querySelector('.filtered-list-btn');
const content = document.querySelector('.content');
const containerEl = document.querySelector('.container');
let showList = false;
let showFilterList = false;

let list = [
    {fullname: 'Иванна Зимина', homework: 101},
    {fullname: 'Александр Гетьманский', homework: 60},
    {fullname: 'Наталья Горошко', homework: 83},
    {fullname: 'Артем Шевчук', homework: 25},
    {fullname: 'Денис Рудик', homework: 91},
    {fullname: 'Егор Егорович', homework: 100},
    {fullname: 'Андрей Тимошенко', homework: 99},
    {fullname: 'Захар Стол', homework: 90},
    {fullname: 'Николай Зайченко', homework: 81},
    {fullname: 'Александр Грико', homework: 73},
    {fullname: 'Инна Олещенко', homework: 32},
    {fullname: 'Виктор Викторович', homework: 0},
    {fullname: 'Ярослав Ярославович', homework: 81},
    {fullname: 'Владислав Владиславович', homework: 90},
    {fullname: 'Владимир Владмирович', homework: 100},
    {fullname: 'Андрей Стегний', homework: 90},
];

const filterList = list.filter((list) => {
    return list.homework > 80;
});
   
listButton.addEventListener('click', (ev) => {
    showList = !showList;

    let List = "";

    for(let pepe of list){
        const htmlList =`
        <div class="all-list">${pepe.fullname}</div>
        `;

        List = List + htmlList;
    }

    content.innerHTML = List;
});

filteredListButton.addEventListener('click', (ev) => {
    showFilterList = !showFilterList;

    let fList = "";

    for(let fPepe of filterList){
    const htmlFilteredList =`
        <div class="filtered-list">${fPepe.fullname}</div>
    `;

    fList = fList + htmlFilteredList;
    }

    content.innerHTML = fList;
});
