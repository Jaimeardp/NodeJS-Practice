// let
try{
    let i = 8;
    if(true){
        let i = 9; // Crea su propio ambito
    }
    // Nose puede inicializar nuevamnte
    let i = 10; 
    let i = 11;
    let i = 12;
    let i = 13;
    console.log(i);
}catch(err){
    console.log( `Igual continuo! ${err.name}` );
}finally{
    console.log('Siempre me ejecuto');
}
// var 
var a = 'Jaime';
if(true){
    var a = 'Anthony'
}
var a = 'Barcelona';
var a = 'BarcelonaB';
var a = 'BarcelonaC';
var a = 'BarcelonaD';
console.log(a);