import React, { useState } from 'react';
import './App.css';
import EntryFormat from './EntryFormat';
import ActionButtons from './ActionButtons';
import download_csv_file from './Operations_CSV';

function App() {

    const [formatActive, setFormatActive] = useState(false);
    const [formattedEntry, setFormmatedEntry] = useState([]);
    
    var csvFileData = [
        ['Alan Walker', 'Singer'],
        ['Cristiano Ronaldo', 'Footballer'],
        ['Saina Nehwal', 'Badminton Player'],
        ['Arijit Singh', 'Singer'],
        ['Terence Lewis', 'Dancer']
    ];

    return (
        <div className="App">
            <header className="App-header">
                <h2>Desmos - To - Sheets</h2>
            </header>
            <div className='App-container'>
                <aside className='Container-aside'></aside>
                <section className='Container-section'>
                    {formatActive ? download_csv_file(csvFileData) : <EntryFormat setFormmatedEntry={setFormmatedEntry}/>}
                    <ActionButtons setFormatActive={setFormatActive} />
                </section>
                <aside className='Container-aside'></aside>

            </div>
        </div>
    );
}

export default App;
