// let password = 'javascriptjavascript'; 
// let mustHave = '#';


// if (!((password.includes(mustHave))) || ((password.length < 16))){
//     console.log( 'Slaptažodis yra per trumpas arba neturi #. Jis privalo būti bent 16 simbolių ilgumo.' );
// } 

// if (password.length > 15){
//     if (password.length > 20) {
//         console.log( 'Slaptažodis tinkamas' )
//     } else if (!(password.length > 20)){
//         console.log( 'Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.' )
//     }
// }

let age = prompt('Write in the age');

if (age < 0){
    console.log( "Entered number is too low" );
    } else if (age < 6){
        console.log( "Does't go to school" );
    } else if ( age == 6){
        console.log( "Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas." )
    } else if (age == 10){
        console.log( "Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas." )
    } else if (age >= 7 && age <= 10){
        console.log( "Goes to elementary school" );
    } else if (age == 14){
        console.log( "Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas." )
    } else if (age >= 11 && age <= 14){
        console.log( "Goes to primary school" )
    } else if (age == 18){
        console.log( "Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs." )
    } else if (age >= 15 && age <= 18){
        console.log( "Goes to gymnasium" )
    } else if ( age >= 19 && age <= 120){
        console.log( "School finished" )
    } else if (age > 120){
        console.log( "Entered number is too big" )
    } else if (age !== Number){
        console.log( "Netinkamai nurodytas amžius, amžius privalo būti skaičius." )
    }




 



