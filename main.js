const products = [
  {
    title: 'product1',
    description: 'bla bla bla',
    imageUrl: 'https://idealservice.com/wp-content/uploads/2018/06/hot-dog-200-x-200.jpg',
    size: 'foot long',
    weight: '4oz',
    price1: '$1.99',
    price2: '$1.49',
    price3: '$0.99',
    validUntil: '04/01/2016'
  },
  {
    title: 'product2',
    description: 'bla bla bla',
    imageUrl: 'https://idealservice.com/wp-content/uploads/2018/06/hot-dog-200-x-200.jpg',
    size: 'foot long',
    weight: '4oz',
    price1: '$1.99',
    price2: '$1.49',
    price3: '$0.99',
    validUntil: '04/01/2016'
  },
  {
    title: 'product3',
    description: 'bla bla bla',
    imageUrl: 'https://idealservice.com/wp-content/uploads/2018/06/hot-dog-200-x-200.jpg',
    size: 'foot long',
    weight: '4oz',
    price1: '$1.99',
    price2: '$1.49',
    price3: '$0.99',
    validUntil: '04/01/2016'
  },
  {
    title: 'product4',
    description: 'bla bla bla',
    imageUrl: 'https://idealservice.com/wp-content/uploads/2018/06/hot-dog-200-x-200.jpg',
    size: 'foot long',
    weight: '4oz',
    price1: '$1.99',
    price2: '$1.49',
    price3: '$0.99',
    validUntil: '04/01/2016'
  },
  {
    title: 'product5',
    description: 'bla bla bla',
    imageUrl: 'https://idealservice.com/wp-content/uploads/2018/06/hot-dog-200-x-200.jpg',
    size: 'foot long',
    weight: '4oz',
    price1: '$1.99',
    price2: '$1.49',
    price3: '$0.99',
    validUntil: '04/01/2016'
  },
]

const printToDom = (divId, textToPrint) => {
  selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
}

const domStringBuilder = (x) => {
  domString = '';
  // domString += `<div id="products" class="row">`;
  x.forEach((product) => {
    domString += `<div class="col-4">`;
    domString +=   `<div class="card">`;
    domString +=     `<div class="card-header">${product.title}</div>`;
    domString +=     `<img src="${product.imageUrl}" class="card-img-top" alt="...">`;
    domString +=     `<div class="card-body">`;
    domString +=       `<p class="card-text">${product.description}</p>`;
    domString +=       `<h6 class="">Size: ${product.size}</h6>`;
    domString +=     `</div>`;
    domString +=   `</div>`;
    domString += `</div>`;
  });
  // domString += `</div>`;
  printToDom('main-container', domString)
}

const init = () => {
  domStringBuilder(products);
}

init();