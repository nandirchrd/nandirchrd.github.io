const handleLoadMore = (setState) => {
    setState((state)=>{
        setTimeout(()=>{
            setState(()=>({...state, isLoading: false, show: state.show + state.steps}));
        }, 1000)

        return {...state, isLoading: true};
    })
}

export default handleLoadMore;