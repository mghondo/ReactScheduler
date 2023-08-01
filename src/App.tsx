import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel} from '@syncfusion/ej2-react-schedule';
import { DataManager, JsonAdaptor, Query, WebApiAdaptor } from '@syncfusion/ej2-data';


function App() {
  const localData: EventSettingsModel = {
    dataSource: [{
      EndTime: new Date(2023, 0, 11, 6, 30),
      StartTime: new Date(2023, 0, 11, 4, 0),
      Subject: 'Testing',
      IsAllDay: true,
      RecurrenceRule: 'FREO=DAILY;INTERVAL=1;COUNT=10'
    }]
  }
  const remoteData = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData', 
    adaptor: new WebApiAdaptor,
    crossDomain: true
  })
  return (
    <div className="App">
      <br /><br /><br/>
      <ScheduleComponent currentView='Month' selectedDate={new Date(2017, 5, 5)} eventSettings={{dataSource: remoteData}}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
         
      </ScheduleComponent>
      
    </div>
  );
}

export default App;
