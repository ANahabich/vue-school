function Controller() {
    let headersInited = false;
    let dash;

    this.init = function () {
        if (!headersInited)
            initHeader();
        dash = document.getElementById('dash');
    };
    let initHeader = function () {
        headersInited = true;
        let imgsrc = 'images/';
        let imgFormat = '.png';

        Vue.component('headertabs', {
            props: ['tab'],
            template: '<div v-on:click="$emit(\'click\')"><img v-bind:src="tab.img">{{tab.name}}</div>'
        });

        let tabsComponent = new Vue({
            el: '#header__tabs',
            data: {
                tabs: [
                    {name: 'Неделя', img: imgsrc + 'week' + imgFormat, type: 'w', isSelected: 'true'},
                    {name: 'Месяц', img: imgsrc + 'month' + imgFormat, type: 'm'},
                    {name: 'Контакты', img: imgsrc + 'contacts' + imgFormat, type: 'c'},
                ]
            },
            methods: {
                tabClick: function (e) {
                    let oldEl =  this.$el.querySelector('.selected');
                    if(oldEl.dataset.type !== e){
                        oldEl.classList.remove('selected');
                        this.$el.querySelector('[data-type="'+e+'"]').classList.add('selected')
                    }
                    clearDash()
                }
            }
        })
    };

    let clearDash = function () {
        console.log('clearDash');
        dash.innerHTML = '';
    }
}

let controller = new Controller();
controller.init();
