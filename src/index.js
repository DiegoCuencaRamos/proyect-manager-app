import store from './store'
 
store.subscribe(() => {
    console.log(store.getState())
})

