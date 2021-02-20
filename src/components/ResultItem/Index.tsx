import React, { useState } from "react";
import CrawlerModel from "../../models/CrawlerModel";
import Loading from "../Loading/Index";
import CheckIcon from "../../assets/check.svg";
import {
  CrawlerDisplay,
  IconDisplay,
  StyledIcon,
  UrlsDisplay,
} from "../../styled/Index";

interface ResultItemProps {
  crawler: CrawlerModel;
}

const ResultItem = ({ crawler }: ResultItemProps) => {
  const [closed, setClosed] = useState(true);

  return (
    <div>
      <CrawlerDisplay
        onClick={() => {
          setClosed(!closed);
        }}
      >
        {" "}
        {crawler.keyword}
        {
          <IconDisplay>
            {crawler.status === "done" ? (
              <StyledIcon src={CheckIcon} alt="Done" height="25" />
            ) : (
              <Loading />
            )}
          </IconDisplay>
        }
      </CrawlerDisplay>
      {closed ? "" : urlList(crawler.urls)}
    </div>
  );
};

export default ResultItem;

function urlList(urls?: string[]) {
  return (
    <UrlsDisplay>
      {urls?.length ? (
        urls?.map((i) => (
          <div key={i}>
            <a href={i}>
              <small>{i}</small>
            </a>
          </div>
        ))
      ) : (
        <small>Nenhum resultado encontrado</small>
      )}
    </UrlsDisplay>
  );
}
