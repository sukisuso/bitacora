'use strict';

import React from 'react';
import ReactDataGrid from 'react-data-grid';
import MenuHeader from './helpers/MenuHeader';

export default class GridComponent extends React.Component {
  render() {
    const columns = [
      { key: 'id', name: 'ID', width: 200, },
      { key: 'title', name: 'Title', width: 200, },
      { key: 'count', name: 'Count', width: 200, },
      { key: 'another', name: 'One', width: 200, },{ key: 'id2', name: 'ID2',width: 200, },
      { key: 'title2', name: 'Title', width: 200, },
      { key: 'count2', name: 'Count', width: 200, },
      { key: 'another2', name: 'One', width: 200, },{ key: 'id3', name: 'ID3',width: 200, },
      { key: 'title3', name: 'Title', width: 200, },
      { key: 'count3', name: 'Count' },
      { key: 'another3', name: 'One' },
      { key: 'id4', name: 'ID4' },
      { key: 'title4', name: 'Title' },
      { key: 'count4', name: 'Count' },
      { key: 'another4', name: 'One' }, { key: 'id5', name: 'ID5' }];
    const rows = [{ id: '13215451', title: 'Peliculon', count: 'VamosW' },{ id: '13215451', title: 'Peliculon', count: 'VamosW' },{ id: '13215451', title: 'Peliculon', count: 'VamosW' },{ id: '13215451', title: 'Peliculon', count: 'VamosW' }];
    const rowGetter = function rowGetter(i) {
      return rows[i];
    };

    return (
      <div className="container">
        <MenuHeader />
        <div className="panel panel-default grid-panel">
          <div className="panel-body">
            <ReactDataGrid
              columns={columns}
              rowGetter={rowGetter}
              rowsCount={rows.length}
              minHeight={500}
              canScrollY={true}
            />
          </div>
        </div>
       </div>
    );
  }
}
