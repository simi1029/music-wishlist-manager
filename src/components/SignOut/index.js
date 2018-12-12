import React from 'react';

import { withFirebase } from '../Firebase';
import { Button } from './SignOutStyle';

const SignOutButton = ({ firebase }) => (
    <Button signout type="button" onClick={firebase.doSignOut}>
        Sign Out
    </Button>
);

export default withFirebase(SignOutButton);