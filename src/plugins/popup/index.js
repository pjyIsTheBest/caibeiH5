import vue from 'vue'
import tips from './tips'
import alert from './alert'
let popup = {
    install: (vue) => {
        vue.prototype.$tips = function(text) {
            let tipsDom = vue.extend({
                render: h => h(tips, {
                    props: {
                        text
                    }
                })
            });
            let dom = new tipsDom().$mount().$el;
            document.body.appendChild(dom);
            setTimeout(() => {
                document.body.removeChild(dom)
            }, 1500)
        }
        vue.prototype.$alert = function(option) { //title, text,confirmText， handler
            let alertDom = vue.extend({
                render: h => h(alert, {
                    props: option
                })
            });
            let dom = new alertDom().$mount().$el;
            document.body.appendChild(dom);

        }
    }
}
vue.use(popup);
export default popup