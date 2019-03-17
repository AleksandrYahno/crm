window.onload = function () {

    // menu
    let menu = document.getElementsByClassName("menu__item");
    for (let i = 0; i < menu.length; i++) {
        function removeClass() {
            for (let i = 0; i < menu.length; i++) {
                menu[i].classList.remove("menu__item--active");
            }
        }

        menu[i].onclick = function () {
            removeClass();
            this.classList.add("menu__item--active");
        }
    }


    // tab
    let tab;
    let tabContent;

    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);

    document.getElementById('tabs').onclick = function (event) {
        var target = event.target;
        if (target.className == 'tab') {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    showTabsContent(i);
                    break;
                }
            }
        }
    };

    function hideTabsContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add("hide");
            tab[i].classList.remove('whiteborder');
        }
    }

    function showTabsContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            hideTabsContent(0);
            tab[b].classList.add('whiteborder');
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
};