let password = 'javascriptjavascript';
let mustHave = '#';


if (!((password.includes(mustHave))) || ((password.length < 16))){
    console.log( 'Slaptažodis yra per trumpas arba neturi #. Jis privalo būti bent 16 simbolių ilgumo.' );
} 

if (password.length > 15){
    if (password.length > 20) {
        console.log( 'Slaptažodis tinkamas' )
    } else if (!(password.length > 20)){
        console.log( 'Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.' )
    }
}




 



