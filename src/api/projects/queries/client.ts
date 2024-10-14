

import axios from 'axios';
import {QueryClient, QueryFunction, QueryKey} from 'react-query';

const isSingleArray = (queryKey: QueryKey): queryKey is [string] => {
    return queryKey.length === 1;
};

const defaultQueryFn: QueryFunction = async ({queryKey, signal}) => {
    let url = '';
    let params = {};

    if (isSingleArray(queryKey)) {
        [url] = queryKey;
    } else {
        const [maybeUrl, maybeParams] = queryKey;
        if (typeof maybeUrl === 'string') {url = maybeUrl;}
        if (maybeParams && typeof maybeParams === 'object') {params = maybeParams;}
    }

    const {data} = await axios.get(url, {
        headers: {
            'Authorization': process.env.GITHUB_API_TOKEN
        },
        params: {per_page:15, ...params},
        signal,
    });
    return data;
};

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            queryFn: defaultQueryFn,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        },
    },
});

export default queryClient;
