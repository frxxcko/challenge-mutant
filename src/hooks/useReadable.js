export const useReadable = (stringWithUnderscores) => stringWithUnderscores?.replace(/_/g, ' ').split(' ').map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(' ');

