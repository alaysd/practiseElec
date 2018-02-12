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









		// var unique = require('array-unique');
		var arr = [];

		const activeWin = require('active-win');

		setInterval(()=>{
			var x= {
				'Name': activeWin.sync().owner.name,
				'Open': new Date().getHours() + ':' + new Date().getMinutes() + ':' +new Date().getSeconds(),
				'Time' : 2
			}

			var flag = 0;
			arr.forEach(function(item){
				if(item.Name === x.Name){
					item.Time +=3;
					flag = 1;
				}
			})

			if(!flag){
				arr.push(x);
			}
			console.log(arr);
		},3000);
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
