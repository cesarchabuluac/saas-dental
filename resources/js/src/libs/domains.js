// export function checkIsCentral() {
//     const host = window.location.host;
//     console.log(`Host: ${host}`);
//     const isTenant = host.split('.').length > 1;
//     console.log(`Is tenant: ${isTenant}`);

//     return !isTenant;
// }

export function checkIsCentral() {
    const host = window.location.host;
    // console.log(`Host completo: ${host}`);
    // console.log(`Host sin puerto: ${host.split(':')[0]}`);

    // Definir los dominios principales de la aplicación central
    const centralDomains = ['fichadentales.com', 'www.fichadentales.com', 'localhost'];

    // Verificar si el dominio actual es uno de los dominios centrales
    const isCentral = centralDomains.includes(host.split(':')[0]); // Asegúrate de que solo compares el dominio sin el puerto

    // console.log(`Is central: ${isCentral}`);

    return isCentral;
}


  