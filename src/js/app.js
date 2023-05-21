
import {menu} from "./modules/menu.js";
import { checkbox } from "./modules/checkbox.js";
import { phoneMask } from "./modules/phone-mask.js";

// menu
try {
    const header = document.querySelector('.header');
    if (header) {
        menu(header)
    }
} catch (error) {
    console.log(error);
}

// form checkbox
try {
    const form = document.querySelectorAll('[data-js="form"]');
    if (form.length > 0) {
        form.forEach ( item => (
            checkbox(item)
        ));
    }
} catch (error) {
    console.log(error);
}

// input-phone
try {
    const phoneInputs = document.querySelectorAll('[data-js="input-phone"]');
    if (phoneInputs.length > 0) {
        phoneMask(phoneInputs)
    }
} catch (error) {
    console.log(error);
}
