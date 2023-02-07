export function login({ commit }, { supabase, form, bvToast }) {
  supabase.auth.signIn({
    email: form.email,
    password: form.password,
  }).then(({ user, error }) => {
    if (error) {
      bvToast.toast(error.message, {
        title: "Error",
        variant: "danger",
        solid: true
      })
      return;
    }
    const userData = {
      username: user.user_metadata.username,
      email: user.email,
    }
    commit("setUserData", userData);
  })
}

export function register({ commit }, { supabase, form, bvToast }) {
  supabase.auth.signUp({
    email: form.email,
    password: form.password,
  }, {
    data: {
      username: form.username
    }
  }).then(({ user, error }) => {
    if (error) {
      bvToast.toast(error.message, {
        title: "Error",
        variant: "danger",
        solid: true
      })
      return;
    }

    const userData = {
      username: user.user_metadata.username,
      email: user.email,
    }
    commit("setUserData", userData);
  })

}

export function logout({ commit }, { supabase, bvToast }) {
  supabase.auth.signOut().then(({ error }) => {
    if (error) {
      bvToast.toast(error.message, {
        title: "Error",
        variant: "danger",
        solid: true
      })
      return;
    }

    const userData = {};
    commit("setUserData", userData);
  })
}


