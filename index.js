/**
 * Show admin edit button in FE
 */
export default function showAdminMenu(target = '_blank', label = 'Back to ems') {
    const targets = document.querySelectorAll('[data-ems-key]');
    [].forEach.call(targets, function(target, index) {

        const ouuid = target.getAttribute('data-ems-key');
        const type = target.getAttribute('data-ems-type');
        const url = target.getAttribute('data-ems-url');

        const admBtn = document.createElement('a');
        admBtn.innerHTML = label;
        admBtn.id = 'admin-menu-' + index;
        admBtn.setAttribute('class', 'btn btn-primary btn-xs emsch');
        admBtn.type = 'button';
        admBtn.href  = url +'/data/revisions/'+ type +':'+ ouuid;
        if (typeof target === 'string' || target instanceof String) {
            admBtn.target  = target;
        }

        const admWrapper = document.createElement('div');
        admWrapper.setAttribute('class', 'admin-menu-wrapper hide');
        admWrapper.insertAdjacentElement('beforeend', admBtn);

        target.insertAdjacentElement('beforeend', admWrapper);
        target.onmouseover = function() {
            admWrapper.classList.remove("hide");
        }
        target.onmouseout = function() {
            admWrapper.classList.add("hide");
        }
    });
}