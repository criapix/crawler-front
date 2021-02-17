import styled from "styled-components";

export const StyledForm = styled.form`
display: inline-block;
border: 2px solid var(--base-color-border);
border-radius: 22px;
margin-bottom: 20px;
overflow: hidden;
`;


export const StyledField = styled.input`
border: none;
font-size: 1.5em;
padding: 6px 20px;
vertical-align: middle;
`;

export const StyledButton = styled.button`
border: none;
border-radius: 22px;
font-size: 1.3em;
padding: 6px 20px;
vertical-align: middle;
`;

export const IconDisplay = styled.span`
vertical-align: middle;
float: right;
`;


export const StyledIcon = styled.img`
`;

export const CrawlerDisplay = styled.div`
cursor: pointer;
text-align: left;
padding: 6px 20px;
border: 1px solid var(--base-color-border);
border-radius: 22px;
vertical-align: middle;
margin-bottom: 5px;
background: #EEE
`;


export const UrlsDisplay = styled.div`
max-height: 150px;
overflow: auto;
margin: 0 10px 20px 10px;
`;