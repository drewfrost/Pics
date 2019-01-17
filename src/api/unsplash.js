import axios from 'axios';


export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 3d1eba3b9dd68dcedb3ee0a423ade6fbb8fdb24944c55bcc6ebf5a82e49fef27'

    }
});