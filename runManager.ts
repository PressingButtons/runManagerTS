
const runList = new Map<string, Function>( );
let loopId:number;

function loop( timestamp: number ) {
    for( const method of runList.values( ) )
        method( );
    loopId = requestAnimationFrame( loop );
}

export function run( ) {
    loopId = requestAnimationFrame( loop );
}

export function stop( ) {
    cancelAnimationFrame( loopId );
}

export function setMethod( name: string, method: Function ) {
    runList.set( name, method );
}

export function removeMethod( name: string ) {
    runList.delete( name );
}

export function getMethod( name:string ) {
    return runList.get( name );
}