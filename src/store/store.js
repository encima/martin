import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        gifClient: undefined,
        giClient: undefined,
        names: [
            'Anni',
            'Annabelle',
            'Princess Anne',
            'Marie Antoinette',

        ],
        gb: new Date(2019, 4, 7), //month is zero indexed
        days: {
            25: {
                'title': 'The Age Of Doubt',
                'author': 'Maile Meloy'
            },
            24: {
                'title': 'Christmas Eve, 1944',
                'author': 'Luis Alberto Urrea'
            },
            23: {
                'title': 'Legends of the Seoul Dogs',
                'author': 'R.O. Kwon'
            },
            22: {
                'title': 'Returning to the Problem',
                'author': 'Eugene Lim'
            },
            21: {
                'title': 'The One Who Is',
                'author': 'Chip Livingston'
            },
            20: {
                'title': 'Christmas Triptych',
                'author': 'Stephen Leacock'
            },
            19: {
                'title': 'In This Fantasy',
                'author': 'Kim Fu'
            },
            18: {
                'title': 'Strategies Against Sleeping',
                'author': 'Lilliana Heker'
            },
            17: {
                'title': 'Deer Season',
                'author': 'Kevin Barry'
            },
            16: {
                'title': 'Two Stories Containing a Mouse',
                'author': 'Maria Mutch'
            },
            15: {
                'title': 'Snatching Bodies',
                'author': 'Rodrigo Fresan'
            },
            14: {
                'title': 'Will Evans Save The World?',
                'author': 'Ben Greenman'
            },
            13: {
                'title': 'Everyone of My Answers Was  A Disappointment',
                'author': 'Doretta Lau'
            },
            12: {
                'title': 'A Clean Break',
                'author': 'Danielle Lazarin'
            },
            11: {
                'title': 'Mister Elephant',
                'author': 'Jessica Westhead'
            },
            10: {
                'title': 'One Gram Short',
                'author': 'Etger Keret'
            },
            9: {
                'title': 'Someone Steps In',
                'author': 'Susanne Rivecca'
            },
            8: {
                'title': 'Festive',
                'author': 'George Saunders'
            },
            7: {
                'title': 'A Qualitative Study of Our Father',
                'author': 'Adam Levin'
            },
            6: {
                'title': 'The Glamour of the Snow',
                'author': 'Algernon Blackwood'
            },
            5: {
                'title': 'Sunflowers',
                'author': 'Bryan Washington'
            },
            4: {
                'title': 'Counseling',
                'author': 'Lisa Bird-Wilson'
            },
            3: {
                'title': 'Endless City',
                'author': 'Zachary Mason'
            },
            2: {
                'title': 'Slower',
                'author': 'Sarah Levine'
            },
            1: {
                'title': 'Sea Monster',
                'author': 'Seth Fried'
            },
            
        }
    },
    mutations: {
        setGifClient(state, client) {
            state.gifClient = client;
        },
        setGIClient(state, client) {
            state.giClient = client;
        }
    }
  });