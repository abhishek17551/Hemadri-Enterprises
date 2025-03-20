import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const ExcelToJsonConverter = () => {
    const [jsonData, setJsonData] = useState([]);

    // Function to handle file upload
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const data = event.target.result;
            const workbook = XLSX.read(data, { type: 'binary' });

            // Get the first sheet name
            const sheetName = workbook.SheetNames[0];

            // Get the worksheet
            const worksheet = workbook.Sheets[sheetName];

            // Convert the worksheet to JSON
            const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

            // Convert the JSON data to a JavaScript object
            const result = [];
            const headers = json[0];

            for (let i = 1; i < json.length; i++) {
                const row = json[i];
                const obj = {};

                for (let j = 0; j < headers.length; j++) {
                    obj[headers[j]] = row[j];
                }

                result.push(obj);
            }

            setJsonData(result);
        };

        reader.readAsBinaryString(file);
    };

    return (
        <div>
            <h1>Excel to JSON Converter</h1>
            <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
            <h2>JSON Output:</h2>
            <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
    );
};

export default ExcelToJsonConverter;