import Vue from "vue";
import VueSupabase from "vue-supabase";

Vue.use(VueSupabase, {
    supabaseUrl: process.env.VUE_APP_SUPABASE_URL,
    supabaseKey: process.env.VUE_APP_SUPABASE_KEY,
});
