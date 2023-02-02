// function filter(){
//     category = document.forms[1].category.selectedIndex - 1
//     input = new RegExp(document.forms[1].q.value, "i");
//     if(category === -1){return}
//     if(document.getElementsByClassName('btn-outline-primary').length < document.getElementsByClassName('course-details').length){return}
//     else{
//         i = 0;
//         const len = document.getElementsByClassName('course-details').length;
//         for(i;i<len;){
//             console.log(i);
//             if(input.exec(document.getElementsByClassName('course-details')[i].getElementsByTagName('p')[category].innerText)){
//                 i++;
//                 continue
//             }
//             else{
//                 document.getElementsByClassName('course-details')[i].remove();
//                 try {
//                     document.getElementsByClassName('btn-outline-primary')[i].remove();
//                 } catch (error) {
//                     continue;
//                 } };
//     }
//     }

// }