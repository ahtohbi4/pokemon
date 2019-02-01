import React, { memo } from 'react';

import {
    PicturesList,
    Picture as PictureType,
} from '../../types';
import {
    Info,
    Item,
    List,
    Picture,
} from './UIComponents';

interface PicturesProps {
    pictures: PicturesList,
}

const Pictures = ({ pictures }: PicturesProps) => {
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
