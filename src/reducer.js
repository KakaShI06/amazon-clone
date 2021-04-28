export const initialState = {
    basket: [],
    user : null
}

export const getBasketTotal = (basket) => {
    var sum = 0;

    for (let i = 0; i < basket.length; i++) {
        sum += basket[i].price;
    }

    return sum;

}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
                console.log(index);
            }
            else {
                console.warn(`This ${action.id} not found`);
            }

            return {
                ...state,
                basket : newBasket
            }
        
        case 'SET_USER':
            
            return {
                ...state,
                user: action.user
            }
      
            
        
        default:
            return state;
            
    }
}

export default reducer;