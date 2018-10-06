// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueResource from 'vue-resource'


Vue.config.productionTip = false

/* eslint-disable no-new */
export const bus= new Vue();

Vue.use(VueResource)
// Vue.directive('rainbow',{
//   bind(el,binding,vnode)
//   {
//     el.style.color="#"+Math.random().toString(16).slice(2,8);
//   }
// });
//
// Vue.filter('to-uppercase',function (value){
//
//   return value.toUpperCase();
// });
//

Vue.filter('snippet', function (value) {

  return value.slice(0,100)+'...';
});

// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
new Vue({
    el: '#app',
    render: h => h(App)
})
