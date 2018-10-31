var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',
	
    // The data for our dataset
    data: {
        labels: ["Coding", "Coffeeing", "Chatting", "Reading","Boxing"],
        
		datasets: [{
            label: "My Composition",
			
            borderColor: 'rgb(255, 255, 255)',
			backgroundColor: ['#ff6384','#b9f959','#cc65fe','#ffce56','#4286f4'],
            data: [30, 40, 10, 5, 10],
        }]
    },

    // Configuration options go here
    options: {
		title: {
		fontColor:'#000000',
		display:true,
		text:"Xianrun Fact",
		fontSize:24
	}
	}
});