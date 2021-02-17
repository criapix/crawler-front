import React, { useEffect, useState } from "react";
import CrawlerModel from "../../models/CrawlerModel";
import CrawlerStore from "../../store/CrawlerStore";
import ResultItem from "../ResultItem/Index";

interface ResultProps {
    list: CrawlerModel[]
}

const Result = ({ list }: ResultProps) => {
    const [internalList, setInternalList] = useState(list);

    useEffect(() => {
        setTimeout(() => {


            setInternalList(CrawlerStore.list());
        }, 1000);
    });

    return <div>
        {internalList.map(i => <ResultItem key={i.keyword} crawler={i} />)}
    </div>
}

export default Result;