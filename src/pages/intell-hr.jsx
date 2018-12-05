import React, {Component} from 'react';
import each from 'lodash/each';
import pick from 'lodash/pick';

import LeftNavComponent from 'components/intellHR/left-nav';
import BreadCrumbComponent from 'components/breadcrumb';

export default class IntellHRPage extends Component {
    componentDidMount(){
      NProgress.done();
    }
    render(){
        let routesCopy = [];
        const {location, routes} = this.props;
        each(routes,item=>{
            routesCopy.push(pick(item,['breadcrumbName','path']));
        });
        each(routesCopy,(item,index)=>{
            if(item.path === 'aiRecruit'){
                routesCopy[index].path = '/aiRecruit/intellHR';
            }
        });
        return (
              <div className="page-content">
                <BreadCrumbComponent routes={routesCopy}/>
                <div className="box-border wrap-box">
                    <div className="intell-hr"
                        style={{
                            right: 1100
                        }}
                    >
                        <LeftNavComponent location={location}/>
                        <div className="intell-right"
                            style={{
                                left: 1120,
                                width: 1078,
                            }}
                        >
                        {this.props.children}
                        </div>
                    </div>
                </div>
              </div>
        )
    }
}
