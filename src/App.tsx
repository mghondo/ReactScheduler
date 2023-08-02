import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel, ViewsDirective, ViewDirective} from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';


function App() {
  var localData: EventSettingsModel = {
    dataSource: [{
      Id:1,
      EndTime: new Date(2019, 0, 21, 6, 30),
      StartTime: new Date(2019, 0, 21, 4, 0),
      Summary: 'Testing',
      IsAllDay: true,
      // RecurrenceRule: 'FREO=DAILY;INTERVAL=1;COUNT=10'
    },
    {
      Id:2,
      EndTime: new Date(2019, 0, 11, 6, 30),
      StartTime: new Date(2019, 0, 11, 4, 0),
      Subject: 'Testing',
      // RecurrenceRule: 'FREO=DAILY;INTERVAL=1;COUNT=10'
    }
  
  ],
    fields: {
      subject: {name: 'Summary', default: 'No subject provided.'},
      startTime: { name: 'Start'},
      endTime: {name: 'End'}
    }
  }

  var remoteData = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData', 
    adaptor: new WebApiAdaptor,
    crossDomain: true
  })
  return (
    <div className="App">
      <br /><br /><br/>
      <ScheduleComponent height='550px' 
      currentView='Week' 
      selectedDate={new Date(2017, 5, 5)} 
      eventSettings={{dataSource: remoteData}}>
        <ViewsDirective>
          <ViewDirective option="Day"></ViewDirective>
          <ViewDirective option="Week"></ViewDirective>
          <ViewDirective option="WorkWeek"></ViewDirective>
          <ViewDirective option="Month"></ViewDirective>      
          <ViewDirective option="Agenda"></ViewDirective>
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
      </ScheduleComponent>
      
    </div>
  );
}

export default App;
