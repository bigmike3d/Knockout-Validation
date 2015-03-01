/**
 * Localization file for French - France (fr-FR)
 */
(function(factory) {
    /*global ko,require,define,module*/
    if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
        module.exports = factory(require('../'));
    } else if (typeof define === 'function' && define.amd) {
        define(['knockout.validation'], factory);
    } else {
        factory(ko.validation);
    }
}(function(kv) {
    return kv.defineLocale('fr-FR', {
        required: 'Ce champ est obligatoire.',
        min: 'Veuillez saisir une valeur supérieure ou égale à {0}.',
        max: 'Veuillez saisir une valeur inférieure ou égale à {0}.',
        minLength: 'Veuillez saisir au moins {0} caractères.',
        maxLength: 'Veuillez saisir au plus {0} caractères.',
        pattern: 'Veuillez corriger ce champ.',
        step: 'Le pas d\'incrémentation de la valeur doit être de {0}.',
        email: 'Ceci n\'est pas une adresse électronique valide.',
        date: 'Veuillez saisir une date valide.',
        dateISO: 'Veuillez saisir une date (ISO) valide.',
        number: 'Veuillez saisir un nombre.',
        digit: 'Veuillez saisir un chiffre.',
        phoneUS: 'Veuillez saisir un numéro de téléphone valide.',
        equal: 'Les valeurs doivent être égales.',
        notEqual: 'Veuillez saisir une autre valeur.',
        unique: 'Veuillez vérifier que la valeur est unique.'
    });
}));
