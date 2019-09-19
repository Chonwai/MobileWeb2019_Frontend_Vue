import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        shops: [{
                id: 0,
                name: '鏡子形象',
                address: '澳門渡船街4D號日高大廈地下C',
                latitude: 22.2019322,
                longitude: 113.5449714,
                photo_url: 'https://mobile-web-design-skill-competition.netlify.com/images/鏡子形象.jpg',
                like: 30,
                dislike: 5
            },
            {
                id: 1,
                name: '美捷生活有限公司',
                address: '澳門道咩啤利士街48號座福如大廈地下H座',
                latitude: 22.2045903,
                longitude: 113.5437714,
                photo_url: 'https://mobile-web-design-skill-competition.netlify.com/images/美捷生活有限公司.jpg',
                like: 20,
                dislike: 7
            },
            {
                id: 2,
                name: '愛。名店',
                address: '沙伯樂提督街41-A號永聯大廈(N,O)座地下D座',
                latitude: 22.2012914,
                longitude: 113.5473617,
                photo_url: 'https://mobile-web-design-skill-competition.netlify.com/images/愛名店.jpg',
                like: 12,
                dislike: 8
            },
            {
                id: 3,
                name: '安奇皮鞋店(飛能便度街店)',
                address: '澳門飛能便度街8號地下',
                latitude: 22.203527,
                longitude: 113.545364,
                photo_url: 'https://mobile-web-design-skill-competition.netlify.com/images/安奇皮鞋店.jpg',
                like: 37,
                dislike: 12
            },
            {
                id: 4,
                name: '見一面美食',
                address: '澳門俾利喇街72號G地下',
                latitude: 22.2010753,
                longitude: 113.5456449,
                photo_url: 'https://mobile-web-design-skill-competition.netlify.com/images/見一面美食.jpg',
                like: 68,
                dislike: 19
            },
            {
                id: 5,
                name: '新寶來燒臘美食坊',
                address: '澳門啤利喇街17號泰榮大廈地下A舖',
                latitude: 22.1998806,
                longitude: 113.5445739,
                photo_url: 'https://mobile-web-design-skill-competition.netlify.com/images/新寶來燒臘美食坊.jpg',
                like: 89,
                dislike: 15
            }
        ]
    },
    mutations: {},
    actions: {}
});