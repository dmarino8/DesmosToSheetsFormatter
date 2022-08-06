export const download_csv_file = (csvFileData) => {
    var csv = 'Name,Profession\n';
    csvFileData.forEach(function (row) {
        csv += row.join(',');
        csv += "\n";
    });
    document.write(csv);

    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';

    hiddenElement.download = 'Famous Personalities.csv';
    hiddenElement.click();
}

export default download_csv_file;