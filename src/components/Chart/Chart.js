import React from "react";
import Lines from './../Lines';
import LinearGradient from 'react-native-linear-gradient';
import { Content, ScrollViewStyled, ContentItem, BolPercentageLine, BoxPercentageLine, ValueTransference} from './style';
import PhotoProfile from './../PhotoProfile';
import { formatReal, getMoney } from './../../utils/index';


export default ({ data }) => {
    return (
        <Content>
            <Lines total={14} />
            <ScrollViewStyled 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {data && data.map((item, i) => (
                    <ContentItem key={i}>
                        <BoxPercentageLine value={Math.round((getMoney(item.Valor)/3000))}>
                            <ValueTransference>{formatReal(item.Valor)}</ValueTransference>
                            <BolPercentageLine></BolPercentageLine>
                            <LinearGradient 
                                colors={['#005085', '#00a2a8']} 
                                style={{flex: 1}}
                                start={{x: 0.0, y: 0.3}} end={{x: 0.0, y: 1.2}}
                                locations={[0,0.5,0.6]}
                            >
                            </LinearGradient>
                        </BoxPercentageLine>
                        <PhotoProfile 
                            image={{uri: `https://raw.githubusercontent.com/willian-menezes/patterns/master/src/assets/images/${item.ClienteId}.jpg`}}
                        />
                    </ContentItem>
                ))}
            </ScrollViewStyled>
        </Content>
    );
};
