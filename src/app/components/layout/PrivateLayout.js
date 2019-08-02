import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { Sidebar, AppsSidebar } from 'react-components';
import { APPS } from 'proton-shared/lib/constants';

import PrivateHeader from './PrivateHeader';
import { getPages } from '../../pages';

const PrivateLayout = ({ children }) => {
    const list = getPages().map(({ text, route: link, icon }) => ({ text, link, icon }));
    return (
        <div className="flex flex-nowrap no-scroll">
            <AppsSidebar currentApp={APPS.PROTONMAIL_SETTINGS} />
            <div className="content flex-item-fluid reset4print">
                <PrivateHeader />
                <div className="flex flex-nowrap">
                    <Route path="/:path" render={() => <Sidebar list={list} />} />
                    <div className="main flex-item-fluid main-area">
                        <div className="flex flex-reverse">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

PrivateLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default PrivateLayout;