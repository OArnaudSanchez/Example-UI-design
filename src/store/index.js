import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    Data: [],
  },
  mutations: {

    SetData(state,payload)
    {
      state.Data = payload;
    },

  },
  actions: {

    async GetData({ commit })
    { 
        await axios.get('https://my-json-server.typicode.com/OArnaudSanchez/demo/test')
              .then(datos => {
                  const {data} = datos;
                  commit('SetData', data);
              })
              .catch(error => console.log(error));
    }
  },
  getters:{},
  modules: {}
})
