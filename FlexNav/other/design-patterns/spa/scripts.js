var hash01 = 'Cuisines. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maiores adipisci quibusdam repudiandae dolor vero placeat esse sit! Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil voluptatibus expedita quia vero perferendis, deserunt et incidunt eveniet temporibus doloremque possimus facilis.'

var hash02 = 'Chefs. Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.'

var hash03 = 'Reviews. Asperiores laudantium, rerum ratione consequatur, culpa consectetur possimus atque ab tempore illum non dolor nesciunt. Neque, rerum. A vel non incidunt, quod doloremque dignissimos necessitatibus aliquid laboriosam architecto at cupiditate commodi expedita in, quae blanditiis.'

var hash04 = 'Delivery. Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.'

var tabs = document.querySelectorAll('#nav a')
var contentPara = document.querySelector('p')
tabs.forEach( tab => tab.addEventListener('click', makeActive))

contentPara.innerHTML = hash01

function makeActive(){
  makeInactive()
  this.classList.add('active')
  if (this.hash == '#01'){
    contentPara.innerHTML = hash01
  } else if (this.hash == '#02'){
    contentPara.innerHTML = hash02
  } else if (this.hash == '#03'){
    contentPara.innerHTML = hash03
  } else if (this.hash == '#04'){
    contentPara.innerHTML = hash04
  }
  event.preventDefault()
}

function makeInactive(){
  tabs.forEach( tab => tab.classList.remove('active'))
}
