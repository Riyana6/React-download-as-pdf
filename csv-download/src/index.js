import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import CsvDownloader from 'react-csv-downloader';

<CsvDownloader>
  <button>Download</button>
</CsvDownloader>

const datas = [{
  cell1: 'row 1 - cell 1',
  cell2: 'row 1 - cell 2'
}, {
  cell1: 'row 2 - cell 1',
  cell2: 'row 2 - cell 2'
}];

<CsvDownloader datas={datas}/>

const columns = [{
  id: 'cell1',
  displayName: 'Cell 1'
}, {
  id: 'cell2',
  displayName: 'Cell 2'
}];

<CsvDownloader columns={columns}/> 
