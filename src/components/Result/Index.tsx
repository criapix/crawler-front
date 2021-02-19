import React, { useEffect, useState } from "react";
import CrawlerModel from "../../models/CrawlerModel";
import ResultItem from "../ResultItem/Index";

interface ResultProps {
    list: CrawlerModel[]
}

const Result = ({ list }: ResultProps) => {
    const [internalList, setInternalList] = useState(list);

    useEffect(() => {
        setInternalList(list);
    }, [list])

    return <div>
        {internalList?.map(i => <ResultItem key={i.keyword} crawler={i} />)}
    </div>
}

export default Result;