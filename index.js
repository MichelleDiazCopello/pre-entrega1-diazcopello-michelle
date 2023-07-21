for ( i = 100; i < 250; i++ ) {
    if ( i % 2 === 0 ) {
        console.log ( `La raíz cuadrada de ${i} es ${ Math.sqrt (i) } ` );
    }
    else if (  i % 2 !== 0 ) {
        console.log ( `La potencia de ${ i } es ${ Math.pow ( i, 2 ) } ` );
    }
}