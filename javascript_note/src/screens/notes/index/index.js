import React, { Fragment } from 'react';
import HeaderLogged from '../../../components/header_logged';
import Notes from "../../../components/notes";

import "../../styles/notes.scss";

export default function NotesScreen() {
    return (
        <Fragment>
            <HeaderLogged />
            <Notes />
        </Fragment>
    );
}