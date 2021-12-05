import {createStore} from "redux";
import reducer from "../reducer/index";

/* const initialState = {
    user: {
        name: "Don K. Isiko",
        email: "isikodon@googlemail.com",
        profile_pic: "https://flic.kr/p/2mxfmeF",
        status: "Author, running through this tutorial, lorem ipsum init",
        user_id: "user000"
    },
    contacts: {
        user_id: {
            name: "John Doe",
            email: "jd@gmail.com",
            profile_pic: "https://flic.kr/p/2mxfmeF",
            status: "bla bla bla",
            user_id: "user_id"
        },
        user_id_2: {
            name: "tweedle dum",
            email: "tdum@gmail.com",
            profile_pic: "https://flic.kr/p/2mxfmeF",
            status: "blah blah",
            user_id: "user_id_2"
        },
        user_id_3: {
            name: "tweedle dee",
            email: "tdee@gmail.com",
            profile_pic: "https://flic.kr/p/2mxfmeF",
            status: "blah blaaaa",
            user_id: "user_id_3"
        }
    },
    activeUserId: "user_id_3",
    messages: {
        user_id: {
            0: {
                text: "Hello man!",
                is_user_msg: false,
                number: 0
            },
            1: {
                text: "Doing great. You?",
                is_user_msg: true,
                number: 1
            }
        },
        user_id_1: {
            0: {
                text: "You know Redux?",
                is_user_msg: false,
                number: 0
            },
            1: {
                text: "I do. Any gig?",
                is_user_msg: true,
                number: 1
            }
        },
        user_id_3: {
            0: {
                text: "How did you get my Number?",
                is_user_msg: false,
                number: 0
            },
            1: {
                text: "don't watch that init.",
                is_user_msg: false,
                number: 1
            }
        },
    },
    typing: ""
} */

const store = createStore(reducer);

export default store;