import React from 'react';
import { Switch, Route } from 'react-router';
import Sidebar from 'components/Sidebar/Sidebar';
import DashboardContent from 'components/Dashboard/DashboardContent';
import DialogsContainer from 'components/DialogsContainer';
import PreferencesContent from 'components/Preferences/PreferencesContent';
import PreferencesSidebar from 'components/Preferences/PreferencesSidebar';
import Search from 'containers/Dashboard/GeneralSearch/Search';

export default function () {
  return (
    <div className='dashboard'>
      <Switch>
        <Route path='/dashboard/preferences'>
          <Sidebar />
          <PreferencesSidebar />
          <PreferencesContent />
        </Route>

        <Route path='/dashboard'>
          <Sidebar />
          <DashboardContent />
        </Route>
      </Switch>
      <Search />
      <DialogsContainer />
    </div>
  );
}
