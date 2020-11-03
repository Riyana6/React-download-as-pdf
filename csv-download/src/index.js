import React from 'react';
import { render } from 'react-dom';
import './index.css';

import CsvDownloader from 'react-csv-downloader';


class ComponentToPrint extends React.Component {
  render() {
    const columns = [{
      id: 'first',
      displayName: 'First column'
    }, {
      id: 'second',
      displayName: 'Second column'
    }];
   
    const datas = [{
      first: 'foo',
      second: 'bar'
    }, {
      first: 'foobar',
      second: 'foobar'
    }];
   
    return (
      <div>
        <CsvDownloader
          filename="myfile"
          separator=";"
          wrapColumnChar="'"
          columns={columns}
          datas={datas}
          text="DOWNLOAD" />
      </div>
    );
  }
}
  const Example = () => {
    const datas = [{
      cell1: 'row 1 - cell 1',
      cell2: 'row 1 - cell 2'
    }, {
      cell1: 'row 2 - cell 1',
      cell2: 'row 2 - cell 2'
    }];
    
    
    <CsvDownloader datas={datas}/>;

    const columns = [{
      id: 'cell1',
      displayName: 'Cell 1'
    }, {
      id: 'cell2',
      displayName: 'Cell 2'
    }];

    <CsvDownloader columns={columns}/>;
   
    return (
      <div>
        <ComponentToPrint />
        {/*<CsvDownloader>
          <button>Download</button>
        </CsvDownloader>*/}
      </div>
    );
  };

render(<Example/>,document.querySelector("#root")
);



//******************************************************* */





// content of myfile.csv
// 'First column';'Second column'
// 'foo';'bar'
// 'foobar';'foobar'