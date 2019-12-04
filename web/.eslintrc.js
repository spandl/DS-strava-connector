module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    // "extends": "eslint:recommended",
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        // "quotes": ["error", "double"],
        "indent": ["error", 4],
        "func-call-spacing": ["error", "never"],
        "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
        "space-before-function-paren": ["error", {"anonymous": "ignore", "named": "never", "asyncArrow": "always"}],
        "no-console": "off",
    }
};