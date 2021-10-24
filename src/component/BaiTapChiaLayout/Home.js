import React, { Component } from 'react'
import Content from './Content'
import Footer from './Footer';
import HeaderDemo from './HeaderDemo'
import Navigation from './Navigation'

export default class Home extends Component {
    render() {
        let style = {
            padding:0,
        };
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class ="col-12">
                        <HeaderDemo/>
                    </div>
                </div>
                <div  class="row">
                    <div  style ={style} class ="col-4">
                       <Navigation/>
                    </div>
                    <div style ={style} class ="col-8">
                       <Content/>
                    </div>
                </div>
                <div className="row">
                    <div style ={style} className="col-md-12">
                    <Footer/>
                    </div>
                </div>
            </div>
        )
    }
}
