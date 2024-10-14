import { useProjectsQuery } from "api/projects/queries";
import NoDataMessage from "components/NoDataMessage/NoDataMessage";
import Pagination from "components/Pagination";
import ProjectCard from "components/ProjectCard";
import Spinner from "components/Spinner";
import { isEmpty } from "ramda";
import { useState } from "react";
import { Project } from "types/types";

import classes from "./styles.module.css";

const MainPage = () => {

  const [page, setPage] = useState(1);
  const [isSendRequest, setIsSendRequest] = useState(true);
  const {data, isLoading } = useProjectsQuery({page},   {
    enabled: isSendRequest,
    onSuccess: () => {
        setIsSendRequest(false);
    },
},);

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
    setIsSendRequest(true);
  }

  if(isLoading){
    <div className={classes.center}>
     <Spinner/>
    </div>
  }

  if(!isLoading && isEmpty(data)){
    return <NoDataMessage>You don't have any counters</NoDataMessage>
  }

  return (
    <div className={classes.root}>
      {data?.items?.map((item:Project ) => {
        return ( <ProjectCard project={item} />)
      })}
     {data?.items && <Pagination totalPages={3} onPageChange={handlePageChange} currentPage={page} />}
    </div>
  );
};

export default MainPage;
