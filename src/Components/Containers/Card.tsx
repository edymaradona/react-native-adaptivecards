import * as React from 'react';
import { Platform, StyleProp, View, ViewStyle } from 'react-native';
import { StyleManager } from '../../Styles/StyleManager';
import { ImageBackground } from '../Basic/ImageBackground';

interface IProps {
    flex?: number;
    theme?: 'default' | 'emphasis';
    backgroundImageUrl?: string;
    style?: StyleProp<ViewStyle>;
}

export class Card extends React.Component<IProps> {
    public render() {
        return (
            <View
                flex={this.props.flex}
                backgroundColor='#fff'
                borderRadius={4}
                borderWidth={1}
                borderColor='rgba(0, 0, 0, .05)'
                elevation={2}
                paddingTop={12}
                paddingRight={12}
                paddingBottom={12}
                paddingLeft={12}
                style={[
                    Platform.select({
                        ios: {
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 0 },
                            shadowRadius: 3,
                            shadowOpacity: .08,
                        },
                        android: {
                            elevation: 2,
                        }
                    }),
                    this.props.style,
                ]}
            >
                {this.renderCardContent()}
            </View>
        );
    }

    private renderCardContent() {
        if (this.props.backgroundImageUrl) {
            return (
                <ImageBackground
                    url={this.props.backgroundImageUrl}
                    containerStyle={{
                        flex: 1,
                        backgroundColor: StyleManager.getBackgroundColor(this.props.theme),
                        borderRadius: 4,
                        overflow: 'hidden',
                    }}
                    imageStyle={{ borderRadius: 4 }}
                >
                    <View
                        style={{ flex: 1, padding: 0, minHeight: 150 }}
                    >
                        {this.props.children}
                    </View>
                </ImageBackground>
            );
        } else {
            return (
                <View
                    flex={1}
                    backgroundColor={StyleManager.getBackgroundColor(this.props.theme)}
                    borderRadius={4}
                    overflow='hidden'
                >
                    {this.props.children};
                </View>
            );
        }
    }
}