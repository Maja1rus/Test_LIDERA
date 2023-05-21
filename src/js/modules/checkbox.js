export function checkbox(form) {
    const checkbox = form.querySelector('[data-js="form-checkbox"] input');
    const btnSubmit = form.querySelector('[data-js="form-submit"]');

    checkbox.addEventListener('change', () => {
        if (checkbox.checked === true) {
            btnSubmit.disabled = false
        } else {
            btnSubmit.disabled = true
        }
    });
}
