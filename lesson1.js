
var nb = [1, 2, 3, 4];
// console.log("nb=" + nb);
nb = nb.map(e => e * 2);
nb = nb.reduce(function s(somme, nb) { return somme + nb; });
// console.log("nb=" + nb);


//objects creation 
// using litteral object
var book = {
    "title": "JS for dummies",
    "sub title": "le guide JS",
    "for": "all audience",
    "author": {
        firstname: "David",
        lastname: "Flanagan"
    }
}
//object creation with the new operator
var o = new Object();
var a = new Array();
var d = new Date();
var r = new RegExp("js");
// Object creation using the Object.create()
var ob1 = Object.create({ x: 1, y: 2 });
var ob2 = Object.create(null);
var ob3 = Object.create(Object.prototype);
var ob4 = Object.create(ob1);


// using a constructor

function person(first_name, last_name) {
    [this.first_name, this.last_name] = [first_name, last_name];
    this.display = function () {
        // console.log("Object instanciated using a constructor in this case : " + this.first_name + " " + this.last_name);
    };
}
var personne = new person("montassar", "riahi");
personne.display();
// console.log(book);

//deletion of object
var author = book.author;
var title = book["sub title"];
// console.log("title " + title);
title = book["sub title"];
delete book["sub title"];
// console.log("title " + book["sub title"]); // undefined 
delete Object.prototype;
// console.log(book.isPrototypeOf(person)); //false


//test and enumerate properties


//test is made to reduce writing console.log
function test(word, vars) {
    // console.log("test " + word + vars)
}
var o = { x: 10, y: 20, z: 30 };
let x; //undefined 
// console.log("x" in o);
// console.log(x in o);

for (p in o) {
    // console.log("::" + p); //x
    // console.log(o[p]);     // 10
    // console.log(o.p);      // undefined
}
//we observe that O remains an object, in order to change its real value, we need to affetc it 
// console.log(typeof (o));
// console.log(typeof (JSON.stringify(o)));
// console.log(typeof (o));

//JSON.parse(object) ((the inverse of stringify))
var Object_o = JSON.stringify(o);
// console.log(JSON.parse(Object_o));

var str = "Hello World";
function replace(str, old_world, new_world) {
    res = str;
    res = res.replace(old_world, new_world);
    //v2
    //str.replace(old_world,new_world);

    //v3 delete then insert to that position 

    return res;
}

ch = replace(str, "World", "Universe");
//console.log(ch);


students_array = [];
students_array.push("student 1");
students_array.push("student 2");
students_array.push("student 5");
students_array.push("student 3");
students_array.sort();
// console.log(students_array);


const button = document.getElementById('subm');
// console.log(button);

function init() {

    for (i in students_array) {
        var node = document.createElement('li');
        node.appendChild(document.createTextNode(students_array[i]));
        document.querySelector('ul').appendChild(node);
    }


}
init();

function insert_specific_pos(position_to_insert, new_val) {

    var li = document.createElement("li");
    li.innerHTML = new_val;
    var node = document.querySelector('#student_list')
    // console.log("position to " + position_to_insert);
    node.insertBefore(li, node.childNodes[position_to_insert + 1]);
}

button.onclick = function click() {
    new_val = document.getElementById('input_val').value;
    if (new_val === "") {
        alert("please input some useful text ");
        return;
    }
    // console.log(new_val);
    showAlert(new_val);
};

function showAlert(new_val) {
    var position_to_insert = students_array.findIndex(e => e > new_val);
    // console.log(position_to_insert);
    if (position_to_insert == -1) {
        if (students_array[students_array.length - 1] < new_val) {
            position_to_insert = students_array.length;
        } else {
            position_to_insert = 0;
        }
    }
    students_array.splice(position_to_insert, 0, new_val);
    // console.log("am here, it calls");
    // console.log(students_array);

    insert_specific_pos(position_to_insert, new_val);
}


//****************************************************************************************** */

ticket = 1;
const course = function (name, level, voteCount,id) {
    this.name = name;
    this.level = level;
    this.voteCount = voteCount;
    this.id = id;
}
var arr_course = new Array();
const new_course_add = document.getElementById('subm_new_item');


new_course_add.onclick = function click() {
    // console.log("abcblicnsqkl");
    new_course_name = document.getElementById('name_c').value;
    new_course_diff = document.getElementById('level_c').value;
    new_course_like = document.getElementById('init_nb_likes_c').value;
    new_course_id = ticket;
    data = new course(new_course_name, new_course_diff, new_course_like,ticket);
    if ([new_course_name, new_course_diff, new_course_like].some(e => e == '') || isNaN(new_course_like)) {
        alert("Saisissez des données valides");
        return;
    }

    insert_new_data(data);
};

function insertIntoArrC(data) {
    // console.log("verif");
    // console.log(arr_course);
    flag =false;
    Object.keys(arr_course).forEach(key => {
        // console.log(arr_course[key].name);
        // console.log(data.name);
        if (arr_course[key].name === data.name) {
            flag=true;
        } 
    });
  
    // console.log("flag = "+flag);
    if (!flag) {
        arr_course.push(data);
    }

    return flag;
}

function insert_new_data(data) {
    // console.log("data");
    var li = document.createElement("li");
    li.innerHTML = "";
    Object.keys(data).forEach(key => {
         
        if (key!='id')
            li.innerHTML += data[key] + " ";
    });

    li.innerHTML += `<button class='likes' id=` + parseInt(ticket) + `>j'\aime</button>`;
    
    li.innerHTML += "</li>";
    if (!insertIntoArrC(data)) {
        var node = document.querySelector('#mat_list')
        node.append(li);
        ticket++;
    }
    

    return;
}

