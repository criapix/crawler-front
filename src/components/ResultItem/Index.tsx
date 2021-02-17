import React from "react";
import CrawlerModel from "../../models/CrawlerModel";
import Loading from "../Loading/Index";
import CheckIcon from "../../assets/check.svg";


interface ResultItemProps {
    crawler: CrawlerModel;
}

const ResultItem = ({ crawler }: ResultItemProps) => {
    return <div>{crawler.keyword} {crawler.status === 'done' ? <img src={CheckIcon} alt="Done" height="25" /> : <Loading />} </div>
}

export default ResultItem;