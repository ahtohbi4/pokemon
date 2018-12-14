import React, { memo } from 'react';

import {
    Info,
    Item,
    List,
    Picture,
} from './UIComponents';

const Pictures = ({ pictures }) => {
    if (pictures.length === 0) {
        return (
            <Info>
                No pictures yet...
            </Info>
        );
    }

    return (
        <List>
            {pictures.map(({ alias, url }) => (
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
