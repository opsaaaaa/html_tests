// import Vue from 'vue'

console.log('open')

window.addEventListener('load', function(){
    console.log('loaded')
    var app = new Vue({
        el: '#site-viewer',
        data: {
            devise: 'desktop'
        }
    })
}, false)