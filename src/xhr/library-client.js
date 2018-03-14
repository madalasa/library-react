import axios from 'axios';

let libraryBaseURL = !process.env.LIBRARY_SERVICE_URL ? 
                'http://localhost:3500': process.env.LIBRARY_SERVICE_URL;
                
let libraryURL = libraryBaseURL+'/catalog/';

let findBook = (id) => {
    return axios.get(libraryURL+'books/' + id);
}

let findAuthor = (id) => {
    return axios.get(libraryURL+'authors/' + id);
}

export {findBook, findAuthor}