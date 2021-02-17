import React, { useEffect, useState } from "react";
import CrawlApiClient from "../../ApiClients/CrawlApiClient";
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
            const itens = CrawlerStore.list();

            itens.forEach((i) => {
                if (i.status === undefined || i.status === 'active') {
                    new CrawlApiClient().getById(i.id).then((r) => {
                        i.status = r.status;
                        CrawlerStore.updateItemStatus(i.id, i.status);
                    });
                }
            });
            setInternalList(itens);
        }, 10000);
    });

    return <div>
        {internalList.map(i => <ResultItem key={i.keyword} crawler={i} />)}
    </div>
}

export default Result;