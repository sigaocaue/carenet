module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "es6": true
    },

    "extends": ["airbnb-base"],

    "rules": {
        "semi": ["error", "never"],
        "no-unused-expressions": "off",
        "indent": [2, 2, {"SwitchCase": 1}]
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    }
};
