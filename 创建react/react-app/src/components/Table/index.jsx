import React,{useState} from "react";
import "./index.css"
const Index = () => {
  const [datatr, setdatatr] = useState([1, 2, 3]);
  const [datatd, setdatatd] = useState([]);
  let dataMAIN = [];
  const [data, setdata] = useState([
    { name: 1, age: 2, sex: "男" ,run:"a"},
    { name: 2, age: 2, sex: "" ,run:"b", rowSpan: 3 },
    { name: 1, age: 3, sex: "" ,run:"c"},
    { name: 4, age: 4, sex: "男",run:"d" },
    { name: 4, age: 4, sex: "男",run:"e" },
  ]);
  data.forEach((item, i) => {
    let datalist = [];
    datalist.push({ value: item.name });
    datalist.push({ value: item.age, rowSpan: item.rowSpan });
    datalist.push({ value: item.sex });
    datalist.push({ value: item.run });
    datalist.push({ value: item.run });

    dataMAIN.push(datalist);
  });
  console.log('====================================');
  console.log(dataMAIN);
  console.log('====================================');
  dataMAIN.forEach((item, index) => {
    item.forEach((td, i) => {
      // row
      if (td.rowSpan) {
        if (td.rowSpan&&td.rowSpan>1) {
          for(let ii=td.rowSpan;ii>1;ii--)
             dataMAIN[index +ii-1].splice(i,1);
          }
      }
      // col
      if (td.colSpan&&td.colSpan>1) {
       for(let ii=td.colSpan;ii>1;ii--)
          delete item[i+ii-1]
        }
    });
  });

  return (
    <table
      align="center"
      border="1"
      width={"200px"}
      className={"table"}
    >
      <tbody>
        {dataMAIN.map((trs, index) => {
          return (
            <tr key={index}>
              {trs.map((td, i) => {
                return  (
                  <td key={i} colSpan={td.colSpan} rowSpan={td.rowSpan}>
                    {td.value}
                  </td>
                )  ;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Index;
