import React from 'react';

import { AuthUserContext, withAuthorization } from '../Session';
import { AddAlbumButton } from './AddAlbum';

const MusicPage = () => (
    <AuthUserContext.Consumer>{() => (
        <div>
            <h1>Music</h1>
            <AddAlbumButton />
        </div>
    )}</AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(MusicPage);