var ret_val = "";
var ch;
jQuery.fn.new_string_of_line = function (caller_id) {
    return this.each(function () {
        ch = ($(`#` + caller_id).parent().html());
        ch = ch.split(" ");

        //ch = JSON.stringify(ch,null,1);
        // console.log("entry ty " + typeof (ch));


        Object.keys(ch).forEach(key => {
            console.log("key is a " + key + "\t and ch[key]=_" + ch[key] + "_\tlength of ch=" + ch.length);
        });
        Object.keys(arr_course).forEach(key => {

            if (arr_course[key].id == caller_id) {
                console.log("bngo" + key);
                // console.log("ch2 = " + ch[2]);
                ch[ch.length - 4]++;
                // ch = ch.toString(); // an *array* that contains the user

                // console.log("called by  |||||||||" + ch);

            }
        });
        // on a mis " "+ch au lieu de ch+ " " car elle causera un défault dans la taille d'elle méme à chaque fois i,e: chaine vide 
        for (let i = 0; i < ch.length; i++) {
            if (ch[i] != "") {
                ret_val += " " + ch[i];
            }

        }
        console.log("ret val " + ret_val);

        return ret_val;
    });
};

// $.new_string_of_line = function (caller_id) {
//     ch =($(`#` + caller_id).parent().html()).split(" ");


//     Object.keys(arr_course).forEach(key => {
//         console.log("ch de 0 " + ch[0]);
//         if (arr_course[key].name == ch[0]) {
//             ch[2]++;
//             console.log("ch is a " + (ch));
//             console.log("called by  |||||||||" + ch);
//             return ch;
//         }
//     });
// };


$("button[class^=likes]").live("click", function (event) {

    var caller_id = event.target.id;
    //alert("called by " + caller_id);
    // console.log(caller_id);
    $(document).new_string_of_line(caller_id);
    $(`#` + caller_id).parent().html(ret_val);
    ret_val = "";

})