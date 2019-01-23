import React, { memo } from 'react';

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

interface PicturesPropsType {
    pictures: PicturesListType,
}

const Pictures = ({ pictures }: PicturesPropsType) => {
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
