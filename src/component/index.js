import React from 'react';
import PropTypes from 'prop-types';
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import Menu from 'antd/es/menu';

import CodeEdit from './CodeEdit';
import MapIframe from './MapIframe';
import geoJSONCode from './code/geojson';
import quickStartCode from './code/quick-start';
import gaodeCode from './code/gaode';


const SubMenu = Menu.SubMenu;
const iframe = '<iframe src="./map.html" width="100%" height="1000"></iframe>';

export default class Example extends React.Component {

  static propTypes = {
    geoJSON: PropTypes.object,
  }

  state = {
    key: '1',
  }

  handleMenuClick = ({key}) => {
    this.setState({key: key});
    if(key === '1') {
      this.props.updateCode(quickStartCode);
    } else if(key === '2') {
      this.props.updateCode(geoJSONCode);
    } else {
      this.props.updateCode(gaodeCode);
    }
  }

  componentDidMount() {
    // this.props.getGeoJSON();
  }

  render() {

    let { code, updateCode } = this.props;
    if(!code) {
      if(this.state.key === '1') {
        code = quickStartCode;
      } else if(this.state.key === '2') {
        code = geoJSONCode;
      } else {
        code = gaodeCode;
      }
    }

    return (
      <div>
        <Row>
          <Col xs={24} md={4} xxl={3}>
            <Menu
              onClick={this.handleMenuClick}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <SubMenu key="sub1" title={<span>地图显示</span>}>
                <Menu.Item key="1">Leaflet.js快速入门</Menu.Item>
                <Menu.Item key="2">GeoJSON渲染</Menu.Item>
                <Menu.Item key="3">使用高德底图</Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
          <Col xs={24} md={8} xxl={8} style={{borderRight: '2px solid #f5f5f5',borderLeft: '2px solid #f5f5f5', height: '1000px'}}>
            <CodeEdit updateCode={updateCode} code={code} menuKey={this.state.key}/>
          </Col>
          <Col xs={24} md={12} xxl={13}>
            <MapIframe iframe={iframe} code={code}/>
          </Col>
        </Row>
      </div>
    );
  }
}
