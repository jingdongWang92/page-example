import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import Radio from 'antd/es/radio';
import geoJSONCode from './code/geojson';
import quickStartCode from './code/quick-start';
import gaodeCode from './code/gaode';

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');
// 添加高亮
require('codemirror/addon/selection/active-line');
require('codemirror/addon/fold/foldcode');
require('codemirror/addon/fold/foldgutter');

require('codemirror/addon/scroll/simplescrollbars');


class CodeEdit extends Component {

	state = {
		code: '',
		model: 'javascript',
	}

	componentDidMount() {
		const cm = this.refs.editor.getCodeMirror();
		cm.setSize(null, '600px');
	}

	componentWillReceiveProps(nextProps) {
		const cm = this.refs.editor.getCodeMirror();
		cm.setValue(nextProps.code);
		this.setState({code: nextProps.code});
	}

	updateCode = newCode => {
		this.setState({code: newCode});
	}

	revertCode = () => {
		const cm = this.refs.editor.getCodeMirror();
		let code;
		if(this.props.menuKey === '1') {
			code = quickStartCode;
		} else if(this.props.menuKey === '2') {
			code = geoJSONCode;
		} else {
			code = gaodeCode;
		}

		this.props.updateCode(code);
		cm.setValue(code);
		this.setState({code: code});
	}

	run = () => {
		this.props.updateCode(this.state.code);
	}

	render () {
		const options = {
			theme: 'material',
			model: this.state.mode,
			styleActiveLine: true,
			lineWrapping: false,
			foldGutter: true,
			fixedGutter: true,
			scrollbarStyle: 'simple',
			gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
		};

		const { code } = this.props;

		return (
			<div>
				<div style={{display: 'flex',justifyContent: 'flex-end', alignItems: 'center',height: '50px', background: '#f5f5f5'}}>
					<Radio.Group>
						<Radio.Button value="large" onClick={this.run}>运行</Radio.Button>
						<Radio.Button value="default" onClick={this.revertCode}>还原</Radio.Button>
					</Radio.Group>
				</div>
	      <CodeMirror
					ref="editor"
	        value={code}
	        options={options}
	        onChange={this.updateCode}
	       />
			</div>
		);
	}
};

export default CodeEdit;
