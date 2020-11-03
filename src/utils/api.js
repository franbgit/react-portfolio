const API = {
    login: (email, pass, success) => {
        console.log('api');
        success({data: {id: 11, userId: 12}});
    },
    getUsers: (token, success) => {
        success({data: [
            {id: '3', email: '22', name: '1'},
            {id: '66', email: '5', name: '55'},
        ]});
    },
    getPosts: (token, success) => {
        success({data: [
            {id: '1234', title: 'miTitulo'},
        ]});
    }
}

export default API;