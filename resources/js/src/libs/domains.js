export function checkIsCentral() {
    const host = window.location.host;
    const isTenant = host.split('.').length > 1;
    return !isTenant;
}
  