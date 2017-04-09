'use strict';

import React from 'react';

export default class MainStats extends React.Component {
  constructor(props) {
    super(props);
    this.items = [{
      title: 'Titulo 1',
    }, {
      title: 'Titulo 2',
    }, {
      title: 'Titulo 3',
    }, {
      title: 'Titulo 4',
    }];
  }


  render() {
     var listItems = this.items.map(function(item) {
        return (
          <div className="col-sm-3">
             <div className="chart-wrapper">
               <div className="chart-title">
                 {item.title}
               </div>
               <div className="chart-notes">
                 Notes about this chart
               </div>
             </div>
           </div>
        );
      });

    return (
      <div className="container-fluid">
        <div className="row">
          {listItems}
        </div>
      </div>
    );
  }
}
