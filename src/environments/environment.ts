// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyA2sAl7uqKzKXHwlxIetEPHzbvCgm3jNJY",
    authDomain: "osiris-website.firebaseapp.com",
    databaseURL: "https://osiris-website.firebaseio.com",
    projectId: "osiris-website",
    storageBucket: "osiris-website.appspot.com",
    messagingSenderId: "97696951372"
  }
};
