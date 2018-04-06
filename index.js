<script type="text/javascript" src="https://www.google.com/jsapi"></script>
 <script type="text/javascript">
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawSheetName);


function drawSheetName() {
    var queryString = encodeURIComponent('SELECT A, B, C, D');
    var magicIncantation = '/gviz/tq?gid=0&headers=1&tq=';

    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1xfb9trifQA5KDPc9Nh5hBL4MJ290Mxcc1Uod2VTPzYI' +
        magicIncantation + queryString);
    query.send(handleSampleDataQueryResponse);

}



function handleSampleDataQueryResponse(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
