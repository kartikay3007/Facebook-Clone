import { INCREMENT, DECREMENT } from "./Counter.types";

export const increaseCounter = () => {
    return {
        type: INCREMENT,
    }
}
export const decreaseCounter = () => {
    return {
        type: DECREMENT,
    }
}