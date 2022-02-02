import React, { Component } from 'react';
import Header from './header/Header';
import Plats from './plats/Plats';
import Info from './infos/Info';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Plats />
                <Info />
            </div>
        );
    }
}

export default Home;