import { useQuery} from 'react-query';
import { Project, IDate } from 'types/types';




export function useProjectsQuery(params:any, options:any) {
    const {data, ...query} = useQuery<IDate<Project>>(
        ['https://api.github.com/search/repositories?q=stars:>1&q=language:typeScript&sort=stars&order=desc',
        params],
        options
    );

    return {
        data,
        ...query,
    };
}
