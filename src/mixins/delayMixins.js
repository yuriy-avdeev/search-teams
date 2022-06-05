export default {
  methods: {
    debounce: (callback, delay) => {
      let timeout
      return () => {
        clearTimeout(timeout) // if the same action -> call clearTimeout -> "timeout" = undefined until next string
        timeout = setTimeout(callback, delay) // calls the callback after delay if no new user's action
      }
    },
  },
}