/**
 * Created by mac on 18/1/25.
 */
import React, { Component } from 'react';
import { connect } from 'dva';

@connect(({IndexModel}) => ({...IndexModel }))
class IndexContainer extends Component {
    constructor(){
        super();

    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default IndexContainer;
