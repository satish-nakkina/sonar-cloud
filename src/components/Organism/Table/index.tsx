/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import DATA from '../../../../DATA.json'
import TableHeader from "../../Molecule/TableHeader";
import TableData from "../../Molecule/TableData";
import Pagination from "../../Molecule/Pagination";
import ItemsPerPage from "../../Molecule/ItemsPerPage";

import styled from "styled-components";

const Table = () => {
  const heading = [
    { name: "NAME" },
    { name: "ADJUDICATION" },
    { name: "STATUS" },
    { name: "LOCATION" },
    { name: "DATE" },
  ];
  const pages = [
    {
      name: "10",
      value: 10,
    },
    {
      name: "20",
      value: 20,
    },
    {
      name: "50",
      value: 50,
    },
  ];
  const [pageNumber, setPageNumber] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [data, setData] = useState([
    ...DATA.slice(perPage * (pageNumber - 1), perPage * pageNumber),
  ]);

  useEffect(() => {
    setData([...DATA.slice(perPage * (pageNumber - 1), perPage * pageNumber)]);
    console.log(data);
  }, [perPage, pageNumber]);

  const handleChangePerPage = (event: any) => {
    setPerPage(event.target.value);
    console.log({ perPage });
  };

  const handleChangePageNumber = (event: any, page: number) => {
    console.log(page);

    setPageNumber(page);
  };

  const TableDiv = styled.div`
    width: 77%;
    height: 85%;
    min-height: 600px;
    max-width: 1056px;
    box-shadow: 0px 4px 28px;
    margin: auto;
  `;

  const HeaderDiv = styled.div`
    background-color: #f7f8fa;
  `;

  const BodyDiv = styled.div`
    background-color: #ffffff;
  `;

  const PagesDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
  `;

  return (
    <TableDiv>
      <HeaderDiv>
        <TableHeader heading={heading} width="24%" />
      </HeaderDiv>
      <BodyDiv>
        <TableData data={data} width="24%" />
      </BodyDiv>
      <PagesDiv>
        <ItemsPerPage
          perPage={perPage}
          pages={pages}
          handleChange={handleChangePerPage}
        />

        <Pagination
          count={3}
          handleChange={handleChangePageNumber}
          pageNumber={pageNumber}
        />
      </PagesDiv>
    </TableDiv>
  );
};

export default Table;
