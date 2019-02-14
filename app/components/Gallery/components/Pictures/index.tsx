import React, { FC, memo } from 'react';

import {
    PicturesListType,
    PictureType,
} from '../../types';
import {
    Info,
    Item,
    List,
    Picture,
} from './UIComponents';

interface PropsType {
    pictures: PicturesListType;
}

const Pictures: FC<PropsType> = ({ pictures }) => {
    if (pictures.length === 0) {
        return (
            <Info>
                No pictures yet...
            </Info>
        );
    }

    return (
        <List>
            {pictures.map(({ alias, url }: PictureType) => (
                <Item key={alias}>
                    <Picture
                        alt={alias.replace('_', ' ')}
                        src={url}
                    />
                </Item>
            ))}
        </List>
    );
};

export default memo(Pictures);
