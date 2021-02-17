import React, { useState } from "react"
import Result from "../Result/Index"
import CrawlApiClient from "../../ApiClients/CrawlApiClient";
import CrawlerStore from "../../store/CrawlerStore";
import Form from "../Form/Index";

const CrawlerApp = () => {
    const [crawlers, setCrawlers] = useState(CrawlerStore.list());

    function onSend(keyword: string) {
        new CrawlApiClient().post({ "keyword": keyword }).then(consulta => {
            CrawlerStore.addItem(consulta.id, keyword);
            setCrawlers(CrawlerStore.list());
        });
    }

    console.log('renderizou');

    return <div className="App">
        <Form onSend={onSend} />
        <Result list={crawlers} />
    </div>
}

export default CrawlerApp;