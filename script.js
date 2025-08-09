

const API_URL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,cardano&vs_currencies=usd&include_24hr_change=true';



async function fetchCryptoData() {

let response = await fetch(API_URL)
let data = await response.json();

document.querySelector('.crypto-card:nth-child(1) .price').textContent =  '$' + data.bitcoin.usd.toLocaleString();
document.querySelector('.crypto-card:nth-child(1) .change').textContent = data.bitcoin.usd_24h_change.toFixed(2) + '%';
 
document.querySelector('.crypto-card:nth-child(2) .price').textContent = '$' + data.ethereum.usd.toLocaleString();
document.querySelector('.crypto-card:nth-child(2) .change').textContent = data.ethereum.usd_24h_change.toFixed(2) + '%';

document.querySelector('.crypto-card:nth-child(3) .price').textContent = '$' + data.cardano.usd.toLocaleString();
document.querySelector('.crypto-card:nth-child(3) .change').textContent = data.cardano.usd_24h_change.toFixed(2) + '%';

const changes = document.querySelectorAll('.change');

changes.forEach((changeElement, index) => {

const cryptoData = [data.bitcoin, data.ethereum, data.cardano];
const changeValue = cryptoData[index].usd_24h_change;
   if (changeValue > 0) {
    changeElement.classList.add('positive');
   }



  });

}

fetchCryptoData();
setInterval(fetchCryptoData, 3000);