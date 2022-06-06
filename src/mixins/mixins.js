export const delayMixin = {
  methods: {
    debounce: (callback, delay) => {
      let timeoutID // here -> group (batching) updates (identifiers)
      return () => {
        // clearTimeout takes timeout's identifier -> call if the same action -> cancel "timeout" until next setTimeout
        clearTimeout(timeoutID) 
        // timeoutID -> positive integer value -> identifies the new timer created by call setTimeout
        timeoutID = setTimeout(callback, delay)
      }
    },
  },
}