import React from "react";
import CrawlerModel from "../../models/CrawlerModel";
import Loading from "../Loading/Index";

interface ResultItemProps {
    crawler: CrawlerModel;
}

const ResultItem = ({ crawler }: ResultItemProps) => {
    return <div>{crawler.keyword} - {crawler.status} <Loading /></div>
}

export default ResultItem;