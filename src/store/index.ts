/* eslint-disable */

import { TDUser } from '@/utils/interfaces';
import Vue from 'vue';
import * as vc from 'vuecons';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    icons: Object.keys(vc)
      .filter((x) => x !== 'default')
      .map((x) => x.replace(/[A-Z]/g, (m) => ' ' + m.toLowerCase()))
      .map((x) => x.substring(4, x.length)),
    query: '',
  },
  getters: {
    user: (state: any): TDUser | null => {
      return state.user;
    },
    icons: (state: any): string[] => {
      return state.icons;
    },
  },
  mutations: {
    signOut(state: any) {
      state.user = null;
    },
    signIn(state: any, user: TDUser) {
      state.user = user;
    },
  },
});
