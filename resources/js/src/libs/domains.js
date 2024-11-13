// export function checkIsCentral() {
//     const host = window.location.host;
//     console.log(`Host: ${host}`);
//     const isTenant = host.split('.').length > 1;
//     console.log(`Is tenant: ${isTenant}`);

//     return !isTenant;
// }

export function checkIsCentral() {
    const host = window.location.host;
    console.log(`Host: ${host}`);

    // Definir los dominios principales de la aplicación central
    const centralDomains = ['fichadentales.com', 'www.fichadentales.com', 'localhost:8000', 'localhost'];

    // Verificar si el dominio actual es uno de los dominios centrales
    const isCentral = centralDomains.includes(host);

    console.log(`Is central: ${isCentral}`);

    return isCentral;  // Retorna true si es central, false si es inquilino
}

  