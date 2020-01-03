"use strict";

/*
page 146
search in width
 */
let graph = {
    'you': ['alice', 'bob', 'claire'],
    'bob': ['anuj', 'peggy'],
    'alice': ['peggy'],
    'claire': ['thom', 'jonny'],
    'anuj': [],
    'peggy': [],
    'thom': [],
    'jonny': []
};

function searchInWidth(name) {
    let searchQueue = graph[name];
    let searched = [];
    while (searchQueue.length) {
        let person = searchQueue.shift();
        if (!searched.includes(person)) {
            if (isPersonSeller(person)) {
                let printText = person + ' is a  mango seller!';
                console.log(printText);
                return true;
            }
            else {
                searchQueue = searchQueue.concat(graph[person]);
                searched.push(person);
            }
        }
    }
    return false;
}

function isPersonSeller(name) {
    return name.split('')[0] ==='t';
}
searchInWidth('you');
/*
END
page 146
search in width
need return 'thom is a  mango seller!';
 */
