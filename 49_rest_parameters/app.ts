//write a function takes a rest parameter
function Myhobby(...hobbies :string[]){
    hobbies.forEach(hobby =>{
        console.log(`I enjoy ${hobby}. `);
    });
}
//call the function with multiple hobbies
Myhobby('reading boooks  ', 'watch historcial dramas  ' , 'coding ' );