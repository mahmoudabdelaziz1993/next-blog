export function removeLanguageCode(path : string) {
    return path.replace(/^\/(en|ar)/, '');
  }