import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-kanban';
import { registerLicense } from '@syncfusion/ej2-base';
import '@syncfusion/ej2-react-kanban/styles/material.css'; // or fabric.css, bootstrap.css depending on the theme
import { TypeAnimation } from 'react-type-animation';



import { kanbanData, kanbanGrid } from '../data/dummy';
// import { Header }  from '../components';
registerLicense('Ngo9BigBOggjHTQxAR8/V1NDaF5cWWtCf1NpRGpGfV5ycEVHYVZURnxaQU0DNHVRdkdnWXZccHRVRmFeV0NyXko=');

const Kanban = () => {
  return (
    <>
    <div className='h-dvh w-screen bg-white flex justify-center items-center'>
    <div className='m-2 md:mm-10 ml-60 p-2 md:p-10  bg-white rounded-3xl'>
       {/* <Header category='App' title='Kanban' /> */}
       <KanbanComponent
        id='kanban'
        dataSource={kanbanData}
        cardSettings={{
          contentField: 'Summary',
          headerField: 'Id'
        }}
        keyField='Status' 
        >
        <ColumnsDirective >
          {
            kanbanGrid.map((item, index) => <ColumnDirective className='text-white' key={index} {...item} />)
          }
        </ColumnsDirective>
       </KanbanComponent>
    </div>
    </div>
    </>
  )
}

export default Kanban
