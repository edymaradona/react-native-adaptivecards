import * as React from 'react';
import { View } from 'react-native';
import { TextBlock } from '../Basic/TextBlock';
import { Column } from '../Containers/Column';
export class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(Column, { vIndex: this.props.vIndex, hIndex: this.props.hIndex, width: 'stretch', height: 'auto', hSpacing: 10, style: [
                {
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    borderRadius: this.props.borderRadius,
                    backgroundColor: this.props.backgroundColor,
                    borderColor: this.props.borderColor,
                    borderWidth: this.props.borderWidth,
                },
                this.spacing,
                this.props.boxStyle
            ], onPress: this.props.onPress },
            React.createElement(View, { pointerEvents: 'none', flex: 1 },
                React.createElement(TextBlock, { vIndex: 0, hIndex: 0, width: 'stretch', horizontalAlign: 'center', textStyle: [
                        {
                            textAlign: this.props.textAlign,
                            color: this.props.color,
                        },
                        this.props.textStyle,
                    ], numberOfLines: 1 }, this.props.title))));
    }
    get spacing() {
        let result = {
            marginTop: 0,
            marginLeft: 0,
        };
        if (this.props.vIndex > 0 && this.props.vSpacing) {
            result.marginTop = this.props.vSpacing;
        }
        if (this.props.hIndex > 0 && this.props.hSpacing) {
            result.marginLeft = this.props.hSpacing;
        }
        return result;
    }
}