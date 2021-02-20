import React, { useEffect, useState } from "react";
import Result from "../Result/Index";
import CrawlerApiClient from "../../ApiClients/CrawlerApiClient";
import CrawlerStore from "../../store/CrawlerStore";
import Form from "../Form/Index";

const crawlerApiClient = new CrawlerApiClient();
const CrawlerApp = () => {
  const [crawlers, setCrawlers] = useState(CrawlerStore.list());

  function onSend(keyword: string) {
    crawlerApiClient.post({ keyword: keyword }).then((consulta) => {
      CrawlerStore.addItem(consulta.id, keyword);
      setCrawlers(CrawlerStore.list());
    });
  }

  const update = () => {
    const itens = CrawlerStore.list();

    itens.forEach((i) => {
      if (
        i.status === undefined ||
        i.status === "active" ||
        i.urls === undefined
      ) {
        crawlerApiClient.getById(i.id).then((r) => {
          i.status = r.status;
          i.urls = r.urls;
          CrawlerStore.updateItemStatus(i.id, i.status, i.urls);
        });
      }
    });
    setCrawlers(itens);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      update();
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [crawlers]);

  return (
    <div className="App">
      <Form onSend={onSend} />
      <Result list={crawlers} />
    </div>
  );
};

export default CrawlerApp;
