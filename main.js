// // const activeWin = require('active-win');
// //
// // (async () => {
// // 	console.log(await activeWin());
// // })();
// //
// // setTimeout(()=>{
// //   (async () => {
// //   	console.log(await activeWin());
// //   })();
// // },2000);




	var x = {
		'Name': 'Terminal',
		'Log':[
			{'start':2,'end':3},
			{'start':4,'end':5}
		]
	}
	var y = {
		'start':6
	}
	x.Log.push(y);
	x.Log[x.Log.length-2].end = 10000;
	console.log(x);

	const timestamp = require('time-stamp');
	console.log(timestamp('HH:mm:ss'));
	console.log('in int',parseInt(timestamp('HH:mm:ss')));

	const moment = require('moment');

	var a1 = moment().format('LTS');
	console.log(a1);
	var AA = parseInt(a1.replace(':','').replace(':',''));
	console.log(AA);
	// setTimeout(()=>{
	// 	var a2= moment().format('LTS');
	// 	console.log(a2);
	// 	a2 = parseFloat(a2.replace(':','.').replace(' ',''))
	// 	console.log(a2);
	// },5000);


	// console.log();


		// // var unique = require('array-unique');


		// var arr = [];
		// var p = -1;
		// const activeWin = require('active-win');
		// var tname;
		// setInterval(()=>{
		// 	var pname = activeWin.sync().owner.name;
		// 	tname=pname;
		// 	if(p === -1){
		// 		p++;
		// 		var timeS = timestamp('HH:mm:ss')
		// 		var x= {
		// 			'Name': pname,
		// 			'Log': [
		// 				JSON.stringify({'start':timeS})
		// 			]
		// 		}
		// 		arr.push(x);
		// 	}
		// 	// else if(tname===pname && p === arr.length){
    //   //
		// 	// }
		// 	else if(tname !== pname){
		// 		arr[p].Log[arr[p].Log.length-1].end = timestamp('HH:mm:ss');
		// 		p++;
		// 		var x= {
		// 			'Name': pname,
		// 			'Log': [
		// 				{'start':timestamp('HH:mm:ss')}
		// 			]
		// 		}
		// 		arr.push(x);
		// 	}
			// console.log(x);
			// var flag = 0;
			// arr.forEach(function(item){
			// 	if(item.Name === x.Name){
			// 		item.Time +=3;
			// 		flag = 1;
			// 	}
			// })
      //
			// if(!flag){
			// 	arr.push(x);
			// }
		// 	console.log(arr);
		// },2000);

// FINAL CODE
		const activeWin = require('active-win');
		var arr = [];
		var p = -1;
		var runningWin;
		setInterval(()=>{

			if(p === -1){
				p++;
				var ts;
				runningWin = activeWin.sync().owner.name;
				var data = {
					'Name': runningWin,
					'Log':[
						JSON.stringify({'start':moment().format('LTS')})
					]
				}
				arr.push(data)
			}else{
				curWin = activeWin.sync().owner.name;

				var i=0;
				var flag = true;
				arr.forEach(function(item){
					if(item.Name === curWin && p === i){

						// timer continues for runnignWin
						flag = false;

					}else if(item.Name === curWin && p !== i){
						// stop the timer for runningWin and start timer for old-new Win
						// arr[p].Log[arr[p].Log.length-1].end = moment().format('HH:MM:SS');
						// console.log('Where did this go',JSON.parse(arr[i].Log[arr[i].Log.length-1]));
						var x = JSON.parse(arr[p].Log[arr[p].Log.length-1]);
						x.end = moment().format('LTS');

						var startTime = parseInt(x.start.replace(':','').replace(':',''));
						var endTime = parseInt(x.end.replace(':','').replace(':',''));

						var minutes = parseInt(((endTime%10000)/100) - ((startTime%10000)/100));
						var seconds = endTime%100 - startTime%100;
						
						x.diff = minutes+':'+seconds;

						arr[p].Log[arr[p].Log.length-1] = JSON.stringify(x);
						p=i;
						arr[p].Log.push(JSON.stringify({'start':moment().format('LTS')}));
						flag = false;
					}
					i++;
				})

				if(flag){
					var x = JSON.parse(arr[p].Log[arr[p].Log.length-1]);
					x.end = moment().format('LTS');

					var startTime = parseInt(x.start.replace(':','').replace(':',''));
					var endTime = parseInt(x.end.replace(':','').replace(':',''));

					var minutes = parseInt(((endTime%10000)/100) - ((startTime%10000)/100));
					var seconds = endTime%100 - startTime%100;

					x.diff = minutes+':'+seconds;

					arr[p].Log[arr[p].Log.length-1] = JSON.stringify(x);



					var data = {
						'Name': curWin,
						'Log':[
							JSON.stringify({'start':moment().format('LTS')})
						]
					}
					arr.push(data);
					p = arr.length -1;
				}
			}

			console.log(arr);
		},2000);
//
// END FINAL CODE
					// console.log(JSON.parse(arr[arr.length-1].Log[arr[arr.length-1].Log.length-1]).start);
					// console.log(arr);






		// var date = new Date();
		// console.log(date.getHours()+':'+date.getMinutes());


// 'use strict';
// const ioHook = require('iohook');
//
// ioHook.on("mousemove", event => {
//   console.log(event);
// });
// ioHook.on('keydown', event =>{
// 	console.log(event);
// })

//Register and start hook
// ioHook.start();

// const BrowserHistory = require('node-browser-history');
// BrowserHistory.getChromeHistory(10).then(function (history) {
// 	var x = JSON.stringify(history);
// 	var sillyString = x.substr(1).slice(0, -1);
// 	// console.log(sillyString);
// 	var  y = JSON.parse(sillyString);
// 	for(var k in y) {
//    console.log(k, y[k].url);
// 	}
//
// });
