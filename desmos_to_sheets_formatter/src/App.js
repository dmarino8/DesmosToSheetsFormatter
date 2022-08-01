import React, { useState } from 'react';
import './App.css';
import FormatTable from './FormatTable';
import EntryFormat from './EntryFormat';
import ActionButtons from './ActionButtons';

function App() {

    const [formatActive, setFormatActive] = useState(false);


    return (
        <div className="App">
            <header className="App-header">
                <h2>Desmos - To - Sheets</h2>
            </header>
            <div className='App-container'>
                <aside className='Container-aside'></aside>
                <section className='Container-section'>
                    {formatActive ? <FormatTable /> : <EntryFormat />}
                    <ActionButtons setFormatActive={setFormatActive}/>
                </section>
                <aside className='Container-aside'></aside>

            </div>
        </div>
    );
}

export default App;
