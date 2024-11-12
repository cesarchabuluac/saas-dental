export function checkIsCentral() {
    const host = window.location.host;
    console.log(`Host: ${host}`);
    const isTenant = host.split('.').length > 1;
    console.log(`Is tenant: ${isTenant}`);

    return !isTenant;
}
  